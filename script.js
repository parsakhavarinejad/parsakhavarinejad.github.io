document.addEventListener('DOMContentLoaded', function () {
    // --- DATA OBJECTS ---
    const experienceData = [
        {
            id: 'spo',
            role: 'Business Data Analyst',
            company: 'SPO(P.J.S)Co.',
            period: 'Aug 2026 - Present',
            location: 'Tehran, Iran (Part-time)',
            details: [
                'Consult with business stakeholders to design and establish KPIs across business functions, ensuring alignment with strategic and operational objectives.',
                'Support data-driven decision-making and Decision Support Systems (DSS) by transforming business data into actionable insights.',
                'Design, develop, and maintain interactive Power BI dashboards and reporting solutions for management and operational teams.',
                'Analyze and optimize business processes, including inventory management, workforce planning, sales, operations, and performance management.',
                'Build demand forecasting models to support capacity planning, inventory decisions, resource allocation, and operational planning.',
                'Translate complex analytical findings into clear business recommendations for management and decision-makers.'
            ]
        },
        {
            id: 'persian-garden',
            role: 'Business Data Analyst',
            company: 'Persian Garden Studio',
            period: 'Jun 2026 - Present',
            location: 'Tehran, Iran (Part-time)',
            details: [
                'Built data pipelines using Python, dbt, PostgreSQL, Airflow, and Docker to support analytics across hospitality and real-estate business lines.',
                'Developed Power BI sales dashboards for cafe, hotel, and restaurant operations, processing hundreds of transactions/records and surfacing over 20 KPIs per vertical.',
                'Built a separate analytics dashboard tracking progress and performance across 5 architectural projects.',
                'Designed sector-specific KPI frameworks adopted across 4 business units for performance tracking.',
                'Supported supply chain and inventory planning using dashboard-derived demand signals, reducing stockouts/waste/planning time by about 26%.'
            ]
        },
        {
            id: 'sadtunnel',
            role: 'Python Automation Developer',
            company: 'Contract',
            period: 'May 2026 - Present',
            location: 'Tehran, Iran',
            details: [
                'Develop Python programs for automated rock discontinuity extraction and geological log post-processing in mining engineering projects.',
                'Automate data processing, calculation, and analysis workflows to improve efficiency and reduce manual processing.'
            ]
        },
        {
            id: 'matt3r',
            role: 'Machine Learning Engineer',
            company: 'MATT3R',
            period: 'Mar 2025 - Sep 2025',
            location: 'Vancouver, BC, Canada (Remote)',
            details: [
                'Designed and deployed real-time machine learning models for IMU signal processing, enabling vehicle maneuver detection on several vehicle platforms including Tesla EVs.',
                'Built and optimized models for low-latency inference on edge devices in production.',
                'Deployed models to production and monitored live performance, reducing error rate by ~5%.',
                'Conducted R&D on feature engineering, model optimization, and signal processing techniques for embedded ML applications.',
                'Collaborated cross-functionally with Computer Vision, Audio, embedded, and product teams across a distributed international team.'
            ]
        },
        {
            id: 'aria',
            role: 'Data Analyst and Planning Consultant',
            company: 'AriaShahd Saedinia',
            period: 'Apr 2024 - Apr 2026',
            location: 'Tehran, Iran',
            details: [
                'Built Power BI dashboards for sales trend and supply chain analysis, supporting decision-making for 12 stakeholders/business units.',
                'Developed sales forecasting pipeline, decreasing wastage and improving operations/supplies by 30% in total.',
                'Designed and managed PostgreSQL databases and dataflows to support forecasting and reporting pipelines.',
                'Led weekly S&OP meetings, aligning cross-functional planning and execution across 12 teams.',
                'Improved production planning efficiency by 30% through demand forecasting integration into supply chain workflows.'
            ]
        },
        {
            id: 'bitex',
            role: 'Junior AI Developer',
            company: 'BITEX',
            period: 'Oct 2022 - Aug 2023',
            location: 'Tehran, Iran',
            details: [
                'Built an automated cryptocurrency trading system combining rule-based logic, machine learning, and reinforcement learning, as part of a cross-functional AI team.',
                'Researched and optimized forecasting algorithms for high-frequency trading, improving prediction accuracy by 5% over baseline.',
                'Designed a PostgreSQL system for real-time and historical market data ingestion, supporting over 50 trading pairs/data streams.',
                'Validated hybrid trading strategies via backtesting, forward testing, and A/B experiments.'
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
                '<strong>Courses:</strong> Deep Learning, Data Mining, Integer Programming, Multivariate Statistical Analysis, Design of Experiments, Queuing Theory, Sequencing and Scheduling, Facility Layout',
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
                '<strong>Courses:</strong> Linear Optimization 1&2, Non-linear Optimization, Basic and Advanced Python, Data Mining Algorithms, Graph Theory, Basic and Advanced Linear Algebra, Probability and Statistics, Game Theory 1&2, Mathematical Laboratory',
                '<strong>Teaching Assistant:</strong> Calculus 1 & 2, Differential Equations, Game Theory 1.'
            ]
        }
    ];

    const skillsData = {
        'Machine Learning & AI': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'ML & Deep Learning Architectures', 'Computer Vision', 'Time Series Analysis'],
        'Programming & Data': ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Analysis', 'Statistical Analysis'],
        'Database & BI Tools': ['PostgreSQL', 'SQL Server', 'Power BI', 'Superset', 'Excel', 'dbt'],
        'MLOps & Version Control': ['Docker', 'Jenkins', 'Airflow', 'Grafana', 'AWS', 'Git', 'GitHub', 'Linux', 'Bash Scripting'],
    };

    const projectsData = [
        // === Data Science: Medical Imaging & GANs ===
        {
            image: 'images/hadesrgan.webp',
            title: 'Paper and MSc Thesis: HADESR-GAN — A Lightweight Hybrid Attention-based GAN for Medical Image Super-Resolution',
            description: 'Developed HADESR-GAN, a lightweight GAN-based architecture for medical image enhancement. The paper has been submitted to *Nature – Scientific Reports*.',
            tags: ['PyTorch', 'GANs', 'Computer Vision', 'Medical Imaging'],
            category: 'publication',
            Document: [
                { 
                    name: 'Abstract and Introduction', 
                    url: 'https://drive.google.com/file/d/1XToxRrewf4k6WXKU2s71mtRgGEUbKPh6/view?usp=sharing' 
                }
            ]
        },
        {
            image: 'images/MARL.png',
            title: 'Paper: Multi-Agent Reinforcement Learning for Continuous Dynamic Pricing and Occupancy-Aware Demand Response in Urban Microgrids',
            description: 'Published by Springer Nature - Lecture Notes in Networks and Systems. This paper presents a multi-agent reinforcement learning framework for optimizing electricity demand in urban microgrids, reducing energy costs and peak loads through dynamic pricing and occupancy-aware control while maintaining grid safety constraints.',
            tags: ['Multi-Agent Reinforcement Learning', 'Urban Microgrids', 'P2P Energy Trading', 'RL'],
            category: 'publication',
            Document: [
                { 
                    name: 'Link', 
                    url: 'https://uel-repository.worktribe.com/output/633916' 
                }, { 
                    name: 'Google Scholar', 
                    url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=qR2l7oYAAAAJ&citation_for_view=qR2l7oYAAAAJ:u5HHmVD_uO8C' 
                }, 
            ]
        },
        {
            image: 'images/medsrgan.webp',
            title: 'Code: MEDSRGAN for CT Scan Super-Resolution',
            description: 'An implementation of a Medical Super-Resolution Generative Adversarial Network (MEDSRGAN) to enhance the resolution of CT scan images, featuring a modular architecture with attention mechanisms.',
            tags: ['GANs', 'Super-Resolution', 'Medical Imaging', 'PyTorch', 'Computer Vision'],
            category: 'medical',
            Document: [{ name: 'Github', url: 'https://github.com/parsakhavarinejad/MedSRGAN-Pytorch'},
                { name: 'Kaggle', url: 'https://www.kaggle.com/code/parsakh/pytorch-medsrgan-super-resolution-for-ct-scan'},
            ]
        },
        {
            image: 'images/breast_ultrasound.webp',
            title: 'Code: Deep Learning for Breast Ultrasound Image Analysis',
            description: 'A comprehensive project covering multiple deep learning tasks including transfer learning, Generative Adversarial Networks (GANs), and image segmentation.',
            tags: ['Deep Learning', 'Medical Imaging', 'UNet', 'GANs', 'Image Classification'],
            category: 'medical',
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
            image: 'images/superstore-dashboard.webp',
            title: 'Superstore Sales PowerBI Dashboard',
            description: 'A comprehensive Business Intelligence solution built with Power BI, DAX, and Power Query. This project analyzes raw sales data across six distinct dimensions—including executive overviews, discount impacts, and shipping operations—to deliver actionable KPIs. The dashboard is fully interactive and designed to support data-driven executive decision-making and operational optimization.',
            tags: ["Business Intelligence", "Sales Analytics", "Data Analytics"],
            category: 'bi',
            Document: [
                { name: 'GitHub Repository', url: 'https://github.com/parsakhavarinejad/superstore-sales-powerbi-dashboard' }
            ]
        },
        {
            image: 'images/OR-Case.webp',
            title: 'Code: Operations Research Case Studies',
            description: 'A curated repository of Operations Research (OR) case studies with practical applications and examples.',
            tags: ["Operations Research", "Optimization", "Data Analytics", "Reinforcement Learning", "Integer Programming", "Python"],
            category: 'or',
            Document: [
                { name: 'Inventory Control with MDP-RL', url: 'https://github.com/parsakhavarinejad/Operations-Research-Case-Studies/tree/main/Inventory%20Control%20with%20MDP-RL' },
                { name: 'Marketing Budget Optimization via RL', url: 'https://github.com/parsakhavarinejad/Operations-Research-Case-Studies/tree/main/Marketing%20Budget%20Optimization%20via%20RL' },
                { name: 'Container Terminal Congestion Reduction Problem', url: 'https://github.com/parsakhavarinejad/Operations-Research-Case-Studies/tree/main/Container%20Terminal%20Congestion%20Reduction%20Problem' },
                { name: ' MILP Optimization with Branch and Bound', url: 'https://github.com/parsakhavarinejad/BnB_BFS/' },
                { name: 'Traveling Salesman Problem (TSP) Optimization', url: 'https://github.com/parsakhavarinejad/TSP_optimization' }
            ]
        },
        {
            image: 'images/learning_to_rank.webp',
            title: 'Code: Learning to Rank (L2R) for Product Relevance',
            description: 'A comprehensive Learning to Rank (L2R) system for e-commerce, using XGBoost and LightGBM Ranker to score and rank product relevance based on user search queries.',
            tags: ['Learning to Rank', 'XGBoost', 'LightGBM', 'Recommender Systems', 'E-commerce'],
            category: 'ml',
            Document:[{ name: 'Github', url:  'https://github.com/parsakhavarinejad/product-relevance-learning-to-rank' }]
        },
        {
            image: 'images/intel_image_classification.webp',
            title: 'Code: Intel Image Classification with PyTorch Lightning',
            description: 'This project demonstrates building and training an image classification model using a pretrained ResNet18 on the Intel dataset, streamlined with PyTorch Lightning for efficient data handling and training.',
            tags: ['PyTorch', 'PyTorch Lightning', 'Computer Vision', 'Image Classification', 'ResNet18'],
            category: 'ml',
            Document: [{ name: 'Kaggle', url:  'https://www.kaggle.com/code/parsakh/intel-image-classification-pt-lightning'}]
        },
        {
            image: 'images/heart_disease_classification.webp',
            title: 'Code: Heart Disease Classification and Clustering',
            description: 'An analysis of the heart disease dataset using various machine learning algorithms for classification (e.g., Random Forest, KNN) and clustering (e.g., K-Means) to predict the presence of heart disease.',
            tags: ['Machine Learning', 'Classification', 'Clustering', 'Scikit-learn', 'Data Mining'],
            category: 'ml',
            Document: [{ name: 'Github', url: 'https://github.com/parsakhavarinejad/heart-disease-classification-clustering'}]
        },
        {
            image: 'images/bank_marketing.webp',
            title: 'Code: Bank Marketing Analysis and Prediction',
            description: 'This project uses the UCI Bank Marketing dataset to predict client subscription to a term deposit, employing EDA, PCA, Logistic Regression, and Discriminant Analysis.',
            tags: ['Machine Learning', 'Classification', 'Marketing Analytics', 'Data Analysis'],
            category: 'ml',
            Document: [{ name: 'Github', url:  'https://github.com/parsakhavarinejad/bank_marketing'}]
        },
        {
            image: 'images/ecg_categorization.webp',
            title: 'Code: ECG Heartbeat Categorization',
            description: 'A project focused on classifying ECG heartbeat signals from the MIT-BIH and PTB datasets into multiple categories using deep neural networks to identify cardiac conditions.',
            tags: ['Deep Learning', 'ECG', 'Signal Processing', 'Healthcare', 'Time Series'],
            category: 'ml',
            Document: [{ name: 'Github', url:  'https://github.com/parsakhavarinejad/ECG_analysis'}]
        },
        {
            image: 'images/bsc-project.webp',
            title: 'BSc Capstone: Hybrid Deep Learning for Stock Price Prediction',
            description: 'Researched on a hybrid model combining different deep learning techniques to forecast stock price movements, leveraging historical data and technical indicators.',
            tags: ['TensorFlow', 'LSTM', 'NLP', 'Stock Price Prediction'],
            category: 'ml',
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1-49sBcZUqQdGTLdnojijUX-qtRf4LYQb/view?usp=sharing'}]
        },
        {
            image: 'images/seminar_echocardiography.webp',
            title: 'Seminar: Deep Learning for Reducing Cardiac Diagnosis Time Using Echocardiography',
            description: 'This seminar explores the application of AI in echocardiography, focusing on image classification, segmentation, and enhancement using deep learning models like GANs and Diffusion Models to improve diagnostic accuracy and efficiency.',
            tags: ['Deep Learning', 'Echocardiography', 'Medical Imaging', 'GANs', 'Diffusion Models', 'AI in Healthcare'],
            category: 'medical',
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1ZjAFL6rkgvE03Fz1c51QIEJCRUMzTuXS/view?usp=sharing'}]
        },
        {
            image: 'images/vits-registers.png',
            title: 'Presentation: Why ViTs need registers and why they don\'t?',
            description: 'This presentation explains the problem of high-norm token artifacts in Vision Transformers, contrasting the original solution of retraining with learned registers against a newer, training-free "test-time" approach that achieves comparable results.',
            tags: ['Deep Learning', 'Vision Transformers', 'Computer Vision', 'Register Tokens'],
            category: 'ml',
            Document: [{ name: 'Slide', url: 'https://drive.google.com/file/d/1AgnKZMTDgT2COnCBKJlQtrHOWzDsI--g/view?usp=sharing'}]
        },
        {
            image: 'images/efficientnetv2.webp',
            title: 'Presentation: EfficientNetV2 - Smaller Models, Faster Training',
            description: 'This presentation introduces EfficientNetV2, a family of convolutional neural networks, detailing its architecture and demonstrating its enhanced parameter efficiency and faster training speeds compared to previous models.',
            tags: ['Deep Learning', 'EfficientNetV2', 'Computer Vision', 'Neural Networks', 'CNN'],
            category: 'ml',
            Document: [{ name: 'Slide', url: 'https://drive.google.com/file/d/1gf5bucTvGTfUmbE2RSrtm2aAnZjTpdxP/view?usp=sharing'}]
        },
        {
            image: 'images/neuroimage_synthesis.webp',
            title: 'Presentation: Diagnosis-oriented Neuroimage Synthesis with Incomplete Data',
            description: 'This presentation details a deep learning framework (DSDL) that synthesizes missing medical images (e.g., PET scans) from available data (e.g., MRI) for improved diagnosis of neurodegenerative diseases.',
            tags: ['Deep Learning', 'GANs', 'Medical Imaging', 'Neuroimaging', 'Computer-Aided Diagnosis'],
            category: 'medical',
            Document: [{ name: 'Slide', url: 'https://drive.google.com/file/d/1pSa9tgk7QVzU7qB2sKERJm8TlzPX41Lj/view?usp=sharing'}]
        },

        // === Operations Research ===
        {
            image: 'images/earliness_tardiness.webp',
            title: 'Research: Minimizing Earliness and Tardiness Costs on a Single Machine',
            description: 'This research reviews different approaches, including mathematical models and heuristic algorithms, to solve single-machine scheduling problems by minimizing the weighted costs of both earliness and tardiness.',
            tags: ['Scheduling', 'Operations Research', 'Heuristics', 'Optimization', 'Integer Programming'],
            category: 'or',
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1lSK8pzzptAqNt0tZrHi1uuoT-KfPsqyD/view?usp=sharing'}]
        },
        {
            image: 'images/queuing_theory_airport.webp',
            title: 'Research: Queuing Theory Modeling for Aircraft Arrival Processes',
            description: 'A research paper focused on addressing arrival time delays and congestion at airports through data-driven queuing models, machine learning, and optimization solutions.',
            tags: ['Queuing Theory', 'Airport Operations', 'Machine Learning', 'Simulation', 'Data-driven Modeling'],
            category: 'or',
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1IK9zYNgTtjdAdPXUtqLvt_tddWwQbnbd/view?usp=drive_link'}]
        },
        {
            image: 'images/dfjsp.webp',
            title: 'Research: A Heuristic Algorithm for the Distributed and Flexible Job-Shop Scheduling Problem (DFJSP)',
            description: 'This paper presents a constructive heuristic algorithm for the complex, NP-hard Distributed and Flexible Job-Shop Scheduling Problem (DFJSP), aiming to minimize makespan with low computational cost.',
            tags: ['Job-Shop Scheduling', 'Heuristics', 'DFJSP', 'Optimization', 'Manufacturing Systems'],
            category: 'or',
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1fK-eQyXDeL2dzQ5JognolcCJ-egqcTh4/view?usp=sharing'}]
        },
        {
            image: 'images/p_median.webp',
            title: 'Research: The P-Median Facility Location Problem',
            description: 'This paper reviews the p-median facility location problem, an NP-hard challenge in operations research, exploring various mathematical formulations and heuristic solution methods for different scenarios, including reliability and distributed networks.',
            tags: ['Facility Location', 'P-Median', 'Operations Research', 'Optimization', 'Integer Programming', 'Heuristics'],
            category: 'or',
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1_jyMQeiWz6S0t86Ft_ymTz20s_jLZG5y/view?usp=sharing'}]
        },
        {
            image: 'images/ctmc.webp',
            title: 'One-Section-Lecture: Continuous-Time Markov Chains',
            description: 'A lesson plan defining Continuous-Time Markov Chains (CTMCs) and explaining key concepts such as state transition rates, the Chapman-Kolmogorov equations, and steady-state analysis.',
            tags: ['Markov Chains', 'Stochastic Processes', 'Queuing Theory', 'CTMC', 'Probability'],
            category: 'or',
            Document: [{ name: 'Document', url: 'https://drive.google.com/file/d/1ShFCcjPz6MD5inN01Ckgt__EQ9rlt1ew/view?usp=drive_link'}]
        },

        // === Game Theory ===
        {
            image: 'images/capital_injection.webp',
            title: 'Research: Capital Injection Policy Between Two Rival Companies',
            description: 'This research models the strategic decisions of capital investment between two rival companies, applying concepts from game theory, signaling, and engineering economics to analyze the competition.',
            tags: ['Game Theory', 'Economic Modeling', 'Cournot Competition', 'Investment Strategy', 'Research'],
            category: 'or',
            Document: [{ name: 'Slide', url: 'https://drive.google.com/file/d/1WxSn9dy-VRFQaqdf5054e0Z_mIsFOpWw/view?usp=sharing'}]
        },
        {
            image: 'images/game_theory_lp.webp',
            title: 'Presentation: The Intersection of Game Theory and Linear Programming',
            description: 'This presentation explores the fundamental relationship between game theory and linear programming, illustrating how strategic interactions in matrix games can be modeled and solved as optimization problems.',
            tags: ['Game Theory', 'Linear Programming', 'Optimization', 'Operations Research'],
            category: 'or',
            Document: [{ name: 'Slide', url: 'https://drive.google.com/file/d/1lXDnSTSRkHgxpGMPwGj5ZtiAS-RWtoqL/view?usp=sharing'}]
        },

        // === Other Topics ===
        {
            image: 'images/fraud_management.webp',
            title: 'Presentation: Fraud Management Principles and Applications',
            description: 'A presentation outlining the core principles of fraud risk management and exploring its practical applications and common schemes within the telecommunications and banking industries.',
            tags: ['Fraud Management', 'Risk Assessment', 'Telecommunications', 'Banking', 'Security'],
            category: 'bi',
            Document: [{ name: 'Slide', url: 'https://drive.google.com/file/d/1N_pAyFXT0ch-dyPtl_jKcFh4kk14iREB/view?usp=sharing'}]
        },
    ];

    // --- INITIALIZATION ---
    populateExperience();
    populateSkills();
    populateEducation();
    populateProjects();
    initMobileMenu();
    initScrollObserver();
    initActiveNavOnScroll();

    // --- CORE FUNCTIONS ---

    /**
     * Populates the Experience Timeline with accordion functionality
     */
    function populateExperience() {
        const container = document.getElementById('experience-timeline-new');
        if (!container) return;

        experienceData.forEach((item, index) => {
            const entry = document.createElement('div');
            entry.className = `timeline-entry ${index === 0 ? 'active' : ''}`;
            
            entry.innerHTML = `
                <div class="entry-header">
                    <div>
                        <h3 class="entry-role">${item.role}</h3>
                        <div class="entry-company">${item.company}</div>
                    </div>
                    <div class="entry-meta">
                        <div class="entry-period">${item.period}</div>
                        <div class="entry-location">${item.location}</div>
                    </div>
                </div>
                <div class="entry-details">
                    <ul>
                        ${item.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
            `;

            entry.addEventListener('click', () => {
                document.querySelectorAll('.timeline-entry').forEach(el => el.classList.remove('active'));
                entry.classList.add('active');
            });

            container.appendChild(entry);
        });
    }

    /**
     * Populates the Dynamic Skills Section
     */
    function populateSkills() {
        const container = document.getElementById('skills-container-new');
        if (!container) return;

        for (const category in skillsData) {
            const card = document.createElement('div');
            card.className = 'skill-card';

            const tagsHtml = skillsData[category]
                .map(skill => `<span class="skill-tag">${skill}</span>`)
                .join('');

            card.innerHTML = `
                <div class="skill-category">${category}</div>
                <div class="skill-tags">${tagsHtml}</div>
            `;
            container.appendChild(card);
        }
    }

    /**
     * Populates the Education Section Grid
     */
    function populateEducation() {
        const container = document.getElementById('education-grid');
        if (!container) return;

        educationData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'edu-card';
            
            card.innerHTML = `
                <h3 class="edu-degree">${item.degree}</h3>
                <div class="edu-university">${item.university}</div>
                <div class="edu-period">${item.period} | ${item.location}</div>
                <div class="edu-details">
                    ${item.details.map(d => `<div class="edu-detail">${d}</div>`).join('')}
                </div>
            `;
            container.appendChild(card);
        });
    }

    /**
     * Populates the Projects Grid with dynamic links and categorization
     */
    function populateProjects() {
        const container = document.getElementById('projects-grid-new');
        if (!container) return;

        container.innerHTML = ''; 

        projectsData.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.dataset.category = project.category;

            const tagsHtml = project.tags
                .map(tag => `<span class="project-tag">${tag}</span>`)
                .join('');

            let linksHtml = '';
            let docs = project.documents || project.Document || [];
            if (!Array.isArray(docs)) docs = [{ name: 'View Document', url: docs }];
            
            if (docs.length > 0) {
                linksHtml = docs.map(doc => 
                    `<a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="project-link">${doc.name}</a>`
                ).join('');
            }

            card.innerHTML = `
                <div class="project-img-wrap">
                    <img src="${project.image}" alt="${project.title}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/F8F7FC/7C6FAE?text=PROJECT';">
                </div>
                <div class="project-body">
                    <div class="project-category">${project.category.toUpperCase()}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tags">${tagsHtml}</div>
                    <div class="project-links">${linksHtml}</div>
                </div>
            `;
            container.appendChild(card);
        });

        initFilterBar();
    }

    /**
     * Handles dynamic category filter bar actions
     */
    function initFilterBar() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                cards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    /**
     * Mobile Menu toggle mechanics
     */
    function initMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const mobileDrawer = document.getElementById('mobile-drawer');
        
        if (!hamburger || !mobileDrawer) return;

        hamburger.addEventListener('click', () => {
            mobileDrawer.classList.toggle('open');
        });

        document.querySelectorAll('#mobile-drawer a').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
            });
        });
    }

/**
     * Intersection Observer transitions for smooth page entry
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
        }, { 
            // Changed from threshold: 0.1 to rootMargin
            threshold: 0, 
            rootMargin: '0px 0px -100px 0px' 
        });

        revealElements.forEach(el => observer.observe(el));
    }
    /**
     * Highlights navigation elements on active scrolling positions
     */
    function initActiveNavOnScroll() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('main section');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 150) {
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