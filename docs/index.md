---
layout: home

hero:
  name: SRE Science
  tagline: Defining SRE.

  actions:
    - theme: brand
      text: Articles
      link: /articles/
    - theme: brand
      text: Documentation
      link: /documentation/
    - theme: alt
      text: View on GitHub
      link: https://github.com/pepedocs/srescience

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
  ]
}

---
