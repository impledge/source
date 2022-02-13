export default {
  github: 'https://github.com/useSource/',
  docsRepositoryBase: 'https://github.com/useSource/source/blob/master/docs/pages',
  titleSuffix: ' – Source Project',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">useSource</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Source Project
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Source Project documentation" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © useSource, LLC. Source Project.</>,
  unstable_faviconGlyph: '👋',
}
