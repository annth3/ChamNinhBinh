import { useState, useEffect, useCallback } from 'react';

export type AppRoute =
  | { view: 'home'; filterSaved?: boolean }
  | { view: 'site'; slug: string; jumpToAudio?: boolean }
  | { view: 'about' };

function parseLocation(): AppRoute {
  const { pathname, search, hash } = window.location;
  const params = new URLSearchParams(search);
  const querySite = params.get('site');
  if (querySite) {
    return { view: 'site', slug: querySite, jumpToAudio: hash === '#audio-guide' };
  }

  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  if (normalizedPath.startsWith('/dia-diem/')) {
    const slug = decodeURIComponent(normalizedPath.slice('/dia-diem/'.length));
    if (slug) return { view: 'site', slug, jumpToAudio: hash === '#audio-guide' };
  }
  if (
    normalizedPath === '/gioi-thieu' ||
    normalizedPath === '/quy-trinh-stem' ||
    hash === '#/gioi-thieu' ||
    hash === '#/quy-trinh-stem'
  ) {
    return { view: 'about' };
  }
  if (hash.startsWith('#/dia-diem/')) {
    const slug = decodeURIComponent(hash.slice('#/dia-diem/'.length));
    if (slug) return { view: 'site', slug };
  }
  return { view: 'home', filterSaved: params.get('saved') === '1' };
}

export function useRouter() {
  const [route, setRoute] = useState<AppRoute>(() => parseLocation());

  useEffect(() => {
    const onPopState = () => {
      setRoute(parseLocation());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string, scrollTop = true) => {
    const current = window.location.pathname + window.location.search + window.location.hash;
    if (current !== to) {
      window.history.pushState({}, '', to);
    }
    setRoute(parseLocation());
    if (scrollTop) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  const goHome = useCallback(
    (filterSaved = false) => {
      navigate(filterSaved ? '/?saved=1' : '/');
    },
    [navigate]
  );

  const goToSite = useCallback(
    (slug: string, jumpToAudio = false) => {
      navigate(
        jumpToAudio
          ? `/dia-diem/${encodeURIComponent(slug)}#audio-guide`
          : `/dia-diem/${encodeURIComponent(slug)}`,
        !jumpToAudio
      );
    },
    [navigate]
  );

  const goToAbout = useCallback(() => {
    navigate('/gioi-thieu');
  }, [navigate]);

  return { route, goHome, goToSite, goToAbout };
}
