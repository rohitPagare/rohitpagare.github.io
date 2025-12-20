// Sample Data - User handles 10-20 apps
// You can edit this array to add your real project details.
const apps = [
    {
        title: "Duo Music Player",
        description: "A dual Android audio player enabling simultaneous playback of two songs via separate earbuds.",
        tags: ["Android", "Java", "Music"],
        icon: "fa-chart-line",
        logo: "assets/duo_music_logo.png",
        gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
        link: "https://play.google.com/store/apps/details?id=com.orhotechnologies.orhoduomusic"
    },
    {
        title: "Duo Video Player",
        description: "A split-screen Android video player enabling simultaneous playback of two different videos.",
        tags: ["Android", "Java", "Video"],
        logo: "assets/duo_video_logo.png",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        link: "https://play.google.com/store/apps/details?id=com.orhotechnologies.orhoduovideoplayer"
    },
    {
        title: "सिद्धिविनायक",
        description: "A religious Android app offering live temple darshans, prayers, and spiritual information.",
        tags: ["Android", "Java", "Social"],
        icon: "fa-users",
        logo: "assets/siddhivinayak_logo.webp",
        gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        link: "https://play.google.com/store/apps/details?id=com.rohit.sidhhivinayak"
    },
    {
        title: "Status Saver",
        description: "An all-in-one Android status downloader for saving social media images, videos, and GIFs",
        tags: ["Android", "Java", "Productivity"],
        icon: "fa-check-double",
        logo: "assets/status_saver_logo.png",
        gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        link: "https://play.google.com/store/apps/details?id=com.orho.orhostatussaver"
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

// Render Apps
const appGrid = document.querySelector('.app-grid');

function renderApps() {
    // Clear existing (if any)
    appGrid.innerHTML = '';

    apps.forEach((app, index) => {
        const card = document.createElement('div');
        card.className = 'app-card flow-up';
        card.style.animationDelay = `${0.1 + (index * 0.05)}s`; // Staggered animation

        const iconHtml = app.logo
            ? `<div class="card-icon" style="background: none; box-shadow: none;"><img src="${app.logo}" alt="${app.title} Logo" style="width: 100%; height: 100%; object-fit: contain;"></div>`
            : `<div class="card-icon" style="background: ${app.gradient}"><i class="fa-solid ${app.icon}"></i></div>`;

        card.innerHTML = `
            ${iconHtml}
            <div class="card-content">
                <h3>${app.title}</h3>
                <p>${app.description}</p>
                <div class="card-tags">
                    ${app.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            if (app.link && app.link !== '#') {
                window.open(app.link, '_blank');
            }
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
