// Sample Data - User handles 10-20 apps
// You can edit this array to add your real project details.
const apps = [
    {
        title: "Finance Tracker",
        description: "A comprehensive personal finance management tool using React.",
        tags: ["React", "Node.js", "Finance"],
        icon: "fa-chart-line",
        gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
        link: "#"
    },
    {
        title: "Health Mate",
        description: "Fitness tracking application with workout plans and diet logs.",
        tags: ["Flutter", "Firebase", "Health"],
        icon: "fa-heart-pulse",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        link: "#"
    },
    {
        title: "Social Connect",
        description: "Real-time messaging and social networking platform.",
        tags: ["Vue.js", "Socket.io", "Social"],
        icon: "fa-users",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        link: "#"
    },
    {
        title: "Task Master",
        description: "Productivity app to organize daily tasks and projects effectively.",
        tags: ["React Native", "Redux", "Productivity"],
        icon: "fa-check-double",
        gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        link: "#"
    },
    {
        title: "E-Shop Pro",
        description: "Full-featured e-commerce solution with cart and payments.",
        tags: ["Next.js", "Stripe", "E-commerce"],
        icon: "fa-bag-shopping",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
        link: "#"
    },
    {
        title: "Weather Now",
        description: "Beautiful weather forecasting app with animated backgrounds.",
        tags: ["JS", "API", "Weather"],
        icon: "fa-cloud-sun",
        gradient: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
        link: "#"
    },
    {
        title: "Crypto Watch",
        description: "Live cryptocurrency tracker with price alerts and charts.",
        tags: ["Angular", "API", "Crypto"],
        icon: "fa-bitcoin",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        link: "#"
    },
    {
        title: "Travel Di",
        description: "Travel planning assistance and journal for backpackers.",
        tags: ["Swift", "iOS", "Travel"],
        icon: "fa-plane",
        gradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
        link: "#"
    },
    {
        title: "Recipe Hub",
        description: "Discover and share recipes from around the world.",
        tags: ["React", "API", "Food"],
        icon: "fa-utensils",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        link: "#"
    },
    {
        title: "Dev Tools",
        description: "Utility tools for developers including formatters and converters.",
        tags: ["Svelte", "Tools", "Dev"],
        icon: "fa-code",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        link: "#"
    }
];

// Add more placeholder data to reach ~20 items as requested
for (let i = 11; i <= 20; i++) {
    apps.push({
        title: `App Project ${i}`,
        description: "Another innovative solution solving real-world problems.",
        tags: ["Tech", "Innovation"],
        icon: "fa-layer-group",
        gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
        link: "#"
    });
}

// Render Apps
const appGrid = document.querySelector('.app-grid');

function renderApps() {
    // Clear existing (if any)
    appGrid.innerHTML = '';
    
    apps.forEach((app, index) => {
        const card = document.createElement('div');
        card.className = 'app-card flow-up';
        card.style.animationDelay = `${0.1 + (index * 0.05)}s`; // Staggered animation
        
        card.innerHTML = `
            <div class="card-icon" style="background: ${app.gradient}">
                <i class="fa-solid ${app.icon}"></i>
            </div>
            <div class="card-content">
                <h3>${app.title}</h3>
                <p>${app.description}</p>
                <div class="card-tags">
                    ${app.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
             // Example action
             console.log(`Clicked on ${app.title}`);
             // window.location.href = app.link; 
        });

        appGrid.appendChild(card);
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    renderApps();
    
    // Select all animated elements that might have been added
    const hiddenElements = document.querySelectorAll('.flow-up');
    hiddenElements.forEach(el => {
        // Reset animation to wait for scroll if needed, 
        // though purely CSS with delay works for initial load.
        // For elements further down, we could pause them.
    });
});
