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
      <section class="hero glass-panel" id="home">
        <div class="container hero-content">
          <img src="/favicon.webp" alt="DostWin Icon" style="width: 90px; height: 90px; margin: 0 auto 1.5rem; border-radius: 22%; display: block; box-shadow: 0 4px 20px rgba(229, 184, 59, 0.4);">
          <h1>DostWin – Online Gaming Platform & Gaming Information Guide</h1>
          <p>Welcome to the ultimate resource for everything related to the DostWin gaming platform. We provide comprehensive, verified, and easy-to-understand gaming information, platform feature breakdowns, step-by-step account guidance, detailed game-related resources, secure payment information, essential security tips, and robust responsible gaming guidance all gathered in one convenient, accessible place.</p>
          <div class="hero-buttons">
            <a href="/dostwin-login/" class="btn btn-outline" style="min-width: 150px;">Login</a>
            <a href="/dostwin-account/" class="btn btn-primary" style="min-width: 150px;">Register</a>
          </div>
        </div>
      </section>

      <!-- TABLE OF CONTENTS -->
      <section class="container" style="margin-top: 2rem; margin-bottom: 2rem;">
        <div class="toc glass-panel" style="max-width: 800px; margin: 0 auto; padding: 2rem;">
            <h2 style="margin-top: 0; font-size: 1.5rem; border: none; padding: 0; margin-bottom: 1rem;">Table of Contents</h2>
            <ul style="list-style: none; padding: 0; display: grid; gap: 0.8rem; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
                <li><a href="#about" style="display: flex; align-items: center; gap: 8px;"><span style="color:var(--accent)">1.</span> What is DostWin?</a></li>
                <li><a href="#features" style="display: flex; align-items: center; gap: 8px;"><span style="color:var(--accent)">2.</span> Platform Features</a></li>
                <li><a href="#why-use" style="display: flex; align-items: center; gap: 8px;"><span style="color:var(--accent)">3.</span> Why Use This Guide?</a></li>
                <li><a href="#guides" style="display: flex; align-items: center; gap: 8px;"><span style="color:var(--accent)">4.</span> Step-by-Step Guides</a></li>
                <li><a href="#faq" style="display: flex; align-items: center; gap: 8px;"><span style="color:var(--accent)">5.</span> Frequently Asked Questions</a></li>
            </ul>
        </div>
      </section>

      <!-- WHAT IS DOSTWIN? -->
      <section id="about" class="container content-section">
        <h2>What Is DostWin?</h2>
        <div class="glass-panel text-content">
          <p>DostWin is a premier online gaming platform designed to offer an immersive, interactive, and seamless digital entertainment experience. Our dedicated informational portal, dostwins.shop, serves as your go-to guide for mastering the platform. Whether you are a newcomer exploring the digital landscape for the first time or a seasoned user seeking to optimize your platform interactions, we provide extensive, factual, and highly useful details on how the platform operates from the ground up.</p>
          <p>We believe that an informed user is a safe and successful user. Therefore, our resources dive deep into <a href="/gaming-guide/">general gaming information</a>, meticulously explaining verified <a href="/gaming-features/">platform features</a>, and offering essential <a href="/dostwin-account/">account guidance</a>. We demystify the registration process, simplify login procedures, and clarify the mechanics of digital interactions.</p>
          <p>Furthermore, we strongly prioritize user safety above all else. Navigating the digital world requires vigilance, which is why we offer robust <a href="/gaming-safety/">security information</a> detailing how to protect your personal data, alongside dedicated <a href="/responsible-gaming/">responsible gaming resources</a> to ensure a secure, balanced, and purely entertaining experience.</p>
        </div>
      </section>

      <!-- DOSTWIN GAMING FEATURES -->
      <section id="features" class="container content-section">
        <h2>DostWin Gaming Features</h2>
        <div class="grid grid-3">
          <div class="card glass-panel">
            <h3>Online Gaming Experience</h3>
            <p>Explore comprehensive online gaming information and understand the underlying mechanics behind various platform resources. Learn how to navigate game lobbies, understand rulesets, and engage with the platform efficiently.</p>
            <a href="/gaming-guide/" class="read-more">Learn more &rarr;</a>
          </div>
          <div class="card glass-panel">
            <h3>Mobile Gaming Accessibility</h3>
            <p>The modern user demands flexibility. Find verified information about accessing gaming-related services seamlessly on supported mobile devices and apps, ensuring you can enjoy the platform anytime, anywhere without compromising on quality.</p>
            <a href="/dostwin-app/" class="read-more">Learn more &rarr;</a>
          </div>
          <div class="card glass-panel">
            <h3>Complete Account Guide</h3>
            <p>Get clear, step-by-step guidance on registration, secure login processes, and comprehensive account management. We cover profile verification, password recovery, and keeping your credentials completely secure.</p>
            <a href="/dostwin-account/" class="read-more">Learn more &rarr;</a>
          </div>
        </div>
      </section>

      <!-- WHY USE THIS GAMING GUIDE? -->
      <section id="why-use" class="container content-section">
        <h2>Why Use the DostWin Gaming Guide?</h2>
        <div class="grid grid-3">
          <div class="card glass-panel text-center">
            <h3 style="color: var(--accent);">Easy-to-understand information</h3>
            <p>We break down complex platform rules and technical jargon into simple, digestible terms.</p>
          </div>
          <div class="card glass-panel text-center">
            <h3 style="color: var(--accent);">Clear gaming guidance</h3>
            <p>Objective, step-by-step instructions designed to help you navigate without confusion.</p>
          </div>
          <div class="card glass-panel text-center">
            <h3 style="color: var(--accent);">Security and privacy information</h3>
            <p>Stay protected from phishing, scams, and unauthorized access with our expert tips.</p>
          </div>
        </div>
      </section>

      <!-- SECTIONS FOR SINGLE-PAGE CONTENT (summaries) -->
      <section id="guides" class="container content-section split-content">
        <div class="glass-panel">
          <h2>Online Gaming Guide</h2>
          <p>Online gaming platforms offer highly diverse digital experiences, from interactive lobbies to complex algorithmic features. Understanding exactly how they work, the common features you will encounter, device compatibility, and stringent security considerations is key to a rewarding experience. Our comprehensive guide helps you navigate all these aspects safely and responsibly.</p>
          <a href="/gaming-guide/" class="btn btn-primary" style="margin-top:1rem;">Read Full Guide</a>
        </div>
        <div class="glass-panel">
          <h2>DostWin Account Guide</h2>
          <p>Your account is your passport to the platform. Learn how to properly register with valid details, log in securely from any device, manage your personal account settings, and keep your password safe from unauthorized access. Find step-by-step solutions to common account issues and discover exactly where to access official support resources.</p>
          <a href="/dostwin-account/" class="btn btn-primary" style="margin-top:1rem;">Manage Account</a>
        </div>
      </section>

      <!-- FAQ SECTION -->
      <section id="faq" class="container content-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-accordion glass-panel">
          <details>
            <summary>What is DostWin?</summary>
            <p>DostWin is a prominent online gaming platform. Our website, dostwins.shop, serves as a dedicated informational resource offering detailed guides, feature explanations, and account management details to help users safely navigate the platform.</p>
          </details>
          <details>
            <summary>How can I access my gaming account?</summary>
            <p>You can securely access your account through the verified login portals of the official platform. For step-by-step, safe login instructions, visit our <a href="/dostwin-login/">Login Guide</a>.</p>
          </details>
          <details>
            <summary>What should I do if I cannot log in?</summary>
            <p>First, verify your credentials and ensure caps lock is off. Ensure you are on the correct, official domain, and use the official password recovery options. Contact official customer support if the issue persists.</p>
          </details>
          <details>
            <summary>How can I keep my gaming account secure?</summary>
            <p>Always use strong, unique passwords containing mixed characters. Never share your One-Time Passwords (OTP) with anyone, including support staff, and meticulously verify the website domain before entering any credentials.</p>
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
        <h1>About DostWin – Gaming Platform Information</h1>
        <div class="glass-panel text-content">
          <p>Welcome to DostWin (dostwins.shop). Our primary mission and purpose is to serve as a comprehensive, transparent, highly accurate, and user-focused informational guide for the DostWin gaming platform and the broader online gaming ecosystem.</p>
          <h2>Our Core Purpose</h2>
          <p>The digital gaming landscape can often be confusing. We built this website to clarify platform features, offer practical and actionable account guidance, and emphasize the absolute necessity of safety in the digital gaming space. Please note clearly that <strong>dostwins.shop is an independent informational guide</strong> and is not the official transaction portal or operational platform. We provide high-quality educational resources to help you navigate platforms like dostwin.cc safely and effectively.</p>
          <h2>Extensive Gaming Information Provided</h2>
          <p>Our expert guide covers a wide range of essential topics, carefully researched and written for clarity, including:</p>
          <ul>
            <li><strong>Platform Navigation:</strong> Detailed feature explanations and interface walkthroughs.</li>
            <li><strong>Account Management:</strong> Step-by-step login, registration, and profile management guides.</li>
            <li><strong>Financial Basics:</strong> General informational concepts regarding payments, deposits, and withdrawals.</li>
            <li><strong>Cybersecurity:</strong> Best practices for securing your online data, recognizing phishing, and keeping your credentials private.</li>
          </ul>
        </div>
      </section>
    `
  }
];

const basePages = [
  'gaming-guide', 'dostwin-login', 'dostwin-account', 'dostwin-app', 
  'gaming-platform', 'gaming-features', 'payment-guide', 'withdrawal-guide', 
  'gaming-safety', 'responsible-gaming', 'faq', 'contact', 'privacy-policy', 'terms', 'disclaimer'
];

pages.push({
    path: '/gaming-guide/',
    title: 'DostWin Gaming Guide – Platform & Online Gaming Information',
    description: 'Read the DostWin gaming guide for platform information, account guidance, gaming features, security resources and responsible gaming tips.',
    content: `
      <section class="container content-section">
        <h1>DostWin Gaming Guide</h1>
        <div class="glass-panel text-content">
          <p>Welcome to the central, comprehensive hub for all DostWin gaming information. Whether you are a new user seeking basic account help or an experienced participant looking to understand complex platform features, our detailed guides are meticulously designed to provide clear, accurate, and completely unbiased information.</p>
          
          <h2>Mastering the Online Gaming Guide</h2>
          <p>Modern online gaming platforms offer incredibly diverse interactive experiences, powered by complex algorithms and robust software architecture. Our guide covers exactly how these systems generally work, the common interactive features you might encounter during your sessions, important device compatibility considerations for mobile and desktop, and the crucial security protocols you must follow. <br><br> Understanding these foundational elements deeply helps ensure a much smoother, more enjoyable, and profoundly more secure digital experience.</p>
          
          <h2>Explore Our In-Depth Guides</h2>
          <p>Select a topic below to dive into our high-quality, human-written resources covering every aspect of the DostWin ecosystem:</p>
          <div class="grid grid-3" style="margin-top: 2rem;">
            <a href="/dostwin-account/" class="card glass-panel text-center">
              <h3 style="color: var(--accent);">Account Guide</h3>
              <p>Master registration, KYC processes, and profile management.</p>
            </a>
            <a href="/dostwin-login/" class="card glass-panel text-center">
              <h3 style="color: var(--accent);">Login Guide</h3>
              <p>Secure access instructions, 2FA setup, and password recovery.</p>
            </a>
            <a href="/gaming-platform/" class="card glass-panel text-center">
              <h3 style="color: var(--accent);">Platform Guide</h3>
              <p>Navigating the complex interface, lobbies, and menus effortlessly.</p>
            </a>
            <a href="/gaming-features/" class="card glass-panel text-center">
              <h3 style="color: var(--accent);">Gaming Features</h3>
              <p>Deep dive into understanding functionality and interaction rules.</p>
            </a>
            <a href="/payment-guide/" class="card glass-panel text-center">
              <h3 style="color: var(--accent);">Payment Information</h3>
              <p>Crucial details on deposits, security, and transaction tips.</p>
            </a>
            <a href="/withdrawal-guide/" class="card glass-panel text-center">
              <h3 style="color: var(--accent);">Withdrawal Information</h3>
              <p>Understanding processing times, requirements, and compliance.</p>
            </a>
          </div>
        </div>
      </section>
    `
});

function renderLayout(page) {
  const isHome = page.path === '/';
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
            <a href="/" class="logo" style="display:flex; align-items:center; gap: 10px;">
                <img src="/favicon.webp" alt="Logo" style="width: 32px; height: 32px; border-radius: 6px;">
                DostWin
            </a>
            
            <nav class="main-nav">
                <a href="/">Home</a>
                <a href="/about/">About</a>
                <a href="/gaming-guide/">Guide</a>
                <a href="/gaming-features/">Features</a>
                <a href="/faq/">FAQ</a>
                <a href="/contact/">Contact</a>
            </nav>

            <div class="auth-buttons desktop-only">
                <a href="/dostwin-login/" class="btn-auth btn-auth-outline">Login</a>
                <a href="/dostwin-account/" class="btn-auth btn-auth-primary">Register</a>
            </div>

            <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    ${generateBreadcrumbs(page.path)}

    <main>
        ${page.content || '<section class="container content-section"><h1>' + page.title + '</h1><div class="glass-panel text-content"><p>Detailed information coming soon. Please refer to the homepage for comprehensive navigation.</p></div></section>'}
    </main>

    <footer class="global-footer">
        <div class="container footer-grid">
            <div class="footer-col">
                <div style="display:flex; align-items:center; gap: 10px; margin-bottom: 1.2rem;">
                  <img src="/favicon.webp" alt="Logo" style="width: 24px; height: 24px; border-radius: 4px;">
                  <h4 style="margin:0;">DostWin</h4>
                </div>
                <p>A premium, independent online gaming information and guide resource dedicated to user safety and education.</p>
            </div>
            <div class="footer-col">
                <h4>Explore</h4>
                <a href="/">Home</a>
                <a href="/about/">About Us</a>
                <a href="/gaming-guide/">Gaming Guide</a>
                <a href="/gaming-features/">Platform Features</a>
                <a href="/faq/">Frequently Asked Questions</a>
            </div>
            <div class="footer-col">
                <h4>Guides</h4>
                <a href="/dostwin-account/">Account Guide</a>
                <a href="/dostwin-login/">Login Guide</a>
                <a href="/payment-guide/">Payment Information</a>
                <a href="/withdrawal-guide/">Withdrawal Information</a>
                <a href="/gaming-safety/">Safety & Security</a>
                <a href="/responsible-gaming/">Responsible Gaming</a>
            </div>
            <div class="footer-col">
                <h4>Legal</h4>
                <a href="/privacy-policy/">Privacy Policy</a>
                <a href="/terms/">Terms of Service</a>
                <a href="/disclaimer/">Disclaimer</a>
                <a href="/contact/">Contact Us</a>
            </div>
        </div>
        <div class="container footer-bottom">
            <p>&copy; ${new Date().getFullYear()} DostWin. All rights reserved. For informational and educational purposes only.</p>
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
    --text-secondary: #b0b3b8;
    --accent: #E5B83B; 
    --accent-hover: #f7c945;
    --glass-bg: rgba(255, 255, 255, 0.04);
    --glass-border: rgba(229, 184, 59, 0.15);
    --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }
body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-sans);
    line-height: 1.7;
    overflow-x: hidden;
}

a { color: var(--accent); text-decoration: none; transition: color 0.3s; }
a:hover { color: var(--accent-hover); }

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

/* Typography */
h1, h2, h3, h4 { color: #fff; font-weight: 700; line-height: 1.3; margin-bottom: 1.2rem; }
h1 { font-size: 2.8rem; letter-spacing: -0.5px; }
h2 { font-size: 2.2rem; margin-top: 2.5rem; border-left: 4px solid var(--accent); padding-left: 1rem; }
h3 { font-size: 1.5rem; }
p { color: var(--text-secondary); margin-bottom: 1.2rem; font-size: 1.05rem; }

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.8rem;
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 1.05rem;
}
.btn-primary {
    background: linear-gradient(135deg, var(--accent), #d4a017);
    color: #111;
    border: none;
}
.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(229, 184, 59, 0.4);
    color: #000;
}
.btn-outline {
    border: 1px solid var(--accent);
    color: var(--accent);
}
.btn-outline:hover {
    background: var(--accent);
    color: #111;
}

/* Auth Buttons in Header */
.auth-buttons { display: flex; gap: 10px; }
.btn-auth { padding: 0.5rem 1.2rem; border-radius: 6px; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: 0.2s; }
.btn-auth-primary { background: linear-gradient(135deg, var(--accent), #d4a017); color: #111; border: none; }
.btn-auth-primary:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(229, 184, 59, 0.3); color: #000; }
.btn-auth-outline { border: 1px solid var(--accent); color: var(--accent); background: transparent; }
.btn-auth-outline:hover { background: rgba(229, 184, 59, 0.1); }

/* Glassmorphism */
.glass-panel {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 14px;
    padding: 2.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

/* Header */
.global-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(36, 38, 43, 0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--glass-border);
}
.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
}
.logo { font-size: 1.6rem; font-weight: 800; color: #fff; letter-spacing: 0.5px; }
.main-nav { display: flex; gap: 1.8rem; align-items: center; }
.main-nav a { color: var(--text-primary); font-weight: 500; transition: color 0.2s; }
.main-nav a:hover { color: var(--accent); }
.mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; }
.mobile-menu-btn span { display: block; width: 28px; height: 3px; background: var(--accent); margin: 6px 0; transition: 0.3s; border-radius: 2px; }

/* Breadcrumbs */
.breadcrumbs { padding: 1.5rem 1.5rem 0; }
.breadcrumbs ol { list-style: none; display: flex; flex-wrap: wrap; gap: 0.5rem; }
.breadcrumbs li { color: var(--text-secondary); font-size: 0.95rem; }
.breadcrumbs li:not(:last-child)::after { content: "/"; margin-left: 0.5rem; color: var(--glass-border); }

/* Layouts */
.content-section { padding: 4rem 1.5rem; scroll-margin-top: 80px; }
.grid { display: grid; gap: 2rem; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }

/* Hero */
.hero { text-align: center; padding: 5rem 1.5rem; margin: 3rem 1.5rem; position: relative; overflow: hidden; }
.hero::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(229,184,59,0.05) 0%, rgba(36,38,43,0) 70%); z-index: -1; }
.hero-content { max-width: 850px; }
.hero h1 { background: linear-gradient(to right, #fff, var(--accent)); -webkit-background-clip: text; color: transparent; margin-bottom: 1.5rem; }
.hero p { font-size: 1.15rem; color: #d1d5db; }
.hero-buttons { display: flex; justify-content: center; gap: 1.5rem; margin-top: 2.5rem; }

/* Text Content */
.text-content ul, .text-content ol { margin-left: 1.8rem; margin-bottom: 1.5rem; color: var(--text-secondary); font-size: 1.05rem; }
.text-content li { margin-bottom: 0.8rem; }
.text-content a { text-decoration: none; border-bottom: 1px dashed var(--accent); padding-bottom: 2px; }
.text-content a:hover { border-bottom-style: solid; }

/* Split Content */
.split-content { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }

/* FAQ */
.faq-accordion details { border-bottom: 1px solid var(--glass-border); padding: 1.5rem 0; }
.faq-accordion summary { font-size: 1.2rem; font-weight: 600; cursor: pointer; color: #fff; list-style: none; position: relative; padding-right: 2rem; transition: color 0.2s; }
.faq-accordion summary:hover { color: var(--accent); }
.faq-accordion summary::-webkit-details-marker { display: none; }
.faq-accordion summary::after { content: '+'; position: absolute; right: 0; top: 0; color: var(--accent); font-size: 1.8rem; line-height: 1; }
.faq-accordion details[open] summary::after { content: '-'; }
.faq-accordion p { margin-top: 1.2rem; margin-bottom: 0; color: #a1a1aa; }

/* TOC Hover */
.toc a { transition: transform 0.2s; display: inline-block; padding: 4px 8px; border-radius: 4px; }
.toc a:hover { background: rgba(229,184,59,0.1); transform: translateX(5px); }

/* Footer */
.global-footer { border-top: 1px solid var(--glass-border); padding: 5rem 0 2rem; margin-top: 5rem; background: rgba(15, 15, 18, 0.5); }
.footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem; }
.footer-col h4 { color: #fff; margin-bottom: 1.5rem; border-left: none; padding-left: 0; }
.footer-col a { display: block; margin-bottom: 1rem; color: var(--text-secondary); transition: color 0.2s, transform 0.2s; }
.footer-col a:hover { color: var(--accent); transform: translateX(5px); }
.footer-bottom { margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--glass-border); text-align: center; font-size: 0.95rem; color: #71717a; }

/* Responsive */
@media (max-width: 1024px) {
    .grid-3 { grid-template-columns: repeat(2, 1fr); }
    .hero { padding: 5rem 1rem; }
}
@media (max-width: 768px) {
    .desktop-only { display: none; }
    .main-nav {
        display: none;
        position: absolute;
        top: 75px;
        left: 0;
        width: 100%;
        background: var(--bg-color);
        flex-direction: column;
        padding: 1.5rem;
        border-bottom: 1px solid var(--glass-border);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    .main-nav.active { display: flex; }
    /* Append auth buttons inside mobile menu via JS or just CSS */
    .mobile-menu-btn { display: block; }
    .grid-2, .grid-3, .split-content, .footer-grid { grid-template-columns: 1fr; }
    .hero-buttons { flex-direction: column; gap: 1rem; }
    .hero { margin: 1rem 0; padding: 3rem 1rem; border-radius: 0; border-left: none; border-right: none; }
    h1 { font-size: 2.2rem; }
    h2 { font-size: 1.8rem; }
}
`;

const jsContent = `
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    // Create mobile auth buttons
    const authDiv = document.createElement('div');
    authDiv.style.display = 'flex';
    authDiv.style.gap = '10px';
    authDiv.style.marginTop = '15px';
    authDiv.style.borderTop = '1px solid rgba(229, 184, 59, 0.15)';
    authDiv.style.paddingTop = '15px';
    
    authDiv.innerHTML = '<a href="/dostwin-login/" class="btn-auth btn-auth-outline" style="flex:1; text-align:center;">Login</a>' +
                         '<a href="/dostwin-account/" class="btn-auth btn-auth-primary" style="flex:1; text-align:center;">Register</a>';
    mainNav.appendChild(authDiv);

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

console.log('Site generation complete with Table of Contents and Login/Register buttons.');
