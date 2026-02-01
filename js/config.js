// ==================== KONFIGURASI WEBSITE ====================
// Semua pengaturan website ada di sini, tinggal edit aja!

const CONFIG = {
    // ==================== PROFILE INFO ====================
    profile: {
        name: "Naoki",
        bio: "Seorang Anak SMP Pengen Jadi Progamer, Eh tau Nya Jadi Vibe Coder",
        avatar: "https://github.com/hiuraaaaa/media/blob/main/profil.png",
        verified: false// Set false kalau ga mau tanda verified
    },

    // ==================== SOCIAL MEDIA ====================
    socialMedia: {
        instagram: {
            url: "https://www.instagram.com/bellatakaa",
            active: true
        },
        github: {
            url: "https://github.com/ayashiiiyo",
            active: true
        },
        email: {
            url: "mailto:contact@example.com",
            active: true
        },
        telegram: {
            url: "https://t.me/abellayah",
            active: true
        }
    },

    // ==================== CONNECT WITH ME ====================
    connectLinks: [
        {
            title: "Taka's Official Channel",
            subtitle: "Various Information",
            url: "https://whatsapp.com/channel/0029VbBSk270AgWIpspK6k3m",
            icon: "fab fa-whatsapp",
            type: "whatsapp",
            active: true
        }
    ],

    // ==================== CONTACT LINKS ====================
    contactLinks: [
        {
            title: "WhatsApp",
            subtitle: "Chat Me Via WhatsApp",
            url: "https://wa.me/message/DXY5TVFLF6DRK1",
            icon: "fab fa-whatsapp",
            type: "whatsapp",
            active: true
        },
        {
            title: "Telegram",
            subtitle: "Chat Me Via Telegram",
            url: "https://t.me/abellayah",
            icon: "fab fa-telegram-plane",
            type: "telegram",
            active: true
        },
        {
            title: "Email",
            subtitle: "Send Me an Email",
            url: "mailto:contact@example.com",
            icon: "fas fa-envelope",
            type: "email",
            active: true
        }
    ],

    // ==================== TECH STACK ====================
    techStack: [
        {
            title: "JavaScript",
            subtitle: "Main Programming Language",
            url: "https://nodejs.org",
            icon: "fab fa-js",
            type: "javascript",
            active: true
        },
        {
            title: "Golang",
            subtitle: "Fast, Simple, Reliable.",
            url: "https://go.dev",
            icon: "fab fa-golang",
            type: "golang",
            active: true
        },
        {
            title: "Python",
            subtitle: "Favorite Language",
            url: "https://www.python.org",
            icon: "fab fa-python",
            type: "python",
            active: true
        }
    ],

    // ==================== PROJECTS ====================
    projects: [
        {
            title: "Taka's Channel Bot",
            description: "WhatsApp channel automation bot",
            url: "https://github.com/ayashiiiyo",
            tags: ["JavaScript", "Node.js", "WhatsApp"],
            icon: "fas fa-robot",
            color: "blue",       // blue | purple | pink | green | orange
            active: true
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio with dynamic config",
            url: "https://github.com/ayashiiiyo",
            tags: ["HTML", "CSS", "JavaScript"],
            icon: "fas fa-globe",
            color: "purple",
            active: true
        },
        {
            title: "Data Scraper",
            description: "Python web scraping tool",
            url: "https://github.com/ayashiiiyo",
            tags: ["Python", "BeautifulSoup", "Requests"],
            icon: "fas fa-database",
            color: "green",
            active: true
        }
    ],

    // ==================== SPOTIFY ====================
    spotify: {
        playlistId: "1VZFgPMg8zbfDBc730Zp5T",
        active: true,
        title: "Fav Song"
    },

    // ==================== FOOTER ====================
    footer: {
        text: "© Takashi - 2026",
        url: "https://me.ftk.pp.ua"
    },

    // ==================== SECTION TITLES ====================
    sections: {
        connect: "Connect with Me",
        contact: "Contact Me",
        techStack: "Tech Stack",
        projects: "Projects",
        spotify: "Fav Song"
    },

    // ==================== THEME COLORS ====================
    // Bisa diubah sesuai selera, tapi harus dalam format hex
    theme: {
        primaryBg: "#0a0a0a",
        secondaryBg: "#1a1a1a",
        cardBg: "#252525",
        accentColor: "#6366f1",
        verifiedColor: "#1d9bf0"
    }
};

// ==================== JANGAN EDIT YANG DI BAWAH INI ====================
// (Kecuali kamu tau yang kamu lakukan)

// Export config untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
