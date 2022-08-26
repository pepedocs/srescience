export default {
  title: 'srescience',
  description: 'Site-Reliability Engineering Science',
  themeConfig: {
    nav: [
      { text: "Home", link: "index"},
      { text: "Documentation", link: "/documentation/"}
    ],
    sidebar: {
      '/documentation/': [
        {
          text: 'Overview',
          items: [
            { text: 'What is SRE Science?', link: '/documentation/'},
            { text: 'Thesis', link: '/documentation/thesis'},
            { text: 'Rationale', link: '/documentation/rationale'},
            { text: 'Goals', link: '/documentation/goals'}
          ]
        },
        {
          text: 'Service',
          items: [
            { text: 'What is a Service?', link: '/documentation/service'},
            { text: 'Service State', link: '/documentation/service-state'},
            { text: 'Service Variable', link: '/documentation/service-variable'},
            { text: 'Service Variable Acceptability', link: '/documentation/service-variable-acceptability'},
            { text: 'Service State Transition', link: '/documentation/service-state-transition'},
            { text: 'Service Modifier', link: '/documentation/service-modifier'}
          ]
        },
        {
          text: "Derivatives",
          items: [
            { text: 'Observability', link: '/documentation/observability' },
            { text: 'Monitoring', link: '/documentation/monitoring' }
          ]
        },
        {
          text: "About",
          items: [
            { text: 'Author', link: '/documentation/author' },
            { text: 'Discussion', link: '/documentation/discuss' }
          ]
        }
      ]
    }
  }
}
