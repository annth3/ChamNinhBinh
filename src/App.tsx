import { useState, useEffect } from 'react';
import type { Language } from './types/heritage';
import { heritageSites } from './data/heritageData';
import { useSavedSites } from './hooks/useSavedSites';
import { useRouter } from './hooks/useRouter';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { SiteDetailPage } from './components/SiteDetailPage';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';

const UI_LANG_KEY = 'cham_ninh_binh_ui_lang_v1';

export default function App() {
  const [uiLang, setUiLang] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem(UI_LANG_KEY);
      return saved === 'en' ? 'en' : 'vi';
    } catch {
      return 'vi';
    }
  });

  const { route, goHome, goToSite, goToAbout } = useRouter();
  const { savedIds, isSaved, toggleSave } = useSavedSites();

  useEffect(() => {
    document.documentElement.lang = uiLang;
    try {
      window.localStorage.setItem(UI_LANG_KEY, uiLang);
    } catch {
      // Ignore storage error
    }
  }, [uiLang]);

  const toggleUiLang = () => {
    setUiLang((prev) => (prev === 'vi' ? 'en' : 'vi'));
  };

  const activeSite =
    route.view === 'site'
      ? heritageSites.find((s) => s.slug === route.slug || s.id === route.slug)
      : undefined;

  // Keep browser <title> synced cleanly with exact casing "chạm Ninh Bình"
  useEffect(() => {
    if (activeSite) {
      document.title = `${activeSite.name[uiLang]} — chạm Ninh Bình`;
    } else if (route.view === 'about') {
      document.title =
        uiLang === 'vi' ? 'Giới thiệu — chạm Ninh Bình' : 'About — chạm Ninh Bình';
    } else {
      document.title =
        uiLang === 'vi'
          ? 'chạm Ninh Bình — Chạm một điểm đến – Nghe một câu chuyện'
          : 'chạm Ninh Bình — Touch a destination – Hear a story';
    }
  }, [activeSite, route.view, uiLang]);

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F2] text-[#16211B]">
      <Header
        uiLang={uiLang}
        onToggleUiLang={toggleUiLang}
        currentView={route.view}
        filterSavedActive={route.view === 'home' && Boolean(route.filterSaved)}
        savedCount={savedIds.length}
        onGoHome={goHome}
        onGoAbout={goToAbout}
      />

      <main className="flex-1">
        {route.view === 'about' ? (
          <AboutPage uiLang={uiLang} onBack={() => goHome(false)} />
        ) : route.view === 'site' && activeSite ? (
          <SiteDetailPage
            site={activeSite}
            uiLang={uiLang}
            isSaved={isSaved(activeSite.id)}
            jumpToAudio={Boolean(route.jumpToAudio)}
            onToggleSave={() => toggleSave(activeSite.id)}
            onBack={() => goHome(false)}
          />
        ) : route.view === 'site' && !activeSite ? (
          <div className="mx-auto max-w-xl px-4 py-16 text-center">
            <h1 className="font-display text-2xl font-semibold text-[#16211B]">
              {uiLang === 'vi' ? 'Không tìm thấy điểm đến' : 'Destination not found'}
            </h1>
            <p className="mt-2 text-sm text-[#4A554E]">
              {uiLang === 'vi'
                ? 'Đường dẫn không khớp với năm điểm đến hiện có trong chạm Ninh Bình.'
                : 'This link does not match one of the five destinations currently featured in chạm Ninh Bình.'}
            </p>
            <button
              type="button"
              onClick={() => goHome(false)}
              className="mt-5 inline-flex min-h-[44px] items-center rounded-xl bg-[#1B4332] px-5 py-2 text-sm font-semibold text-[#FAF8F2] hover:bg-[#2D6A5B] cursor-pointer"
            >
              {uiLang === 'vi' ? 'Quay lại trang chủ' : 'Return to home'}
            </button>
          </div>
        ) : (
          <HomePage
            sites={heritageSites}
            uiLang={uiLang}
            initialFilterSaved={route.view === 'home' && Boolean(route.filterSaved)}
            isSaved={isSaved}
            onToggleSave={toggleSave}
            onSelectSite={goToSite}
            onGoAbout={goToAbout}
          />
        )}
      </main>

      <Footer uiLang={uiLang} onGoAbout={goToAbout} />
    </div>
  );
}
