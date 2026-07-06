// Details Page — Rendering, Progress & Interactivity
const detailsRoot = document.getElementById('details-root');
const themeToggleBtn = document.getElementById('theme-toggle');

const urlParams = new URLSearchParams(window.location.search);
const trackId = urlParams.get('track');

const safeStorage = {
  getItem(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  },
  setItem(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { console.warn('Storage disabled'); }
  },
  getObject(key, defaultVal) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : defaultVal; } catch(e) { return defaultVal; }
  },
  setObject(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) {}
  }
};

let currentProgress = safeStorage.getObject(`pathway-progress-${trackId}`, {});

// ── localStorage key helpers ────────────────────────────────────
function progressKey() {
  return `pathway-progress-${trackId}`;
}

function loadProgress() {
  return safeStorage.getObject(progressKey(), {});
}

function saveProgress(data) {
  safeStorage.setObject(progressKey(), data);
}

// ── Init ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
  renderDetails();
});

function initTheme() {
  const saved = safeStorage.getItem('pathway-theme') || 'dark';
  document.body.classList.toggle('light-theme', saved === 'light');
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  safeStorage.setItem('pathway-theme', isLight ? 'light' : 'dark');
}



function setupEventListeners() {
  themeToggleBtn.addEventListener('click', toggleTheme);
}

// ── Helpers ─────────────────────────────────────────────────────
function getCardClass(id) {
  if (id === 'frontend') return 'card-frontend';
  if (id === 'backend') return 'card-backend';
  if (id === 'devops-deployment') return 'card-devops';
  return 'card-git';
}

function getTrackNumber(id) {
  const i = PATHWAY_DATA.findIndex(t => t.id === id);
  return String(i + 1).padStart(2, '0');
}

// ── Progress helpers ─────────────────────────────────────────────
function getTotalTopics(track) {
  return track.categories.reduce((s, c) => s + c.topics.length, 0);
}

function getCompletedTopics(track, progress) {
  return track.categories.reduce((s, cat) => {
    const checked = progress[cat.id] || [];
    return s + checked.length;
  }, 0);
}

function isCategoryComplete(catId, topicCount, progress) {
  const checked = progress[catId] || [];
  return checked.length === topicCount;
}

// ── Motivation text ────────────────────────────────────────
function getMotivation(pct) {
  if (pct === 0)   return "Ready when you are.";
  if (pct <= 10)   return "Great start! The journey begins ✨";
  if (pct <= 25)   return "Nice momentum. Keep it up!";
  if (pct <= 40)   return "You're building a streak 🔥";
  if (pct <= 55)   return "Past the halfway mark. You've got this.";
  if (pct <= 70)   return "Solid progress. Don't stop now 💪";
  if (pct <= 85)   return "Almost there. Final stretch!";
  if (pct <= 99)   return "So close! One last push 🏁";
  return "Track complete! You crushed it 🎉";
}

// ── Main Render ──────────────────────────────────────────────────
function renderDetails() {
  const track = PATHWAY_DATA.find(t => t.id === trackId);
  if (!track) { renderErrorState(); return; }

  document.title = `${track.title} — Pathway`;

  const totalTopics = getTotalTopics(track);
  const progress = loadProgress();
  const completedTopics = getCompletedTopics(track, progress);
  const pct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  const cardClass = getCardClass(track.id);

  detailsRoot.innerHTML = `
    <!-- ─── Hero Header ─────────────────────────────────── -->
    <div class="dt-hero ${cardClass}">
      
      <!-- Back link inside banner -->
      <div class="dt-back-row">
        <a href="index.html" class="back-link-btn" title="Back to Pathway">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </a>
      </div>

      <div class="dt-hero-top">
        <div class="dt-hero-meta">
          <span class="dt-track-num">${getTrackNumber(track.id)}</span>
          <span class="dt-track-label">Track</span>
        </div>
        <div class="dt-hero-icon">${track.icon}</div>
      </div>
      <div class="dt-hero-body">
        <h1 class="dt-hero-title">${track.title}</h1>
        <p class="dt-hero-desc">${track.description}</p>
      </div>
      <div class="dt-hero-footer">
        <div class="dt-stats">
          <div class="dt-stat">
            <span class="dt-stat-num">${track.categories.length}</span>
            <span class="dt-stat-lbl">Sections</span>
          </div>
          <div class="dt-stat">
            <span class="dt-stat-num">${totalTopics}</span>
            <span class="dt-stat-lbl">Topics</span>
          </div>
          <div class="dt-stat">
            <span class="dt-stat-num" id="completed-count">${completedTopics}</span>
            <span class="dt-stat-lbl">Done</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ─── Progress Bar ──────────────────────────────────── -->
    <div class="dt-progress-row">
      <div class="dt-progress-labels">
        <span class="dt-progress-text">Progress</span>
        <span class="dt-progress-motivation" id="progress-motivation">${getMotivation(pct)}</span>
        <span class="dt-progress-pct" id="progress-pct">${pct}%</span>
      </div>
      <div class="dt-progress-track">
        <div class="dt-progress-fill" id="progress-fill" style="width: ${pct}%"></div>
      </div>
    </div>

    <!-- ─── Accordion Syllabus ────────────────────────────── -->
    <div class="dt-accordion-list" id="accordion-list">
      ${track.categories.map((cat, i) => {
        const checked = progress[cat.id] || [];
        const done = checked.length === cat.topics.length;
        return `
        <div class="dt-accordion-item ${i === 0 ? 'open' : ''}" data-cat-id="${cat.id}" style="animation-delay:${i*60}ms">
          <button class="dt-accordion-trigger" aria-expanded="${i === 0}">
            <div class="dt-trigger-left">
              <span class="dt-cat-num">${String(i+1).padStart(2,'0')}</span>
              <span class="dt-cat-title">${cat.title}</span>
            </div>
            <div class="dt-trigger-right">
              ${done
                ? `<span class="dt-completed-pill">Completed</span>`
                : `<span class="dt-topic-count">${checked.length}/${cat.topics.length}</span>`}
              <svg class="dt-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>
          <div class="dt-accordion-content">
            <div class="dt-topics-list">
              ${cat.topics.map((topic, ti) => {
                const isChecked = checked.includes(ti);
                return `
                <div class="dt-topic-row ${isChecked ? 'done' : ''}">
                  <label class="dt-checkbox-label">
                    <input
                      type="checkbox"
                      class="dt-checkbox"
                      data-cat="${cat.id}"
                      data-topic-index="${ti}"
                      ${isChecked ? 'checked' : ''}
                    />
                    <span class="dt-checkbox-box">
                      <svg viewBox="0 0 12 12" fill="none" stroke="currentColor">
                        <polyline points="2,6 5,9 10,3" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                  </label>
                  <div class="dt-topic-text">
                    <span class="dt-topic-name">${topic.name}</span>
                    <span class="dt-topic-detail">${topic.detail}</span>
                  </div>
                </div>`;
              }).join('')}
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>
  `;

  attachAccordionListeners();
  attachCheckboxListeners(track, totalTopics);
}

// ── Accordion ────────────────────────────────────────────────────
function attachAccordionListeners() {
  detailsRoot.querySelectorAll('.dt-accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.dt-accordion-item');
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

// ── Checkboxes + Progress ────────────────────────────────────────
function attachCheckboxListeners(track, totalTopics) {
  detailsRoot.querySelectorAll('.dt-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const catId = cb.dataset.cat;
      const topicIndex = parseInt(cb.dataset.topicIndex, 10);
      const progress = loadProgress();

      if (!progress[catId]) progress[catId] = [];

      if (cb.checked) {
        if (!progress[catId].includes(topicIndex)) progress[catId].push(topicIndex);
      } else {
        progress[catId] = progress[catId].filter(i => i !== topicIndex);
      }

      saveProgress(progress);

      // Update row done state
      const row = cb.closest('.dt-topic-row');
      row.classList.toggle('done', cb.checked);

      // Update accordion badge
      const item = cb.closest('.dt-accordion-item');
      updateCategoryBadge(item, catId, track, progress);

      // Update overall progress bar + motivation
      const completed = getCompletedTopics(track, progress);
      const pct = Math.round((completed / totalTopics) * 100);
      document.getElementById('progress-fill').style.width = `${pct}%`;
      document.getElementById('progress-pct').textContent = `${pct}%`;
      document.getElementById('completed-count').textContent = completed;
      document.getElementById('progress-motivation').textContent = getMotivation(pct);
    });
  });
}

function updateCategoryBadge(item, catId, track, progress) {
  const cat = track.categories.find(c => c.id === catId);
  if (!cat) return;
  const checked = progress[catId] || [];
  const done = checked.length === cat.topics.length;
  const rightEl = item.querySelector('.dt-trigger-right');
  const badge = rightEl.querySelector('.dt-completed-pill, .dt-topic-count');
  if (badge) {
    if (done) {
      badge.className = 'dt-completed-pill';
      badge.textContent = 'Completed';
    } else {
      badge.className = 'dt-topic-count';
      badge.textContent = `${checked.length}/${cat.topics.length}`;
    }
  }
}

// ── Error State ──────────────────────────────────────────────────
function renderErrorState() {
  detailsRoot.innerHTML = `
    <div class="empty-state" style="grid-column:1/-1">
      <h3>Track Not Found</h3>
      <p>We couldn't find the requested track. <a href="index.html" class="back-link-btn">Go back</a></p>
    </div>`;
}
