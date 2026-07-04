'use client'

import { useEffect } from 'react'
import './soma-tech.css'

const pageHtml = String.raw`
<!-- Scroll Progress Bar -->
<div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>

<!-- Navigation -->
<nav class="nav" id="nav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav-inner">
      <a href="#" class="nav-logo" aria-label="SOMA Tech School home">
        <img src="/images/soma-tech/soma-tech-logo.png" alt="SOMA Tech School" class="site-logo"
          onerror="this.style.display='none';this.nextElementSibling.style.display='inline-flex';">
        <span class="nav-logo-fallback" style="display:none;">SOMA Tech</span>
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu" id="navMenu">
        <li><a href="#why" class="nav-link">Why SOMA Tech</a></li>
        <li><a href="#what-happens" class="nav-link">What Happens</a></li>
        <li><a href="#books" class="nav-link">Books</a></li>
        <li><a href="#pathway" class="nav-link">Pathway</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#parents" class="nav-link">Parents</a></li>
        <li><a href="#partners" class="nav-link">Partners</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
        <li class="nav-cta"><a href="#contact" class="btn btn-primary btn-sm nav-link">Enroll Now</a></li>
      </ul>
    </div>
  </div>
</nav>

<!-- Hero -->
<header class="hero" id="hero">
  <div class="hero-circuit" aria-hidden="true"></div>
  <div class="container">
    <div class="hero-inner">
      <div class="hero-text reveal">
        <a class="hero-badge hero-badge-link" href="https://soma-education-group.vercel.app/" target="_blank" rel="noopener">
          <span class="hero-badge-dot"></span>
          Under SOMA Education Group
        </a>
        <h1>Build Cambodia's next generation of technology creators.</h1>
        <p class="hero-sub">
          SOMA Tech School is a project-based coding, web, app, and robotics pathway under SOMA Education Group — helping students move from Scratch games to Python tools, live websites, mobile apps, smart devices, and future competition-ready projects.
        </p>
        <p class="hero-trust-line">
          Designed for Cambodian students. Built for visible progress. Trusted by parents who want more than screen time.
        </p>
        <div class="hero-btns">
          <a href="#contact" class="btn btn-primary">Enroll Now</a>
          <a href="#pathway" class="btn btn-outline">Explore the Pathway</a>
          <a href="#partners" class="btn-ghost">Become a Partner</a>
        </div>
        <div class="hero-tags" aria-label="SOMA Tech highlights">
          <span class="tag tag-blue">Project-based learning</span>
          <span class="tag tag-green">Portfolio every level</span>
          <span class="tag tag-gold">Scratch → Python → Web/App → Robotics</span>
          <span class="tag tag-purple">Under SOMA Education Group</span>
        </div>
      </div>

      <div class="hero-visual reveal" style="transition-delay:.15s;">
        <div class="dashboard-frame">
          <div class="dash-bar">
            <div class="dash-dot" style="background:#FF605C;"></div>
            <div class="dash-dot" style="background:#FFBD44;"></div>
            <div class="dash-dot" style="background:#00CA4E;"></div>
            <span class="dash-bar-title">Student Dashboard</span>
          </div>
          <div class="dash-body">
            <div class="dash-project">
              <div class="dash-project-label">Current Project</div>
              <div class="dash-project-title">Rice Field Soil Sensor</div>
              <div class="dash-project-desc">A student builds a soil-moisture sensor that helps his grandfather know when to water the rice.</div>
            </div>
            <div>
              <div style="font-size:.68rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Progress Pathway</div>
              <div class="dash-ladder">
                <div class="ladder-step done">Sparks</div>
                <div class="ladder-step done">Builder</div>
                <div class="ladder-step done">Python</div>
                <div class="ladder-step done">Digital</div>
                <div class="ladder-step current">Robotics</div>
              </div>
            </div>
            <div class="dash-bot bot-float">
              <div class="bot-avatar">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="6" width="16" height="12" rx="3" fill="white" opacity="0.9"/>
                  <circle cx="9" cy="11" r="1.5" fill="#6B5CDB"/>
                  <circle cx="15" cy="11" r="1.5" fill="#6B5CDB"/>
                  <path d="M9.5 14.5Q12 16.5 14.5 14.5" stroke="#6B5CDB" stroke-width="1.2" stroke-linecap="round" fill="none"/>
                  <line x1="12" y1="3" x2="12" y2="6" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <circle cx="12" cy="2.5" r="1.5" fill="#FFD166"/>
                </svg>
              </div>
              <div class="bot-text">
                <strong>Sousdey!</strong> I'm Bong Bot. At SOMA Tech, we learn by building — games, websites, apps, robots, and real projects for Cambodia.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- Stats Band -->
<section class="stats-band" aria-label="Key facts">
  <div class="container">
    <div class="stats-inner">
      <div class="stat-item reveal">
        <div class="stat-number" data-count="5">0</div>
        <div class="stat-label">Core books</div>
      </div>
      <div class="stat-item reveal" style="transition-delay:.08s;">
        <div class="stat-number" data-count="13">0</div>
        <div class="stat-label">Active terms</div>
      </div>
      <div class="stat-item reveal" style="transition-delay:.16s;">
        <div class="stat-number no-count">1 per level</div>
        <div class="stat-label">Portfolio artifact</div>
      </div>
      <div class="stat-item reveal" style="transition-delay:.24s;">
        <div class="stat-number no-count">Level 6+</div>
        <div class="stat-label">Coming later</div>
      </div>
    </div>
  </div>
</section>

<!-- Why SOMA Tech -->
<section class="section" id="why">
  <div class="container">
    <div class="section-head reveal">
      <div class="section-eyebrow">Why SOMA Tech</div>
      <h2 class="section-title">Cambodian students need to become builders, not just users of technology.</h2>
      <p class="section-sub">AI and technology are changing every career. Many students will learn how to use apps, but far fewer will learn how to build them. SOMA Tech gives students a structured pathway to think clearly, code confidently, and create useful projects they can explain to their parents, teachers, and future mentors.</p>
    </div>
    <div class="why-cards">
      <article class="why-card reveal">
        <div class="why-icon" style="background:var(--blue-soft);color:var(--blue);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h3>From screen time to skill time</h3>
        <p>Students stop just consuming technology and start understanding how it works — from their very first Scratch game to advanced robotics.</p>
      </article>
      <article class="why-card reveal" style="transition-delay:.08s;">
        <div class="why-icon" style="background:var(--gold-soft);color:var(--gold);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        </div>
        <h3>From memorizing to building</h3>
        <p>Every term ends with a project, not a test. Students learn by creating, debugging, and presenting what they built.</p>
      </article>
      <article class="why-card reveal" style="transition-delay:.16s;">
        <div class="why-icon" style="background:var(--green-soft);color:var(--green);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <h3>From small projects to real portfolios</h3>
        <p>Students build a growing collection of work — games, websites, apps, robots — that parents, teachers, and future mentors can see.</p>
      </article>
    </div>
  </div>
</section>

<!-- What Happens at SOMA Tech -->
<section class="section section-alt" id="what-happens">
  <div class="container">
    <div class="section-head centered reveal">
      <div class="section-eyebrow">What Happens Inside</div>
      <h2 class="section-title">What happens inside SOMA Tech?</h2>
      <p class="section-sub">Parents should be able to see progress. At SOMA Tech, every term follows a clear learning cycle.</p>
    </div>
    <div class="timeline-wrap">
      <div class="timeline-line" aria-hidden="true"></div>
      <div class="timeline-fill" id="timelineFill" aria-hidden="true"></div>

      <div class="timeline-step" data-step="1">
        <div class="timeline-dot"><div class="timeline-dot-inner"></div></div>
        <div class="timeline-num">Step 1</div>
        <h3>Learn</h3>
        <p>Students learn one clear concept at a time through guided lessons, examples, and teacher support.</p>
      </div>
      <div class="timeline-step" data-step="2">
        <div class="timeline-dot"><div class="timeline-dot-inner"></div></div>
        <div class="timeline-num">Step 2</div>
        <h3>Practice</h3>
        <p>Students complete small challenges, debug mistakes, and build confidence.</p>
      </div>
      <div class="timeline-step" data-step="3">
        <div class="timeline-dot"><div class="timeline-dot-inner"></div></div>
        <div class="timeline-num">Step 3</div>
        <h3>Build</h3>
        <p>Every term includes a checkpoint project that combines what students learned.</p>
      </div>
      <div class="timeline-step" data-step="4">
        <div class="timeline-dot"><div class="timeline-dot-inner"></div></div>
        <div class="timeline-num">Step 4</div>
        <h3>Present</h3>
        <p>Students explain their project through showcase, Demo Day, or portfolio review.</p>
      </div>
    </div>
    <div class="parent-callout reveal">
      <strong>For parents:</strong> You don't just hear that your child is learning. You see the game, website, app, robot, or smart device your child built.
    </div>
  </div>
</section>

<!-- Five Books -->
<section class="section" id="books">
  <div class="container">
    <div class="section-head centered reveal">
      <div class="section-eyebrow">Curriculum</div>
      <h2 class="section-title">Five books. One clear technology pathway.</h2>
      <p class="section-sub">Each SOMA Tech book represents a stage in a student's growth from beginner coder to confident builder.</p>
    </div>
    <div class="books-grid">
      <article class="book-card reveal" style="--cover-bg:#E8F2FB;--cover-color:#1A6FB5;">
        <div class="cover-frame"><div class="cover-inner"><img src="/images/soma-tech/sparks-cover.png" alt="Sparks book cover" onerror="this.style.display='none';this.nextElementSibling.style.display='grid';"><div class="cover-placeholder">Sparks<span>Cover coming soon</span></div></div></div>
        <div class="book-body">
          <div class="book-level-badge">Level 1</div>
          <h3 class="book-title">Sparks</h3>
          <p class="book-desc">Students start with visual coding in Scratch and learn the logic behind programming without typing barriers.</p>
          <div class="book-meta">
            <span><strong>Builds:</strong> Interactive stories and first games</span>
            <span><strong>Tools:</strong> Scratch, Code.org</span>
            <span><strong>Portfolio:</strong> First Scratch game</span>
            <span><strong>Badge:</strong> Spark Badge</span>
          </div>
        </div>
      </article>

      <article class="book-card reveal" style="--cover-bg:#E1F4FA;--cover-color:#0f6d8c;transition-delay:.06s;">
        <div class="cover-frame"><div class="cover-inner"><img src="/images/soma-tech/builder-cover.png" alt="Builder book cover" onerror="this.style.display='none';this.nextElementSibling.style.display='grid';"><div class="cover-placeholder">Builder<span>Cover coming soon</span></div></div></div>
        <div class="book-body">
          <div class="book-level-badge">Level 2</div>
          <h3 class="book-title">Builder</h3>
          <p class="book-desc">Students move from simple scripts to larger creative projects, planning, debugging, and completing work they can present.</p>
          <div class="book-meta">
            <span><strong>Builds:</strong> Advanced Scratch projects, Khmer story projects, first typed-code activities</span>
            <span><strong>Tools:</strong> Scratch, Code.org, beginner Python</span>
            <span><strong>Portfolio:</strong> Creative coding project</span>
            <span><strong>Badge:</strong> Builder Badge</span>
          </div>
        </div>
      </article>

      <article class="book-card reveal" style="--cover-bg:#E8EEF8;--cover-color:#3766A8;transition-delay:.12s;">
        <div class="cover-frame"><div class="cover-inner"><img src="/images/soma-tech/python-explorer-cover.png" alt="Python Explorer book cover" onerror="this.style.display='none';this.nextElementSibling.style.display='grid';"><div class="cover-placeholder">Python Explorer<span>Cover coming soon</span></div></div></div>
        <div class="book-body">
          <div class="book-level-badge">Level 3</div>
          <h3 class="book-title">Python Explorer</h3>
          <p class="book-desc">Students learn real text-based programming and begin building tools, simulations, games, and data projects.</p>
          <div class="book-meta">
            <span><strong>Builds:</strong> Vocabulary trainer, text adventure, physics simulation, data dashboard</span>
            <span><strong>Tools:</strong> Replit, Python Tutor</span>
            <span><strong>Portfolio:</strong> Python project</span>
            <span><strong>Badge:</strong> Python Explorer Badge</span>
          </div>
        </div>
      </article>

      <article class="book-card reveal" style="--cover-bg:#FCEAE6;--cover-color:#C04A33;transition-delay:.18s;">
        <div class="cover-frame"><div class="cover-inner"><img src="/images/soma-tech/digital-maker-cover.png" alt="Digital Maker book cover" onerror="this.style.display='none';this.nextElementSibling.style.display='grid';"><div class="cover-placeholder">Digital Maker<span>Cover coming soon</span></div></div></div>
        <div class="book-body">
          <div class="book-level-badge">Level 4</div>
          <h3 class="book-title">Digital Maker</h3>
          <p class="book-desc">Students choose a digital product path: build a website people can visit, or create a mobile app people can use.</p>
          <div class="book-meta">
            <span><strong>Builds:</strong> Live website, web app, or Android app</span>
            <span><strong>Tools:</strong> vscode.dev, GitHub Pages, MDN, MIT App Inventor</span>
            <span><strong>Portfolio:</strong> Live URL or app demo</span>
            <span><strong>Badge:</strong> Digital Maker Badge</span>
          </div>
        </div>
      </article>

      <article class="book-card reveal" style="--cover-bg:#E6F5EE;--cover-color:#1D8C5F;transition-delay:.24s;">
        <div class="cover-frame"><div class="cover-inner"><img src="/images/soma-tech/robotics-builder-cover.png" alt="Robotics Builder book cover" onerror="this.style.display='none';this.nextElementSibling.style.display='grid';"><div class="cover-placeholder">Robotics Builder<span>Cover coming soon</span></div></div></div>
        <div class="book-body">
          <div class="book-level-badge">Level 5</div>
          <h3 class="book-title">Robotics Builder</h3>
          <p class="book-desc">Students connect code to the physical world through sensors, motors, robotics, and IoT projects.</p>
          <div class="book-meta">
            <span><strong>Builds:</strong> Environment monitor, robot, smart device, IoT dashboard</span>
            <span><strong>Tools:</strong> Wokwi, MicroPython, Pico/Arduino/micro:bit, Fritzing</span>
            <span><strong>Portfolio:</strong> Working robotics or IoT project</span>
            <span><strong>Badge:</strong> Robotics Builder Badge</span>
          </div>
        </div>
      </article>
    </div>
    <div class="coming-note reveal">
      <strong>Coming later:</strong> Level 6 — Tech for the Planet (sustainability and community technology) and the Competition Lab (parallel track for algorithm problem-solving, WRO prep, and CS olympiad preparation).
    </div>
  </div>
</section>

<!-- Curriculum Roadmap -->
<section class="section section-alt" id="pathway">
  <div class="container">
    <div class="section-head reveal">
      <div class="section-eyebrow">Pathway</div>
      <h2 class="section-title">The pathway is clear from the first project to advanced robotics.</h2>
      <p class="section-sub">Every level ends with a finished project, not a final exam. Students earn badges, unlock the next level, and build a visible portfolio over time.</p>
    </div>
    <div class="roadmap-wrap">

      <details class="roadmap-item reveal" open style="--road-color:#1A6FB5;">
        <summary><div class="road-num">1</div><div><div class="road-title">Sparks</div><div class="road-meta">2 terms · 32 weeks · Scratch foundations</div></div><div class="road-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></div></summary>
        <div class="road-body">
          <div class="terms-grid">
            <div class="term-card"><h4>Term 1 — First Steps</h4><p>Sequencing, movement, loops, events, and simple interactions in Scratch.</p></div>
            <div class="term-card"><h4>Term 2 — Game Makers</h4><p>Variables, score, collision, conditionals, lives, winning states, and game polish.</p></div>
            <div class="term-card"><h4>Final Project</h4><p>Original Scratch game with scoring system and win/lose condition.</p></div>
          </div>
          <div class="road-info-grid">
            <div class="road-box"><h4>Students learn</h4><ul><li>Sequencing and loops</li><li>Events and conditionals</li><li>Variables and score</li><li>Sprites and win/lose states</li></ul></div>
            <div class="road-box"><h4>What parents see</h4><ul><li>Playable Scratch game</li><li>Showcase screenshot</li><li>Portfolio reflection</li></ul></div>
            <div class="road-box"><h4>Portfolio artifact</h4><ul><li>First Scratch game</li><li>Spark Badge earned</li><li>Unlocks Level 2 Builder</li></ul></div>
          </div>
          <div class="unlock-bar"><strong>Completing Level 1 unlocks:</strong> Level 2 Builder, Spark Badge, and the first finished project in the student portfolio.</div>
        </div>
      </details>

      <details class="roadmap-item reveal" style="--road-color:#0f6d8c;transition-delay:.05s;">
        <summary><div class="road-num">2</div><div><div class="road-title">Builder</div><div class="road-meta">3 terms · 48 weeks · Bigger Scratch + intro Python</div></div><div class="road-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></div></summary>
        <div class="road-body">
          <div class="terms-grid">
            <div class="term-card"><h4>Term 1 — Bigger Projects</h4><p>Clones, lists, broadcasts, custom blocks, game architecture, and hitboxes.</p></div>
            <div class="term-card"><h4>Term 2 — Think Like a Maker</h4><p>Planning, decomposition, debugging, pair programming, testing, and project story.</p></div>
            <div class="term-card"><h4>Term 3 — Hello, Python</h4><p>First real typed code, Khmer Word Quiz, and Cambodia in Code capstone.</p></div>
          </div>
          <div class="road-info-grid">
            <div class="road-box"><h4>Students learn</h4><ul><li>Project planning</li><li>Advanced Scratch systems</li><li>Debugging habits</li><li>Beginner Python</li></ul></div>
            <div class="road-box"><h4>Sample projects</h4><ul><li>Khmer Story Quest</li><li>Khmer Word Quiz</li><li>Cambodia in Code</li></ul></div>
            <div class="road-box"><h4>Portfolio artifact</h4><ul><li>Advanced Scratch project</li><li>Khmer story project</li><li>First Python project</li></ul></div>
          </div>
          <div class="unlock-bar"><strong>Completing Level 2 unlocks:</strong> Level 3 Python Explorer, Builder Badge, and a stronger project portfolio.</div>
        </div>
      </details>

      <details class="roadmap-item reveal" style="--road-color:#3766A8;transition-delay:.1s;">
        <summary><div class="road-num">3</div><div><div class="road-title">Python Explorer</div><div class="road-meta">3 terms · 48 weeks · Real text-based programming</div></div><div class="road-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></div></summary>
        <div class="road-body">
          <div class="terms-grid">
            <div class="term-card"><h4>Term 1 — Python, Deeper</h4><p>Strings, functions, files, errors, lists, dictionaries, and code organization.</p></div>
            <div class="term-card"><h4>Term 2 — Simulations & Graphics</h4><p>Turtle, coordinates, gravity, friction, projectile motion, and arcade logic.</p></div>
            <div class="term-card"><h4>Term 3 — Tools, Data & Capstone</h4><p>CSV, plotting, APIs, project structure, and choose-your-track capstone.</p></div>
          </div>
          <div class="road-info-grid">
            <div class="road-box"><h4>Students learn</h4><ul><li>Functions and files</li><li>Physics simulations</li><li>Data and visualization</li><li>Project structure</li></ul></div>
            <div class="road-box"><h4>Sample projects</h4><ul><li>Khmer-English vocabulary trainer</li><li>Text Adventure 2.0</li><li>Mini Physics Arcade</li><li>Cambodia data dashboard</li></ul></div>
            <div class="road-box"><h4>Portfolio artifact</h4><ul><li>Python tool</li><li>Physics simulation</li><li>Data project</li></ul></div>
          </div>
          <div class="unlock-bar"><strong>Completing Level 3 unlocks:</strong> Level 4 Digital Maker, Level 5 Robotics Builder, and Python Explorer Badge.</div>
        </div>
      </details>

      <details class="roadmap-item reveal" style="--road-color:#C04A33;transition-delay:.15s;">
        <summary><div class="road-num">4</div><div><div class="road-title">Digital Maker</div><div class="road-meta">1 term · 16 weeks · Choose Web Creator or App Maker</div></div><div class="road-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></div></summary>
        <div class="road-body">
          <div class="terms-grid">
            <div class="term-card"><h4>4A — Web Creator</h4><p>HTML, CSS, JavaScript, DOM, responsive design, multi-page sites, and GitHub Pages launch.</p></div>
            <div class="term-card"><h4>4B — App Maker</h4><p>MIT App Inventor, mobile UI, sensors, storage, and a working Android app demo.</p></div>
            <div class="term-card"><h4>Final Project</h4><p>A live public website, interactive web app, or installable Android app.</p></div>
          </div>
          <div class="road-info-grid">
            <div class="road-box"><h4>Students learn</h4><ul><li>Web or app interfaces</li><li>User input and events</li><li>Publishing and sharing</li><li>Responsive design basics</li></ul></div>
            <div class="road-box"><h4>What parents see</h4><ul><li>Live website URL</li><li>App demo video</li><li>Project planning sheet</li></ul></div>
            <div class="road-box"><h4>Portfolio artifact</h4><ul><li>Live URL or app demo</li><li>Digital Maker Badge</li><li>Shareable public project</li></ul></div>
          </div>
          <div class="unlock-bar"><strong>Completing Level 4 unlocks:</strong> Digital Maker Badge and a stronger pathway into robotics or advanced competition work.</div>
        </div>
      </details>

      <details class="roadmap-item reveal" style="--road-color:#1D8C5F;transition-delay:.2s;">
        <summary><div class="road-num">5</div><div><div class="road-title">Robotics Builder</div><div class="road-meta">3 terms · 48 weeks · Physical computing, robots, and IoT</div></div><div class="road-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></div></summary>
        <div class="road-body">
          <div class="terms-grid">
            <div class="term-card"><h4>Term 1 — Physical Computing</h4><p>GPIO, LEDs, inputs, sensors, PWM, servo, LCDs, and environment monitoring.</p></div>
            <div class="term-card"><h4>Term 2 — Robotics & Motion</h4><p>Motors, H-bridge, robot chassis, line following, obstacle avoidance, and control loops.</p></div>
            <div class="term-card"><h4>Term 3 — IoT, Data & Demo</h4><p>WiFi, dashboards, data logging, Cambodian monitoring projects, and Demo Day.</p></div>
          </div>
          <div class="road-info-grid">
            <div class="road-box"><h4>Students learn</h4><ul><li>Sensors and circuits</li><li>Motors and motion</li><li>MicroPython</li><li>IoT dashboards</li></ul></div>
            <div class="road-box"><h4>Sample projects</h4><ul><li>Environment Monitor</li><li>Remote-Controlled Robot</li><li>Smart Home Starter</li><li>Cambodian monitoring project</li></ul></div>
            <div class="road-box"><h4>Portfolio artifact</h4><ul><li>Working hardware project</li><li>Circuit diagram</li><li>Demo video</li></ul></div>
          </div>
          <div class="unlock-bar"><strong>Completing Level 5 unlocks:</strong> Robotics Builder Badge, future Level 6 eligibility, Demo Day, and competition candidate pathway.</div>
        </div>
      </details>

      <details class="roadmap-item future-card reveal" style="--road-color:#6B5CDB;transition-delay:.25s;">
        <summary><div class="road-num">6</div><div><div class="road-title">Tech for the Planet</div><div class="road-meta">Coming later · Sustainability, agriculture, water, energy, air quality</div></div><div class="road-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></div></summary>
        <div class="road-body">
          <div class="road-info-grid">
            <div class="road-box"><h4>Future themes</h4><ul><li>Soil moisture sensor for rice fields</li><li>Air-quality monitor for classrooms</li><li>Smart water-saving system</li><li>Flood early-warning sensor</li><li>Solar tracker</li></ul></div>
            <div class="road-box"><h4>Focus</h4><ul><li>Problem-framing</li><li>Research and interviews</li><li>Prototype design</li><li>Demo Day pitch</li></ul></div>
            <div class="road-box"><h4>Status</h4><ul><li>Coming later</li><li>Partner-ready section</li><li>Competition pathway seed</li></ul></div>
          </div>
        </div>
      </details>

      <details class="roadmap-item future-card reveal" style="--road-color:#8594A7;transition-delay:.3s;">
        <summary><div class="road-num">+</div><div><div class="road-title">Competition Lab</div><div class="road-meta">Coming later · Parallel track for strong students</div></div><div class="road-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></div></summary>
        <div class="road-body">
          <div class="road-info-grid">
            <div class="road-box"><h4>Future focus</h4><ul><li>Algorithm problem-solving</li><li>WRO preparation</li><li>CS olympiad practice</li><li>AI/robotics competitions</li><li>Hackathons</li></ul></div>
            <div class="road-box"><h4>Who applies</h4><ul><li>Strong Level 3+ students</li><li>Committed team builders</li><li>Competition candidates</li></ul></div>
            <div class="road-box"><h4>Status</h4><ul><li>Coming later</li><li>Curriculum TBD</li><li>Partner-dependent</li></ul></div>
          </div>
        </div>
      </details>

    </div>
  </div>
</section>

<!-- Project Stories -->
<section class="section" id="projects">
  <div class="container">
    <div class="section-head centered reveal">
      <div class="section-eyebrow">Project Stories</div>
      <h2 class="section-title">Every student leaves with something they built.</h2>
      <p class="section-sub">The story is not only that students learn code. The story is the project they create and explain.</p>
    </div>
    <div class="projects-grid">
      <article class="project-card reveal" style="--proj-bg:var(--gold-soft);">
        <div class="project-header"><span class="project-tool-tag">Scratch</span></div>
        <div class="project-body">
          <h3>My First Game</h3>
          <p>A Scratch game with scoring, collision, and a win/lose state — the student's first complete shipped project.</p>
          <div class="project-detail-row"><strong>Why parents care:</strong><span>Students learn logic, sequencing, and confidence.</span></div>
          <div class="project-detail-row"><strong>Portfolio:</strong><span>Playable Scratch game</span></div>
        </div>
      </article>

      <article class="project-card reveal" style="--proj-bg:var(--blue-soft);transition-delay:.06s;">
        <div class="project-header"><span class="project-tool-tag">Python</span></div>
        <div class="project-body">
          <h3>Khmer Word Quiz</h3>
          <p>A Python vocabulary trainer that asks questions, checks answers, and tracks score.</p>
          <div class="project-detail-row"><strong>Why parents care:</strong><span>Students connect coding with language and learning.</span></div>
          <div class="project-detail-row"><strong>Portfolio:</strong><span>Python vocabulary trainer</span></div>
        </div>
      </article>

      <article class="project-card reveal" style="--proj-bg:var(--coral-soft);transition-delay:.12s;">
        <div class="project-header"><span class="project-tool-tag">HTML, CSS, JavaScript</span></div>
        <div class="project-body">
          <h3>Cambodia Quiz Website</h3>
          <p>A live website students can share with family and classmates via a public URL.</p>
          <div class="project-detail-row"><strong>Why parents care:</strong><span>Students publish something family and friends can open.</span></div>
          <div class="project-detail-row"><strong>Portfolio:</strong><span>Live website URL</span></div>
        </div>
      </article>

      <article class="project-card reveal" style="--proj-bg:var(--blue-mist);transition-delay:.18s;">
        <div class="project-header"><span class="project-tool-tag">Python</span></div>
        <div class="project-body">
          <h3>Grade Calculator</h3>
          <p>A practical Python tool for calculating averages, grade targets, or exam scores.</p>
          <div class="project-detail-row"><strong>Why parents care:</strong><span>Students build useful tools, not just games.</span></div>
          <div class="project-detail-row"><strong>Portfolio:</strong><span>Practical Python app</span></div>
        </div>
      </article>

      <article class="project-card reveal" style="--proj-bg:var(--purple-soft);transition-delay:.24s;">
        <div class="project-header"><span class="project-tool-tag">Python simulation</span></div>
        <div class="project-body">
          <h3>Mini Physics Arcade</h3>
          <p>A small game using motion, gravity, collisions, and feedback — connecting code to math and physics.</p>
          <div class="project-detail-row"><strong>Why parents care:</strong><span>Students connect math, physics, and code.</span></div>
          <div class="project-detail-row"><strong>Portfolio:</strong><span>Interactive simulation or game</span></div>
        </div>
      </article>

      <!-- Featured Project -->
      <article class="project-card featured reveal" style="transition-delay:.3s;">
        <div class="featured-visual">
          <div style="font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--green);margin-bottom:4px;">Featured Project</div>
          <div class="sensor-flow">
            <div class="flow-step">Sensor</div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">Code</div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">Phone Alert</div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">Family Farm</div>
          </div>
        </div>
        <div class="project-body" style="display:flex;flex-direction:column;justify-content:center;">
          <span class="project-tool-tag" style="align-self:flex-start;margin-bottom:12px;">MicroPython + sensor</span>
          <h3 style="font-size:1.15rem;">Rice Field Soil Sensor</h3>
          <p>A student builds a soil-moisture sensor that helps his grandfather know when to water the rice. Technology solves a real Cambodian problem.</p>
          <div class="project-detail-row"><strong>Why parents care:</strong><span>Students learn that technology can solve Cambodian problems.</span></div>
          <div class="project-detail-row"><strong>Portfolio:</strong><span>Smart sensor prototype</span></div>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- Parent Trust -->
<section class="section section-alt" id="parents">
  <div class="container">
    <div class="section-head reveal">
      <div class="section-eyebrow">For Parents</div>
      <h2 class="section-title">What parents can expect</h2>
      <p class="section-sub">At SOMA Tech, progress is visible. Parents can see the work, not just the report. Each student builds a portfolio of games, websites, apps, tools, and robotics projects over time.</p>
    </div>
    <div class="trust-grid">
      <article class="trust-card reveal">
        <div class="trust-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
        <h3>Clear level progression</h3>
        <p>Students know exactly what level they are in, what they are building, and what unlocks next.</p>
      </article>
      <article class="trust-card reveal" style="transition-delay:.05s;">
        <div class="trust-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
        <h3>Small, structured classes</h3>
        <p>Guided sessions with trained tutors keep students focused, supported, and safe.</p>
      </article>
      <article class="trust-card reveal" style="transition-delay:.1s;">
        <div class="trust-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h3>Trained tutors</h3>
        <p>Instructors guide students through projects with patience, clarity, and real-world coding experience.</p>
      </article>
      <article class="trust-card reveal" style="transition-delay:.15s;">
        <div class="trust-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
        <h3>Project-based assessment</h3>
        <p>Every term ends with a real project — not a written exam. The project is the proof of learning.</p>
      </article>
      <article class="trust-card reveal" style="transition-delay:.2s;">
        <div class="trust-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
        <h3>Student portfolio</h3>
        <p>Every project becomes evidence of growth — games, websites, apps, tools, and robots that parents can see.</p>
      </article>
      <article class="trust-card reveal" style="transition-delay:.25s;">
        <div class="trust-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></div>
        <h3>Certificates and badges</h3>
        <p>Each major level ends with a visible badge and completion artifact students can be proud of.</p>
      </article>
      <article class="trust-card reveal" style="transition-delay:.3s;">
        <div class="trust-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div>
        <h3>Showcase and Demo Day</h3>
        <p>Students present their work to families, peers, and future partners at regular showcases.</p>
      </article>
      <article class="trust-card reveal" style="transition-delay:.35s;">
        <div class="trust-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
        <h3>Khmer-friendly instruction</h3>
        <p>Lessons respect Cambodian context and student confidence. Khmer and English instruction available.</p>
      </article>
      <article class="trust-card reveal" style="transition-delay:.4s;">
        <div class="trust-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h3>Safe, guided tools</h3>
        <p>All tools are free, browser-based, and safe. No complicated setup or expensive software needed.</p>
      </article>
    </div>
  </div>
</section>

<!-- Free Tools -->
<section class="section" id="tools">
  <div class="container">
    <div class="section-head reveal">
      <div class="section-eyebrow">Tools & Materials</div>
      <h2 class="section-title">No complicated setup. Students can keep learning from home.</h2>
      <p class="section-sub">Most beginner work runs in the browser. Students do not need expensive software to begin.</p>
    </div>
    <div class="tools-grid">
      <article class="tool-card reveal">
        <div class="tool-level-badge">Level 1–2</div>
        <h3>Scratch Foundations</h3>
        <p>Beginner-friendly tools for block coding and project practice.</p>
        <ul class="tool-list"><li>Scratch — free, browser-based, partial Khmer support</li><li>Code.org — free supplementary activities</li></ul>
        <div class="tool-tags"><span class="tool-tag">Free</span><span class="tool-tag">Browser-based</span><span class="tool-tag">Home practice</span></div>
      </article>
      <article class="tool-card reveal" style="transition-delay:.05s;">
        <div class="tool-level-badge">Level 3</div>
        <h3>Python</h3>
        <p>Browser coding and visual debugging for loops, functions, and data.</p>
        <ul class="tool-list"><li>Replit — browser-based Python</li><li>Python Tutor — visualizes how code runs</li></ul>
        <div class="tool-tags"><span class="tool-tag">Free</span><span class="tool-tag">Browser-based</span></div>
      </article>
      <article class="tool-card reveal" style="transition-delay:.1s;">
        <div class="tool-level-badge">Level 4A</div>
        <h3>Web Creator</h3>
        <p>Free web tools for building and publishing real websites.</p>
        <ul class="tool-list"><li>vscode.dev — VS Code in the browser</li><li>GitHub Pages — free hosting</li><li>MDN Web Docs — free reference</li></ul>
        <div class="tool-tags"><span class="tool-tag">Free</span><span class="tool-tag">Browser-based</span></div>
      </article>
      <article class="tool-card reveal" style="transition-delay:.15s;">
        <div class="tool-level-badge">Level 4B</div>
        <h3>App Maker</h3>
        <p>Simple browser-based mobile app creation.</p>
        <ul class="tool-list"><li>MIT App Inventor — free browser-based app builder</li></ul>
        <div class="tool-tags"><span class="tool-tag">Free</span><span class="tool-tag">Browser-based</span></div>
      </article>
      <article class="tool-card reveal" style="transition-delay:.2s;">
        <div class="tool-level-badge">Level 5</div>
        <h3>Robotics & IoT</h3>
        <p>Hardware simulation and circuit documentation before students touch physical boards.</p>
        <ul class="tool-list"><li>Wokwi — browser-based hardware simulator</li><li>Fritzing — circuit diagrams</li><li>MicroPython documentation — free reference</li></ul>
        <div class="tool-tags"><span class="tool-tag">Free</span><span class="tool-tag">Browser-based</span></div>
      </article>
      <article class="tool-card reveal" style="transition-delay:.25s;">
        <div class="tool-level-badge">All levels</div>
        <h3>Portfolio & Lessons</h3>
        <p>Tools that support every level for student showcases and lesson delivery.</p>
        <ul class="tool-list"><li>Canva free tier — portfolio pages and project posters</li><li>Google Slides — lesson decks and presentations</li></ul>
        <div class="tool-tags"><span class="tool-tag">Free</span><span class="tool-tag">Home practice</span></div>
      </article>
    </div>
  </div>
</section>

<!-- Partners -->
<section class="section section-alt" id="partners">
  <div class="container">
    <div class="section-head centered reveal">
      <div class="section-eyebrow">Partnerships</div>
      <h2 class="section-title">Partnerships &amp; Sponsors Coming Soon</h2>
      <p class="section-sub">SOMA Tech is preparing partnership pathways for schools, universities, companies, NGOs, technology communities, and competition organizations that want to support Cambodia's next generation of builders.</p>
    </div>

    <div class="partners-coming-grid">
      <article class="partner-coming-card reveal">
        <div class="partner-coming-icon">SCH</div>
        <h3>School Partnerships</h3>
        <p>After-school coding and robotics cohorts for students who want a structured technology pathway.</p>
        <span class="coming-badge">Coming Soon</span>
      </article>
      <article class="partner-coming-card reveal" style="transition-delay:.06s;">
        <div class="partner-coming-icon">UNI</div>
        <h3>University Partnerships</h3>
        <p>Tutor recruitment, mentorship, training, and student leadership opportunities for CS/IT students.</p>
        <span class="coming-badge">Coming Soon</span>
      </article>
      <article class="partner-coming-card reveal" style="transition-delay:.12s;">
        <div class="partner-coming-icon">SPN</div>
        <h3>Sponsor Opportunities</h3>
        <p>Scholarships, robotics kits, Demo Day prizes, and support for student access.</p>
        <span class="coming-badge">Coming Soon</span>
      </article>
      <article class="partner-coming-card reveal" style="transition-delay:.18s;">
        <div class="partner-coming-icon">CMP</div>
        <h3>Competition Pathways</h3>
        <p>Future preparation for robotics, CS, AI, and innovation competitions.</p>
        <span class="coming-badge">Coming Soon</span>
      </article>
    </div>

    <p class="partner-soon-note reveal">Confirmed partner logos will appear here once partnerships are officially announced.</p>

    <div class="partner-cta reveal">
      <p>Interested in partnering with SOMA Tech? Contact us to discuss school cohorts, university tutor pipelines, student scholarships, robotics kits, and future Demo Day support.</p>
      <a href="#contact" class="btn btn-primary">Contact SOMA Tech</a>
    </div>
  </div>
</section>

<!-- Founder / SOMA Education Group -->
<section class="section" id="about">
  <div class="container">
    <div class="founder-inner">
      <div class="reveal">
        <img src="/images/soma-tech/founder-photo.jpg" alt="Narith Chan representing SOMA Tech School" class="founder-photo">
      </div>
      <div class="founder-text reveal" style="transition-delay:.08s;">
        <div class="section-eyebrow">Built Under SOMA Education Group</div>
        <h2 class="section-title">Built under SOMA Education Group</h2>
        <p class="founder-bio">
          <strong>SOMA Tech School</strong> is part of SOMA Education Group's mission to create serious, inspiring, and accessible education pathways for Cambodian students. The goal is not only to teach coding, but to help students become confident builders, problem-solvers, and future competition candidates.
        </p>
        <div class="founder-quote">
          Technology education should not stop at watching tutorials. Students need a pathway, a mentor, and real projects they are proud to explain.
        </div>
        <div class="founder-links">
          <a href="https://soma-education-group.vercel.app" target="_blank" rel="noopener" class="founder-link">SOMA Education Group</a>
          <a href="#partners" class="founder-link">Explore Partnerships</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact -->
<section class="section section-alt" id="contact">
  <div class="container">
    <div class="contact-inner">
      <div class="contact-info reveal">
        <div class="section-eyebrow">Get Started</div>
        <h2 class="section-title">Ready to explore SOMA Tech for your child?</h2>
        <p class="section-sub">Tell us your child's age, experience level, and interest. We will recommend the right starting point.</p>

        <div class="contact-bot bot-float">
          <div class="bot-avatar">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="6" width="16" height="12" rx="3" fill="white" opacity="0.9"/>
              <circle cx="9" cy="11" r="1.5" fill="#6B5CDB"/>
              <circle cx="15" cy="11" r="1.5" fill="#6B5CDB"/>
              <path d="M9.5 14.5Q12 16.5 14.5 14.5" stroke="#6B5CDB" stroke-width="1.2" stroke-linecap="round" fill="none"/>
              <line x1="12" y1="3" x2="12" y2="6" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="12" cy="2.5" r="1.5" fill="#FFD166"/>
            </svg>
          </div>
          <div class="bot-text"><strong>Bong Bot says:</strong> Ready? Let's build the first project together.</div>
        </div>

        <div class="contact-links">
          <a href="https://t.me/NewtonLearningCenter" target="_blank" rel="noopener" class="contact-link">Telegram</a>
          <a href="https://soma-education-group.vercel.app" target="_blank" rel="noopener" class="contact-link">SOMA Education Group</a>
        </div>
      </div>

      <div class="contact-card reveal" style="transition-delay:.1s;">
        <h3>Submit Inquiry</h3>
        <!-- TODO: Replace action="#" with a real Google Form, Formspree, Netlify Forms, or backend endpoint before launch. -->
        <form id="inquiryForm" action="#" method="POST" class="contact-form">
          <div class="form-grid">
            <div class="form-row">
              <div class="form-group"><label for="name">Parent / Guardian Name</label><input type="text" id="name" name="name" placeholder="Full name" required></div>
              <div class="form-group"><label for="age">Student Age</label><input type="number" id="age" name="student_age" min="7" max="20" placeholder="e.g. 12"></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label for="phone">Phone / Telegram</label><input type="text" id="phone" name="phone_or_telegram" placeholder="Phone number or @username" required></div>
              <div class="form-group"><label for="email">Email</label><input type="email" id="email" name="email" placeholder="email@example.com"></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label for="role">I am a</label>
                <select id="role" name="role">
                  <option>Parent</option><option>Student</option><option>School</option>
                  <option>University</option><option>Company</option><option>NGO</option><option>Sponsor</option>
                </select>
              </div>
              <div class="form-group"><label for="interest">Interested in</label>
                <select id="interest" name="interest">
                  <option>Not sure — help us decide</option>
                  <option>Sparks (Level 1)</option><option>Builder (Level 2)</option>
                  <option>Python Explorer (Level 3)</option><option>Digital Maker (Level 4)</option>
                  <option>Robotics Builder (Level 5)</option><option>Partnership</option>
                </select>
              </div>
            </div>
            <div class="form-group"><label for="message">Message</label><textarea id="message" name="message" placeholder="Tell us about the student's experience level, interests, or your partnership idea."></textarea></div>
            <p class="form-note">We only use this information to reply to your inquiry. For now, the website form is not connected to a database; you can also contact us directly through <a href="https://t.me/NewtonLearningCenter" target="_blank" rel="noopener">Telegram</a>.</p>
            <button type="submit" class="btn btn-primary" style="width:100%;">Send Inquiry</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- Ecosystem -->
<section class="ecosystem">
  <div class="container">
    <h3>SOMA Tech is part of the SOMA Education Group ecosystem.</h3>
    <p>From coding school to academic preparation, competitions, student success, and future consulting services — SOMA supports the full Cambodian student journey.</p>
    <div class="eco-links">
      <a href="https://soma-education-group.vercel.app/newton-learning-center" target="_blank" rel="noopener" class="eco-link">Newton Learning Center</a>
      <a href="https://soma-education-group.vercel.app/competitions" target="_blank" rel="noopener" class="eco-link">Competitions</a>
      <a href="https://soma-education-group.vercel.app/achievements" target="_blank" rel="noopener" class="eco-link">Student Success</a>
      <a href="https://soma-education-group.vercel.app/charity" target="_blank" rel="noopener" class="eco-link">Charity</a>
      <a href="https://soma-education-group.vercel.app/opportunities" target="_blank" rel="noopener" class="eco-link">Join SOMA</a>
      <a href="https://soma-education-group.vercel.app/consulting" target="_blank" rel="noopener" class="eco-link">Consulting</a>
    </div>
  </div>
</section>

<!-- Footer -->
<footer>
  <div class="container">
    <div class="footer-inner">
      <div>
        <div class="footer-brand">SOMA Tech School</div>
        <div class="footer-tagline">Under SOMA Education Group · Phnom Penh, Cambodia</div>
      </div>
      <ul class="footer-links">
        <li><a href="#why">Why SOMA Tech</a></li>
        <li><a href="#what-happens">What Happens</a></li>
        <li><a href="#books">Books</a></li>
        <li><a href="#pathway">Pathway</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#parents">Parents</a></li>
        <li><a href="#partners">Partners</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://soma-education-group.vercel.app" target="_blank" rel="noopener">SOMA Education Group</a></li>
      </ul>
    </div>
    <div class="footer-legal">© 2026 SOMA Tech School · SOMA Education Group · Phnom Penh, Cambodia</div>
  </div>
</footer>
`

export default function ConsultingPage() {

  useEffect(() => {
    const toggle = document.getElementById('navToggle')
    const menu = document.getElementById('navMenu')
    const nav = document.getElementById('nav')
    const progressBar = document.getElementById('scrollProgress')
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id], header[id]'))
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-menu .nav-link:not(.btn)'))
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const timelineSteps = Array.from(document.querySelectorAll<HTMLElement>('.timeline-step'))
    const timelineFill = document.getElementById('timelineFill')
    const statNumbers = Array.from(document.querySelectorAll<HTMLElement>('.stat-number[data-count]'))
    const inquiryForm = document.getElementById('inquiryForm') as HTMLFormElement | null
    const timers: number[] = []

    const closeMenu = () => {
      menu?.classList.remove('open')
      toggle?.setAttribute('aria-expanded', 'false')
    }

    const handleToggle = () => {
      if (!menu || !toggle) return

      menu.classList.toggle('open')
      toggle.setAttribute('aria-expanded', String(menu.classList.contains('open')))
    }

    const updateNavShadow = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 10)
    }

    const updateProgress = () => {
      if (!progressBar) return

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0
      progressBar.style.width = `${progress}%`
    }

    const updateActiveNav = () => {
      const scrollPosition = window.scrollY + 120
      let current = ''

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) current = section.id
      })

      navLinks.forEach((link) => {
        const href = link.getAttribute('href')
        if (href) link.classList.toggle('active', href === `#${current}`)
      })
    }

    const handleScroll = () => {
      updateNavShadow()
      updateProgress()
      updateActiveNav()
    }

    toggle?.addEventListener('click', handleToggle)
    navLinks.forEach((link) => link.addEventListener('click', closeMenu))
    window.addEventListener('scroll', handleScroll, { passive: true })

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let revealObserver: IntersectionObserver | null = null
    let timelineObserver: IntersectionObserver | null = null
    let statObserver: IntersectionObserver | null = null

    if (!prefersReducedMotion) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
          })
        },
        { threshold: 0.1 },
      )

      revealElements.forEach((element) => revealObserver?.observe(element))
    } else {
      revealElements.forEach((element) => element.classList.add('visible'))
    }

    if (!prefersReducedMotion && timelineSteps.length) {
      timelineObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            entry.target.classList.add('active')

            const wrap = document.querySelector<HTMLElement>('.timeline-wrap')
            const lastActive = timelineSteps.filter((step) => step.classList.contains('active')).at(-1)

            if (!lastActive || !wrap || !timelineFill) return

            const dotElement = lastActive.querySelector<HTMLElement>('.timeline-dot')
            if (!dotElement) return

            const wrapTop = wrap.getBoundingClientRect().top
            const dotRect = dotElement.getBoundingClientRect()
            const fillHeight = dotRect.top - wrapTop + dotElement.offsetHeight / 2

            timelineFill.style.height = `${Math.max(0, fillHeight)}px`
          })
        },
        { threshold: 0.4 },
      )

      timelineSteps.forEach((step) => timelineObserver?.observe(step))
    } else {
      timelineSteps.forEach((step) => step.classList.add('active'))
      if (timelineFill) timelineFill.style.height = '100%'
    }

    if (!prefersReducedMotion && statNumbers.length) {
      statObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const targetElement = entry.target as HTMLElement
            if (!entry.isIntersecting || targetElement.dataset.animated) return

            targetElement.dataset.animated = 'true'

            const target = Number.parseInt(targetElement.dataset.count || '0', 10)
            let current = 0
            const duration = 1200
            const step = Math.ceil(target / (duration / 30))

            const timer = window.setInterval(() => {
              current += step

              if (current >= target) {
                current = target
                window.clearInterval(timer)
              }

              targetElement.textContent = String(current)
            }, 30)

            timers.push(timer)
          })
        },
        { threshold: 0.5 },
      )

      statNumbers.forEach((element) => statObserver?.observe(element))
    }

    const handleInquirySubmit = (event: SubmitEvent) => {
      const action = inquiryForm?.getAttribute('action')

      if (!action || action === '#') {
        event.preventDefault()
        alert('The SOMA Tech inquiry form is not connected yet. Please send your inquiry through Telegram for now.')
        window.open('https://t.me/NewtonLearningCenter', '_blank', 'noopener,noreferrer')
      }
    }

    inquiryForm?.addEventListener('submit', handleInquirySubmit)

    handleScroll()

    return () => {
      toggle?.removeEventListener('click', handleToggle)
      navLinks.forEach((link) => link.removeEventListener('click', closeMenu))
      window.removeEventListener('scroll', handleScroll)
      inquiryForm?.removeEventListener('submit', handleInquirySubmit)
      revealObserver?.disconnect()
      timelineObserver?.disconnect()
      statObserver?.disconnect()
      timers.forEach((timer) => window.clearInterval(timer))
    }
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />
}
