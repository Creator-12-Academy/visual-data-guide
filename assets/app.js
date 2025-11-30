/* assets/app.js */

const App = {
  voiceEnabled: false,
  baseSpeed: 1000,
  voices: [],
  
  // --- 1. CENTRALIZED LAYOUT INJECTION ---
  // Args: title = Page Title, rootPath = Path to go back to root ("../../")
  initLayout: function(title, rootPath = "../../") {
    
    // A. AUTO-DETECT MODULE & CONTEXT
    const path = window.location.pathname.toLowerCase();
    let moduleBtn = '';
    
    // Logic: Only hide the "Menu" button if we are strictly at the Module's Root page
    // We check if the path ends with the module name + index.html
    
    const isDaxRoot   = path.endsWith('/dax/index.html') || path.endsWith('/dax/');
    const isExcelRoot = path.endsWith('/excel/index.html') || path.endsWith('/excel/');
    const isSqlRoot   = path.endsWith('/sql/index.html') || path.endsWith('/sql/');
    const isMRoot     = path.endsWith('/m_language/index.html') || path.endsWith('/m_language/');

    // Generate Buttons based on folder, but skip if we are already on that module's home page
    if (path.includes('/dax/') && !isDaxRoot) {
       // We use rootPath + "DAX/index.html" to ensure we always jump back to the main menu correctly
       moduleBtn = `<a href="${rootPath}DAX/index.html" class="nav-link nav-dax"><span>📊</span> DAX Menu</a>`;
    } 
    else if (path.includes('/excel/') && !isExcelRoot) {
       moduleBtn = `<a href="${rootPath}Excel/index.html" class="nav-link nav-excel"><span>📗</span> Excel Menu</a>`;
    } 
    else if (path.includes('/sql/') && !isSqlRoot) {
       moduleBtn = `<a href="${rootPath}SQL/index.html" class="nav-link nav-sql"><span>🗄️</span> SQL Menu</a>`;
    } 
    else if (path.includes('/m_language/') && !isMRoot) {
       moduleBtn = `<a href="${rootPath}M_Language/index.html" class="nav-link nav-m"><span>⚙️</span> M Menu</a>`;
    }

    // B. INJECT HEADER
    const headerHTML = `
      <div class="brand-area">
        <span class="brand-icon">∑</span> 
        <span class="brand-text">${title}</span>
      </div>
      <nav class="nav-group">
        ${moduleBtn}
        <a href="${rootPath}index.html" class="nav-link nav-main"><span>🏠</span> Main Home</a>
      </nav>
    `;
    const headerEl = document.querySelector('header');
    if(headerEl) headerEl.innerHTML = headerHTML;

    // C. INJECT FOOTER
    const footerHTML = `
      <div class="footer-links">
        <strong>Visual Data Guide</strong> by 
        <a href="https://www.linkedin.com/company/109928041" target="_blank">Creator 12 Academy</a>
        <span class="divider">|</span> 
        Created by <a href="https://www.linkedin.com/in/iamnkannan/" target="_blank">Kannan N</a>
      </div>
    `;
    const footerEl = document.querySelector('footer');
    if(footerEl) footerEl.innerHTML = footerHTML;

    // D. INJECT CONTROLS (Voice/Speed) - Only where needed
    const controlsContainer = document.getElementById('controls-mount');
    if(controlsContainer) {
      controlsContainer.innerHTML = `
        <div class="setting-group">
          <span class="setting-label">Voice</span>
          <div class="toggle-group" id="voiceToggle">
            <div class="toggle-opt selected" onclick="App.toggleVoice(false)" id="voiceOff">🔇 Off</div>
            <div class="toggle-opt" onclick="App.toggleVoice(true)" id="voiceOn">🔊 On</div>
          </div>
        </div>
        <div class="setting-group">
          <span class="setting-label">Speed</span>
          <div class="toggle-group" id="speedGroup">
            <div class="speed-opt toggle-opt" onclick="App.setSpeed('slow')" id="btnSlow">Slow</div>
            <div class="speed-opt toggle-opt" onclick="App.setSpeed('medium')" id="btnMed">Med</div>
            <div class="speed-opt toggle-opt selected" onclick="App.setSpeed('fast')" id="btnFast">Fast</div>
          </div>
        </div>
      `;
    }

    // E. INIT EXTRAS (Voice + Progress)
    this.loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = this.loadVoices.bind(this);
    }

    // F. TRACK PROGRESS (Only on lesson pages, not menus)
    // We assume if the file is NOT named "index.html" and NOT "about.html", it is a lesson.
    const fileName = path.split('/').pop();
    if (fileName && fileName !== 'index.html' && fileName !== 'about.html') {
      this.markPageAsVisited();
    }
  },

  // --- 2. PROGRESS TRACKING ---
  
  markPageAsVisited: function() {
    const fullPath = window.location.pathname;
    const fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1);
    
    if (!fileName) return;

    let visited = JSON.parse(localStorage.getItem('c12_visited') || '[]');
    
    if (!visited.includes(fileName)) {
      visited.push(fileName);
      localStorage.setItem('c12_visited', JSON.stringify(visited));
    }
  },

  loadProgress: function() {
    const visited = JSON.parse(localStorage.getItem('c12_visited') || '[]');
    const links = document.querySelectorAll('.lesson-btn, .lesson-card'); // Support both card and list styles
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && visited.some(file => href.endsWith(file))) {
        
        // Add active class
        link.classList.add('active'); 
        link.classList.add('completed'); // Support for both CSS naming conventions
        
        // Try to find the dot and update it
        const dot = link.querySelector('.status-dot, .icon');
        if(dot) {
            // If it's a lesson card (with arrow), change arrow to check
            if(dot.classList.contains('icon')) dot.textContent = '✅';
            // If it's a lesson list (with dot), change dot to check
            else dot.textContent = '✅';
        }
      }
    });
  },

  // --- 3. VOICE & ANIMATION LOGIC ---

  loadVoices: function() { App.voices = window.speechSynthesis.getVoices(); },

  toggleVoice: function(status) {
    if(status && App.voices.length === 0) {
      App.loadVoices();
      if(App.voices.length === 0) {
        App.showToast("Error: No voices found in browser.");
        return;
      }
    }
    App.voiceEnabled = status;
    
    const onBtn = document.getElementById('voiceOn');
    const offBtn = document.getElementById('voiceOff');
    if(onBtn) onBtn.classList.toggle('selected', status);
    if(offBtn) offBtn.classList.toggle('selected', !status);
    
    const sg = document.getElementById('speedGroup');
    if(sg) status ? sg.classList.add('disabled-area') : sg.classList.remove('disabled-area');

    if (!status) window.speechSynthesis.cancel();
  },

  setSpeed: function(level) {
    document.querySelectorAll('.speed-opt').forEach(b => b.classList.remove('selected'));
    if(level === 'slow') { App.baseSpeed = 2500; const btn = document.getElementById('btnSlow'); if(btn) btn.classList.add('selected'); }
    else if (level === 'medium') { App.baseSpeed = 1500; const btn = document.getElementById('btnMed'); if(btn) btn.classList.add('selected'); }
    else { App.baseSpeed = 800; const btn = document.getElementById('btnFast'); if(btn) btn.classList.add('selected'); }
  },

  speak: function(text, calcBoxId = 'calcBox', isError = false) {
    const calcBox = document.getElementById(calcBoxId);
    if(calcBox) {
      calcBox.textContent = text;
      calcBox.style.color = isError ? "#ef4444" : "var(--text-dim)";
      calcBox.style.borderColor = isError ? "#ef4444" : "var(--border)";
      if(!isError) calcBox.style.color = "var(--text-dim)";
    }

    return new Promise(resolve => {
      const bar = document.getElementById('progressFill');
      if (!App.voiceEnabled) {
        if(bar) { 
          bar.style.transition = 'none'; bar.style.width = '0%'; 
          void bar.offsetWidth; 
          bar.style.transition = `width ${App.baseSpeed}ms linear`; bar.style.width = '100%'; 
        }
        setTimeout(() => { 
          if(bar) { bar.style.transition = 'none'; bar.style.width = '0%'; } 
          resolve(); 
        }, App.baseSpeed);
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const preferred = App.voices.find(v => v.name.includes("Zira") || v.name.includes("Google US English") || v.name.toLowerCase().includes("female"));
      const fallback = App.voices.find(v => v.lang.startsWith('en'));
      if (preferred) utterance.voice = preferred; else if (fallback) utterance.voice = fallback;
      
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.speak(utterance);
    });
  },

  showToast: function(msg) {
    let t = document.getElementById('toast');
    if(!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.className = 'show'; 
    setTimeout(() => t.className = t.className.replace("show", ""), 4000);
  },

  updateText: function(html, id='calcBox') { 
    const box = document.getElementById(id); 
    if(box) box.innerHTML = html; 
  }
};