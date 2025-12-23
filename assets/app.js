/* assets/app.js */

const App = {
  voiceEnabled: false,
  baseSpeed: 1000,
  voices: [],
  
  // --- 1. LAYOUT & INITIALIZATION ---
  initLayout: function(title, rootPath = "../../") {
    console.log("App Initialized:", title); 

    const path = window.location.pathname.toLowerCase();
    let moduleBtn = '';
    let isMenuPage = path.endsWith('index.html') || path.endsWith('/'); 

    // A. Module Detection logic
    if (path.includes('/dax/') && !isMenuPage) {
       moduleBtn = `<a href="../index.html" class="nav-link nav-dax"><span>📊</span> DAX Menu</a>`;
    } else if (path.includes('/excel/') && !isMenuPage) {
       moduleBtn = `<a href="../index.html" class="nav-link nav-excel"><span>📗</span> Excel Menu</a>`;
    } else if (path.includes('/sql/') && !isMenuPage) {
       moduleBtn = `<a href="../index.html" class="nav-link nav-sql"><span>🗄️</span> SQL Menu</a>`;
    } else if (path.includes('/m_language/') && !isMenuPage) {
       moduleBtn = `<a href="../index.html" class="nav-link nav-m"><span>⚙️</span> M Menu</a>`;
    }

    // B. Inject Header
    const headerHTML = `
      <div class="brand-area"><span class="brand-icon">∑</span><span class="brand-text">${title}</span></div>
      <nav class="nav-group">${moduleBtn}<a href="${rootPath}index.html" class="nav-link nav-main"><span>🏠</span> Main Home</a></nav>
    `;
    const headerEl = document.querySelector('header');
    if(headerEl) headerEl.innerHTML = headerHTML;

    // C. Inject Footer
    const footerHTML = `<div class="footer-links"><strong>Visual Data Guide</strong> by <a href="#" target="_blank">Creator 12 Academy</a> <span class="divider">|</span> Created by <a href="https://www.linkedin.com/in/iamnkannan/" target="_blank">Kannan N</a></div>`;
    const footerEl = document.querySelector('footer');
    if(footerEl) footerEl.innerHTML = footerHTML;

    // D. Inject Controls (Voice/Speed)
    const controlsContainer = document.getElementById('controls-mount');
    if(controlsContainer) {
      controlsContainer.innerHTML = `
        <div class="setting-group"><span class="setting-label">Voice</span><div class="toggle-group" id="voiceToggle"><div class="toggle-opt selected" onclick="App.toggleVoice(false)" id="voiceOff">🔇 Off</div><div class="toggle-opt" onclick="App.toggleVoice(true)" id="voiceOn">🔊 On</div></div></div>
        <div class="setting-group"><span class="setting-label">Speed</span><div class="toggle-group" id="speedGroup"><div class="speed-opt toggle-opt" onclick="App.setSpeed('slow')" id="btnSlow">Slow</div><div class="speed-opt toggle-opt" onclick="App.setSpeed('medium')" id="btnMed">Med</div><div class="speed-opt toggle-opt selected" onclick="App.setSpeed('fast')" id="btnFast">Fast</div></div></div>
      `;
    }

    // E. Init Voice & Progress
    this.loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = this.loadVoices.bind(this);
    }

    // Track Progress (Only if it's a lesson page, not a menu)
    if (!isMenuPage && !path.endsWith('about.html')) {
      this.markPageAsVisited();
    }
  },

  // --- 2. PROGRESS TRACKING SYSTEM ---
  
  getUniqueId: function(url) {
    // Generates "excel_01_vlookup.html" to avoid conflicts with "dax_01_vlookup.html"
    const lowerUrl = url.toLowerCase().split('?')[0];
    const filename = lowerUrl.split('/').pop();
    
    if(lowerUrl.includes('/dax/')) return 'dax_' + filename;
    if(lowerUrl.includes('/excel/')) return 'excel_' + filename;
    if(lowerUrl.includes('/sql/')) return 'sql_' + filename;
    if(lowerUrl.includes('/m_language/')) return 'm_' + filename;
    
    return filename;
  },

  markPageAsVisited: function() {
    const uniqueId = this.getUniqueId(window.location.pathname);
    if (!uniqueId) return;

    // Save to LocalStorage
    let visited = JSON.parse(localStorage.getItem('c12_visited_v2') || '[]');
    if (!visited.includes(uniqueId)) {
      visited.push(uniqueId);
      localStorage.setItem('c12_visited_v2', JSON.stringify(visited));
    }
  },

  loadProgress: function() {
    const visited = JSON.parse(localStorage.getItem('c12_visited_v2') || '[]');
    const links = document.querySelectorAll('.lesson-btn'); 
    
    // Context detection for Index pages
    const currentPath = window.location.pathname.toLowerCase();
    let prefix = "";
    if(currentPath.includes('/dax/')) prefix = "dax_";
    if(currentPath.includes('/excel/')) prefix = "excel_";
    if(currentPath.includes('/sql/')) prefix = "sql_";
    if(currentPath.includes('/m_language/')) prefix = "m_";

    links.forEach(link => {
      const href = link.getAttribute('href');
      if(!href) return;

      const targetFilename = href.split('/').pop().toLowerCase();
      const expectedId = prefix + targetFilename;

      // Check if ID matches visited list
      if (visited.includes(expectedId)) {
        link.classList.add('active'); // CSS turns it Green
        
        const dot = link.querySelector('.status-dot');
        if(dot) dot.textContent = '✅';
      }
    });
  },

  // --- 3. ROBUST VOICE ENGINE ---

  loadVoices: function() {
    App.voices = window.speechSynthesis.getVoices();
  },

  toggleVoice: function(status) {
    if(status && App.voices.length === 0) { 
      App.loadVoices(); // Try force load
      if(App.voices.length === 0) {
        App.showToast("Error: No voices found in this browser.");
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
    
    if(level === 'slow') { 
      App.baseSpeed = 2500; 
      const btn = document.getElementById('btnSlow'); if(btn) btn.classList.add('selected');
    } else if (level === 'medium') { 
      App.baseSpeed = 1500; 
      const btn = document.getElementById('btnMed'); if(btn) btn.classList.add('selected');
    } else { 
      App.baseSpeed = 800; 
      const btn = document.getElementById('btnFast'); if(btn) btn.classList.add('selected');
    }
  },

  // Main Speak Function (Safe Promise)
  speak: function(text, calcBoxId = 'calcBox', isError = false) {
    
    // UX Feature: Only show conversational text if Voice is ON.
    // If Voice is OFF, we prefer the clean technical status (set via updateText).
    if(App.voiceEnabled) {
        const calcBox = document.getElementById(calcBoxId);
        if(calcBox) {
          calcBox.textContent = text;
          calcBox.style.color = isError ? "#ef4444" : "var(--text-dim)";
          calcBox.style.borderColor = isError ? "#ef4444" : "var(--border)";
        }
    }

    return new Promise(resolve => {
      const bar = document.getElementById('progressFill');
      
      // Scenario A: Voice OFF (Use Timer)
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

      // Scenario B: Voice ON (Wait for Audio)
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Select Best Voice (Female Preferred)
      const preferred = App.voices.find(v => 
        v.name.includes("Zira") || 
        v.name.includes("Google US English") || 
        v.name.toLowerCase().includes("female")
      );
      
      // Fallback
      const fallback = App.voices.find(v => v.lang.startsWith('en'));
      
      if (preferred) utterance.voice = preferred; 
      else if (fallback) utterance.voice = fallback;
      
      // SAFETY TIMER: Force resolve after 4s if browser audio hangs
      const safeTimer = setTimeout(() => { resolve(); }, 4000);

      utterance.onend = () => { clearTimeout(safeTimer); resolve(); };
      utterance.onerror = () => { clearTimeout(safeTimer); resolve(); };
      
      window.speechSynthesis.speak(utterance);
    });
  },

  showToast: function(msg) {
    let t = document.getElementById('toast');
    if(!t) { 
      t = document.createElement('div'); 
      t.id = 'toast'; 
      document.body.appendChild(t); 
    }
    t.textContent = msg; 
    t.className = 'show'; 
    setTimeout(() => t.className = t.className.replace("show", ""), 4000);
  },

  // Helper to update text box (used for technical status updates)
  updateText: function(html, id='calcBox') { 
    const box = document.getElementById(id); 
    if(box) box.innerHTML = html; 
  }
};