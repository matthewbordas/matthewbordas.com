module.exports = {
  pathPrefix: '',
  siteUrl: 'https://matthewbordas.com',
  siteTitle: 'Matthew Bordas',
  siteDescription: 'Personal website of Matthew Bordas',
  author: 'Matthew Bordas',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || '',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/matthewbordas',
    github: 'https://github.com/matthewbordas',
    twitter: 'https://twitter.com/mattbordas'
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/aa3b6fd5-55c3-4860-a1d3-695855254e35',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'G-QKVBZH9DBR'
};
