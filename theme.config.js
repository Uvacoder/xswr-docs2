export default {
  github: 'https://github.com/hazae41/xswr',
  docsRepositoryBase: 'https://github.com/hazae41/xswr-docs',
  titleSuffix: " – XSWR",
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        xswr
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Yet another React data (re)fetching library
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="XSWR: Yet another React data (re)fetching library" />
      <meta name="og:description" content="XSWR: Yet another React data (re)fetching library" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://xswr.hazae41.me/og.png" />
      <meta name="twitter:site:domain" content="xswr.hazae41.me" />
      <meta name="twitter:url" content="https://xswr.hazae41.me" />
      <meta name="og:title" content="Yet another React data (re)fetching library" />
      <meta name="og:image" content="https://xswr.hazae41.me/og.png" />
      <meta name="apple-mobile-web-app-title" content="XSWR" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © XSWR.</>,
  unstable_faviconGlyph: '👋',
}
