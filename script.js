document.addEventListener('DOMContentLoaded', function () {
    // --- DATA OBJECTS ---
    const experienceData = [
        {
            id: 'matt3r',
            role: 'Machine Learning Engineer',
            company: 'MATT3R',
            period: 'Mar 2025 - Present',
            location: 'Vancouver, BC, Canada',
            details: [
                'Work on IMU signal processing for the K3Y device, focused on vehicle maneuver detection in Tesla and other electric vehicles.',
                'Design, implement, and test machine learning models for real-time inference on edge devices.',
                'Deploy models to production and monitor their performance in live environments.',
                'Conduct R&D on advanced feature engineering, model optimization, and signal processing techniques.',
                'Collaborate with cross-functional teams including CV, Audio, embedded engineers, and product managers.'
            ]
        },
        {
            id: 'aria',
            role: 'Data Analyst and Planning Consultant',
            company: 'AriaShahd Saedinia',
            period: 'Mar 2025 - Present',
            location: 'Tehran, Iran',
            details: [
                'Design comprehensive Power BI dashboards for business analysis, providing insights into sales trends and supply chain performance.',
                'Build and manage databases and dataflows using Python and PostgreSQL.',
                'Develop sales forecasting models to support supply chain and production planning.',
                'Collaborate with cross-functional teams to enhance supply chain planning and operational efficiency.',
                'Hold weekly S&OP meetings with managers to align planning and execution.'
            ]
        },
        {
            id: 'bitex',
            role: 'Junior AI Developer',
            company: 'BITEX',
            period: 'Oct 2022 - Aug 2023',
            location: 'Tehran, Iran',
            details: [
                'Collaborated with a cross-functional AI team to build an automated cryptocurrency trading bot using machine learning and reinforcement learning.',
                'Researched, selected, and optimized forecasting algorithms for high-frequency trading.',
                'Designed and maintained a PostgreSQL system for real-time and historical market data.',
                'Developed hybrid trading strategies combining rule-based logic, ML, and RL.',
                'Performed backtesting, forward testing, and A/B experiments to validate strategy performance.'
            ]
        }
    ];

    const educationData = [
        {
            id: 'msc',
            degree: 'MSc in Industrial Engineering, Operations Research',
            university: 'Tarbiat Modares University',
            period: 'Sep 2022 - Jun 2025',
            location: 'Tehran, Iran',
            details: [
                '<strong>Thesis:</strong> A Deep Learning Approach for Echocardiography Video Super-Resolution.',
                '<strong>Relevant Courses:</strong> Deep Learning, Data Mining, Integer Programming, Multivariate Statistical Analysis, Design of Experiments.',
                '<strong>Teaching Assistant:</strong> Deep Learning (Fall 2024), Data Mining (Fall 2024 & Winter 2025).'
            ]
        },
        {
            id: 'bsc',
            degree: 'BSc in Applied Mathematics',
            university: 'University of Tehran',
            period: 'Sep 2017 - Feb 2022',
            location: 'Tehran, Iran',
            details: [
                '<strong>Capstone Project:</strong> A Hybrid Deep Learning Approach for Stock Price Prediction.',
                '<strong>Relevant Courses:</strong> Basic and Advanced Python, Data Mining Algorithms, Graph Theory, Linear Algebra, Probability and Statistics.',
                '<strong>Teaching Assistant:</strong> Calculus 1 & 2, Differential Equations, Game Theory 1.'
            ]
        }
    ];

    const skillsData = {
        'Machine Learning & AI': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'Reinforcement Learning', 'Computer Vision'],
        'Programming & Data': ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Analysis'],
        'Database & BI Tools': ['PostgreSQL', 'Redis', 'Power BI', 'Excel', 'SQL', 'Data Warehousing'],
        'DevOps & MLOps': ['Docker', 'Jenkins', 'Airflow', 'Grafana', 'CI/CD'],
        'Cloud & Version Control': ['AWS', 'Git', 'GitHub', 'Linux', 'Bash Scripting']
    };
    
    // --- INITIALIZATION ---
    populateTimeline('experience-timeline', experienceData, handleTimelineClick);
    populateTimeline('education-timeline', educationData, handleTimelineClick);
    handleTimelineClick(experienceData[0].id, 'experience-timeline');
    handleTimelineClick(educationData[0].id, 'education-timeline');
    populateSkills();
    initMobileMenu();
    initScrollObserver();
    initTypingEffect();
    initCardTilt();
    initCustomCursor();
    initActiveNavOnScroll();


    // --- CORE FUNCTIONS ---

    /**
     * Populates a timeline component with data.
     * @param {string} containerId - The ID of the timeline container element.
     * @param {Array<Object>} data - The array of data objects.
     * @param {Function} clickHandler - The function to call on item click.
     */
    function populateTimeline(containerId, data, clickHandler) {
        const timelineContainer = document.getElementById(containerId);
        data.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = `timeline-item relative pl-8 pb-8 cursor-pointer`;
            div.dataset.id = item.id;
            if (index === 0) {
                div.classList.add('active');
            }
            div.innerHTML = `
                <h4 class="font-bold text-[#FF69B4]">${item.role || item.degree}</h4>
                <p class="text-sm text-[#00FFFF]">${item.company || item.university}</p>
                <p class="text-xs text-gray-500">${item.period}</p>
            `;
            div.addEventListener('click', () => clickHandler(item.id, containerId));
            timelineContainer.appendChild(div);
        });
    }

    /**
     * Updates the details view for a timeline.
     * @param {string} detailsContainerId - The ID of the details container.
     * @param {Array<Object>} data - The source data array.
     * @param {string} id - The ID of the selected item.
     */
    function updateDetails(detailsContainerId, data, id) {
        const item = data.find(d => d.id === id);
        const detailsContainer = document.getElementById(detailsContainerId);
        if (item) {
            const detailsHtml = `
                <h3 class="text-xl font-bold text-[#FF69B4]">${item.role || item.degree}</h3>
                <p class="text-md font-medium text-[#00FFFF]">${item.company || item.university} | ${item.location}</p>
                <p class="text-sm text-gray-500 mb-4">${item.period}</p>
                <ul class="list-disc pl-5 space-y-2 text-gray-300">
                    ${item.details.map(d => `<li>${d}</li>`).join('')}
                </ul>
            `;
            detailsContainer.innerHTML = detailsHtml;
        }
    }

    /**
     * Handles clicks on timeline items.
     * @param {string} id - The ID of the clicked item.
     * @param {string} timelineContainerId - The ID of the parent timeline.
     */
    function handleTimelineClick(id, timelineContainerId) {
        const timelineContainer = document.getElementById(timelineContainerId);
        timelineContainer.querySelectorAll('.timeline-item').forEach(el => {
            el.classList.toggle('active', el.dataset.id === id);
        });
        if (timelineContainerId === 'experience-timeline') {
            updateDetails('experience-details', experienceData, id);
        } else {
            updateDetails('education-details', educationData, id);
        }
    }
    
    /**
     * Populates the skills section with categories and skill chips.
     */
    function populateSkills() {
        const skillsContainer = document.getElementById('skills-container');
        for (const category in skillsData) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'interactive-card p-6 rounded-lg border border-[#FF00FF] bg-[#0F0F0F] shadow-lg shadow-[#FF00FF]/20 flex flex-col items-center';
            
            const categoryHeader = document.createElement('h3');
            categoryHeader.className = 'text-lg font-bold text-[#00FFFF] mb-4';
            categoryHeader.textContent = category;
            categoryDiv.appendChild(categoryHeader);
            
            const skillsGrid = document.createElement('div');
            skillsGrid.className = 'flex flex-wrap justify-center gap-2';
            
            skillsData[category].forEach(skill => {
                const skillChip = document.createElement('div');
                skillChip.className = 'skill-chip py-1 px-3 rounded-md bg-[#0A0A0A] text-center font-medium text-xs text-gray-300';
                skillChip.textContent = skill;
                skillsGrid.appendChild(skillChip);
            });
            
            categoryDiv.appendChild(skillsGrid);
            skillsContainer.appendChild(categoryDiv);
        }
    }
    
    /**
     * Initializes the mobile menu toggle functionality.
     */
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    /**
     * Sets up the Intersection Observer to reveal sections on scroll.
     */
    function initScrollObserver() {
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => observer.observe(el));
    }

    /**
     * Initializes the typing effect for the subtitle.
     */
    function initTypingEffect() {
        const textElement = document.getElementById('typing-text');
        const text = "DATA SCIENTIST & AI DEVELOPER";
        let index = 0;
        function type() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
    }

    /**
     * Adds a 3D tilt effect to interactive cards on mouse move.
     */
    function initCardTilt() {
        const cards = document.querySelectorAll('.interactive-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const { width, height } = rect;
                const rotateX = (y / height - 0.5) * -20; // -10 to 10 deg
                const rotateY = (x / width - 0.5) * 20;  // -10 to 10 deg
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    /**
     * Initializes the custom cursor that follows the mouse.
     */
    function initCustomCursor() {
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });
    }

    /**
     * Updates the active navigation link based on scroll position.
     */
    function initActiveNavOnScroll() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('main section');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }
});