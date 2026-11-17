import type { Language } from '../types/heritage';
import { uiText } from '../data/uiTranslations';

interface FooterProps {
  uiLang: Language;
  onGoAbout: () => void;
}

export function Footer({ uiLang, onGoAbout }: FooterProps) {
  const t = uiText[uiLang];

  return (
    <footer className="mt-14 border-t border-[#E3DDD0] bg-[#F2EFE7]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-[#4A554E] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-1">
          <p className="font-display text-sm font-semibold text-[#1B4332]">{t.brandName}</p>
          <p className="max-w-2xl leading-relaxed">{t.footerNote}</p>
        </div>
        <a
          href="/gioi-thieu"
          onClick={(e) => {
            e.preventDefault();
            onGoAbout();
          }}
          className="inline-flex min-h-[44px] items-center font-semibold text-[#1B4332] underline decoration-[#C6923A] underline-offset-4 hover:text-[#2D6A5B] whitespace-nowrap shrink-0"
        >
          {t.footerAboutLink}
        </a>
      </div>
    </footer>
  );
}
