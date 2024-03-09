export default {
    head: [
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=TAG_ID' }
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-N23059QR4Z');`
      ]
    ]
  }
  