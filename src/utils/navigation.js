/**
 * Universal Navigation and Routing Utility for SkyTech
 * Compatible with both local dev server ('npm run dev') and GitHub Pages deployment.
 */

export function getBasePath() {
  // If hosted on GitHub Pages (e.g., https://patelharshid.github.io/skytech-frontend/)
  if (typeof window !== 'undefined' && window.location.hostname.endsWith('github.io')) {
    const repoSegment = window.location.pathname.split('/')[1];
    return repoSegment ? `/${repoSegment}` : '';
  }
  return '';
}

export function getRoute() {
  if (typeof window === 'undefined') return '/';

  // 1. Check hash route first (e.g. #/about-us or #/services)
  const hash = window.location.hash || '';
  if (hash.startsWith('#/')) {
    const cleanHash = hash.slice(1).replace(/\/$/, '') || '/';
    return cleanHash;
  }

  // 2. Check query string redirect (from GitHub Pages 404 SPA handler: ?/about-us)
  const search = window.location.search || '';
  if (search.startsWith('?/')) {
    const cleanSearch = search.slice(1).split('&')[0].replace(/\/$/, '') || '/';
    return cleanSearch;
  }

  // 3. Normalize pathname (strip repo subfolder if present)
  let path = window.location.pathname || '/';
  const basePath = getBasePath();
  if (basePath && path.startsWith(basePath)) {
    path = path.slice(basePath.length) || '/';
  }

  // Match known application routes
  if (path.includes('/contact-us')) return '/contact-us';
  if (path.includes('/about-us')) return '/about-us';
  if (path.includes('/services')) return '/services';

  const prodMatch = path.match(/\/product\/([^/]+)/);
  if (prodMatch) return `/product/${decodeURIComponent(prodMatch[1])}`;

  return path || '/';
}

export function navigateTo(targetPath) {
  if (typeof window === 'undefined' || !targetPath) return;

  const basePath = getBasePath();

  // If path is a section anchor: e.g. "/#hero", "/#catalog", "/#shop", or "#catalog"
  if (targetPath.includes('#') && !targetPath.includes('#/')) {
    const hashId = targetPath.split('#')[1];
    const currentRoute = getRoute();

    // If already on home page, smoothly scroll directly
    if (currentRoute === '/') {
      const el = document.getElementById(hashId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `${basePath}/#${hashId}`);
        return;
      }
    }

    // Otherwise navigate to home page anchor
    const fullUrl = `${basePath}/${hashId ? '#' + hashId : ''}`;
    window.history.pushState(null, '', fullUrl);
    window.dispatchEvent(new Event('app-location-change'));

    setTimeout(() => {
      const el = document.getElementById(hashId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
    return;
  }

  // Internal route (e.g. /about-us, /services, /contact-us, /product/123)
  const cleanTarget = targetPath.startsWith('/') ? targetPath : `/${targetPath}`;
  const fullUrl = `${basePath}${cleanTarget}`;
  window.history.pushState(null, '', fullUrl);
  window.dispatchEvent(new Event('app-location-change'));
  window.scrollTo(0, 0);
}
