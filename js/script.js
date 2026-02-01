// ==================== MAIN SCRIPT ====================
// Script ini otomatis load semua data dari config.js ke HTML

document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== LOAD CONFIG & POPULATE HTML ====================
    loadConfigToHTML();
    initializeInteractions();
    
    // ==================== LOAD ALL DATA FROM CONFIG ====================
    function loadConfigToHTML() {
        loadProfile();
        loadSocialMedia();
        loadConnectSection();
        loadContactSection();
        loadTechStackSection();
        loadProjectsSection();
        loadSpotifySection();
        loadFooter();
        loadSectionTitles();
        hideInactiveSections();
    }

    // ==================== LOAD PROFILE ====================
    function loadProfile() {
        const avatar = document.getElementById('profile-avatar');
        const name = document.getElementById('profile-name');
        const bio = document.getElementById('profile-bio');
        const verified = document.getElementById('verified-badge');
        const pageTitle = document.getElementById('page-title');
        
        if (CONFIG.profile) {
            if (avatar) {
                avatar.src = CONFIG.profile.avatar;
                avatar.alt = CONFIG.profile.name;
            }
            if (name) name.textContent = CONFIG.profile.name;
            if (bio) bio.textContent = CONFIG.profile.bio;
            if (pageTitle) pageTitle.textContent = `${CONFIG.profile.name} - About Me`;
            
            // Show/hide verified badge
            if (verified) {
                verified.style.display = CONFIG.profile.verified ? 'inline-block' : 'none';
            }
        }
    }

    // ==================== LOAD SOCIAL MEDIA ====================
    function loadSocialMedia() {
        const container = document.getElementById('social-icons');
        if (!container || !CONFIG.socialMedia) return;
        
        container.innerHTML = '';
        
        const socialPlatforms = {
            instagram: { icon: 'fab fa-instagram', class: 'instagram', title: 'Instagram' },
            github: { icon: 'fab fa-github', class: 'github', title: 'GitHub' },
            email: { icon: 'fas fa-envelope', class: 'email', title: 'Email' },
            telegram: { icon: 'fab fa-telegram', class: 'telegram', title: 'Telegram' }
        };
        
        Object.keys(CONFIG.socialMedia).forEach(platform => {
            const social = CONFIG.socialMedia[platform];
            if (social.active && socialPlatforms[platform]) {
                const a = document.createElement('a');
                a.href = social.url;
                a.className = `social-icon ${socialPlatforms[platform].class}`;
                a.title = socialPlatforms[platform].title;
                a.innerHTML = `<i class="${socialPlatforms[platform].icon}"></i>`;
                container.appendChild(a);
            }
        });
    }

    // ==================== CREATE LINK CARD ====================
    function createLinkCard(link) {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = `link-card ${link.type}`;
        
        a.innerHTML = `
            <i class="${link.icon} link-icon"></i>
            <div class="link-content">
                <div class="link-title">${link.title}</div>
                <div class="link-subtitle">${link.subtitle}</div>
            </div>
            <i class="fas fa-arrow-right link-arrow"></i>
        `;
        
        return a;
    }

    // ==================== LOAD CONNECT SECTION ====================
    function loadConnectSection() {
        const container = document.getElementById('connect-links');
        if (!container || !CONFIG.connectLinks) return;
        
        container.innerHTML = '';
        
        CONFIG.connectLinks.forEach(link => {
            if (link.active) {
                container.appendChild(createLinkCard(link));
            }
        });
    }

    // ==================== LOAD CONTACT SECTION ====================
    function loadContactSection() {
        const container = document.getElementById('contact-links');
        if (!container || !CONFIG.contactLinks) return;
        
        container.innerHTML = '';
        
        CONFIG.contactLinks.forEach(link => {
            if (link.active) {
                container.appendChild(createLinkCard(link));
            }
        });
    }

    // ==================== LOAD TECH STACK SECTION ====================
    function loadTechStackSection() {
        const container = document.getElementById('techstack-links');
        if (!container || !CONFIG.techStack) return;
        
        container.innerHTML = '';
        
        CONFIG.techStack.forEach(link => {
            if (link.active) {
                container.appendChild(createLinkCard(link));
            }
        });
    }

    // ==================== LOAD PROJECTS SECTION ====================
    function loadProjectsSection() {
        const container = document.getElementById('projects-grid');
        if (!container || !CONFIG.projects) return;

        container.innerHTML = '';

        CONFIG.projects.forEach(project => {
            if (!project.active) return;

            const card = document.createElement('a');
            card.href = project.url;
            card.className = `project-card project-${project.color}`;

            const tagsHtml = project.tags
                .map(tag => `<span class="project-tag">${tag}</span>`)
                .join('');

            card.innerHTML = `
                <div class="project-icon-wrap">
                    <i class="${project.icon} project-icon"></i>
                </div>
                <div class="project-content">
                    <div class="project-title">${project.title}</div>
                    <div class="project-desc">${project.description}</div>
                    <div class="project-tags">${tagsHtml}</div>
                </div>
                <i class="fas fa-arrow-right project-arrow"></i>
            `;

            container.appendChild(card);
        });
    }

    // ==================== LOAD SPOTIFY SECTION ====================
    function loadSpotifySection() {
        const iframe = document.getElementById('spotify-embed');
        
        if (iframe && CONFIG.spotify && CONFIG.spotify.active) {
            iframe.src = `https://open.spotify.com/embed/playlist/${CONFIG.spotify.playlistId}`;
        }
    }

    // ==================== LOAD FOOTER ====================
    function loadFooter() {
        const footerLink = document.getElementById('footer-link');
        
        if (footerLink && CONFIG.footer) {
            footerLink.href = CONFIG.footer.url;
            footerLink.textContent = CONFIG.footer.text;
        }
    }

    // ==================== LOAD SECTION TITLES ====================
    function loadSectionTitles() {
        if (!CONFIG.sections) return;
        
        const connectTitle = document.getElementById('connect-title');
        const contactTitle = document.getElementById('contact-title');
        const techstackTitle = document.getElementById('techstack-title');
        const projectsTitle = document.getElementById('projects-title');
        const spotifyTitle = document.getElementById('spotify-title');
        
        if (connectTitle) connectTitle.textContent = CONFIG.sections.connect;
        if (contactTitle) contactTitle.textContent = CONFIG.sections.contact;
        if (techstackTitle) techstackTitle.textContent = CONFIG.sections.techStack;
        if (projectsTitle) projectsTitle.textContent = CONFIG.sections.projects;
        if (spotifyTitle) spotifyTitle.textContent = CONFIG.sections.spotify;
    }

    // ==================== HIDE INACTIVE SECTIONS ====================
    function hideInactiveSections() {
        // Hide Connect section if no active links
        const connectSection = document.getElementById('connect-section');
        const hasActiveConnects = CONFIG.connectLinks && CONFIG.connectLinks.some(link => link.active);
        if (connectSection && !hasActiveConnects) {
            connectSection.style.display = 'none';
        }
        
        // Hide Contact section if no active links
        const contactSection = document.getElementById('contact-section');
        const hasActiveContacts = CONFIG.contactLinks && CONFIG.contactLinks.some(link => link.active);
        if (contactSection && !hasActiveContacts) {
            contactSection.style.display = 'none';
        }
        
        // Hide Tech Stack section if no active links
        const techstackSection = document.getElementById('techstack-section');
        const hasActiveTech = CONFIG.techStack && CONFIG.techStack.some(link => link.active);
        if (techstackSection && !hasActiveTech) {
            techstackSection.style.display = 'none';
        }
        
        // Hide Projects section if no active projects
        const projectsSection = document.getElementById('projects-section');
        const hasActiveProjects = CONFIG.projects && CONFIG.projects.some(p => p.active);
        if (projectsSection && !hasActiveProjects) {
            projectsSection.style.display = 'none';
        }
        
        // Hide Spotify section if not active
        const spotifySection = document.getElementById('spotify-section');
        if (spotifySection && CONFIG.spotify && !CONFIG.spotify.active) {
            spotifySection.style.display = 'none';
        }
    }

    // ==================== INITIALIZE INTERACTIONS ====================
    function initializeInteractions() {
        addSmoothScroll();
        addRippleEffect();
        addIntersectionObserver();
        addSocialIconEffects();
        addAvatarEasterEgg();
        addEmailCopyFeature();
        addPerformanceMonitoring();
        logWelcomeMessage();
    }

    // ==================== SMOOTH SCROLL ====================
    function addSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ==================== RIPPLE EFFECT ====================
    function addRippleEffect() {
        document.querySelectorAll('.link-card, .project-card').forEach(card => {
            card.addEventListener('click', function(e) {
                const titleEl = this.querySelector('.link-title') || this.querySelector('.project-title');
                if (titleEl) console.log(`Card clicked: ${titleEl.textContent}`);
                createRipple(e, this);
            });
        });
    }

    function createRipple(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        element.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    // ==================== INTERSECTION OBSERVER ====================
    function addIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.link-card, .project-card').forEach(card => {
            observer.observe(card);
        });
    }

    // ==================== SOCIAL ICON HOVER EFFECT ====================
    function addSocialIconEffects() {
        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) rotate(10deg)';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotate(0)';
            });
        });
    }

    // ==================== AVATAR EASTER EGG ====================
    function addAvatarEasterEgg() {
        let clickCount = 0;
        const avatar = document.querySelector('.avatar');
        
        if (avatar) {
            avatar.addEventListener('click', function() {
                clickCount++;
                
                if (clickCount === 5) {
                    this.style.transform = 'scale(1.1) rotate(360deg)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1) rotate(0deg)';
                    }, 500);
                    
                    showNotification('🎉 You found the easter egg!');
                    clickCount = 0;
                }
            });
        }
    }

    // ==================== NOTIFICATION SYSTEM ====================
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--accent-color);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // ==================== COPY EMAIL ON CLICK ====================
    function addEmailCopyFeature() {
        const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
        
        emailLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const email = this.href.replace('mailto:', '');
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(email).then(() => {
                        showNotification('📧 Email copied to clipboard!');
                    });
                }
            });
        });
    }

    // ==================== PERFORMANCE MONITORING ====================
    function addPerformanceMonitoring() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`Page load time: ${pageLoadTime}ms`);
            });
        }
    }

    // ==================== CONSOLE MESSAGE ====================
    function logWelcomeMessage() {
        console.log('%c🚀 Website Loaded Successfully!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
        console.log('%c👋 All content loaded from config.js', 'color: #1d9bf0; font-size: 14px;');
        console.log('%c💡 Edit js/config.js to change content', 'color: #F7DF1E; font-size: 12px;');
    }
});

// ==================== ADDITIONAL ANIMATIONS CSS ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    .visible {
        opacity: 1;
        transform: translateY(0);
    }

    .link-card {
        position: relative;
        overflow: hidden;
    }

    .project-card {
        position: relative;
        overflow: hidden;
    }
`;

document.head.appendChild(style);
