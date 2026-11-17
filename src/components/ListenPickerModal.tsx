import { useEffect } from 'react';
import { X, Volume2, ArrowRight } from 'lucide-react';
import type { HeritageSite, Language } from '../types/heritage';
import { uiText } from '../data/uiTranslations';
import { ResilientImage } from './ResilientImage';

interface ListenPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  sites: HeritageSite[];
  uiLang: Language;
  onPickSite: (slug: string) => void;
}

export function ListenPickerModal({
  isOpen,
  onClose,
  sites,
  uiLang,
  onPickSite,
}: ListenPickerModalProps) {
  const t = uiText[uiLang];

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="listen-modal-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#0F1E16]/65 p-3 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-[#DDD5C3] bg-[#FAF8F2] p-5 text-[#16211B] shadow-xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#E3DDD0] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#2D6A5B]">
              <Volume2 className="h-4 w-4 text-[#C6923A]" aria-hidden="true" />
              <span>{t.bilingualAudioLabel}</span>
            </div>
            <h2
              id="listen-modal-title"
              className="mt-1 font-display text-xl font-semibold text-[#1B4332] sm:text-2xl"
            >
              {t.listenModalTitle}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-[#4A554E]">{t.listenModalDesc}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg text-[#4A554E] hover:bg-[#EBE6DA] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4332]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <ul className="mt-4 space-y-2.5">
          {sites.map((site) => {
            const cover = site.photos.find((p) => p.id === site.coverPhotoId) || site.photos[0];
            return (
              <li key={site.id}>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onPickSite(site.slug);
                  }}
                  className="group flex w-full items-center gap-3.5 rounded-xl border border-[#E3DDD0] bg-white p-3 text-left transition-colors hover:border-[#2D6A5B] hover:bg-[#F4F7F4] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4332]"
                >
                  <div className="h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-[#EBE6DA]">
                    <ResilientImage
                      src={cover.src}
                      alt={cover.alt[uiLang]}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-base font-semibold text-[#16211B] group-hover:text-[#1B4332]">
                      {site.name[uiLang]}
                    </p>
                    <p className="mt-0.5 line-clamp-1 text-xs text-[#5A665E]">
                      {site.audio.toneDescription[uiLang]}
                    </p>
                    <p className="mt-1 text-[11px] font-medium tabular-nums text-[#2D6A5B]">
                      {site.audio.estimatedDuration[uiLang]}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-[#1B4332] px-3 py-2 text-xs font-semibold text-[#FAF8F2] transition-colors group-hover:bg-[#2D6A5B]">
                    <span className="hidden sm:inline">{t.listenModalOpenAction}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
