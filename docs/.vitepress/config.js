export default {
  title: 'srescience',
  description: 'Site-Reliability Engineering Science',
  themeConfig: {
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
            { text: 'What is service reliability?', link: '/articles/what-is-service-reliability' }
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
            { text: 'Observability', link: '/documentation/observability' },
            { text: 'Monitoring', link: '/documentation/monitoring' }
          ]
        }
      ]
    }
  }
}
