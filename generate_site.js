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
      <section class="hero glass-panel">
        <div class="container hero-content">
          <h1>DostWin – Online Gaming Platform & Gaming Information Guide</h1>
          <p>Explore DostWin gaming information, platform features, account guidance, game-related resources, payment information, security tips and responsible gaming guidance in one convenient place.</p>
          <div class="hero-buttons">
            <a href="/gaming-guide/" class="btn btn-primary">Explore Gaming Guide</a>
            <a href="/about/" class="btn btn-secondary">Learn About DostWin</a>
          </div>
        </div>
      </section>

      <!-- TRUST / QUICK INFORMATION BAR -->
      <section class="trust-bar container">
        <a href="/gaming-guide/" class="trust-card glass-panel">
          <h3>Gaming Information</h3>
        </a>
        <a href="/gaming-platform/" class="trust-card glass-panel">
          <h3>Platform Guidance</h3>
        </a>
        <a href="/gaming-safety/" class="trust-card glass-panel">
          <h3>Security Resources</h3>
        </a>
        <a href="/responsible-gaming/" class="trust-card glass-panel">
          <h3>Responsible Gaming</h3>
        </a>
      </section>

      <!-- WHAT IS DOSTWIN? -->
      <section class="container content-section">
        <h2>What Is DostWin?</h2>
        <div class="glass-panel text-content">
          <p>DostWin is a comprehensive online gaming platform and informational resource dedicated to providing clear, factual, and useful guidance to users. Whether you are new to online gaming or looking to optimize your experience, we offer extensive details on how the platform operates, how to securely manage your account, and what features you can expect.</p>
          <p>Our resources include detailed insights into <a href="/gaming-guide/">general gaming information</a>, verified <a href="/gaming-features/">platform features</a>, and essential <a href="/dostwin-account/">account guidance</a>. We strongly prioritize user safety, offering robust <a href="/gaming-safety/">security information</a> and dedicated <a href="/responsible-gaming/">responsible gaming resources</a> to ensure a secure and balanced experience.</p>
        </div>
      </section>

      <!-- DOSTWIN GAMING FEATURES -->
      <section class="container content-section">
        <h2>DostWin Gaming Features</h2>
        <div class="grid grid-3">
          <div class="card glass-panel">
            <h3>Online Gaming</h3>
            <p>Explore comprehensive online gaming information and understand the mechanics behind various platform resources available to users.</p>
            <a href="/gaming-guide/" class="read-more">Learn more &rarr;</a>
          </div>
          <div class="card glass-panel">
            <h3>Mobile Gaming</h3>
            <p>Find verified information about accessing gaming-related services seamlessly on supported mobile devices and apps.</p>
            <a href="/dostwin-app/" class="read-more">Learn more &rarr;</a>
          </div>
          <div class="card glass-panel">
            <h3>Account Guide</h3>
            <p>Get clear guidance on registration, login processes, and basic account management to ensure smooth access.</p>
            <a href="/dostwin-account/" class="read-more">Learn more &rarr;</a>
          </div>
          <div class="card glass-panel">
            <h3>Gaming Information</h3>
            <p>Access useful explanations about platform functionality, terminology, and how to navigate various gaming resources.</p>
            <a href="/gaming-platform/" class="read-more">Learn more &rarr;</a>
          </div>
          <div class="card glass-panel">
            <h3>Security</h3>
            <p>Learn about account safety, privacy protections, and responsible online practices to keep your data secure.</p>
            <a href="/gaming-safety/" class="read-more">Learn more &rarr;</a>
          </div>
          <div class="card glass-panel">
            <h3>Responsible Gaming</h3>
            <p>Access educational information encouraging informed, balanced, and responsible participation within the gaming space.</p>
            <a href="/responsible-gaming/" class="read-more">Learn more &rarr;</a>
          </div>
        </div>
      </section>

      <!-- WHY USE THIS GAMING GUIDE? -->
      <section class="container content-section">
        <h2>Why Use the DostWin Gaming Guide?</h2>
        <div class="grid grid-3">
          <div class="card glass-panel text-center">
            <h3>Easy-to-understand information</h3>
          </div>
          <div class="card glass-panel text-center">
            <h3>Clear gaming guidance</h3>
          </div>
          <div class="card glass-panel text-center">
            <h3>Account and login resources</h3>
          </div>
          <div class="card glass-panel text-center">
            <h3>Platform feature explanations</h3>
          </div>
          <div class="card glass-panel text-center">
            <h3>Security and privacy information</h3>
          </div>
          <div class="card glass-panel text-center">
            <h3>Responsible gaming resources</h3>
          </div>
        </div>
      </section>

      <!-- DOSTWIN GAMING GUIDE -->
      <section class="container content-section">
        <h2>DostWin Gaming Guide</h2>
        <div class="grid grid-4">
          <a href="/gaming-guide/" class="btn btn-outline">Online Gaming Guide</a>
          <a href="/dostwin-account/" class="btn btn-outline">DostWin Account Guide</a>
          <a href="/dostwin-login/" class="btn btn-outline">DostWin Login Guide</a>
          <a href="/gaming-platform/" class="btn btn-outline">Gaming Platform Guide</a>
          <a href="/gaming-features/" class="btn btn-outline">Gaming Features</a>
          <a href="/payment-guide/" class="btn btn-outline">Payment Information</a>
          <a href="/withdrawal-guide/" class="btn btn-outline">Withdrawal Information</a>
          <a href="/gaming-safety/" class="btn btn-outline">Gaming Safety</a>
          <a href="/responsible-gaming/" class="btn btn-outline">Responsible Gaming</a>
        </div>
      </section>

      <!-- SECTIONS FOR SINGLE-PAGE CONTENT (summaries) -->
      
      <section class="container content-section split-content">
        <div class="glass-panel">
          <h2>Online Gaming Guide</h2>
          <p>Online gaming platforms offer diverse experiences. Understanding how they work, common features, device compatibility, and security considerations is key. Our guide helps you navigate these aspects responsibly.</p>
          <a href="/gaming-guide/" class="btn btn-primary">Read Full Guide</a>
        </div>
        <div class="glass-panel">
          <h2>DostWin Account Guide</h2>
          <p>Learn how to properly register, log in, manage your account details, and keep your password secure. Find solutions to common account issues and support resources.</p>
          <a href="/dostwin-account/" class="btn btn-primary">Manage Account</a>
        </div>
      </section>

      <section class="container content-section split-content">
        <div class="glass-panel">
          <h2>DostWin Gaming Platform Guide</h2>
          <p>Familiarize yourself with platform navigation, main sections, gaming-related features, and the mobile experience to make the most of the resources available to you.</p>
          <a href="/gaming-platform/" class="btn btn-primary">Platform Information</a>
        </div>
        <div class="glass-panel">
          <h2>Payment & Withdrawal Information</h2>
          <p>Understand standard payment methods, transaction processing times, account requirements, and transaction security. Always verify current platform terms directly.</p>
          <a href="/payment-guide/" class="btn btn-primary">Payment Details</a>
        </div>
      </section>

      <section class="container content-section split-content">
        <div class="glass-panel">
          <h2>DostWin Security & Safety Guide</h2>
          <p>Implement strong password practices, avoid suspicious links, protect personal information, and keep your devices updated. Never share your passwords or OTPs.</p>
          <a href="/gaming-safety/" class="btn btn-primary">Safety Tips</a>
        </div>
        <div class="glass-panel">
          <h2>Responsible Gaming</h2>
          <p>Set personal limits, understand the risks, avoid chasing losses, and take regular breaks. Never treat gaming as guaranteed income. Seek help if needed.</p>
          <a href="/responsible-gaming/" class="btn btn-primary">Play Responsibly</a>
        </div>
      </section>

      <!-- FAQ SECTION -->
      <section class="container content-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-accordion glass-panel">
          <details>
            <summary>What is DostWin?</summary>
            <p>DostWin is an online gaming platform and informational resource offering guides, feature explanations, and account management details.</p>
          </details>
          <details>
            <summary>What is the DostWin gaming platform?</summary>
            <p>It is a digital space where users can access gaming features and resources. Our site provides informational guides on how to navigate it.</p>
          </details>
          <details>
            <summary>Where can I find the DostWin gaming guide?</summary>
            <p>You can find our comprehensive guides directly in the <a href="/gaming-guide/">Gaming Guide section</a> of our website.</p>
          </details>
          <details>
            <summary>How does online gaming work?</summary>
            <p>Online gaming involves interacting with platforms via the internet, creating an account, and participating in available features within set platform rules.</p>
          </details>
          <details>
            <summary>How can I access my gaming account?</summary>
            <p>You can access your account through the verified login portals. For step-by-step instructions, visit our <a href="/dostwin-login/">Login Guide</a>.</p>
          </details>
          <details>
            <summary>What should I do if I cannot log in?</summary>
            <p>Verify your credentials, ensure you are on the correct domain, and use the official password recovery options. Contact support if the issue persists.</p>
          </details>
          <details>
            <summary>How can I keep my gaming account secure?</summary>
            <p>Use strong, unique passwords, never share your OTP, and verify the website domain before entering credentials.</p>
          </details>
          <details>
            <summary>What should I know about payments and withdrawals?</summary>
            <p>Always review the platform specific requirements. Processing times vary, and you should ensure transactions are conducted securely.</p>
          </details>
          <details>
            <summary>What is responsible gaming?</summary>
            <p>Responsible gaming is the practice of setting limits, understanding risks, not chasing losses, and treating gaming as entertainment rather than income.</p>
          </details>
          <details>
            <summary>Where can I find DostWin support information?</summary>
            <p>Support information can usually be found in the account section of the official platform. For general inquiries about our guides, see our <a href="/contact/">Contact page</a>.</p>
          </details>
        </div>
      </section>

      <!-- FINAL CTA -->
      <section class="container content-section cta-section glass-panel text-center">
        <h2>Explore the DostWin Gaming Guide</h2>
        <p>Find clear information about online gaming, platform features, account guidance, security and responsible gaming.</p>
        <a href="/gaming-guide/" class="btn btn-primary">Explore Gaming Guide</a>
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
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "What is DostWin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DostWin is an online gaming platform and informational resource offering guides, feature explanations, and account management details."
          }
        }, {
          "@type": "Question",
          "name": "How can I access my gaming account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can access your account through the verified login portals. For step-by-step instructions, visit our Login Guide."
          }
        }]
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
          <p>Welcome to DostWin (dostwins.shop). Our purpose is to serve as a comprehensive, transparent, and user-focused informational guide for the DostWin gaming platform and online gaming in general.</p>
          
          <h2>Our Purpose</h2>
          <p>We built this website to clarify platform features, offer practical account guidance, and emphasize safety in the digital gaming space. Please note that <strong>dostwins.shop is an independent informational guide</strong> and is not the official transaction portal. We provide resources to help you navigate platforms like dostwin.cc safely and effectively.</p>
          
          <h2>Gaming Information Provided</h2>
          <p>Our guide covers a wide range of topics, including:</p>
          <ul>
            <li>Platform navigation and feature explanations</li>
            <li>Step-by-step login and account management guides</li>
            <li>General information regarding payments and withdrawals</li>
            <li>Best practices for securing your online data</li>
          </ul>

          <h2>Commitment to Clear Information</h2>
          <p>We do not make unsupported claims, guarantee winnings, or promote gaming as an investment. Our content is designed to be factual, people-first, and highly useful. If specific platform information is unavailable or subject to change, we advise users to check official terms directly.</p>

          <h2>Safety and Responsible Gaming</h2>
          <p>User protection is our top priority. We strongly advocate for <a href="/responsible-gaming/">responsible gaming</a> and provide educational materials to help users set limits, understand risks, and maintain control over their online experiences.</p>
        </div>
      </section>
    `
  },
  {
    path: '/gaming-guide/',
    title: 'DostWin Gaming Guide – Platform & Online Gaming Information',
    description: 'Read the DostWin gaming guide for platform information, account guidance, gaming features, security resources and responsible gaming tips.',
    content: `
      <section class="container content-section">
        <h1>DostWin Gaming Guide</h1>
        <div class="glass-panel text-content">
          <p>Welcome to the central hub for all DostWin gaming information. Whether you are seeking basic account help or looking to understand complex platform features, our guides are designed to provide clear, accurate, and unbiased information.</p>
          
          <h2>Online Gaming Guide</h2>
          <p>Online gaming platforms offer various interactive experiences. Our guide covers how they generally work, the common features you might encounter, device compatibility considerations, and crucial security protocols. <br><br> Understanding these foundational elements helps ensure a smoother and more secure experience.</p>
          
          <h2>Explore Our Guides</h2>
          <div class="grid grid-3" style="margin-top: 2rem;">
            <a href="/dostwin-account/" class="card glass-panel text-center">
              <h3>DostWin Account Guide</h3>
              <p>Registration and management</p>
            </a>
            <a href="/dostwin-login/" class="card glass-panel text-center">
              <h3>DostWin Login Guide</h3>
              <p>Secure access instructions</p>
            </a>
            <a href="/gaming-platform/" class="card glass-panel text-center">
              <h3>Gaming Platform Guide</h3>
              <p>Navigating the interface</p>
            </a>
            <a href="/gaming-features/" class="card glass-panel text-center">
              <h3>Gaming Features</h3>
              <p>Understanding functionality</p>
            </a>
            <a href="/payment-guide/" class="card glass-panel text-center">
              <h3>Payment Information</h3>
              <p>Deposits and transaction tips</p>
            </a>
            <a href="/withdrawal-guide/" class="card glass-panel text-center">
              <h3>Withdrawal Information</h3>
              <p>Processing and requirements</p>
            </a>
          </div>
        </div>
      </section>
    `
  },
  {
    path: '/dostwin-login/',
    title: 'DostWin Login Guide – Account Access Information',
    description: 'Find useful DostWin login information, account access guidance and security tips for online gaming users.',
    content: `
      <section class="container content-section">
        <h1>DostWin Login Guide</h1>
        <div class="glass-panel text-content">
          <p>Accessing your gaming account securely is the first step to enjoying the platform. This guide provides essential information on the DostWin login process and how to protect your credentials.</p>
          
          <h2>How to Log In Securely</h2>
          <ol>
            <li><strong>Verify the URL:</strong> Always ensure you are on the official platform domain before entering any details. Do not click on unverified links sent via SMS or email.</li>
            <li><strong>Enter Credentials:</strong> Input your registered username/mobile number and password.</li>
            <li><strong>Use 2FA (if available):</strong> If the platform supports Two-Factor Authentication or OTP, ensure you complete this step without sharing the code with anyone.</li>
          </ol>

          <h2>Common Login Issues</h2>
          <ul>
            <li><strong>Forgotten Password:</strong> Use the official 'Forgot Password' link on the login page to reset your credentials securely.</li>
            <li><strong>Account Lockout:</strong> If you attempt to log in too many times with incorrect details, your account may be temporarily locked for your safety. Wait the required time or contact official support.</li>
            <li><strong>Network Errors:</strong> Ensure you have a stable internet connection and try clearing your browser cache if the page fails to load.</li>
          </ul>

          <h2>Security Reminders</h2>
          <p>Never share your password with anyone, including individuals claiming to be customer support. For more details, visit our <a href="/gaming-safety/">Gaming Safety Guide</a>.</p>
        </div>
      </section>
    `
  },
  {
    path: '/dostwin-account/',
    title: 'DostWin Account Guide – Registration & Account Information',
    description: 'Learn about DostWin account registration, management, password security, and resolving common account issues.',
    content: `
      <section class="container content-section">
        <h1>DostWin Account Guide</h1>
        <div class="glass-panel text-content">
          <p>Managing your DostWin account correctly ensures a smooth and secure gaming experience. This guide covers the basics of account registration, ongoing management, and privacy.</p>
          
          <h2>Account Registration Information</h2>
          <p>When creating a new account on an online gaming platform, you will typically need to provide basic verifiable information. Ensure you use a strong, unique password during setup. Read the platform's terms and conditions carefully before agreeing.</p>
          
          <h2>Account Management</h2>
          <p>Once registered, you can manage your profile, update contact information, and review your activity history. It is highly recommended to keep your contact details updated so you can recover your account if needed.</p>

          <h2>Password Security and Best Practices</h2>
          <ul>
            <li>Use a combination of uppercase letters, lowercase letters, numbers, and symbols.</li>
            <li>Do not reuse passwords across multiple platforms.</li>
            <li>Regularly update your password every few months.</li>
            <li>Keep your account details secure and never write them down in publicly accessible places.</li>
          </ul>

          <h2>Where to Seek Support</h2>
          <p>If you experience issues that cannot be resolved via the platform's self-service tools, look for the official live chat or support email provided within the authenticated account area.</p>
        </div>
      </section>
    `
  },
  {
    path: '/dostwin-app/',
    title: 'DostWin App Guide – Mobile Gaming Information',
    description: 'Find verified information about accessing DostWin gaming services on supported mobile devices and apps.',
    content: `
      <section class="container content-section">
        <h1>DostWin App Guide</h1>
        <div class="glass-panel text-content">
          <p>Mobile gaming offers flexibility and convenience. This guide explores how users can access platform features on various mobile devices.</p>
          
          <h2>Device Compatibility</h2>
          <p>Most modern online gaming platforms are designed with mobile-first responsive web technologies, meaning they work smoothly on both Android and iOS browsers without requiring a dedicated app download.</p>
          
          <h2>App Installation (Where Verified)</h2>
          <p>If a dedicated DostWin app is available, always ensure you download it from official sources or directly through verified links on the official platform website. Beware of third-party APK sites that may host modified or malicious versions of the app.</p>

          <h2>Mobile Experience Features</h2>
          <ul>
            <li>Touch-optimized interface for easier navigation.</li>
            <li>Quick access to account management and gaming features.</li>
            <li>Performance optimized for mobile network speeds.</li>
          </ul>

          <h2>Mobile Gaming Safety Tips</h2>
          <p>Avoid using public, unsecured Wi-Fi networks when logging into your account or performing transactions. Keep your device's operating system updated to ensure you have the latest security patches.</p>
        </div>
      </section>
    `
  },
  {
    path: '/gaming-platform/',
    title: 'DostWin Gaming Platform – Features & Information',
    description: 'Explore the DostWin gaming platform guide, featuring insights on navigation, main sections, and support resources.',
    content: `
      <section class="container content-section">
        <h1>DostWin Gaming Platform Guide</h1>
        <div class="glass-panel text-content">
          <p>Navigating an online gaming platform efficiently enhances your overall experience. Here is an overview of what to expect and how to find what you need.</p>
          
          <h2>Platform Navigation</h2>
          <p>The platform is typically divided into clear sections such as the lobby or main game area, user account dashboard, cashier/payment section, and support center. Familiarize yourself with the main menu to easily move between these areas.</p>
          
          <h2>Main Sections Explained</h2>
          <ul>
            <li><strong>Gaming Area:</strong> Where the primary interactive features and games are hosted.</li>
            <li><strong>Account Area:</strong> For profile management, security settings, and viewing history.</li>
            <li><strong>Wallet/Cashier:</strong> The section dedicated to managing your balances, deposits, and withdrawals.</li>
          </ul>

          <h2>Mobile Experience</h2>
          <p>The platform is designed to scale dynamically. Whether on desktop or mobile, the core features remain accessible, with menus adapting to smaller screens for touch-friendly use.</p>

          <h2>Support Resources</h2>
          <p>Most platforms feature a help center, FAQ section, or live chat support. Always utilize these official resources if you encounter technical glitches or have specific account questions.</p>
        </div>
      </section>
    `
  },
  {
    path: '/gaming-features/',
    title: 'DostWin Gaming Features – Platform Information Guide',
    description: 'Learn about the various features, functionalities, and resources available on the DostWin online gaming platform.',
    content: `
      <section class="container content-section">
        <h1>DostWin Gaming Features</h1>
        <div class="glass-panel text-content">
          <p>Understanding the features of the platform ensures you are utilizing it safely and effectively. We provide objective information about common platform functionalities.</p>
          
          <h2>Core Gaming Mechanics</h2>
          <p>Online platforms offer various formats of interactive entertainment. These systems operate on algorithms and defined rules. We advise users to thoroughly read the rules of any specific feature before participating.</p>
          
          <h2>Account and Security Features</h2>
          <p>Modern platforms integrate features like transaction history logs, session management, and authentication tools to give users control over their data and privacy.</p>

          <h2>Information Transparency</h2>
          <p>We believe in transparent gaming. This means understanding that outcomes are not guaranteed and features are designed for entertainment. We do not support or make claims regarding guaranteed rewards, fixed returns, or financial profits. Always view gaming features through the lens of <a href="/responsible-gaming/">responsible participation</a>.</p>
        </div>
      </section>
    `
  },
  {
    path: '/payment-guide/',
    title: 'DostWin Payment Guide – Gaming Payment Information',
    description: 'Find informational concepts regarding payment methods, transaction security, and account requirements for online gaming.',
    content: `
      <section class="container content-section">
        <h1>Payment Information</h1>
        <div class="glass-panel text-content">
          <p>Handling transactions securely is a vital part of the online gaming experience. This guide explains general informational concepts regarding payments.</p>
          
          <h2>Payment Methods</h2>
          <p>Platforms typically support a variety of payment methods, including bank transfers, digital wallets, and sometimes localized payment solutions. Always verify the officially supported methods directly on the platform.</p>
          
          <h2>Transaction Processing and Security</h2>
          <p>When making a payment, ensure the platform uses secure, encrypted connections (look for HTTPS). Processing times for deposits are generally quick, but can vary based on the network and method chosen.</p>

          <h2>Important Considerations</h2>
          <ul>
            <li><strong>Verify Requirements:</strong> Ensure your account is fully verified if required by the platform before attempting transactions.</li>
            <li><strong>No Guarantees:</strong> We do not promise guaranteed bonuses, instant processing, or risk-free transactions. Always check the specific terms of the platform.</li>
            <li><strong>Support:</strong> If a payment fails or is delayed, contact the platform's official financial support team with your transaction ID.</li>
          </ul>
        </div>
      </section>
    `
  },
  {
    path: '/withdrawal-guide/',
    title: 'DostWin Withdrawal Guide – Transaction Information',
    description: 'Understand online gaming withdrawal considerations, processing times, and account verification requirements.',
    content: `
      <section class="container content-section">
        <h1>Withdrawal Information</h1>
        <div class="glass-panel text-content">
          <p>Understanding how withdrawals work helps set realistic expectations and ensures a smooth process when retrieving funds from a platform.</p>
          
          <h2>Withdrawal Considerations</h2>
          <p>Withdrawals are subject to platform-specific policies. Common requirements include:</p>
          <ul>
            <li><strong>Account Verification:</strong> You may need to complete a KYC (Know Your Customer) process to prove your identity before withdrawals are enabled.</li>
            <li><strong>Minimum Thresholds:</strong> Platforms often have minimum limits for withdrawal amounts.</li>
            <li><strong>Method Matching:</strong> For security reasons, withdrawals are frequently processed back to the same method used for depositing.</li>
          </ul>

          <h2>Processing Times</h2>
          <p>Never expect instant withdrawals. Processing times depend on the platform's internal review processes and the external banking networks. It can take anywhere from a few hours to several business days.</p>

          <h2>Security Checks</h2>
          <p>Delays can occur if a transaction triggers a routine security review. This is a standard industry practice designed to protect user accounts from unauthorized access.</p>
        </div>
      </section>
    `
  },
  {
    path: '/gaming-safety/',
    title: 'DostWin Gaming Safety Guide – Account Security Tips',
    description: 'Learn how to protect your personal information, avoid suspicious links, and maintain account security in online gaming.',
    content: `
      <section class="container content-section">
        <h1>DostWin Security & Safety Guide</h1>
        <div class="glass-panel text-content">
          <p>Your online safety is paramount. Follow these essential guidelines to protect your gaming account and personal information.</p>
          
          <h2>Strong Password Practices</h2>
          <p>Create a complex password that is unique to this platform. Consider using a reputable password manager to generate and store your credentials securely.</p>
          
          <h2>Never Share Passwords or OTPs</h2>
          <p>Legitimate platform support will <strong>never</strong> ask for your password or One-Time Password (OTP). If someone requests this information, it is a scam.</p>

          <h2>Avoid Suspicious Links</h2>
          <p>Phishing attempts often use fake emails or messages containing links to fake login pages. Always manually type the platform's verified domain into your browser or use official bookmarks.</p>
          
          <h2>Use Secure Devices and Networks</h2>
          <ul>
            <li>Avoid accessing your account from public computers or unsecured public Wi-Fi networks.</li>
            <li>Keep your device's operating system, browser, and antivirus software updated.</li>
          </ul>

          <h2>Contact Official Support</h2>
          <p>If you suspect your account has been compromised, immediately change your password and contact the platform's official support team to secure your account.</p>
        </div>
      </section>
    `
  },
  {
    path: '/responsible-gaming/',
    title: 'Responsible Gaming – DostWin Safety & Gaming Guide',
    description: 'Educational information encouraging informed, safe, and responsible participation in online gaming platforms.',
    content: `
      <section class="container content-section">
        <h1>Responsible Gaming</h1>
        <div class="glass-panel text-content">
          <p>Gaming should always be a form of entertainment. We strongly encourage all users to practice responsible gaming. Understanding the risks and setting boundaries is essential for a safe experience.</p>
          
          <h2>Core Principles of Responsible Gaming</h2>
          <ul>
            <li><strong>Set Personal Limits:</strong> Before you start, decide on a budget for time and funds, and stick to it strictly.</li>
            <li><strong>Understand the Risks:</strong> Outcomes in online gaming are inherently uncertain. Never treat gaming as a way to make guaranteed income or solve financial problems.</li>
            <li><strong>Avoid Chasing Losses:</strong> If you experience a loss, accept it as part of the entertainment cost. Trying to win it back often leads to larger losses.</li>
            <li><strong>Take Regular Breaks:</strong> Step away from the screen frequently to maintain a clear perspective.</li>
          </ul>

          <h2>Recognizing the Signs of a Problem</h2>
          <p>If gaming is causing stress, affecting your daily responsibilities, or leading to financial strain, it is time to reassess your habits. Acknowledge if you are finding it difficult to control your participation.</p>

          <h2>Seeking Help</h2>
          <p>If you or someone you know is struggling with maintaining control, seek appropriate professional help immediately. Many international and local organizations offer free, confidential support for gaming-related issues.</p>
        </div>
      </section>
    `
  },
  {
    path: '/faq/',
    title: 'DostWin FAQ – Gaming Platform Questions & Answers',
    description: 'Find answers to frequently asked questions about the DostWin platform, account access, security, and gaming guides.',
    content: `
      <section class="container content-section">
        <h1>Frequently Asked Questions</h1>
        <div class="glass-panel text-content">
          <p>Browse our FAQ to find quick, factual answers about navigating the gaming platform and utilizing our guides.</p>
          
          <div class="faq-accordion">
            <details>
              <summary>What is DostWin?</summary>
              <p>DostWin is an online gaming platform, and dostwins.shop serves as an informational resource offering guides, feature explanations, and account management details.</p>
            </details>
            <details>
              <summary>What is the DostWin gaming platform?</summary>
              <p>It is a digital environment providing various interactive gaming features. Our guides help you understand how to navigate and use it securely.</p>
            </details>
            <details>
              <summary>How does online gaming work?</summary>
              <p>Online gaming allows users to interact with platform features over the internet. It requires an account and adherence to the platform's specific rules and terms.</p>
            </details>
            <details>
              <summary>How can I access my gaming account?</summary>
              <p>Access your account by visiting the official platform domain and entering your registered credentials securely.</p>
            </details>
            <details>
              <summary>What should I do if I cannot log in?</summary>
              <p>Check your internet connection, ensure caps lock is off, and use the official password recovery tool. If problems persist, contact official platform support.</p>
            </details>
            <details>
              <summary>How can I keep my gaming account secure?</summary>
              <p>Use a strong password, enable two-factor authentication if available, and never share your login details or OTPs with anyone.</p>
            </details>
            <details>
              <summary>What should I know about payments and withdrawals?</summary>
              <p>Transaction times and available methods vary. Always check the official platform requirements and understand that there are no guaranteed instant withdrawals.</p>
            </details>
            <details>
              <summary>What is responsible gaming?</summary>
              <p>It means participating for entertainment only, setting strict budget and time limits, and never viewing gaming as a source of reliable income.</p>
            </details>
          </div>
        </div>
      </section>
    `
  },
  {
    path: '/contact/',
    title: 'Contact DostWin – Gaming Information Support',
    description: 'Contact DostWin for general inquiries about our online gaming guides and informational resources.',
    content: `
      <section class="container content-section">
        <h1>Contact Us</h1>
        <div class="grid grid-2">
          <div class="glass-panel text-content">
            <h2>Get in Touch</h2>
            <p>If you have general inquiries regarding our informational guides, feedback on our content, or questions about the resources provided on dostwins.shop, please use the contact form.</p>
            <p><strong>Note:</strong> We are an independent informational guide. We do not have access to your gaming account data, financial transactions, or the ability to resolve platform-specific technical issues. For those matters, please contact the official platform support.</p>
          </div>
          <div class="glass-panel">
            <form class="contact-form" action="#" method="POST" onsubmit="event.preventDefault(); alert('Message sent successfully. We will get back to you soon.');">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Your Email">
              </div>
              <div class="form-group">
                <label for="inquiry">General Inquiry</label>
                <select id="inquiry" name="inquiry">
                  <option value="guide_feedback">Guide Feedback</option>
                  <option value="general_question">General Question</option>
                  <option value="privacy_concern">Privacy/Data Concern</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    `
  },
  {
    path: '/privacy-policy/',
    title: 'Privacy Policy – DostWin Gaming Guide',
    description: 'Read the Privacy Policy for dostwins.shop to understand how we handle information on our informational website.',
    content: `
      <section class="container content-section">
        <h1>Privacy Policy</h1>
        <div class="glass-panel text-content">
          <p>Last updated: [Current Date]</p>
          <p>Welcome to dostwins.shop. This Privacy Policy outlines how we collect, use, and protect any information you may provide while using our informational website.</p>
          
          <h2>Information Collection</h2>
          <p>As an informational guide, we minimize data collection. We only collect personal information (such as name and email address) when you voluntarily submit it through our contact form. We may also collect non-personally identifiable analytics data to improve our content.</p>
          
          <h2>Use of Information</h2>
          <p>Any information collected via the contact form is used solely to respond to your inquiries. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</p>

          <h2>Cookies and Tracking</h2>
          <p>We may use cookies or similar tracking technologies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings.</p>

          <h2>Third-Party Links</h2>
          <p>Our website contains links to external platforms and resources. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read their privacy policies.</p>
        </div>
      </section>
    `
  },
  {
    path: '/terms/',
    title: 'Terms of Service – DostWin Gaming Guide',
    description: 'Read the Terms of Service for using the dostwins.shop informational gaming guide.',
    content: `
      <section class="container content-section">
        <h1>Terms of Service</h1>
        <div class="glass-panel text-content">
          <p>By accessing and using dostwins.shop, you agree to comply with and be bound by the following terms and conditions.</p>
          
          <h2>Informational Purpose Only</h2>
          <p>The content provided on this website is for general informational and educational purposes only. We do not offer real-money gaming services, financial advice, or guarantees of any kind regarding external platforms.</p>
          
          <h2>Accuracy of Information</h2>
          <p>While we strive to keep information accurate and up-to-date, platform features and policies change frequently. We make no representations or warranties regarding the completeness, accuracy, or reliability of the information.</p>

          <h2>User Responsibility</h2>
          <p>You are solely responsible for your actions on third-party gaming platforms. You must ensure you comply with the laws and regulations of your jurisdiction regarding online gaming.</p>
        </div>
      </section>
    `
  },
  {
    path: '/disclaimer/',
    title: 'Disclaimer – DostWin Gaming Guide',
    description: 'Important legal disclaimer regarding the informational nature of dostwins.shop and the risks of online gaming.',
    content: `
      <section class="container content-section">
        <h1>Disclaimer</h1>
        <div class="glass-panel text-content">
          <p>The information provided on dostwins.shop is strictly for educational and informational purposes.</p>
          
          <h2>Not Financial Advice</h2>
          <p>Nothing on this website should be interpreted as financial advice, investment advice, or a guarantee of gaming outcomes. We do not promise guaranteed winnings, fixed returns, or risk-free earnings.</p>
          
          <h2>Independent Resource</h2>
          <p>dostwins.shop is an independent informational guide. We are not the official operators of the DostWin transaction platform. Any issues regarding user accounts, funds, or technical errors on the actual platform must be directed to their official support channels.</p>

          <h2>Risk Acknowledgment</h2>
          <p>Online gaming involves inherent risks. Users should only participate with funds they can afford to lose and should seek help if they experience difficulties controlling their gaming habits.</p>
        </div>
      </section>
    `
  },
  {
    path: '/404.html',
    title: 'Page Not Found – DostWin',
    description: 'The page you are looking for may have moved or no longer exists.',
    content: `
      <section class="container content-section text-center" style="min-height: 50vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="font-size: 4rem; color: var(--accent);">404</h1>
        <h2>Page Not Found</h2>
        <p style="margin-bottom: 2rem;">The page you're looking for may have moved or no longer exists.</p>
        <div class="hero-buttons">
          <a href="/" class="btn btn-primary">Back to Home</a>
          <a href="/gaming-guide/" class="btn btn-secondary">Explore Gaming Guide</a>
        </div>
      </section>
    `,
    skipSitemap: true
  }
];

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
    
    <!-- Twitter/X -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${page.title}">
    <meta name="twitter:description" content="${page.description}">
    
    <link rel="stylesheet" href="/assets/css/style.css">
    ${page.schema || ''}
    
    <!-- Analytics Placeholder -->
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> -->
</head>
<body>
    <header class="global-header">
        <div class="container header-inner">
            <a href="/" class="logo">DostWin</a>
            <button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="main-nav">
                <a href="/">Home</a>
                <a href="/about/">About</a>
                <a href="/gaming-guide/">Gaming Guide</a>
                <a href="/gaming-features/">Features</a>
                <a href="/dostwin-account/">Account Guide</a>
                <a href="/gaming-safety/">Safety</a>
                <a href="/faq/">FAQ</a>
                <a href="/contact/">Contact</a>
            </nav>
        </div>
    </header>

    ${generateBreadcrumbs(page.path)}

    <main>
        ${page.content}
    </main>

    <footer class="global-footer">
        <div class="container footer-grid">
            <div class="footer-col">
                <h4>DostWin</h4>
                <p>An online gaming information and guide resource.</p>
            </div>
            <div class="footer-col">
                <h4>Explore</h4>
                <a href="/">Home</a>
                <a href="/about/">About</a>
                <a href="/gaming-guide/">Gaming Guide</a>
                <a href="/gaming-features/">Features</a>
                <a href="/faq/">FAQ</a>
            </div>
            <div class="footer-col">
                <h4>Guides</h4>
                <a href="/dostwin-account/">Account Guide</a>
                <a href="/dostwin-login/">Login Guide</a>
                <a href="/payment-guide/">Payment Guide</a>
                <a href="/withdrawal-guide/">Withdrawal Guide</a>
                <a href="/gaming-safety/">Safety</a>
                <a href="/responsible-gaming/">Responsible Gaming</a>
            </div>
            <div class="footer-col">
                <h4>Legal</h4>
                <a href="/privacy-policy/">Privacy Policy</a>
                <a href="/terms/">Terms of Service</a>
                <a href="/disclaimer/">Disclaimer</a>
                <a href="/contact/">Contact</a>
            </div>
        </div>
        <div class="container footer-bottom">
            <p>&copy; ${new Date().getFullYear()} DostWin. All rights reserved. Informational purposes only.</p>
        </div>
    </footer>

    <script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

// Generate CSS
const cssContent = `:root {
    --bg-color: #0a0a0c;
    --text-primary: #f0f0f0;
    --text-secondary: #a0a0a5;
    --accent: #00d2ff;
    --accent-hover: #00a8cc;
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.08);
    --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-sans);
    line-height: 1.6;
    overflow-x: hidden;
}

a { color: var(--accent); text-decoration: none; transition: color 0.2s; }
a:hover { color: var(--accent-hover); }

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

/* Typography */
h1, h2, h3, h4 { color: #fff; font-weight: 600; line-height: 1.2; margin-bottom: 1rem; }
h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; margin-top: 2rem; }
h3 { font-size: 1.5rem; }
p { color: var(--text-secondary); margin-bottom: 1rem; }

/* Buttons */
.btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    transition: all 0.2s ease;
    cursor: pointer;
}
.btn-primary {
    background: var(--accent);
    color: #000;
}
.btn-primary:hover {
    background: var(--accent-hover);
    color: #000;
    box-shadow: 0 0 15px rgba(0, 210, 255, 0.4);
}
.btn-secondary {
    background: var(--glass-bg);
    color: #fff;
    border: 1px solid var(--glass-border);
}
.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
}
.btn-outline {
    border: 1px solid var(--accent);
    color: var(--accent);
}
.btn-outline:hover {
    background: var(--accent);
    color: #000;
}
.w-full { width: 100%; }

/* Glassmorphism */
.glass-panel {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 2rem;
}

/* Header */
.global-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(10, 10, 12, 0.8);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid var(--glass-border);
}
.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}
.logo { font-size: 1.5rem; font-weight: 700; color: #fff; }
.main-nav { display: flex; gap: 1.5rem; }
.main-nav a { color: var(--text-primary); font-weight: 500; }
.main-nav a:hover { color: var(--accent); }
.mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; }
.mobile-menu-btn span { display: block; width: 25px; height: 2px; background: #fff; margin: 5px 0; transition: 0.3s; }

/* Breadcrumbs */
.breadcrumbs { padding: 1rem 1.5rem; margin-top: 1rem; }
.breadcrumbs ol { list-style: none; display: flex; flex-wrap: wrap; gap: 0.5rem; }
.breadcrumbs li { color: var(--text-secondary); font-size: 0.9rem; }
.breadcrumbs li:not(:last-child)::after { content: ">"; margin-left: 0.5rem; color: var(--text-secondary); }

/* Layouts */
.content-section { padding: 4rem 1.5rem; }
.grid { display: grid; gap: 1.5rem; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Hero */
.hero { text-align: center; padding: 6rem 1.5rem; margin: 2rem 1.5rem; }
.hero-content { max-width: 800px; }
.hero h1 { background: linear-gradient(to right, #fff, var(--text-secondary)); -webkit-background-clip: text; color: transparent; }
.hero-buttons { display: flex; justify-content: center; gap: 1rem; margin-top: 2rem; }

/* Trust Bar */
.trust-bar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top: -3rem; position: relative; z-index: 10; }
.trust-card { text-align: center; padding: 1.5rem 1rem; transition: transform 0.2s; }
.trust-card:hover { transform: translateY(-5px); border-color: var(--accent); }
.trust-card h3 { font-size: 1.1rem; margin: 0; }

/* Split Content */
.split-content { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }

/* Text Content */
.text-content ul, .text-content ol { margin-left: 1.5rem; margin-bottom: 1rem; color: var(--text-secondary); }
.text-content li { margin-bottom: 0.5rem; }
.text-content a { text-decoration: underline; }

/* FAQ */
.faq-accordion details { border-bottom: 1px solid var(--glass-border); padding: 1rem 0; }
.faq-accordion summary { font-size: 1.1rem; font-weight: 600; cursor: pointer; color: #fff; list-style: none; position: relative; padding-right: 2rem; }
.faq-accordion summary::-webkit-details-marker { display: none; }
.faq-accordion summary::after { content: '+'; position: absolute; right: 0; top: 0; color: var(--accent); font-size: 1.5rem; }
.faq-accordion details[open] summary::after { content: '-'; }
.faq-accordion p { margin-top: 1rem; margin-bottom: 0; }

/* Forms */
.contact-form .form-group { margin-bottom: 1.5rem; }
.contact-form label { display: block; margin-bottom: 0.5rem; color: #fff; }
.contact-form input, .contact-form select, .contact-form textarea { width: 100%; padding: 0.8rem; border-radius: 6px; background: rgba(0,0,0,0.2); border: 1px solid var(--glass-border); color: #fff; font-family: inherit; }
.contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus { outline: none; border-color: var(--accent); }

/* Footer */
.global-footer { border-top: 1px solid var(--glass-border); padding: 4rem 0 2rem; margin-top: 4rem; background: rgba(0,0,0,0.3); }
.footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
.footer-col h4 { color: #fff; margin-bottom: 1.2rem; }
.footer-col a { display: block; margin-bottom: 0.8rem; color: var(--text-secondary); }
.footer-col a:hover { color: var(--accent); }
.footer-bottom { margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--glass-border); text-align: center; font-size: 0.9rem; }

/* Responsive */
@media (max-width: 992px) {
    .grid-3, .grid-4 { grid-template-columns: repeat(2, 1fr); }
    .trust-bar { grid-template-columns: repeat(2, 1fr); margin-top: 2rem; }
}
@media (max-width: 768px) {
    .main-nav {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: var(--bg-color);
        flex-direction: column;
        padding: 1rem;
        border-bottom: 1px solid var(--glass-border);
    }
    .main-nav.active { display: flex; }
    .mobile-menu-btn { display: block; }
    .grid-2, .grid-3, .grid-4, .trust-bar, .split-content, .footer-grid { grid-template-columns: 1fr; }
    .hero-buttons { flex-direction: column; }
    .hero { margin: 1rem; padding: 4rem 1rem; }
    h1 { font-size: 2rem; }
}
`;

// Generate JS
const jsContent = `
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileBtn && mainNav) {
        mobileBtn.addEventListener('click', () => {
            const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            mobileBtn.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            
            // Toggle hamburger animation
            const spans = mobileBtn.querySelectorAll('span');
            if (!isExpanded) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
});
`;

// Output Directory Setup
const outDir = path.join(__dirname, 'public');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}
const assetsDir = path.join(outDir, 'assets');
fs.mkdirSync(path.join(assetsDir, 'css'), { recursive: true });
fs.mkdirSync(path.join(assetsDir, 'js'), { recursive: true });

fs.writeFileSync(path.join(assetsDir, 'css', 'style.css'), cssContent);
fs.writeFileSync(path.join(assetsDir, 'js', 'main.js'), jsContent);

// Generate pages
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

// Generate Sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join('\\n')}
</urlset>`;
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);

// Generate Robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;
fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsTxt);

console.log('Site generation complete in public/ directory.');
