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
                'Worked on hybrid trading strategies combining rule-based logic, ML, and RL.',
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
                '<strong>Relevant Courses:</strong> Deep Learning, Data Mining, Integer Programming, Multivariate Statistical Analysis, Design of Experiments, Queuing Theory, Sequencing and Scheduling, Facility Layout',
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
                '<strong>Relevant Courses:</strong> Linear Optimization 1&2, Non-linear Optimization, Basic and Advanced Python, Data Mining Algorithms, Graph Theory, Basic and Advanced Linear Algebra, Probability and Statistics, Game Theory 1&2. Mathematical Laboratory',
                '<strong>Teaching Assistant:</strong> Calculus 1 & 2, Differential Equations, Game Theory 1.'
            ]
        }
    ];

    const skillsData = {
        'Machine Learning & AI': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'ML & Deep Learning Architectures', 'Computer Vision', 'Time Series Analysis'],
        'Programming & Data': ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Analysis'],
        'Database & BI Tools': ['PostgreSQL', 'SQL Server', 'Power BI', 'Excel', 'Data Warehousing'],
        'DevOps & MLOps': ['Docker', 'Jenkins', 'Airflow', 'Grafana', 'CI/CD'],
        'Cloud & Version Control': ['AWS', 'Git', 'GitHub', 'Linux', 'Bash Scripting']
    };

    const projectsData = [
        // === Data Science: Medical Imaging & GANs ===
        {
            image: 'images/hadesrgan.png',
            title: 'MSc Thesis: Deep Learning for Echocardiography Super-Resolution',
            description: 'Designed HADESR-GAN, a lightweight GAN-based architecture for medical image enhancement. Article and code are in preparation for publication.',
            tags: ['PyTorch', 'GANs', 'Computer Vision', 'Medical Imaging'],
            Document: [{ name: 'Abstract', url: 'https://drive.google.com/file/d/17uASAvXpSnKULEACQHKC2witXGM5x7-K/view?usp=sharing' }]
        },
        {
            image: 'images/medsrgan.png',
            title: 'Code: MEDSRGAN for CT Scan Super-Resolution',
            description: 'An implementation of a Medical Super-Resolution Generative Adversarial Network (MEDSRGAN) to enhance the resolution of CT scan images, featuring a modular architecture with attention mechanisms.',
            tags: ['GANs', 'Super-Resolution', 'Medical Imaging', 'PyTorch', 'Computer Vision'],
            Document: [{ name: 'Github', url: 'https://github.com/parsakhavarinejad/MedSRGAN-Pytorch'},
                { name: 'Kaggle', url: 'https://www.kaggle.com/code/parsakh/pytorch-medsrgan-super-resolution-for-ct-scan'},
            ]
        },
        {
            image: 'images/breast_ultrasound.png',
            title: 'Code: Deep Learning for Breast Ultrasound Image Analysis',
            description: 'A comprehensive project covering multiple deep learning tasks...',
            tags: ['Deep Learning', 'Medical Imaging', 'UNet', 'GANs', 'Image Classification'],
            documents: [
                { name: 'Main Repository', url: 'https://github.com/parsakhavarinejad/Breast-Ultrasound-Image-Analysis' },
                { name: 'Transfer Learning', url: 'https://github.com/parsakhavarinejad/Transfer_learning_finetuning_BreastCancerData' },
                { name: 'GAN Code', url: 'https://github.com/parsakhavarinejad/GAN_BreastCancerData_Pytorch' },
                { name: 'Segmentation Code', url: 'https://github.com/parsakhavarinejad/Breast_cancer_image_segmentation' },
                { name: 'Kaggle', url: 'https://www.kaggle.com/code/parsakh/segmentation-classification-autoencoder-gan' },
                { name: 'Presentation Notebook', url: 'https://drive.google.com/file/d/1dnvu1GGh_7tMwaMeIa4KfDsS5XVjdPEt/view?usp=sharing' }
            ],
        },

        // === Other Data Science Code and Research ===
        {
            image: 'images/learning_to_rank.png',
            title: 'Code: Learning to Rank (L2R) for Product Relevance',
            description: 'A comprehensive Learning to Rank (L2R) system for e-commerce, using XGBoost and LightGBM Ranker to score and rank product relevance based on user search queries.',
            tags: ['Learning to Rank', 'XGBoost', 'LightGBM', 'Recommender Systems', 'E-commerce'],
            Document:[{ name: 'Github', url:  'https://github.com/parsakhavarinejad/product-relevance-learning-to-rank' }]
        },
        {
            image: 'images/intel_image_classification.png',
            title: 'Code: Intel Image Classification with PyTorch Lightning',
            description: 'This project demonstrates building and training an image classification model using a pretrained ResNet18 on the Intel dataset, streamlined with PyTorch Lightning for efficient data handling and training.',
            tags: ['PyTorch', 'PyTorch Lightning', 'Computer Vision', 'Image Classification', 'ResNet18'],
            Document: [{ name: 'Kaggle', url:  'https://www.kaggle.com/code/parsakh/intel-image-classification-pt-lightning'}]
        },
        {
            image: 'images/heart_disease_classification.png',
            title: 'Code: Heart Disease Classification and Clustering',
            description: 'An analysis of the heart disease dataset using various machine learning algorithms for classification (e.g., Random Forest, KNN) and clustering (e.g., K-Means) to predict the presence of heart disease.',
            tags: ['Machine Learning', 'Classification', 'Clustering', 'Scikit-learn', 'Data Mining'],
            Document: [{ name: 'Github', url: 'https://github.com/parsakhavarinejad/heart-disease-classification-clustering'}]
        },
        {
            image: 'images/bank_marketing.png',
            title: 'Code: Bank Marketing Analysis and Prediction',
            description: 'This project uses the UCI Bank Marketing dataset to predict client subscription to a term deposit, employing EDA, PCA, Logistic Regression, and Discriminant Analysis.',
            tags: ['Machine Learning', 'Classification', 'Marketing Analytics', 'Data Analysis'],
            Document: [{ name: 'Github', url:  'https://github.com/parsakhavarinejad/bank_marketing'}]
        },
        {
            image: 'images/ecg_categorization.png',
            title: 'Code: ECG Heartbeat Categorization',
            description: 'A project focused on classifying ECG heartbeat signals from the MIT-BIH and PTB datasets into multiple categories using deep neural networks to identify cardiac conditions.',
            tags: ['Deep Learning', 'ECG', 'Signal Processing', 'Healthcare', 'Time Series'],
            Document: [{ name: 'Github', url:  'https://github.com/parsakhavarinejad/ECG_analysis'}]
        },
        {
            image: 'images/bsc-project.png',
            title: 'BSc Capstone: Hybrid Deep Learning for Stock Price Prediction',
            description: 'Researched on a hybrid model combining different deep learning techniques to forecast stock price movements, leveraging historical data and technical indicators.',
            tags: ['TensorFlow', 'LSTM', 'NLP', 'Stock Price Prediction'],
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1-49sBcZUqQdGTLdnojijUX-qtRf4LYQb/view?usp=sharing'}]
        },
        {
            image: 'images/seminar_echocardiography.png',
            title: 'Seminar: Deep Learning for Reducing Cardiac Diagnosis Time Using Echocardiography',
            description: 'This seminar explores the application of AI in echocardiography, focusing on image classification, segmentation, and enhancement using deep learning models like GANs and Diffusion Models to improve diagnostic accuracy and efficiency.',
            tags: ['Deep Learning', 'Echocardiography', 'Medical Imaging', 'GANs', 'Diffusion Models', 'AI in Healthcare'],
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1ZjAFL6rkgvE03Fz1c51QIEJCRUMzTuXS/view?usp=sharing'}]
        },
        {
            image: 'images/efficientnetv2.png',
            title: 'Presentation: EfficientNetV2 - Smaller Models, Faster Training',
            description: 'This presentation introduces EfficientNetV2, a family of convolutional neural networks, detailing its architecture and demonstrating its enhanced parameter efficiency and faster training speeds compared to previous models.',
            tags: ['Deep Learning', 'EfficientNetV2', 'Computer Vision', 'Neural Networks', 'CNN'],
            Document: [{ name: 'Slide', url: 'https://drive.google.com/file/d/1gf5bucTvGTfUmbE2RSrtm2aAnZjTpdxP/view?usp=sharing'}]
        },
        {
            image: 'images/neuroimage_synthesis.png',
            title: 'Presentation: Diagnosis-oriented Neuroimage Synthesis with Incomplete Data',
            description: 'This presentation details a deep learning framework (DSDL) that synthesizes missing medical images (e.g., PET scans) from available data (e.g., MRI) for improved diagnosis of neurodegenerative diseases.',
            tags: ['Deep Learning', 'GANs', 'Medical Imaging', 'Neuroimaging', 'Computer-Aided Diagnosis'],
            Document: [{ name: 'Slide', url: 'https://drive.google.com/file/d/1pSa9tgk7QVzU7qB2sKERJm8TlzPX41Lj/view?usp=sharing'}]
        },

        // === Operations Research ===
        {
            image: 'images/milp_optimization.png',
            title: 'Code: MILP Optimization with Branch and Bound',
            description: 'This project implements the Branch and Bound algorithm with a Breadth-First Search strategy to solve a Mixed-Integer Linear Programming (MILP) optimization problem from a classic textbook.',
            tags: ['Operations Research', 'MILP', 'Optimization', 'Branch and Bound', 'Integer Programming'],
            Document: [{ name: 'Github', url: 'https://github.com/parsakhavarinejad/BnB_BFS/'}]
        },
        {
            image: 'images/tsp_optimization.png',
            title: 'Code: Traveling Salesman Problem (TSP) Optimization',
            description: 'A Python class implementation for solving the Traveling Salesman Problem (TSP) using the Pyomo modeling language and the CPLEX solver, designed to handle multiple TSP instances.',
            tags: ['TSP', 'Optimization', 'Pyomo', 'CPLEX', 'Operations Research'],
            Document: [{ name: 'Github', url: 'https://github.com/parsakhavarinejad/TSP_optimization'}]
        },
        {
            image: 'images/earliness_tardiness.png',
            title: 'Research: Minimizing Earliness and Tardiness Costs on a Single Machine',
            description: 'This research reviews different approaches, including mathematical models and heuristic algorithms, to solve single-machine scheduling problems by minimizing the weighted costs of both earliness and tardiness.',
            tags: ['Scheduling', 'Operations Research', 'Heuristics', 'Optimization', 'Integer Programming'],
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1lSK8pzzptAqNt0tZrHi1uuoT-KfPsqyD/view?usp=sharing'}]
        },
        {
            image: 'images/queuing_theory_airport.png',
            title: 'Research: Queuing Theory Modeling for Aircraft Arrival Processes',
            description: 'A research paper focused on addressing arrival time delays and congestion at airports through data-driven queuing models, machine learning, and optimization solutions.',
            tags: ['Queuing Theory', 'Airport Operations', 'Machine Learning', 'Simulation', 'Data-driven Modeling'],
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1IK9zYNgTtjdAdPXUtqLvt_tddWwQbnbd/view?usp=drive_link'}]
        },
        {
            image: 'images/dfjsp.png',
            title: 'Research: A Heuristic Algorithm for the Distributed and Flexible Job-Shop Scheduling Problem (DFJSP)',
            description: 'This paper presents a constructive heuristic algorithm for the complex, NP-hard Distributed and Flexible Job-Shop Scheduling Problem (DFJSP), aiming to minimize makespan with low computational cost.',
            tags: ['Job-Shop Scheduling', 'Heuristics', 'DFJSP', 'Optimization', 'Manufacturing Systems'],
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1fK-eQyXDeL2dzQ5JognolcCJ-egqcTh4/view?usp=sharing'}]
        },
        {
            image: 'images/p_median.png',
            title: 'Research: The P-Median Facility Location Problem',
            description: 'This paper reviews the p-median facility location problem, an NP-hard challenge in operations research, exploring various mathematical formulations and heuristic solution methods for different scenarios, including reliability and distributed networks.',
            tags: ['Facility Location', 'P-Median', 'Operations Research', 'Optimization', 'Integer Programming', 'Heuristics'],
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1_jyMQeiWz6S0t86Ft_ymTz20s_jLZG5y/view?usp=sharing'}]
        },
        {
            image: 'images/ctmc.png',
            title: 'One-Section-Lecture: Continuous-Time Markov Chains',
            description: 'A lesson plan defining Continuous-Time Markov Chains (CTMCs) and explaining key concepts such as state transition rates, the Chapman-Kolmogorov equations, and steady-state analysis.',
            tags: ['Markov Chains', 'Stochastic Processes', 'Queuing Theory', 'CTMC', 'Probability'],
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1fK-eQyXDeL2dzQ5JognolcCJ-egqcTh4/view?usp=sharing'}]
        },

        // === Game Theory ===
        {
            image: 'images/capital_injection.png',
            title: 'Research: Capital Injection Policy Between Two Rival Companies',
            description: 'This research models the strategic decisions of capital investment between two rival companies, applying concepts from game theory, signaling, and engineering economics to analyze the competition.',
            tags: ['Game Theory', 'Economic Modeling', 'Cournot Competition', 'Investment Strategy', 'Research'],
            Document: [{ name: 'Slide', url: 'https://drive.google.com/file/d/1WxSn9dy-VRFQaqdf5054e0Z_mIsFOpWw/view?usp=sharing'}]
        },
        {
            image: 'images/game_theory_lp.png',
            title: 'Presentation: The Intersection of Game Theory and Linear Programming',
            description: 'This presentation explores the fundamental relationship between game theory and linear programming, illustrating how strategic interactions in matrix games can be modeled and solved as optimization problems.',
            tags: ['Game Theory', 'Linear Programming', 'Optimization', 'Operations Research'],
            Document: [{ name: 'Slide', url: 'https://drive.google.com/file/d/1lXDnSTSRkHgxpGMPwGj5ZtiAS-RWtoqL/view?usp=sharing'}]
        },

        // === Other Topics ===
        {
            image: 'images/fraud_management.png',
            title: 'Presentation: Fraud Management Principles and Applications',
            description: 'A presentation outlining the core principles of fraud risk management and exploring its practical applications and common schemes within the telecommunications and banking industries.',
            tags: ['Fraud Management', 'Risk Assessment', 'Telecommunications', 'Banking', 'Security'],
            Document: [{ name: 'Slide', url: 'https://drive.google.com/file/d/1N_pAyFXT0ch-dyPtl_jKcFh4kk14iREB/view?usp=sharing'}]
        },
    ];

    // --- INITIALIZATION ---
    populateTimeline('experience-timeline', experienceData, handleTimelineClick);
    populateTimeline('education-timeline', educationData, handleTimelineClick);
    handleTimelineClick(experienceData[0].id, 'experience-timeline');
    handleTimelineClick(educationData[0].id, 'education-timeline');
    populateSkills();
    populateProjects(); // <-- This is the key function
    initMobileMenu();
    initScrollObserver();
    initTypingEffect();
    initCardTilt();
    initCustomCursor();
    initActiveNavOnScroll();


    // --- CORE FUNCTIONS ---

    /**
     * Populates a timeline component with data.
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
     * ✅ FIXED: Populates the projects section, correctly handling all link formats.
     */
    function populateProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = ''; // Clear existing content

        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'interactive-card group flex flex-col bg-[#0F0F0F] rounded-lg overflow-hidden shadow-md border border-transparent hover:border-[#00FFFF] transition-all duration-300';

            const tagsHtml = project.tags.map(tag =>
                `<span class="bg-[#0A0A0A] border border-[#333] text-[#90F0FF] text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full">${tag}</span>`
            ).join('');

            let linksHtml = '';
            
            // --- START OF FIX ---
            // This logic now correctly handles all cases:
            // 1. `documents`: an array of objects
            // 2. `Document`: an array of objects (the inconsistent case)
            // 3. `Document`: a single URL string
            let docs = [];
            if (project.documents && Array.isArray(project.documents)) {
                docs = project.documents;
            } else if (project.Document && Array.isArray(project.Document)) {
                docs = project.Document;
            }

            if (docs.length > 0) {
                // Case 1 & 2: We have an array of document objects
                linksHtml = docs.map(doc => 
                    `<a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="text-[#FF69B4] hover:text-[#00FFFF] transition-colors font-semibold text-sm">${doc.name}</a>`
                ).join(' | '); // Use a separator for multiple links
            } else if (typeof project.Document === 'string') {
                // Case 3: It's a single URL string
                linksHtml = `<a href="${project.Document}" target="_blank" rel="noopener noreferrer" class="text-[#FF69B4] hover:text-[#00FFFF] transition-colors font-semibold text-sm">View Document</a>`;
            }
            // --- END OF FIX ---

            projectCard.innerHTML = `
                <div class="w-full aspect-video overflow-hidden">
                    <img src="${project.image}" alt="Project image for ${project.title}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/0A0A0A/00FFFF?text=PROJECT';" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="font-bold text-lg mb-2 text-[#00FFFF]">${project.title}</h3>
                    <p class="text-gray-400 text-sm flex-grow mb-4">${project.description}</p>
                    <div class="mt-auto">
                        <div class="mb-4 flex flex-wrap">${tagsHtml}</div>
                        <div class="pt-4 border-t border-[#333] flex flex-wrap items-center gap-x-4 gap-y-2">${linksHtml}</div>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });

        initCardTilt(); // Re-initialize tilt effect for new cards
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
