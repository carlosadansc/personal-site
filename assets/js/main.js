const translations = {
    en: {
        meta: {
            title: 'Carlos Sánchez — Software Developer',
            description: 'Carlos Sánchez — software developer building APIs, web apps, and practical digital products.'
        },
        language: 'Language',
        skip: 'Skip to content',
        nav: {
            projects: 'Projects',
            contact: 'Contact'
        },
        theme: {
            dark: 'dark',
            light: 'light',
            switchToDark: 'Switch to dark mode',
            switchToLight: 'Switch to light mode'
        },
        hero: {
            greeting: "Hey, I'm",
            role: 'A software developer based in La Paz BCS, México',
            intro: 'I build APIs, web apps, and practical digital products for teams and people with something to ship.'
        },
        actions: {
            email: 'Send email',
            cv: 'View CV'
        },
        projects: {
            title: 'Projects',
            intro: 'Selected work from the last few years, across products, websites, and web tools.',
            fullstack: 'Full-stack',
            webapp: 'Web app',
            startup: 'Startup',
            website: 'Website',
            productSite: 'Product site',
            landfinder: 'A land marketplace with a Node.js and Express API, MySQL, JWT auth, and Vue 2 frontend.',
            solar: 'Real estate website and quote system built with Vue.js and Firebase.',
            relmenu: 'Digital menus for restaurants with a Node.js API, MongoDB, JWT auth, and Vue 3.',
            async: 'Commercial website development for a branding and creative agency.',
            henko: 'Commercial real estate website and search experience with Vue.js and Node.js.'
        },
        about: {
            title: 'A bit about me',
            copy: "I'm Carlos Adán, a developer who enjoys understanding how things work and turning that understanding into useful software. My work moves between backend systems, database design, APIs, and frontend experiences."
        },
        stats: {
            years: 'years',
            experience: 'experience',
            complete: 'complete',
            projects: 'projects',
            companies: 'companies',
            workedWith: 'worked with'
        },
        social: {
            title: 'Find me on',
            intro: 'You can find me on the following platforms:',
            linkedin: 'LinkedIn',
            github: 'GitHub',
            twitter: 'X / Twitter'
        },
        contact: {
            title: 'Get in touch',
            intro: 'If you have a project, question, or good problem to solve, send me a note.',
            email: 'Email',
            location: 'Location'
        },
        footer: {
            built: 'Built with care.'
        }
    },
    es: {
        meta: {
            title: 'Carlos Sánchez — Desarrollador de software',
            description: 'Carlos Sánchez — desarrollador de software especializado en APIs, aplicaciones web y productos digitales prácticos.'
        },
        language: 'Idioma',
        skip: 'Saltar al contenido',
        nav: {
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        theme: {
            dark: 'oscuro',
            light: 'claro',
            switchToDark: 'Cambiar a modo oscuro',
            switchToLight: 'Cambiar a modo claro'
        },
        hero: {
            greeting: 'Hola, soy',
            role: 'Desarrollador de software radicado en La Paz, BCS, México',
            intro: 'Construyo APIs, aplicaciones web y productos digitales prácticos para equipos y personas que tienen algo que lanzar.'
        },
        actions: {
            email: 'Escríbeme',
            cv: 'Ver CV'
        },
        projects: {
            title: 'Proyectos',
            intro: 'Una selección de trabajos de los últimos años: productos, sitios y herramientas web.',
            fullstack: 'Full-stack',
            webapp: 'Aplicación web',
            startup: 'Startup',
            website: 'Sitio web',
            productSite: 'Sitio de producto',
            landfinder: 'Marketplace de terrenos con una API en Node.js y Express, MySQL, autenticación JWT y frontend en Vue 2.',
            solar: 'Sitio inmobiliario con sistema de cotización, construido con Vue.js y Firebase.',
            relmenu: 'Menús digitales para restaurantes, con API en Node.js, MongoDB, autenticación JWT y Vue 3.',
            async: 'Desarrollo del sitio comercial para una agencia de branding y creatividad.',
            henko: 'Sitio inmobiliario comercial y buscador desarrollado con Vue.js y Node.js.'
        },
        about: {
            title: 'Un poco sobre mí',
            copy: 'Soy Carlos Adán, desarrollador. Me gusta entender cómo funcionan las cosas y convertir ese entendimiento en software útil. Mi trabajo se mueve entre sistemas backend, diseño de bases de datos, APIs y experiencias frontend.'
        },
        stats: {
            years: 'años',
            experience: 'de experiencia',
            complete: 'proyectos',
            projects: 'terminados',
            companies: 'empresas',
            workedWith: 'con las que trabajé'
        },
        social: {
            title: 'Encuéntrame en',
            intro: 'También puedes encontrarme en:',
            linkedin: 'LinkedIn',
            github: 'GitHub',
            twitter: 'X / Twitter'
        },
        contact: {
            title: 'Hablemos',
            intro: 'Si tienes un proyecto, una pregunta o un buen problema por resolver, escríbeme.',
            email: 'Correo',
            location: 'Ubicación'
        },
        footer: {
            built: 'Hecho con cuidado.'
        }
    }
}

const themeToggle = document.querySelector('[data-theme-toggle]')
const themeLabel = document.querySelector('[data-theme-label]')
const themeIcon = document.querySelector('[data-theme-icon]')
const languageLabel = document.querySelector('[data-language-label]')
const languageButtons = document.querySelectorAll('[data-language]')
const yearLabel = document.querySelector('[data-year]')
const storedLanguage = window.localStorage.getItem('carlos-language')
const storedTheme = window.localStorage.getItem('carlos-theme')
let currentLanguage = storedLanguage === 'es' ? 'es' : 'en'
let currentTheme = storedTheme === 'dark' ? 'dark' : 'light'

function getCopy(key) {
    return key.split('.').reduce((copy, part) => copy && copy[part], translations[currentLanguage])
}

function setTheme(theme) {
    const isDark = theme === 'dark'
    currentTheme = isDark ? 'dark' : 'light'
    document.body.dataset.theme = currentTheme
    themeIcon.classList.toggle('hgi-moon-02', !isDark)
    themeIcon.classList.toggle('hgi-sun-03', isDark)
    themeToggle.setAttribute('aria-label', isDark ? getCopy('theme.switchToLight') : getCopy('theme.switchToDark'))
    themeLabel.textContent = isDark ? getCopy('theme.light') : getCopy('theme.dark')
}

function applyLanguage(language) {
    currentLanguage = translations[language] ? language : 'en'
    document.documentElement.lang = currentLanguage
    document.title = getCopy('meta.title')
    document.querySelector('#meta-description').setAttribute('content', getCopy('meta.description'))

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const copy = getCopy(element.dataset.i18n)
        if (copy) element.textContent = copy
    })

    document.querySelectorAll('[data-alt-en]').forEach((image) => {
        image.alt = currentLanguage === 'es' ? image.dataset.altEs : image.dataset.altEn
    })

    languageLabel.setAttribute('aria-label', getCopy('language'))
    languageButtons.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage))
    })

    setTheme(currentTheme)
    window.localStorage.setItem('carlos-language', currentLanguage)
}

themeToggle.addEventListener('click', () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
    window.localStorage.setItem('carlos-theme', currentTheme)
})

languageButtons.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language))
})

yearLabel.textContent = new Date().getFullYear()
applyLanguage(currentLanguage)
