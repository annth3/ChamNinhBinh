import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Heart,
  Share2,
  QrCode,
  Check,
  MapPin,
  ShieldCheck,
  Camera,
  ExternalLink,
  AlertTriangle,
  Headphones,
  Info,
} from 'lucide-react';
import type { HeritageSite, Language } from '../types/heritage';
import { uiText } from '../data/uiTranslations';
import { AudioGuidePlayer } from './AudioGuidePlayer';
import { PhotoGallery } from './PhotoGallery';
import { ShareAndQrModal } from './ShareAndQrModal';
import { ResilientImage } from './ResilientImage';

interface SiteDetailPageProps {
  site: HeritageSite;
  uiLang: Language;
  isSaved: boolean;
  jumpToAudio?: boolean;
  onToggleSave: () => void;
  onBack: () => void;
}

export function SiteDetailPage({
  site,
  uiLang,
  isSaved,
  jumpToAudio = false,
  onToggleSave,
  onBack,
}: SiteDetailPageProps) {
  const t = uiText[uiLang];
  const [qrOpen, setQrOpen] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const [manualCopyUrl, setManualCopyUrl] = useState<string | null>(null);

  const coverPhoto = site.photos.find((p) => p.id === site.coverPhotoId) || site.photos[0];

  useEffect(() => {
    if (jumpToAudio) {
      const el = document.getElementById('audio-guide');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
      }
    }
  }, [jumpToAudio, site.id]);

  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/dia-diem/${site.slug}`
      : `/dia-diem/${site.slug}`;

  const handleShareCopy = async () => {
    setManualCopyUrl(null);
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
        setCopiedToast(true);
        setTimeout(() => setCopiedToast(false), 3000);
        return;
      }
      setManualCopyUrl(shareUrl);
    } catch {
      setManualCopyUrl(shareUrl);
    }
  };

  const scrollToAudio = () => {
    const el = document.getElementById('audio-guide');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <article>
      {/* A. Opening Hero with large real panorama photograph */}
      <section className="relative overflow-hidden bg-[#122B20]">
        <div className="relative min-h-[380px] w-full sm:min-h-[460px]">
          <img
            src={coverPhoto.src}
            alt={coverPhoto.alt[uiLang]}
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0D2118]/94 via-[#0D2118]/60 to-[#0D2118]/30"
          />

          <div className="relative z-10 mx-auto flex min-h-[380px] max-w-5xl flex-col justify-between px-4 py-6 sm:min-h-[460px] sm:px-6 sm:py-9">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={onBack}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0F241A]/65 px-3.5 py-2 text-sm font-semibold text-[#FAF8F2] backdrop-blur-xs transition-colors hover:bg-[#1B4332] cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                <span>{t.backToList}</span>
              </button>
            </div>

            <div className="mt-8 max-w-3xl">
              <p className="text-xs font-semibold tracking-wide text-[#E7C679]">
                {site.categories[uiLang].join(' · ')}
              </p>
              <h1 className="mt-2 font-display text-3xl font-semibold text-[#FAF8F2] text-balance sm:text-5xl">
                {site.name[uiLang]}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#E9E6DC] sm:text-base">
                {site.shortTagline[uiLang]}
              </p>

              {/* Primary detail action bar: Listen, Favorite, Share, QR */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={scrollToAudio}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#D4A853] px-4 py-2 text-sm font-semibold text-[#13261D] transition-colors hover:bg-[#E1B96B] whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Headphones className="h-4 w-4" aria-hidden="true" />
                  <span>{t.listenJumpButton}</span>
                </button>

                <button
                  type="button"
                  onClick={onToggleSave}
                  aria-pressed={isSaved}
                  className={`inline-flex min-h-[44px] items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold backdrop-blur-xs transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-white ${
                    isSaved
                      ? 'border-[#E7C679] bg-[#1B4332]/90 text-[#FAF8F2]'
                      : 'border-white/30 bg-[#0F241A]/65 text-[#FAF8F2] hover:bg-[#1B4332]/85'
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${isSaved ? 'fill-[#E7C679] text-[#E7C679]' : ''}`}
                    aria-hidden="true"
                  />
                  <span>{isSaved ? t.savedSite : t.saveSite}</span>
                </button>

                <button
                  type="button"
                  onClick={handleShareCopy}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/30 bg-[#0F241A]/65 px-4 py-2 text-sm font-semibold text-[#FAF8F2] backdrop-blur-xs transition-colors hover:bg-[#1B4332]/85 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
                >
                  {copiedToast ? (
                    <>
                      <Check className="h-4 w-4 text-[#E7C679]" aria-hidden="true" />
                      <span>{t.copiedSuccess}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-4 w-4" aria-hidden="true" />
                      <span>{t.shareButton}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setQrOpen(true)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/30 bg-[#0F241A]/65 px-4 py-2 text-sm font-semibold text-[#FAF8F2] backdrop-blur-xs transition-colors hover:bg-[#1B4332]/85 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
                >
                  <QrCode className="h-4 w-4" aria-hidden="true" />
                  <span>{t.qrOpenButton}</span>
                </button>
              </div>

              <p className="mt-4 text-[11px] text-[#E3DFD3]/80">
                {t.photoAuthor}: {coverPhoto.author} · {coverPhoto.license}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        {manualCopyUrl && (
          <div className="mb-6 rounded-xl border border-[#DFC48C] bg-[#FDF8EC] p-3.5 text-xs text-[#574115]">
            <p className="font-medium">{t.manualCopyHint}</p>
            <input
              type="text"
              readOnly
              value={manualCopyUrl}
              onFocus={(e) => e.currentTarget.select()}
              aria-label={t.qrTitle}
              className="mt-2 w-full rounded-lg border border-[#DFC48C] bg-white px-3 py-2 text-xs text-[#16211B]"
            />
          </div>
        )}

        {/* Location & Heritage/Nature Classification Metadata */}
        <dl className="grid grid-cols-1 gap-3 rounded-xl border border-[#E5DFD2] bg-[#F3EFE4] p-4 text-xs sm:grid-cols-2 sm:p-5 sm:text-sm">
          <div>
            <dt className="flex items-center gap-1.5 font-semibold text-[#1B4332]">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#2D6A5B]" aria-hidden="true" />
              <span>{uiLang === 'vi' ? 'Vị trí hành chính' : 'Administrative location'}</span>
            </dt>
            <dd className="mt-1 leading-relaxed text-[#2D3A33]">
              {site.administrativeLocation[uiLang]}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[#1B4332]">
              {uiLang === 'vi' ? 'Đặc trưng & ghi nhận' : 'Classification & Status'}
            </dt>
            <dd className="mt-1 leading-relaxed text-[#2D3A33]">
              {site.heritageStatus[uiLang]}
            </dd>
          </div>
        </dl>

        {site.distinctionNote && (
          <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-[#DFC48C] bg-[#FDF8EC] p-4 text-xs leading-relaxed text-[#574115] sm:text-sm">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#C6923A]" aria-hidden="true" />
            <p>{site.distinctionNote[uiLang]}</p>
          </div>
        )}

        <div className="mt-8 space-y-12">
          {/* Audio Narration Player */}
          <AudioGuidePlayer site={site} uiLang={uiLang} />

          {/* C. Destination Story WITH interspersed real photos */}
          <section aria-labelledby="story-heading" className="border-t border-[#E3DDD0] pt-10">
            <h2 id="story-heading" className="font-display text-2xl font-semibold text-[#16211B]">
              {t.storyTitle}
            </h2>

            <div className="mt-6 space-y-8">
              {site.storyBlocks.map((block, index) => {
                const storyPhoto = block.photoId
                  ? site.photos.find((p) => p.id === block.photoId)
                  : undefined;

                return (
                  <div
                    key={block.id}
                    className={`grid grid-cols-1 gap-6 rounded-2xl border border-[#E3DDD0] bg-white p-5 sm:p-6 ${
                      storyPhoto ? 'lg:grid-cols-12 lg:items-center' : ''
                    }`}
                  >
                    <div
                      className={
                        storyPhoto
                          ? `lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`
                          : 'lg:col-span-12'
                      }
                    >
                      <h3 className="font-display text-xl font-semibold text-[#1B4332]">
                        {block.heading[uiLang]}
                      </h3>
                      <div className="mt-3 space-y-3">
                        {block.body[uiLang].map((para, pIdx) => (
                          <p
                            key={pIdx}
                            className="text-[15px] leading-relaxed text-[#2D3A33]"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {storyPhoto && (
                      <figure
                        className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                      >
                        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#EBE6DA]">
                          <ResilientImage
                            src={storyPhoto.src}
                            alt={storyPhoto.alt[uiLang]}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <figcaption className="mt-2 text-xs leading-relaxed text-[#5A665E]">
                          <span>{storyPhoto.caption[uiLang]}</span>
                          <span className="mt-0.5 block text-[11px] text-[#727F76]">
                            {storyPhoto.author} · {storyPhoto.license}
                          </span>
                        </figcaption>
                      </figure>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* D. What to Explore? (3-5 Highlights answering What / Notable / Observe) */}
          <section aria-labelledby="highlights-heading" className="border-t border-[#E3DDD0] pt-10">
            <h2
              id="highlights-heading"
              className="font-display text-2xl font-semibold text-[#16211B]"
            >
              {t.highlightsTitle}
            </h2>
            <div className="mt-6 space-y-6">
              {site.highlights.map((item, idx) => {
                const matchedPhoto = item.photoId
                  ? site.photos.find((p) => p.id === item.photoId)
                  : undefined;

                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 gap-5 rounded-2xl border border-[#E3DDD0] bg-white p-5 sm:p-6 md:grid-cols-12 md:items-center"
                  >
                    <div className={matchedPhoto ? 'md:col-span-7' : 'md:col-span-12'}>
                      <p className="text-xs font-semibold tabular-nums text-[#C6923A]">
                        0{idx + 1}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-semibold text-[#16211B]">
                        {item.title[uiLang]}
                      </h3>

                      <dl className="mt-4 space-y-2.5 text-sm leading-relaxed">
                        <div>
                          <dt className="font-semibold text-[#1B4332]">{t.highlightWhat}</dt>
                          <dd className="mt-0.5 text-[#2D3A33]">{item.whatIsIt[uiLang]}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-[#1B4332]">{t.highlightNotable}</dt>
                          <dd className="mt-0.5 text-[#2D3A33]">{item.notablePoint[uiLang]}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-[#1B4332]">{t.highlightObserve}</dt>
                          <dd className="mt-0.5 text-[#2D3A33]">{item.whatToObserve[uiLang]}</dd>
                        </div>
                      </dl>

                      {item.routeNote && (
                        <p className="mt-3 rounded-lg bg-[#F3EFE4] px-3 py-2 text-xs font-medium text-[#1B4332]">
                          {item.routeNote[uiLang]}
                        </p>
                      )}
                    </div>

                    {matchedPhoto && (
                      <figure className="md:col-span-5">
                        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#EBE6DA]">
                          <ResilientImage
                            src={matchedPhoto.src}
                            alt={matchedPhoto.alt[uiLang]}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <figcaption className="mt-2 text-[11px] leading-relaxed text-[#5A665E]">
                          {matchedPhoto.author} · {matchedPhoto.license}
                        </figcaption>
                      </figure>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* B. Extended Photo Gallery */}
          <div className="border-t border-[#E3DDD0] pt-10">
            <PhotoGallery
              photos={site.photos}
              uiLang={uiLang}
              photoGoalNote={site.photoGoalNote}
            />
          </div>

          {/* E. Editorial Photography Suggestions */}
          <section aria-labelledby="phototips-heading" className="border-t border-[#E3DDD0] pt-10">
            <div className="flex items-center gap-2.5">
              <Camera className="h-5 w-5 text-[#1B4332]" aria-hidden="true" />
              <h2
                id="phototips-heading"
                className="font-display text-2xl font-semibold text-[#16211B]"
              >
                {t.photoTipsTitle}
              </h2>
            </div>
            <p className="mt-2 text-sm text-[#4A554E]">{site.photoTips.editorialNote[uiLang]}</p>

            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              {site.photoTips.items.map((tip) => (
                <div key={tip.id} className="rounded-xl border border-[#E3DDD0] bg-white p-5">
                  <h3 className="text-sm font-semibold text-[#1B4332]">{tip.aspect[uiLang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#2D3A33]">
                    {tip.suggestion[uiLang]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-[#DFC48C] bg-[#FDF8EC] p-4 text-sm text-[#574115]">
              <p className="font-semibold">{t.photoTipsSafetyTitle}</p>
              <p className="mt-1 leading-relaxed">{site.photoTips.safetyReminder[uiLang]}</p>
            </div>
          </section>

          {/* Timeline */}
          <section aria-labelledby="timeline-heading" className="border-t border-[#E3DDD0] pt-10">
            <h2 id="timeline-heading" className="font-display text-2xl font-semibold text-[#16211B]">
              {t.timelineTitle}
            </h2>
            <ol className="mt-6 space-y-5">
              {site.timeline.map((entry, idx) => (
                <li
                  key={idx}
                  className="rounded-xl border border-[#E3DDD0] bg-white p-5 sm:grid sm:grid-cols-12 sm:gap-6"
                >
                  <div className="sm:col-span-4">
                    <p className="text-sm font-semibold tabular-nums text-[#1B4332]">
                      {entry.period[uiLang]}
                    </p>
                    <p className="mt-1 text-xs font-medium text-[#C6923A]">
                      {t.timelineTypes[entry.category]}
                    </p>
                  </div>
                  <div className="mt-2 sm:col-span-8 sm:mt-0">
                    <h3 className="font-display text-lg font-semibold text-[#16211B]">
                      {entry.title[uiLang]}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#2D3A33]">
                      {entry.detail[uiLang]}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* F. Responsible Visiting */}
          <section aria-labelledby="responsible-heading" className="border-t border-[#E3DDD0] pt-10">
            <div className="rounded-2xl border border-[#CEDFD5] bg-[#EDF4EF] p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-[#1B4332]" aria-hidden="true" />
                <h2
                  id="responsible-heading"
                  className="font-display text-2xl font-semibold text-[#16211B]"
                >
                  {t.responsibleTitle}
                </h2>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#2D3A33]">
                {site.responsibleVisiting[uiLang].map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 tabular-nums text-xs font-semibold text-[#1B4332]">
                      0{idx + 1}.
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* G. Sources & Visiting Notes */}
          <section
            aria-labelledby="sources-heading"
            className="border-t border-[#E3DDD0] pt-10 pb-4"
          >
            <h2 id="sources-heading" className="font-display text-2xl font-semibold text-[#16211B]">
              {t.sourcesAndVisitingTitle}
            </h2>

            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#DFC48C] bg-[#FDF8EC] p-4 text-sm text-[#574115]">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C6923A]" aria-hidden="true" />
              <div>
                <p className="font-semibold">{t.visitingInfoHeading}</p>
                <p className="mt-1 leading-relaxed">{site.visitingInfoNote[uiLang]}</p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {site.sources.map((src, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-2 rounded-xl border border-[#E3DDD0] bg-white p-4 text-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#1B4332] underline decoration-[#D4CCB8] underline-offset-4 hover:decoration-[#1B4332]"
                    >
                      <span>{src.name[uiLang]}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    </a>
                    <p className="mt-1 text-xs text-[#5A665E]">
                      {t.sourcesStatus}: {src.approvalStatus[uiLang]}
                    </p>
                  </div>
                  <div className="shrink-0 text-xs tabular-nums text-[#66726A]">
                    {t.sourcesChecked}: {src.checkedDate}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <ShareAndQrModal
        isOpen={qrOpen}
        onClose={() => setQrOpen(false)}
        siteName={site.name[uiLang]}
        siteSlug={site.slug}
        shareUrl={shareUrl}
        uiLang={uiLang}
      />
    </article>
  );
}
