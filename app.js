const TODAY = new Date('2026-09-21T12:00:00');
let claims = [];
let selectedId = null;
let quickFilter = '';

const qs = (selector) => document.querySelector(selector);
const els = {
  body: qs('#claimRows'),
  search: qs('#search'),
  priority: qs('#priority'),
  stage: qs('#stage'),
  line: qs('#line'),
  flag: qs('#flag'),
  sort: qs('#sort'),
  count: qs('#resultCount'),
  detail: qs('#detail'),
  needs: qs('#needsAction'),
  overdue: qs('#overdueCount'),
  contact: qs('#contactGap'),
  docs: qs('#missingDocs')
};

function money(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

function shortDate(value) {
  return new Date(value + 'T12:00:00').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

function urgency(claim) {
  let score = 0;
  if (claim.overdue) score += 60;
  if (claim.priority === 'Critical') score += 50;
  else if (claim.priority === 'High') score += 28;
  if (claim.lastContactDays >= 7) score += 20 + Math.min(claim.lastContactDays, 15);
  if (claim.missingDocuments.length) score += 12;
  if (claim.severity === 'Severe') score += 18;
  else if (claim.severity === 'High') score += 9;
  if (claim.ageDays >= 40) score += 12;
  return score;
}

function filteredClaims() {
  const query = els.search.value.toLowerCase().trim();

  const result = claims.filter((claim) => {
    const searchable = (claim.claimId + ' ' + claim.claimant).toLowerCase();
    if (query && !searchable.includes(query)) return false;
    if (els.priority.value && claim.priority !== els.priority.value) return false;
    if (els.stage.value && claim.stage !== els.stage.value) return false;
    if (els.line.value && claim.line !== els.line.value) return false;
    if (els.flag.value && !claim.flags.includes(els.flag.value)) return false;
    if (quickFilter === 'overdue' && !claim.overdue) return false;
    if (quickFilter === 'contact' && claim.lastContactDays < 7) return false;
    if (quickFilter === 'docs' && !claim.missingDocuments.length) return false;
    if (quickFilter === 'today' && new Date(claim.dueDate + 'T12:00:00') > TODAY) return false;
    return true;
  });

  const sort = els.sort.value;
  result.sort((a, b) => {
    if (sort === 'due') return a.dueDate.localeCompare(b.dueDate);
    if (sort === 'age') return b.ageDays - a.ageDays;
    if (sort === 'contact') return b.lastContactDays - a.lastContactDays;
    return urgency(b) - urgency(a);
  });

  return result;
}

function signalMarkup(claim) {
  if (!claim.flags.length) return '<span class="muted">No current flags</span>';
  return claim.flags.map((flag) => {
    const alertClass = flag === 'Overdue action' ? ' alert' : '';
    return '<span class="signal' + alertClass + '">' + flag + '</span>';
  }).join('');
}

function renderRows() {
  const list = filteredClaims();
  els.count.textContent = list.length + ' claim' + (list.length === 1 ? '' : 's');

  const rows = list.slice(0, 100).map((claim) => {
    const tr = document.createElement('tr');
    tr.tabIndex = 0;
    tr.dataset.id = claim.claimId;
    tr.setAttribute('aria-label', 'Open ' + claim.claimId + ' for ' + claim.claimant);

    if (claim.claimId === selectedId) tr.classList.add('selected');

    tr.innerHTML =
      '<td><div class="claim-main"><strong>' + claim.claimId + '</strong><span>' + claim.claimant +
      '</span><span class="priority ' + claim.priority + '">' + claim.priority + '</span></div></td>' +
      '<td><strong>' + claim.lossType + '</strong><div class="muted">' + claim.line + ' · ' + claim.region + '</div></td>' +
      '<td>' + claim.stage + '</td>' +
      '<td class="action-cell"><strong>' + claim.nextAction + '</strong><span class="muted">' + claim.ageDays + ' days open</span></td>' +
      '<td class="due ' + (claim.overdue ? 'overdue' : '') + '">' + shortDate(claim.dueDate) + (claim.overdue ? '<div>Overdue</div>' : '') + '</td>' +
      '<td>' + shortDate(claim.lastContact) + '<div class="muted">' + claim.lastContactDays + 'd ago</div></td>' +
      '<td><div class="signal-wrap">' + signalMarkup(claim) + '</div></td>';

    const openClaim = () => {
      selectedId = claim.claimId;
      renderRows();
      renderDetail(claim);
    };

    tr.addEventListener('click', openClaim);
    tr.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openClaim();
      }
    });

    return tr;
  });

  els.body.replaceChildren(...rows);
}

function renderDetail(claim) {
  const missingDocs = claim.missingDocuments.length
    ? claim.missingDocuments.map((doc) => '<li>○ ' + doc + '</li>').join('')
    : '<li class="muted">No missing documents identified</li>';

  els.detail.innerHTML =
    '<div class="detail-head">' +
      '<div><p>' + claim.claimId + '</p><h2>' + claim.claimant + '</h2><p>' + claim.lossType + ' · ' + claim.region + '</p></div>' +
      '<span class="severity">' + claim.severity + ' severity</span>' +
    '</div>' +
    '<div class="next-card"><span>Next action</span><strong>' + claim.nextAction + '</strong><div>' +
      (claim.overdue ? 'This action is overdue.' : 'Due ' + shortDate(claim.dueDate) + '.') +
    '</div></div>' +
    '<div class="detail-grid">' +
      '<div class="detail-box"><span>Stage</span><strong>' + claim.stage + '</strong></div>' +
      '<div class="detail-box"><span>Priority</span><strong>' + claim.priority + '</strong></div>' +
      '<div class="detail-box"><span>Last contact</span><strong>' + claim.lastContactDays + ' days ago</strong></div>' +
      '<div class="detail-box"><span>Preferred contact</span><strong>' + claim.preferredContact + '</strong></div>' +
      '<div class="detail-box"><span>Reserve</span><strong>' + money(claim.reserve) + '</strong></div>' +
      '<div class="detail-box"><span>Paid</span><strong>' + money(claim.paid) + '</strong></div>' +
    '</div>' +
    '<section class="detail-section"><h3>Operational signals</h3><div class="signal-wrap">' + signalMarkup(claim) + '</div></section>' +
    '<section class="detail-section"><h3>Missing documents</h3><ul class="doc-list">' + missingDocs + '</ul></section>' +
    '<section class="detail-section"><h3>Recent activity</h3><ul class="timeline">' +
      '<li><strong>' + shortDate(claim.lastContact) + '</strong> · ' + claim.preferredContact + ' contact with claimant</li>' +
      '<li><strong>' + shortDate(claim.opened) + '</strong> · Claim opened from FNOL</li>' +
    '</ul></section>' +
    '<div class="detail-actions"><button class="primary" type="button">Open claim file</button><button class="secondary" type="button">Log contact</button></div>';
}

function renderSummaries() {
  els.needs.textContent = claims.filter((claim) => new Date(claim.dueDate + 'T12:00:00') <= TODAY).length;
  els.overdue.textContent = claims.filter((claim) => claim.overdue).length;
  els.contact.textContent = claims.filter((claim) => claim.lastContactDays >= 7).length;
  els.docs.textContent = claims.filter((claim) => claim.missingDocuments.length).length;
}

function updateQuickButtons() {
  document.querySelectorAll('[data-quick]').forEach((button) => {
    button.setAttribute('aria-pressed', String(quickFilter === button.dataset.quick));
  });
}

async function init() {
  const response = await fetch('data/claims.json');
  claims = await response.json();

  Array.from(new Set(claims.map((claim) => claim.stage))).sort().forEach((stage) => {
    const option = document.createElement('option');
    option.textContent = stage;
    els.stage.append(option);
  });

  renderSummaries();
  renderRows();
  updateQuickButtons();
}

['search', 'priority', 'stage', 'line', 'flag', 'sort'].forEach((key) => {
  els[key].addEventListener(key === 'search' ? 'input' : 'change', () => {
    quickFilter = '';
    updateQuickButtons();
    renderRows();
  });
});

document.querySelectorAll('[data-quick]').forEach((button) => {
  button.addEventListener('click', () => {
    quickFilter = quickFilter === button.dataset.quick ? '' : button.dataset.quick;
    updateQuickButtons();
    renderRows();
  });
});

qs('#clearFilters').addEventListener('click', () => {
  els.search.value = '';
  els.priority.value = '';
  els.stage.value = '';
  els.line.value = '';
  els.flag.value = '';
  els.sort.value = 'urgency';
  quickFilter = '';
  updateQuickButtons();
  renderRows();
});

init();
