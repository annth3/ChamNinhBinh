import { useState, useEffect, useCallback } from 'react';
import { Expand, X, ChevronLeft, ChevronRight, ExternalLink, Info } from 'lucide-react';
import type { HeritagePhoto, Language, LocalizedText } from '../types/heritage';
import { uiText } from '../data/uiTranslations';
import { ResilientImage } from './ResilientImage';

interface PhotoGalleryProps {
  photos: HeritagePhoto[];
  uiLang: Language;
  photoGoalNote?: LocalizedText;
}

export function PhotoGallery({ photos, uiLang, photoGoalNote }: PhotoGalleryProps) {
  const t = uiText[uiLang];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((idx) => (idx === null ? null : (idx - 1 + photos.length) % photos.length));
  }, [photos.length]);
  const showNext = useCallback(() => {
    setActiveIndex((idx) => (idx === null ? null : (idx + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, close, showPrev, showNext]);

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <section aria-labelledby="gallery-heading" className="space-y-4">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="gallery-heading" className="font-display text-2xl font-semibold text-[#16211B]">
            {t.galleryTitle}
          </h2>
          <p className="mt-1 text-sm text-[#5A665E]">{t.galleryHint}</p>
        </div>
        <span className="text-xs font-medium tabular-nums text-[#2D6A5B]">
          {photos.length} {uiLang === 'vi' ? 'ảnh thực tế đã kiểm chứng' : 'verified photos'}
        </span>
      </div>

      {/* Responsive Photo Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <figure
            key={photo.id}
            className="flex flex-col overflow-hidden rounded-xl border border-[#E3DDD0] bg-white"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${uiLang === 'vi' ? 'Phóng to ảnh' : 'Enlarge photo'}: ${photo.caption[uiLang]}`}
              className="group relative aspect-[4/3] w-full overflow-hidden bg-[#EBE6DA] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1B4332]"
            >
              <ResilientImage
                src={photo.src}
                alt={photo.alt[uiLang]}
                loading={index < 3 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-lg bg-[#11231A]/75 text-[#FAF8F2] backdrop-blur-xs transition-colors group-hover:bg-[#1B4332]">
                <Expand className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
            <figcaption className="flex flex-1 flex-col justify-between gap-2 p-3.5 text-xs">
              <p className="leading-relaxed text-[#2D3A33]">{photo.caption[uiLang]}</p>
              <p className="text-[11px] text-[#66726A]">
                {t.photoAuthor}: {photo.author} · {photo.license}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {photoGoalNote && (
        <div className="flex items-start gap-2.5 rounded-xl border border-[#DFC48C] bg-[#FDF8EC] p-4 text-xs leading-relaxed text-[#574115]">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C6923A]" aria-hidden="true" />
          <p>{photoGoalNote[uiLang]}</p>
        </div>
      )}

      {/* Lightbox Modal preserving natural aspect ratio */}
      {activePhoto && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption[uiLang]}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0F1E16]/95 p-4 text-[#FAF8F2] sm:p-6"
          onClick={close}
        >
          <div
            className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs font-medium tabular-nums text-[#D4CCB8]">
              {activeIndex + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label={t.close}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 text-sm font-medium text-white hover:bg-white/20 cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              <span>{t.close}</span>
            </button>
          </div>

          <div
            className="relative mx-auto my-3 flex min-h-0 w-full max-w-5xl flex-1 items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={showPrev}
              aria-label={t.photoPrev}
              className="absolute left-1 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white hover:bg-black/80 cursor-pointer focus-visible:outline-2 focus-visible:outline-white sm:left-3"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>

            <img
              src={activePhoto.src}
              alt={activePhoto.alt[uiLang]}
              referrerPolicy="no-referrer"
              className="max-h-[68vh] max-w-full rounded-lg object-contain"
            />

            <button
              type="button"
              onClick={showNext}
              aria-label={t.photoNext}
              className="absolute right-1 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white hover:bg-black/80 cursor-pointer focus-visible:outline-2 focus-visible:outline-white sm:right-3"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div
            className="mx-auto w-full max-w-3xl rounded-xl border border-white/15 bg-black/40 p-4 text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-medium text-white">{activePhoto.caption[uiLang]}</p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#D4CCB8]">
              <span>
                {t.photoAuthor}: {activePhoto.author}
              </span>
              <span>
                {t.photoLicense}:{' '}
                <a
                  href={activePhoto.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  {activePhoto.license}
                </a>
              </span>
              <a
                href={activePhoto.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline hover:text-white"
              >
                <span>{t.photoOpenSource}</span>
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
