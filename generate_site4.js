const fs = require('fs');
const path = require('path');

const domain = 'https://dostwins.shop';

const pages = [
  {
    path: '/',
    title: 'DostWin – Online Gaming Platform & Gaming Guide',
    description: 'Explore DostWin gaming information, platform features, account guidance, security resources, payment information and responsible gaming tips.',
    content: `
      <!-- HERO SECTION -->
      <section class="hero" id="home">
        <div class="container hero-content">
          <img src="/favicon.webp" alt="DostWin Icon" class="hero-logo">
          <h1 class="gradient-text">DostWin – Online Gaming Platform & Information Guide</h1>
          <p class="hero-subtitle">Welcome to the ultimate resource for everything related to the DostWin gaming platform. We provide comprehensive, verified, and easy-to-understand gaming information, platform feature breakdowns, step-by-step account guidance, detailed game-related resources, secure payment information, essential security tips, and robust responsible gaming guidance—all gathered in one convenient, accessible place designed for both beginners and experienced users.</p>
          <div class="hero-buttons">
            <a href="/dostwin-login/" class="btn btn-outline hero-btn">Login Securely</a>
            <a href="/dostwin-account/" class="btn btn-primary hero-btn">Register Account</a>
          </div>
        </div>
      </section>

      <!-- TABLE OF CONTENTS -->
      <section class="container" style="margin-top: -2rem; margin-bottom: 4rem; position: relative; z-index: 10;">
        <div class="toc glass-panel">
            <h2 class="toc-title">Table of Contents</h2>
            <ul class="toc-list">
                <li><a href="#about"><span class="toc-num">1.</span> What is DostWin?</a></li>
                <li><a href="#features"><span class="toc-num">2.</span> Platform Features</a></li>
                <li><a href="#why-use"><span class="toc-num">3.</span> Why Use This Guide?</a></li>
                <li><a href="#guides"><span class="toc-num">4.</span> Essential Guides</a></li>
                <li><a href="#faq"><span class="toc-num">5.</span> Frequently Asked Questions</a></li>
            </ul>
        </div>
      </section>

      <!-- WHAT IS DOSTWIN? -->
      <section id="about" class="container content-section">
        <h2 class="section-title">What Is DostWin?</h2>
        <div class="glass-panel text-content">
          <p>DostWin is a premier online gaming platform designed to offer an immersive, interactive, and seamless digital entertainment experience to a global audience. Our dedicated informational portal, <strong>dostwins.shop</strong>, serves as your definitive, independent go-to guide for mastering the platform. Whether you are a complete newcomer exploring the digital gaming landscape for the first time or a seasoned user seeking to optimize your interactions and safeguard your data, we provide extensive, factual, and highly useful details on how the platform operates from the ground up.</p>
          <p>We believe that an informed user is a safe, confident, and ultimately successful user. Therefore, our expert resources dive deep into <a href="/gaming-guide/" class="text-link">general gaming information</a>, meticulously explaining verified <a href="/gaming-features/" class="text-link">platform features</a>, and offering essential <a href="/dostwin-account/" class="text-link">account guidance</a>. We demystify the often-confusing registration process, simplify login procedures, and clarify the complex mechanics of digital interactions so you never feel lost.</p>
          <p>Furthermore, we strongly prioritize user safety above all else. Navigating the digital world requires constant vigilance against scams and unauthorized access, which is why we offer robust <a href="/gaming-safety/" class="text-link">security information</a> detailing exactly how to protect your personal data, alongside dedicated <a href="/responsible-gaming/" class="text-link">responsible gaming resources</a> to ensure a secure, balanced, and purely entertaining experience every time you log in.</p>
        </div>
      </section>

      <!-- DOSTWIN GAMING FEATURES -->
      <section id="features" class="container content-section">
        <h2 class="section-title">DostWin Gaming Features</h2>
        <div class="grid grid-3">
          <div class="card glass-panel feature-card">
            <div class="feature-icon">🎮</div>
            <h3>Online Gaming Experience</h3>
            <p>Explore comprehensive online gaming information and understand the underlying mechanics behind various platform resources. Learn how to navigate game lobbies, understand dynamic rulesets, and engage with the platform efficiently for maximum entertainment.</p>
            <a href="/gaming-guide/" class="read-more">Read Guide &rarr;</a>
          </div>
          <div class="card glass-panel feature-card">
            <div class="feature-icon">📱</div>
            <h3>Mobile Accessibility</h3>
            <p>The modern user demands ultimate flexibility. Find verified information about accessing gaming-related services seamlessly on supported mobile devices and apps, ensuring you can enjoy the platform anytime, anywhere without compromising on quality.</p>
            <a href="/dostwin-app/" class="read-more">Mobile Setup &rarr;</a>
          </div>
          <div class="card glass-panel feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Complete Account Guide</h3>
            <p>Get clear, step-by-step guidance on registration, secure login processes, and comprehensive account management. We cover crucial topics like profile verification (KYC), password recovery, and keeping your credentials completely secure.</p>
            <a href="/dostwin-account/" class="read-more">Manage Account &rarr;</a>
          </div>
          <div class="card glass-panel feature-card">
            <div class="feature-icon">📊</div>
            <h3>Platform Information</h3>
            <p>Access highly useful explanations about complex platform functionality, common terminology, and how to effectively navigate various gaming resources to maximize your time on the site without feeling overwhelmed.</p>
            <a href="/gaming-platform/" class="read-more">Learn Platform &rarr;</a>
          </div>
          <div class="card glass-panel feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Advanced Security</h3>
            <p>Learn about account safety, advanced privacy protections, Two-Factor Authentication (2FA), and responsible online practices to keep your data, identity, and digital wallet completely secure from unauthorized access and phishing attempts.</p>
            <a href="/gaming-safety/" class="read-more">Security Tips &rarr;</a>
          </div>
          <div class="card glass-panel feature-card">
            <div class="feature-icon">⚖️</div>
            <h3>Responsibility</h3>
            <p>We firmly believe in ethical entertainment. Access educational information encouraging informed, balanced, and responsible participation within the gaming space, including practical advice on how to set strict limits and recognize when to take a break.</p>
            <a href="/responsible-gaming/" class="read-more">Play Safe &rarr;</a>
          </div>
        </div>
      </section>

      <!-- WHY USE THIS GAMING GUIDE? -->
      <section id="why-use" class="container content-section">
        <h2 class="section-title">Why Use the DostWin Guide?</h2>
        <div class="grid grid-3">
          <div class="card glass-panel text-center hover-lift">
            <h3 class="highlight-text">Easy-to-understand</h3>
            <p>We break down complex platform rules and technical jargon into simple, digestible terms that anyone can understand.</p>
          </div>
          <div class="card glass-panel text-center hover-lift">
            <h3 class="highlight-text">Clear Guidance</h3>
            <p>Objective, step-by-step instructions designed to help you navigate without confusion or misleading promises.</p>
          </div>
          <div class="card glass-panel text-center hover-lift">
            <h3 class="highlight-text">Security First</h3>
            <p>Stay protected from phishing, scams, and unauthorized access with our expert, industry-standard security tips.</p>
          </div>
        </div>
      </section>

      <!-- SECTIONS FOR SINGLE-PAGE CONTENT (summaries) -->
      <section id="guides" class="container content-section split-content">
        <div class="glass-panel flex-col">
          <h2 class="section-title">Online Gaming Guide</h2>
          <p>Online gaming platforms offer highly diverse digital experiences, from interactive lobbies to complex algorithmic features. Understanding exactly how they work, the common features you will encounter, device compatibility, and stringent security considerations is key to a rewarding experience. Our comprehensive guide helps you navigate all these aspects safely and responsibly, ensuring you are never caught off guard.</p>
          <a href="/gaming-guide/" class="btn btn-primary mt-auto">Read Full Guide</a>
        </div>
        <div class="glass-panel flex-col">
          <h2 class="section-title">DostWin Account Guide</h2>
          <p>Your account is your passport to the platform. Learn how to properly register with valid details to avoid withdrawal issues, log in securely from any device, manage your personal account settings, and keep your password safe from unauthorized access. Find step-by-step solutions to common account issues and discover exactly where to access official support resources when you need them.</p>
          <a href="/dostwin-account/" class="btn btn-primary mt-auto">Manage Account</a>
        </div>
      </section>

      <!-- FAQ SECTION -->
      <section id="faq" class="container content-section">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-accordion glass-panel">
          <details>
            <summary>What exactly is DostWin?</summary>
            <p>DostWin is a prominent online gaming platform. Our website, dostwins.shop, serves as a dedicated, independent informational resource offering detailed guides, feature explanations, and account management details to help users safely navigate the platform without confusion.</p>
          </details>
          <details>
            <summary>How can I securely access my gaming account?</summary>
            <p>You can securely access your account through the verified login portals of the official platform. Never use third-party links. For step-by-step, safe login instructions, visit our <a href="/dostwin-login/" class="text-link">Login Guide</a>.</p>
          </details>
          <details>
            <summary>What should I do if I cannot log in?</summary>
            <p>First, verify your credentials and ensure caps lock is off. Ensure you are on the correct, official domain, and use the official password recovery options. If you suspect a breach, immediately contact official customer support.</p>
          </details>
          <details>
            <summary>How can I keep my gaming account 100% secure?</summary>
            <p>Always use strong, unique passwords containing mixed characters. Never share your One-Time Passwords (OTP) with anyone, including individuals claiming to be support staff, and meticulously verify the website domain before entering any credentials.</p>
          </details>
          <details>
            <summary>Are winnings guaranteed on the platform?</summary>
            <p>No. We strongly emphasize that there are no guaranteed winnings, fixed returns, or risk-free earnings in online gaming. Participation should strictly be for entertainment purposes. Always practice <a href="/responsible-gaming/" class="text-link">responsible gaming</a>.</p>
          </details>
        </div>
      </section>
    `,
    schema: `
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "DostWin",
        "url": "https://dostwins.shop/"
      }
      </script>
    `
  },
  {
    path: '/about/',
    title: 'About DostWin – Online Gaming & Gaming Information Guide',
    description: 'Learn about DostWin, our purpose, our commitment to clear information, and our resources for safety and responsible online gaming.',
    content: `
      <section class="container content-section">
        <h1 class="gradient-text">About DostWin – Gaming Platform Information</h1>
        <div class="glass-panel text-content">
          <p class="lead-text">Welcome to DostWin (dostwins.shop). Our primary mission and purpose is to serve as a comprehensive, transparent, highly accurate, and user-focused informational guide for the DostWin gaming platform and the broader online gaming ecosystem.</p>
          
          <h2 class="section-title">Our Core Purpose</h2>
          <p>The digital gaming landscape can often be incredibly confusing for new users and veterans alike. We built this website specifically to clarify platform features, offer practical and highly actionable account guidance, and emphasize the absolute necessity of safety in the digital gaming space. Please note clearly that <strong>dostwins.shop is an independent informational guide</strong> and is not the official transaction portal or operational platform. We provide high-quality educational resources to help you navigate platforms like dostwin.cc safely, securely, and effectively.</p>
          
          <h2 class="section-title">Extensive Gaming Information Provided</h2>
          <p>Our expert guide covers a wide range of essential topics, all carefully researched and written for maximum clarity, including:</p>
          <ul>
            <li><strong>Platform Navigation:</strong> Detailed feature explanations, interface walkthroughs, and UI navigation tips.</li>
            <li><strong>Account Management:</strong> Step-by-step login, registration, verification (KYC), and profile management guides.</li>
            <li><strong>Financial Basics:</strong> General informational concepts regarding payment methods, secure deposits, and withdrawal processing windows.</li>
            <li><strong>Cybersecurity:</strong> Industry-standard best practices for securing your online data, recognizing phishing attempts, and keeping your credentials private.</li>
          </ul>

          <h2 class="section-title">Unwavering Commitment to Clear Information</h2>
          <p>Integrity and factual accuracy are at the very heart of our content. We absolutely do not make unsupported claims, we do not guarantee winnings, and we firmly do not promote gaming as a financial investment or a reliable way to earn an income. Our content is designed from the ground up to be factual, people-first, and highly useful for real users. If specific platform information is currently unavailable or subject to unannounced changes, we advise all users to check the official terms of service directly on the operational platform.</p>

          <h2 class="section-title">Championing Safety and Responsible Gaming</h2>
          <p>User protection and well-being is our ultimate priority. We strongly advocate for <a href="/responsible-gaming/" class="text-link">responsible gaming</a> practices across the board. We provide robust educational materials to help users set strict personal financial and time limits, thoroughly understand the inherent risks of online gaming, and maintain complete control over their digital entertainment experiences at all times.</p>
        </div>
      </section>
    `
  }
];

// Reusing basePages loop for other pages
pages.push({
    path: '/gaming-guide/',
    title: 'DostWin Gaming Guide – Platform & Online Gaming Information',
    description: 'Read the DostWin gaming guide for platform information, account guidance, gaming features, security resources and responsible gaming tips.',
    content: `
      <section class="container content-section">
        <h1 class="gradient-text">DostWin Gaming Guide</h1>
        <div class="glass-panel text-content">
          <p class="lead-text">Welcome to the central, comprehensive hub for all DostWin gaming information. Whether you are a brand-new user seeking basic account setup help or an experienced participant looking to deeply understand complex platform features, our detailed guides are meticulously designed to provide clear, accurate, and completely unbiased information.</p>
          
          <h2 class="section-title">Mastering the Online Gaming Platform</h2>
          <p>Modern online gaming platforms offer incredibly diverse interactive experiences, powered by complex algorithms and robust software architecture. Our guide covers exactly how these systems generally work, the common interactive features you might encounter during your sessions, important device compatibility considerations for both mobile and desktop users, and the absolutely crucial security protocols you must follow. <br><br> Understanding these foundational elements deeply helps ensure a much smoother, significantly more enjoyable, and profoundly more secure digital experience.</p>
          
          <h2 class="section-title">Explore Our In-Depth Guides</h2>
          <p>Select a specific topic below to dive directly into our high-quality, human-written resources covering every aspect of the DostWin ecosystem:</p>
          
          <div class="grid grid-3" style="margin-top: 2rem;">
            <a href="/dostwin-account/" class="card glass-panel text-center hover-lift">
              <div class="feature-icon">📝</div>
              <h3 class="highlight-text">Account Guide</h3>
              <p>Master the registration process, essential KYC verifications, and complete profile management.</p>
            </a>
            <a href="/dostwin-login/" class="card glass-panel text-center hover-lift">
              <div class="feature-icon">🔑</div>
              <h3 class="highlight-text">Login Guide</h3>
              <p>Secure access instructions, Two-Factor Authentication setup, and safe password recovery.</p>
            </a>
            <a href="/gaming-platform/" class="card glass-panel text-center hover-lift">
              <div class="feature-icon">🖥️</div>
              <h3 class="highlight-text">Platform Guide</h3>
              <p>Navigate the complex interface, lobbies, menus, and user dashboards effortlessly.</p>
            </a>
            <a href="/gaming-features/" class="card glass-panel text-center hover-lift">
              <div class="feature-icon">⚙️</div>
              <h3 class="highlight-text">Gaming Features</h3>
              <p>Deep dive into understanding specific functionality, rulesets, and interaction guidelines.</p>
            </a>
            <a href="/payment-guide/" class="card glass-panel text-center hover-lift">
              <div class="feature-icon">💳</div>
              <h3 class="highlight-text">Payment Information</h3>
              <p>Crucial details on supported deposits, transaction security, and funding tips.</p>
            </a>
            <a href="/withdrawal-guide/" class="card glass-panel text-center hover-lift">
              <div class="feature-icon">🏦</div>
              <h3 class="highlight-text">Withdrawal Information</h3>
              <p>Understanding processing times, strict requirements, and banking compliance.</p>
            </a>
          </div>
        </div>
      </section>
    `
});

function renderLayout(page) {
  const canonicalUrl = page.path === '/404.html' ? '' : `<link rel="canonical" href="${domain}${page.path}" />`;
  const robotsMeta = page.path.includes('privacy') || page.path.includes('terms') || page.path === '/404.html' ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow">';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${page.title}</title>
    <meta name="description" content="${page.description}">
    ${canonicalUrl}
    ${robotsMeta}
    
    <!-- Open Graph -->
    <meta property="og:title" content="${page.title}">
    <meta property="og:description" content="${page.description}">
    <meta property="og:url" content="${domain}${page.path}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="DostWin">
    <meta property="og:image" content="${domain}/favicon.webp">
    
    <!-- Twitter/X -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${page.title}">
    <meta name="twitter:description" content="${page.description}">
    <meta name="twitter:image" content="${domain}/favicon.webp">
    
    <meta name="theme-color" content="#24262b">
    <link rel="icon" type="image/webp" href="/favicon.webp">
    <link rel="stylesheet" href="/assets/css/style.css">
    ${page.schema || ''}
</head>
<body>
    <header class="global-header">
        <div class="container header-inner">
            <a href="/" class="logo">
                <img src="/favicon.webp" alt="DostWin Logo">
                <span>DostWin</span>
            </a>
            
            <nav class="main-nav" id="mainNav">
                <a href="/">Home</a>
                <a href="/about/">About</a>
                <a href="/gaming-guide/">Guide</a>
                <a href="/gaming-features/">Features</a>
                <a href="/faq/">FAQ</a>
                <a href="/contact/">Contact</a>
                
                <!-- Mobile Auth Buttons (Hidden on Desktop via CSS) -->
                <div class="auth-buttons mobile-auth">
                    <a href="/dostwin-login/" class="btn-auth btn-auth-outline">Login</a>
                    <a href="/dostwin-account/" class="btn-auth btn-auth-primary">Register</a>
                </div>
            </nav>

            <!-- Desktop Auth Buttons -->
            <div class="auth-buttons desktop-auth">
                <a href="/dostwin-login/" class="btn-auth btn-auth-outline">Login</a>
                <a href="/dostwin-account/" class="btn-auth btn-auth-primary">Register</a>
            </div>

            <button class="mobile-menu-btn" aria-label="Toggle menu" id="mobileBtn">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    ${generateBreadcrumbs(page.path)}

    <main>
        ${page.content || '<section class="container content-section"><h1 class="gradient-text">' + page.title + '</h1><div class="glass-panel text-content"><p>Highly detailed information is currently being compiled for this section. Please refer to our comprehensive homepage or guides index for current navigation.</p></div></section>'}
    </main>

    <footer class="global-footer">
        <div class="container footer-grid">
            <div class="footer-col">
                <div class="footer-logo">
                  <img src="/favicon.webp" alt="Logo">
                  <h4>DostWin</h4>
                </div>
                <p>A premium, independent online gaming information and guide resource dedicated to user safety, robust education, and verified insights.</p>
            </div>
            <div class="footer-col">
                <h4>Explore Site</h4>
                <a href="/">Home</a>
                <a href="/about/">About Us</a>
                <a href="/gaming-guide/">Gaming Guide</a>
                <a href="/gaming-features/">Platform Features</a>
                <a href="/faq/">Frequently Asked Questions</a>
            </div>
            <div class="footer-col">
                <h4>Essential Guides</h4>
                <a href="/dostwin-account/">Account Guide</a>
                <a href="/dostwin-login/">Login Guide</a>
                <a href="/payment-guide/">Payment Information</a>
                <a href="/withdrawal-guide/">Withdrawal Information</a>
                <a href="/gaming-safety/">Safety & Security</a>
                <a href="/responsible-gaming/">Responsible Gaming</a>
            </div>
            <div class="footer-col">
                <h4>Legal & Contact</h4>
                <a href="/privacy-policy/">Privacy Policy</a>
                <a href="/terms/">Terms of Service</a>
                <a href="/disclaimer/">Disclaimer</a>
                <a href="/contact/">Contact Us</a>
            </div>
        </div>
        <div class="container footer-bottom">
            <p>&copy; ${new Date().getFullYear()} DostWin. All rights reserved. This website is an independent resource for informational and educational purposes only.</p>
        </div>
    </footer>

    <script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

function generateBreadcrumbs(pathStr) {
  if (pathStr === '/' || pathStr === '/404.html') return '';
  const parts = pathStr.split('/').filter(Boolean);
  let breadcrumbHtml = `<nav class="breadcrumbs container" aria-label="breadcrumb"><ol>`;
  breadcrumbHtml += `<li><a href="/">Home</a></li>`;
  let currentPath = '';
  
  parts.forEach((part, index) => {
    currentPath += `/${part}/`;
    const titleCase = part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    if (index === parts.length - 1) {
      breadcrumbHtml += `<li aria-current="page">${titleCase}</li>`;
    } else {
      breadcrumbHtml += `<li><a href="${currentPath}">${titleCase}</a></li>`;
    }
  });
  
  breadcrumbHtml += `</ol></nav>`;
  return breadcrumbHtml;
}

const cssContent = `:root {
    --bg-color: #24262b;
    --text-primary: #ffffff;
    --text-secondary: #cbd5e1;
    --accent: #E5B83B; 
    --accent-hover: #ffcf40;
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(229, 184, 59, 0.12);
    --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-sans);
    line-height: 1.8;
    overflow-x: hidden;
}

/* Background gradient effect for depth */
body::before {
    content: '';
    position: fixed;
    top: 0; left: 0; width: 100vw; height: 100vh;
    background: radial-gradient(circle at 50% 0%, rgba(229,184,59,0.03) 0%, rgba(36,38,43,1) 60%);
    z-index: -2;
    pointer-events: none;
}

a { color: var(--accent); text-decoration: none; transition: all 0.3s ease; }
a:hover { color: var(--accent-hover); text-shadow: 0 0 8px rgba(229,184,59,0.4); }

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

/* Typography improvements */
h1, h2, h3, h4 { color: #fff; font-weight: 700; line-height: 1.3; margin-bottom: 1.2rem; }
h1 { font-size: 3.2rem; letter-spacing: -0.5px; }
.gradient-text { background: linear-gradient(to right, #fff 20%, var(--accent) 100%); -webkit-background-clip: text; color: transparent; display: inline-block; }
.section-title { font-size: 2.4rem; margin-top: 1rem; border-left: 4px solid var(--accent); padding-left: 1rem; }
h3 { font-size: 1.5rem; }
p { color: var(--text-secondary); margin-bottom: 1.2rem; font-size: 1.1rem; }
.lead-text { font-size: 1.25rem; color: #e2e8f0; font-weight: 300; }
.highlight-text { color: var(--accent); }
.text-link { text-decoration: none; border-bottom: 1px dashed var(--accent); padding-bottom: 2px; }
.text-link:hover { border-bottom-style: solid; }

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
}
.btn-primary {
    background: linear-gradient(135deg, var(--accent), #c29b12);
    color: #111;
    border: none;
    box-shadow: 0 4px 15px rgba(229, 184, 59, 0.2);
}
.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(229, 184, 59, 0.4);
    color: #000;
}
.btn-outline {
    border: 1px solid var(--accent);
    color: var(--accent);
    background: rgba(229, 184, 59, 0.05);
}
.btn-outline:hover {
    background: var(--accent);
    color: #111;
    box-shadow: 0 0 15px rgba(229, 184, 59, 0.3);
}

/* Auth Buttons in Header */
.auth-buttons { display: flex; gap: 12px; align-items: center; }
.btn-auth { padding: 0.6rem 1.4rem; border-radius: 6px; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
.btn-auth-primary { background: linear-gradient(135deg, var(--accent), #c29b12); color: #111; border: none; }
.btn-auth-primary:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(229, 184, 59, 0.4); color: #000; }
.btn-auth-outline { border: 1px solid var(--accent); color: var(--accent); background: transparent; }
.btn-auth-outline:hover { background: rgba(229, 184, 59, 0.1); }
.mobile-auth { display: none; }

/* Glassmorphism */
.glass-panel {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover { transform: translateY(-5px); box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4); border-color: rgba(229, 184, 59, 0.3); }

/* Header */
.global-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(36, 38, 43, 0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--glass-border);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}
.logo { display:flex; align-items:center; gap: 12px; font-size: 1.6rem; font-weight: 800; color: #fff; letter-spacing: 0.5px; }
.logo img { width: 36px; height: 36px; border-radius: 8px; box-shadow: 0 2px 10px rgba(229, 184, 59, 0.2); }
.main-nav { display: flex; gap: 2rem; align-items: center; }
.main-nav a { color: #f8fafc; font-weight: 500; font-size: 1.05rem; }
.main-nav a:hover { color: var(--accent); }
.mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; }
.mobile-menu-btn span { display: block; width: 28px; height: 3px; background: var(--accent); margin: 6px 0; transition: 0.3s; border-radius: 2px; }

/* Breadcrumbs */
.breadcrumbs { padding: 1.5rem 1.5rem 0; }
.breadcrumbs ol { list-style: none; display: flex; flex-wrap: wrap; gap: 0.5rem; }
.breadcrumbs li { color: #94a3b8; font-size: 0.95rem; }
.breadcrumbs li:not(:last-child)::after { content: "/"; margin-left: 0.5rem; color: var(--glass-border); }

/* Layouts */
.content-section { padding: 5rem 1.5rem; scroll-margin-top: 100px; }
.grid { display: grid; gap: 2.5rem; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.flex-col { display: flex; flex-direction: column; }
.mt-auto { margin-top: auto; }

/* Hero */
.hero { text-align: center; padding: 6rem 1.5rem; margin-bottom: 2rem; position: relative; }
.hero-logo { width: 100px; height: 100px; margin: 0 auto 2rem; border-radius: 24px; display: block; box-shadow: 0 10px 30px rgba(229, 184, 59, 0.3); }
.hero-content { max-width: 900px; }
.hero h1 { margin-bottom: 1.5rem; }
.hero-subtitle { font-size: 1.25rem; color: #cbd5e1; max-width: 800px; margin: 0 auto; line-height: 1.8; }
.hero-buttons { display: flex; justify-content: center; gap: 1.5rem; margin-top: 3rem; }
.hero-btn { min-width: 180px; }

/* Text Content blocks */
.text-content ul, .text-content ol { margin-left: 1.8rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 1.1rem; }
.text-content li { margin-bottom: 0.8rem; }

/* Split Content */
.split-content { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }

/* FAQ */
.faq-accordion details { border-bottom: 1px solid var(--glass-border); padding: 1.5rem 0; transition: all 0.3s ease; }
.faq-accordion summary { font-size: 1.2rem; font-weight: 600; cursor: pointer; color: #fff; list-style: none; position: relative; padding-right: 2.5rem; transition: color 0.2s; }
.faq-accordion summary:hover { color: var(--accent); }
.faq-accordion summary::-webkit-details-marker { display: none; }
.faq-accordion summary::after { content: '+'; position: absolute; right: 0; top: 0; color: var(--accent); font-size: 1.8rem; line-height: 1; transition: transform 0.3s; }
.faq-accordion details[open] summary::after { content: '-'; transform: rotate(180deg); }
.faq-accordion p { margin-top: 1.2rem; margin-bottom: 0; color: #94a3b8; line-height: 1.7; }

/* TOC */
.toc { background: linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%); border-color: rgba(229,184,59,0.2); }
.toc-title { margin-top: 0; font-size: 1.6rem; border: none; padding: 0; margin-bottom: 1.5rem; color: #fff; }
.toc-list { list-style: none; padding: 0; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.toc-list a { display: flex; align-items: center; gap: 10px; padding: 10px 15px; border-radius: 8px; background: rgba(0,0,0,0.2); border: 1px solid transparent; transition: all 0.2s; font-weight: 500; font-size: 1.05rem; }
.toc-list a:hover { background: rgba(229,184,59,0.1); border-color: rgba(229,184,59,0.3); transform: translateX(5px); }
.toc-num { color: var(--accent); font-weight: 700; font-size: 1.1rem; }

/* Feature Cards */
.feature-icon { font-size: 2.5rem; margin-bottom: 1rem; display: inline-block; padding: 15px; background: rgba(229,184,59,0.1); border-radius: 16px; border: 1px solid rgba(229,184,59,0.2); }

/* Footer */
.global-footer { border-top: 1px solid var(--glass-border); padding: 5rem 0 2rem; margin-top: 5rem; background: rgba(15, 15, 18, 0.7); backdrop-filter: blur(10px); }
.footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem; }
.footer-logo { display:flex; align-items:center; gap: 12px; margin-bottom: 1.5rem; }
.footer-logo img { width: 28px; height: 28px; border-radius: 6px; }
.footer-logo h4 { margin: 0; font-size: 1.4rem; border: none; padding: 0; }
.footer-col h4 { color: #fff; margin-bottom: 1.5rem; border-left: none; padding-left: 0; font-size: 1.2rem; }
.footer-col a { display: block; margin-bottom: 1rem; color: #94a3b8; transition: color 0.2s, transform 0.2s; font-size: 1.05rem; }
.footer-col a:hover { color: var(--accent); transform: translateX(6px); }
.footer-bottom { margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--glass-border); text-align: center; font-size: 0.95rem; color: #64748b; }

/* Responsive */
@media (max-width: 1024px) {
    .grid-3 { grid-template-columns: repeat(2, 1fr); }
    .hero { padding: 5rem 1rem; }
    h1 { font-size: 2.8rem; }
}
@media (max-width: 768px) {
    .desktop-auth { display: none; }
    .mobile-auth { display: flex; flex-direction: column; width: 100%; border-top: 1px solid rgba(229,184,59,0.2); padding-top: 1.5rem; margin-top: 1.5rem; }
    .mobile-auth .btn-auth { text-align: center; width: 100%; padding: 0.8rem; font-size: 1.1rem; }
    
    .main-nav {
        display: none;
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        background: rgba(36, 38, 43, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 2rem;
        border-bottom: 1px solid var(--glass-border);
        box-shadow: 0 10px 40px rgba(0,0,0,0.6);
    }
    .main-nav.active { display: flex; }
    .mobile-menu-btn { display: block; }
    
    .grid-2, .grid-3, .split-content, .footer-grid { grid-template-columns: 1fr; }
    .hero-buttons { flex-direction: column; gap: 1rem; }
    .hero { margin: 1rem 0; padding: 2rem 1rem; }
    h1 { font-size: 2.2rem; }
    h2, .section-title { font-size: 1.8rem; }
}
`;

const jsContent = `
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileBtn && mainNav) {
        mobileBtn.addEventListener('click', () => {
            const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            mobileBtn.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            
            const spans = mobileBtn.querySelectorAll('span');
            if (!isExpanded) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
});
`;

const outDir = path.join(__dirname, 'public');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}
const assetsDir = path.join(outDir, 'assets');
fs.mkdirSync(path.join(assetsDir, 'css'), { recursive: true });
fs.mkdirSync(path.join(assetsDir, 'js'), { recursive: true });

fs.writeFileSync(path.join(assetsDir, 'css', 'style.css'), cssContent);
fs.writeFileSync(path.join(assetsDir, 'js', 'main.js'), jsContent);

let sitemapUrls = [];
pages.forEach(page => {
    let pagePath = page.path === '/404.html' ? '/404.html' : path.join(page.path, 'index.html');
    if (page.path === '/') pagePath = 'index.html';
    
    const fullPath = path.join(outDir, pagePath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, renderLayout(page));
    
    if (!page.skipSitemap) {
        sitemapUrls.push(`  <url>\\n    <loc>${domain}${page.path}</loc>\\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\\n    <changefreq>weekly</changefreq>\\n    <priority>${page.path === '/' ? '1.0' : '0.8'}</priority>\\n  </url>`);
    }
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join('\\n')}
</urlset>`;
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);

const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${domain}/sitemap.xml
`;
fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsTxt);

console.log('Site generation complete. Fixed duplicate buttons, enhanced UI aesthetics, and expanded content.');
