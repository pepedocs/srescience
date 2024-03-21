
export default {
  lastUpdated: true,
  sitemap: {
    hostname: 'https://srescience.com',
    lastmodDateOnly: false
  },  
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-55B4X6Y17Y' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-55B4X6Y17Y');`
    ],
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]
  ],  
  title: 'srescience',
  description: 'Site-Reliability Engineering Science',
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/josegavinecueto/' },
      { icon: 'github', link: 'https://github.com/pepedocs/srescience' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'cool link'
      }
    ],
    editLink: {
      pattern: 'https://github.com/pepedocs/srescience/edit/main/docs/:path',
      text: 'Edit this page on Github'
    },
    nav: [
      { text: "Home", link: "/"},
      { text: "Articles", link: "/articles/"},
      { text: "Documentation", link: "/documentation/"},
      { text: "About", link: "/about/" }
    ],
    sidebar: {
      '/articles/': [
        {
         text: 'Articles',
          items: [
            { text: 'What is service reliability?', link: '/articles/what-is-service-reliability' },
          ]
        }
      ],
      '/about/': [
        {
         text: 'About',
          items: [
            { text: 'Author', link: '/about/' }
          ]
        }
      ],
      '/documentation/': [
        {
          text: 'Overview',
          items: [
            { text: 'What is SRE Science?', link: '/documentation/'},
            { text: 'Thesis', link: '/documentation/thesis'},
            { text: 'Rationale', link: '/documentation/rationale'},
            { text: 'Goals', link: '/documentation/goals'},
            { text: 'Conventions', link: '/documentation/conventions'}
          ]
        },
        {
          text: 'Service',
          items: [
            { text: 'What is a Service?', link: '/documentation/service'},
            { text: 'Service State', link: '/documentation/service-state'},
            { text: 'Service Variable', link: '/documentation/service-variable'},
            { text: 'Service Modifier', link: '/documentation/service-modifier'}
          ]
        },
        {
          text: "Derivatives",
          items: [
            { text: 'Methods of Service State Consumption', link: '/documentation/methods-of-service-state-consumption' },
            { text: 'Observability', link: '/documentation/observability' },
            { text: 'Monitoring', link: '/documentation/monitoring' }
          ]
        }
      ]
    }
  }
}


