// ==================== KONFIGURASI WEBSITE ====================
// Semua pengaturan website ada di sini, tinggal edit aja!

const CONFIG = {
    // ==================== PROFILE INFO ====================
    profile: {
        name: "Hiura",
        bio: "he/she?",
        avatar: "https://d.uguu.se/NAToJXse.jpg",
        verified: true// Set false kalau ga mau tanda verified
    },

    // ==================== SOCIAL MEDIA ====================
    socialMedia: {
        instagram: {
            url: "https://www.instagram.com/bellatakaa",
            active: false
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
            active: false
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
            subtitle: "Core Programming Language",
            url: "https://nodejs.org",
            icon: "fab fa-js",
            type: "javascript",
            active: true
        },
        {
            title: "Node.js",
            subtitle: "JavaScript Runtime for Backend.",
            url: "https://go.dev",
            icon: "fab fa-node-js",
            type: "golang",
            active: true
        },
        {
            title: "Express.js",
            subtitle: "Lightweight Backend Framework.",
            url: "https://www.python.org",
            icon: "fas fa-server",
            type: "python",
            active: true
        }
    ],

    // ==================== SPOTIFY ====================
    spotify: {
        playlistId: "6b4vOjVdGV7N1yDU9fnXn1",
        active: true,
        title: "Fav Song"
    },

    // ==================== FOOTER ====================
    footer: {
        text: "© Lumina - 2026",
        url: "https://me.ftk.pp.ua"
    },

    // ==================== SECTION TITLES ====================
    sections: {
        connect: "Connect with Me",
        contact: "Contact Me",
        techStack: "Tech Stack",
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
