import type { Language } from '../types/heritage';
import { uiText } from '../data/uiTranslations';

interface HeaderProps {
  uiLang: Language;
  onToggleUiLang: () => void;
  currentView: 'home' | 'site' | 'about';
  filterSavedActive?: boolean;
  savedCount: number;
  onGoHome: (filterSaved?: boolean) => void;
  onGoAbout: () => void;
}

export function Header({
  uiLang,
  onToggleUiLang,
  currentView,
  filterSavedActive = false,
  savedCount,
  onGoHome,
  onGoAbout,
}: HeaderProps) {
  const t = uiText[uiLang];

  return (
    <header className="sticky top-0 z-40 border-b border-[#E3DDD0] bg-[#FAF8F2]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-6 sm:px-6">
        {/* Brand wordmark — exact casing "chạm Ninh Bình", never uppercase */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onGoHome(false);
          }}
          className="font-display text-base font-semibold tracking-tight text-[#1B4332] whitespace-nowrap shrink-0 sm:text-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B4332]"
        >
          {t.brandName}
        </a>

        {/* Primary navigation links — scrollable cleanly if narrow mobile */}
        <nav
          aria-label={uiLang === 'vi' ? 'Điều hướng chính' : 'Primary navigation'}
          className="flex min-w-0 items-center gap-3 overflow-x-auto text-xs font-medium text-[#4A554E] sm:gap-7 sm:text-sm"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onGoHome(false);
            }}
            className={`min-h-[44px] flex items-center whitespace-nowrap shrink-0 border-b-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] ${
              currentView === 'home' && !filterSavedActive
                ? 'border-[#1B4332] text-[#1B4332]'
                : 'border-transparent hover:text-[#16211B]'
            }`}
          >
            {t.navExplore}
          </a>
          <a
            href="/?saved=1"
            onClick={(e) => {
              e.preventDefault();
              onGoHome(true);
            }}
            className={`min-h-[44px] flex items-center whitespace-nowrap shrink-0 border-b-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] ${
              currentView === 'home' && filterSavedActive
                ? 'border-[#1B4332] text-[#1B4332]'
                : 'border-transparent hover:text-[#16211B]'
            }`}
          >
            <span className="hidden sm:inline">{t.navSaved}</span>
            <span className="sm:hidden">{uiLang === 'vi' ? 'Yêu thích' : 'Saved'}</span>
            <span className="ml-1 tabular-nums text-[11px] text-[#66726A] sm:text-xs">
              ({savedCount})
            </span>
          </a>
          <a
            href="/gioi-thieu"
            onClick={(e) => {
              e.preventDefault();
              onGoAbout();
            }}
            className={`min-h-[44px] flex items-center whitespace-nowrap shrink-0 border-b-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] ${
              currentView === 'about'
                ? 'border-[#1B4332] text-[#1B4332]'
                : 'border-transparent hover:text-[#16211B]'
            }`}
          >
            {t.navAbout}
          </a>
        </nav>

        {/* VI / EN language toggle */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={onToggleUiLang}
            aria-label={t.langToggleLabel}
            className="min-h-[40px] min-w-[68px] rounded-lg border border-[#D4CCB8] bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-[#1B4332] transition-colors hover:border-[#1B4332] hover:bg-[#F2EFE7] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
          >
            <span
              className={
                uiLang === 'vi'
                  ? 'text-[#1B4332] underline decoration-[#C6923A] decoration-2 underline-offset-4'
                  : 'text-[#738077]'
              }
            >
              VI
            </span>
            <span className="mx-1.5 text-[#C8C0AE]" aria-hidden="true">
              /
            </span>
            <span
              className={
                uiLang === 'en'
                  ? 'text-[#1B4332] underline decoration-[#C6923A] decoration-2 underline-offset-4'
                  : 'text-[#738077]'
              }
            >
              EN
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
