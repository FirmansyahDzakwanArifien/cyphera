(function() {
    'use strict';

    // Portfolio Data Configuration
    const portfolioData = {
        profile: {
            name: "Firmansyah Dzakwan Arifien",
            // initial: "FDA",
            title: "Enthusiastic, Sincere and Confident",
            photo: "assets/logo.png"
        },
        about: [
            "I am an Informatics Engineering student at STT Terpadu Nurul Fikri with a strong interest in cybersecurity, software development, and system security. My academic and personal journey is focused on understanding how technology can be built, maintained, and protected in an increasingly connected world.",
            "I actively explore topics related to cybersecurity, programming, and secure system design, while also contributing to campus initiatives that support collaboration and growth in these areas. Currently, I serve as the leader of the Nurul Fikri Student Cybersecurity Community (NFSCC) for the 2025 period, where I help coordinate activities that promote cybersecurity awareness and skill development among fellow students.",
            "With a thoughtful and growth-oriented mindset, I am always open to meaningful connections, professional collaboration, and continuous learning in the evolving world of technology."
        ],
        skills: [
            {
                title: "Cyber Security",
                description: "VAPT, Security Analyst, Incident Response, Network Security, CTF Player",
                tags: ["VAPT, Security Analyst, Cybersecurity Enthusiast"]
            },
            {
                title: "Sysadmin",
                description: "Linux Administration, Server Management, Monitoring & Optimization",
                tags: ["Linux Administration", "Server Management"]
            },
            {
                title: "DevOps",
                description: "Docker, Git, CI/CD, Cloud Services",
                tags: ["Docker", "Git", "AWS"]
            }
        ],
        projects: [
            {
                number: "01",
                title: "Web Vulnerability Assessment",
                description: "This report is the result of a web application vulnerability testing process using DVWA (Damn Vulnerable Web Application) and implementing a Web Application Firewall (WAF) such as ModSecurity to improve security.",
                technologies: ["DVWA", "OWASP Zap", "Nikto", "ModSecurity(WAF)", "Apache web server"]
            },
            {
                number: "02",
                title: "AWS EC2 Cloud Implementation on Employee Leave Information System",
                description: "Deployed a Laravel app to a public cloud server using AWS EC2 with full server control. Setup included GitHub cloning, installing dependencies, configuring SQLite, and resolving permission and security issues via SSH.",
                technologies: ["Laravel", "Tailwind CSS", "Vite AWS EC2", "SQlite"]
            },
            {
                number: "03",
                title: "Smart Trash Bin (IoT-Based)",
                description: "Dashboard interaktif untuk visualisasi data bisnis dengan chart dinamis, filter advanced, dan export report ke berbagai format.",
                technologies: ["Python", "Firebase", "Raspy", "ESP32" ]
            }
        ],
        experiences: [
            {
            role: "SOC Team",
            company: "PT. X-Code Server Indonesia",
            year: "2025 - Now",
            description: "Monitoring security events, analyzing alerts, investigating potential threats, and supporting incident response within the Security Operations Center environment."
            },
            {
            role: "Infra Team",
            company: "BlankOn linux(Reveal Project)",
            year: "2025 - Now",
            description: "Managing and optimizing infrastructure for the BlankOn Linux project while contributing to the development of the OS. Responsibilities include server setup, deployment automation, system monitoring, and collaborating with the community to enhance system stability, performance, and reliability."
            },
            {
            role: "Cybersecurity Community Leader",
            company: "Nurul Fikri Student Cybersecurity Community (NFSCC)",
            year: "2025 - 2026",
            description: "Leading cybersecurity initiatives, managing workshops, mentoring new members, and building awareness about cyber threats."
            },
            {
            role: "Sysadmin Trainee",
            company: "Jarvis Academy",
            year: "2025(September) - 2025(November)",
            description: "Completed a structured Sysadmin training program focused on Linux and Windows server administration, network configuration, system monitoring, and basic cybersecurity practices. Gained hands-on experience in deploying services, managing servers, and ensuring system stability and security."
            },
            {
            role: "DevOps Engineer Trainee",
            company: "Nurul Fikri Academy",
            year: "2025(September) - 2025(December)",
            description: "Completed a hands-on DevOps training program covering CI/CD pipelines, Docker containerization, cloud deployment, and system automation. Gained experience in building, monitoring, and optimizing deployment workflows to enhance collaboration between development and operations teams."
            },
            {
            role: "SMTP Trainee",
            company: "KISIA & NSCH(SMT Program)",
            year: "2025(August) - 2025(October)",
            description: "Completed the Security Manpower Training (SMT) Program, a comprehensive cybersecurity course combining hands-on practical sessions and expert lectures. Gained experience in threat analysis, network security, incident monitoring, and cybersecurity fundamentals, designed to strengthen professional skills for IT students in Indonesia."
            },

        ],

        contact: {
            text: "Interested in collaborating or have an interesting project? Let's discuss and bring your idea to life.",
            links: [
                {
                    label: "Email",
                    url: "mailto:fdzak01@gmail.com",
                    target: "_self"
                },
                {
                    label: "GitHub",
                    url: "https://github.com/firmansyahdzakwanarifien",
                    target: "_blank"
                },
                {
                    label: "LinkedIn",
                    url: "https://linkedin.com/in/firmansyah-dzakwan-arifien-90b1b8293",
                    target: "_blank"
                }
            ]
        },
        footer: {
            text: "&copy; 2025 With Copilot & Gen AI"
        }
    };

    // Utility Functions
    const utils = {
        // Sanitize text to prevent XSS
        sanitizeText: function(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        },

        // Create element with attributes
        createElement: function(tag, attributes, content) {
            const element = document.createElement(tag);
            
            if (attributes) {
                Object.keys(attributes).forEach(function(key) {
                    if (key === 'className') {
                        element.className = attributes[key];
                    } else if (key === 'innerHTML') {
                        element.innerHTML = attributes[key];
                    } else {
                        element.setAttribute(key, attributes[key]);
                    }
                });
            }
            
            if (content) {
                if (typeof content === 'string') {
                    element.textContent = content;
                } else {
                    element.appendChild(content);
                }
            }
            
            return element;
        },

        // Debounce function
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction() {
                const context = this;
                const args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    func.apply(context, args);
                }, wait);
            };
        }
    };

    // Initialize Profile
    // function initProfile() {
    //     const profileInitial = document.getElementById('profileInitial');
    //     const profileName = document.getElementById('profileName');
    //     const profileTitle = document.getElementById('profileTitle');

    //     if (profileInitial) {
    //         profileInitial.textContent = portfolioData.profile.initial;
    //     }
    //     if (profileName) {
    //         profileName.textContent = portfolioData.profile.name;
    //     }
    //     if (profileTitle) {
    //         profileTitle.textContent = portfolioData.profile.title;
    //     }
    // }

    function initProfile() {
    const profilePhoto = document.getElementById('profilePhoto');
    const profileName = document.getElementById('profileName');
    const profileTitle = document.getElementById('profileTitle');

        if (profilePhoto) {
            // Bisa ambil dari portfolioData jika ingin fleksibel
            profilePhoto.src = portfolioData.profile.photo || 'assets/logo.png';
        }
        if (profileName) {
            profileName.textContent = portfolioData.profile.name;
        }
        if (profileTitle) {
            profileTitle.textContent = portfolioData.profile.title;
        }
    }


    // Load About Content
    function loadAboutContent() {
        const aboutContent = document.getElementById('aboutContent');
        if (!aboutContent) return;

        aboutContent.innerHTML = '';
        
        portfolioData.about.forEach(function(paragraph) {
            const p = utils.createElement('p', null, paragraph);
            aboutContent.appendChild(p);
        });
    }

    // Load Skills
    function loadSkills() {
        const skillsGrid = document.getElementById('skillsGrid');
        if (!skillsGrid) return;

        skillsGrid.innerHTML = '';

        portfolioData.skills.forEach(function(skill) {
            const skillItem = utils.createElement('div', { className: 'skill-item fade-in' });
            
            const icon = utils.createElement('div', { className: 'skill-icon' }, skill.icon);
            const title = utils.createElement('h3', null, skill.title);
            const description = utils.createElement('p', null, skill.description);
            
            skillItem.appendChild(icon);
            skillItem.appendChild(title);
            skillItem.appendChild(description);
            
            skillsGrid.appendChild(skillItem);
        });
    }

    // Load Projects
    function loadProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = '';

        portfolioData.projects.forEach(function(project) {
            const projectCard = utils.createElement('div', { className: 'project-card fade-in' });
            
            const number = utils.createElement('div', { className: 'project-number' }, project.number);
            const title = utils.createElement('h3', null, project.title);
            const description = utils.createElement('p', null, project.description);
            
            projectCard.appendChild(number);
            projectCard.appendChild(title);
            projectCard.appendChild(description);

            if (project.technologies && project.technologies.length > 0) {
                const techContainer = utils.createElement('div', { className: 'project-tech' });
                
                project.technologies.forEach(function(tech) {
                    const techTag = utils.createElement('span', { className: 'tech-tag' }, tech);
                    techContainer.appendChild(techTag);
                });
                
                projectCard.appendChild(techContainer);
            }

            projectsGrid.appendChild(projectCard);
        });
    }
    // Load Experiences
    function loadExperiences() {
            const experiencesGrid = document.getElementById('experiencesGrid');
            if (!experiencesGrid) return;

            experiencesGrid.innerHTML = '';

            portfolioData.experiences.forEach(function(exp) {
                const expCard = utils.createElement('div', { className: 'experience-card fade-in' });

                const role = utils.createElement('h3', { className: 'experience-role' }, exp.role);
                const company = utils.createElement('p', { className: 'experience-company' }, exp.company);
                const year = utils.createElement('p', { className: 'experience-year' }, exp.year);
                const description = utils.createElement('p', { className: 'experience-description' }, exp.description);

                expCard.appendChild(role);
                expCard.appendChild(company);
                expCard.appendChild(year);
                expCard.appendChild(description);

                experiencesGrid.appendChild(expCard);
            });
    }


    // Load Contact
    function loadContact() {
        const contactText = document.getElementById('contactText');
        const contactLinks = document.getElementById('contactLinks');

        if (contactText) {
            contactText.textContent = portfolioData.contact.text;
        }

        if (contactLinks) {
            contactLinks.innerHTML = '';

            portfolioData.contact.links.forEach(function(link) {
                const attributes = {
                    href: link.url,
                    className: 'contact-btn'
                };

                if (link.target === '_blank') {
                    attributes.target = '_blank';
                    attributes.rel = 'noopener noreferrer';
                }

                const linkElement = utils.createElement('a', attributes, link.label);
                contactLinks.appendChild(linkElement);
            });
        }
    }

    // Load Footer
    function loadFooter() {
        const footerText = document.getElementById('footerText');
        if (footerText) {
            footerText.innerHTML = portfolioData.footer.text;
        }
    }

    // Smooth Scroll Navigation
    function initSmoothScroll() {
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Update active nav
                    navLinks.forEach(function(navLink) {
                        navLink.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });
    }

    // Intersection Observer for Fade-in Animation
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(function(el) {
            observer.observe(el);
        });
    }

    // Active Navigation on Scroll
    function initActiveNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');

        const updateActiveNav = utils.debounce(function() {
            const scrollY = window.pageYOffset;
            const navHeight = document.querySelector('nav').offsetHeight;

            sections.forEach(function(section) {
                const sectionTop = section.offsetTop - navHeight - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, 100);

        window.addEventListener('scroll', updateActiveNav);
    }

    // Security: Ensure all external links have proper rel attributes
    function secureExternalLinks() {
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        externalLinks.forEach(function(link) {
            if (!link.hasAttribute('rel')) {
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    // Initialize Everything
    function init() {
        // Load all content
        initProfile();
        loadAboutContent();
        loadSkills();
        loadProjects();
        loadExperiences();
        loadContact();
        loadFooter();

        // Initialize interactions
        initSmoothScroll();
        initScrollAnimations();
        initActiveNavOnScroll();
        secureExternalLinks();

        console.log('Portfolio initialized successfully!');
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose update function for dynamic content updates
    window.updatePortfolioData = function(newData) {
        if (newData) {
            Object.assign(portfolioData, newData);
            init();
        }
    };

})();