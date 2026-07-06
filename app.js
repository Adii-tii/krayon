// Active State
let activeTrack = 'all';
let activeView = 'cards'; // 'cards' | 'chart'
let searchQuery = '';

// DOM Elements
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const trackFiltersContainer = document.getElementById('track-filters');
const contentArea = document.getElementById('content-area');
const themeToggleBtn = document.getElementById('theme-toggle');
const viewCardsBtn = document.getElementById('view-cards');
const viewChartBtn = document.getElementById('view-chart');

// Name Modal Elements
const nameModalOverlay = document.getElementById('name-modal-overlay');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');

const safeStorage = {
  getItem(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  },
  setItem(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { console.warn('Storage disabled'); }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initName();
  setupEventListeners();
  renderFilters();
  renderContent();
});

// ── Name / Greeting ──────────────────────────────────────────────
function initName() {
  const stored = safeStorage.getItem('pathway-user-name');
  if (stored) {
    showGreeting(stored);
    hideModal();
  } else {
    showModal();
  }
}

function showModal() {
  nameModalOverlay.classList.remove('hidden');
  // Small delay so autofocus works after modal animates in
  setTimeout(() => nameInput.focus(), 100);
}

function hideModal() {
  nameModalOverlay.classList.add('hidden');
}

function showGreeting(name) {
  const mainHeader = document.getElementById('main-hero-header');
  if (mainHeader) {
    mainHeader.innerHTML = `Let's build something great, <span style="color: var(--accent);">${name}</span>.`;
  }
}

// Theme Management
function initTheme() {
  const savedTheme = safeStorage.getItem('pathway-theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-theme');
  safeStorage.setItem('pathway-theme', isLight ? 'light' : 'dark');
}

// Event Listeners Setup
function setupEventListeners() {
  // Name form submit
  nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (!name) return;
    safeStorage.setItem('pathway-user-name', name);
    showGreeting(name);
    hideModal();
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    if (searchQuery) {
      clearSearchBtn.classList.remove('opacity-0');
      clearSearchBtn.classList.add('opacity-100');
    } else {
      clearSearchBtn.classList.remove('opacity-100');
      clearSearchBtn.classList.add('opacity-0');
    }
    renderContent();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.remove('opacity-100');
    clearSearchBtn.classList.add('opacity-0');
    renderContent();
    searchInput.focus();
  });

  // Theme Toggle
  themeToggleBtn.addEventListener('click', toggleTheme);

  // View mode toggle
  viewCardsBtn.addEventListener('click', () => setViewMode('cards'));
  viewChartBtn.addEventListener('click', () => setViewMode('chart'));
}

function setViewMode(mode) {
  activeView = mode;
  viewCardsBtn.classList.toggle('active', mode === 'cards');
  viewChartBtn.classList.toggle('active', mode === 'chart');
  renderContent();
}

// Render Track Filters
function renderFilters() {
  trackFiltersContainer.innerHTML = '';
  
  // "All Tracks" button
  const allBtn = document.createElement('button');
  allBtn.className = `filter-btn ${activeTrack === 'all' ? 'active' : ''}`;
  allBtn.innerHTML = `<span>All Tracks</span>`;
  allBtn.addEventListener('click', () => selectTrack('all'));
  trackFiltersContainer.appendChild(allBtn);

  // Individual Track buttons
  PATHWAY_DATA.forEach(track => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${activeTrack === track.id ? 'active' : ''}`;
    btn.innerHTML = `<span>${track.title}</span>`;
    btn.addEventListener('click', () => selectTrack(track.id));
    trackFiltersContainer.appendChild(btn);
  });
}

// Change Active Track Filter
function selectTrack(trackId) {
  activeTrack = trackId;
  renderFilters();
  renderContent();
}

// Filter and Search the Data
function getFilteredData() {
  let data = JSON.parse(JSON.stringify(PATHWAY_DATA));

  // 1. Filter by Track
  if (activeTrack !== 'all') {
    data = data.filter(track => track.id === activeTrack);
  }

  // 2. Filter by Search Query
  if (searchQuery) {
    data = data.map(track => {
      const filteredCategories = track.categories.filter(category => {
        const matchesCategory = category.title.toLowerCase().includes(searchQuery) ||
                                category.shortDesc.toLowerCase().includes(searchQuery) ||
                                category.fullDesc.toLowerCase().includes(searchQuery);
        
        const matchingTopics = category.topics.filter(topic => 
          topic.name.toLowerCase().includes(searchQuery) || 
          topic.detail.toLowerCase().includes(searchQuery)
        );

        if (matchesCategory || matchingTopics.length > 0) {
          if (matchingTopics.length > 0) {
            category.matchedTopics = matchingTopics.map(t => t.name);
          }
          return true;
        }
        return false;
      });

      track.categories = filteredCategories;
      return track;
    }).filter(track => track.categories.length > 0);
  }

  return data;
}

// Main Render
function renderContent() {
  const filteredData = getFilteredData();
  contentArea.innerHTML = '';
  
  if (filteredData.length === 0) {
    renderEmptyState();
    return;
  }

  if (activeView === 'chart') {
    renderChartView(filteredData);
  } else {
    renderBoardView(filteredData);
  }
}

// Render Empty State
function renderEmptyState() {
  contentArea.innerHTML = `
    <div class="empty-state">
      <svg class="w-12 h-12 text-muted mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <h3>No pathway topics found</h3>
      <p>We couldn't find anything matching "${searchQuery}". Try refining your search query.</p>
    </div>
  `;
}

// Render Board View
function renderBoardView(data) {
  contentArea.className = 'board-view-container';
  
  const cardsRow = document.createElement('div');
  cardsRow.className = 'track-cards-row';
  
  data.forEach((track, index) => {
    const card = document.createElement('div');
    let cardClass = 'card-git';
    if (track.id === 'frontend') cardClass = 'card-frontend';
    if (track.id === 'backend') cardClass = 'card-backend';
    if (track.id === 'devops-deployment') cardClass = 'card-devops';
    
    card.className = `track-card-large ${cardClass} fade-in-up`;
    card.style.animationDelay = `${index * 100}ms`;
    
    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon">${track.icon}</div>
      </div>
      <div class="card-mid">
        <h2>${track.title}</h2>
        <p class="card-track-desc">${track.description}</p>
      </div>
      <div class="card-bottom">
        <div class="arrow-circle">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    `;
    
    card.addEventListener('click', () => {
      window.location.href = `details.html?track=${track.id}`;
    });
    cardsRow.appendChild(card);
  });
  
  // Add "More content soon" placeholder card
  const soonCard = document.createElement('div');
  soonCard.className = 'track-card-large card-soon fade-in-up';
  soonCard.style.animationDelay = `${data.length * 100}ms`;
  soonCard.innerHTML = `
    <div class="card-mid" style="margin: auto; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
      <svg class="w-8 h-8 mb-4 opacity-50" style="width: 2rem; height: 2rem; margin-bottom: 1rem; opacity: 0.5;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
      <h2 style="font-size: 1.25rem; opacity: 0.7;">More content soon...</h2>
    </div>
  `;
  cardsRow.appendChild(soonCard);
  
  contentArea.appendChild(cardsRow);
}

// Render Chart / Roadmap View
function renderChartView(data) {
  contentArea.className = '';

  const grid = document.createElement('div');
  grid.className = 'chart-view-container';

  const cardClassMap = {
    'git-github': 'card-git',
    'frontend': 'card-frontend',
    'backend': 'card-backend',
    'devops-deployment': 'card-devops',
  };

  data.forEach((track, index) => {
    const col = document.createElement('div');
    col.className = 'chart-track-column';
    col.style.animationDelay = `${index * 80}ms`;

    const cardClass = cardClassMap[track.id] || 'card-git';

    // Title above the card
    const title = document.createElement('div');
    title.className = 'chart-track-title';
    title.textContent = track.title;

    // Colored container card
    const card = document.createElement('div');
    card.className = `chart-track-card ${cardClass}`;

    // Category pills
    track.categories.forEach(category => {
      const tag = document.createElement('div');
      tag.className = 'chart-category-tag';
      tag.textContent = category.title;
      // Clicking a category navigates to the track details
      tag.addEventListener('click', () => {
        window.location.href = `details.html?track=${track.id}`;
      });
      card.appendChild(tag);
    });

    col.appendChild(title);
    col.appendChild(card);
    grid.appendChild(col);
  });

  contentArea.appendChild(grid);
}
