export default {
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
      ]
    ],
    themeConfig: {
      socialLinks: [
        { icon: 'linkedin', link: 'https://www.linkedin.com/in/josegavinecueto/' },
        { icon: 'github', link: 'https://github.com/pepedocs/srescience' },
      ]
    }    
  }
  

