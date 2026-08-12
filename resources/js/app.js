import './bootstrap';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });
    }

    // 3. Reveal Animations on Scroll
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load

    // 4. Portfolio Modal Logic
    const portfolioData = {
        'excel': {
            title: 'Employee Data Entry & Recap via Excel',
            image: '/assets/images/project-excel.png',
            desc: 'This project involved entering, cleaning, and organizing over 500 rows of employee data into an Excel spreadsheet systematically. Using VLOOKUP, Pivot Tables, and advanced formulas to generate accurate monthly reports.',
            client: 'PT Maju Bersama',
            date: 'January 2025',
            role: 'Data Entry Specialist',
            tools: 'Microsoft Excel, Google Sheets'
        },
        'website': {
            title: 'Mass Data Entry via Website Form',
            image: '/assets/images/project-website.png',
            desc: 'Performing large-scale data input into web-based CMS accurately and efficiently. Managing over 300 records within a tight timeframe with an error rate of less than 1%.',
            client: 'E-commerce Startup',
            date: 'March 2025',
            role: 'Web Data Entry',
            tools: 'Web CMS, Chrome Extensions'
        },
        'mysql': {
            title: 'Data Migration & Input to MySQL Server',
            image: '/assets/images/project-mysql.png',
            desc: 'Entering and validating data from external CSV files into MySQL tables. Writing basic SQL queries to ensure data integrity and performing routine data backups before migration.',
            client: 'Tech Solutions Inc.',
            date: 'May 2025',
            role: 'Database Administrator Assistant',
            tools: 'MySQL Workbench, phpMyAdmin, SQL'
        }
    };

    const modal = document.getElementById('portfolioModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');

    // Make openModal available globally
    window.openModal = function(projectId) {
        const data = portfolioData[projectId];
        if (!data) return;

        modalBody.innerHTML = `
            <img src="${data.image}" alt="${data.title}" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="font-size: 1.5rem; margin-bottom: 10px; color: var(--primary);">${data.title}</h3>
            <p style="margin-bottom: 20px; line-height: 1.6;">${data.desc}</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; background: var(--bg-section-alt); padding: 15px; border-radius: 8px;">
                <div>
                    <strong>Client:</strong><br> ${data.client}
                </div>
                <div>
                    <strong>Date:</strong><br> ${data.date}
                </div>
                <div>
                    <strong>Role:</strong><br> ${data.role}
                </div>
                <div>
                    <strong>Tools:</strong><br> ${data.tools}
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }

    // Close modal on click outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 5. Contact Form Submission (Simulation)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                formMessage.innerHTML = '<div style="padding: 10px; background: #d4edda; color: #155724; border-radius: 4px; margin-top: 15px;">Your message has been sent successfully! I will contact you shortly.</div>';
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                setTimeout(() => {
                    formMessage.innerHTML = '';
                }, 5000);
            }, 1500);
        });
    }
});
