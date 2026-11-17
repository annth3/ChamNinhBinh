import { useState, useEffect, useMemo } from 'react';
import {
  Search,
  X,
  Heart,
  Volume2,
  ArrowRight,
  Headphones,
  Compass,
  Image as ImageIcon,
} from 'lucide-react';
import type { DestinationCategoryKey, HeritageSite, Language } from '../types/heritage';
import { uiText } from '../data/uiTranslations';
import { normalizeVietnamese } from '../utils/vietnameseSearch';
import { ResilientImage } from './ResilientImage';
import { ListenPickerModal } from './ListenPickerModal';

interface HomePageProps {
  sites: HeritageSite[];
  uiLang: Language;
  initialFilterSaved?: boolean;
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
  onSelectSite: (slug: string, jumpToAudio?: boolean) => void;
  onGoAbout: () => void;
}

type FilterOption = 'all' | DestinationCategoryKey | 'saved';

export function HomePage({
  sites,
  uiLang,
  initialFilterSaved = false,
  isSaved,
  onToggleSave,
  onSelectSite,
  onGoAbout,
}: HomePageProps) {
  const t = uiText[uiLang];
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterOption>(
    initialFilterSaved ? 'saved' : 'all'
  );
  const [listenModalOpen, setListenModalOpen] = useState(false);

  useEffect(() => {
    setActiveFilter(initialFilterSaved ? 'saved' : 'all');
  }, [initialFilterSaved]);

  const savedCount = useMemo(
    () => sites.filter((s) => isSaved(s.id)).length,
    [sites, isSaved]
  );

  const filteredSites = useMemo(() => {
    const q = normalizeVietnamese(searchQuery);
    return sites.filter((site) => {
      if (activeFilter === 'saved' && !isSaved(site.id)) return false;
      if (
        activeFilter !== 'all' &&
        activeFilter !== 'saved' &&
        !site.categoryKeys.includes(activeFilter)
      ) {
        return false;
      }
      if (!q) return true;
      const haystacks = [
        site.name.vi,
        site.name.en,
        site.shortTagline.vi,
        site.shortTagline.en,
        ...site.categories.vi,
        ...site.categories.en,
      ].map(normalizeVietnamese);
      return haystacks.some((h) => h.includes(q));
    });
  }, [sites, searchQuery, activeFilter, isSaved]);

  const scrollToExplore = () => {
    const el = document.getElementById('kham-pha');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const filterTabs: { key: FilterOption; label: string }[] = [
    { key: 'all', label: `${t.filterAll} (${sites.length})` },
    { key: 'nature', label: t.categoryLabels.nature },
    { key: 'history_culture', label: t.categoryLabels.history_culture },
    { key: 'spiritual', label: t.categoryLabels.spiritual },
    { key: 'saved', label: `${t.filterSavedOnly} (${savedCount})` },
  ];

  return (
    <div>
      {/* Hero Section with serene Ninh Bình river & karst photography */}
      <section className="relative overflow-hidden bg-[#122B20]">
        <div className="relative min-h-[450px] w-full sm:min-h-[520px] lg:min-h-[560px]">
          <img
            src="/images/trangan-12.jpg"
            alt={
              uiLang === 'vi'
                ? 'Thuyền nhỏ xuôi dòng nước êm ả giữa thảm cỏ vàng và dãy núi đá vôi Ninh Bình'
                : 'A lone boat gliding along quiet waters framed by reed banks and limestone hills in Ninh Bình'
            }
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0D2118]/92 via-[#0D2118]/58 to-[#0D2118]/25"
          />

          <div className="relative z-10 mx-auto flex min-h-[450px] max-w-6xl flex-col justify-end px-4 pt-16 pb-10 sm:min-h-[520px] sm:px-6 sm:pb-14 lg:min-h-[560px]">
            <div className="max-w-2xl">
              {/* Brand name must ALWAYS preserve exact casing "chạm Ninh Bình" */}
              <p className="font-display text-lg font-medium tracking-normal text-[#E7C679] sm:text-xl">
                {t.brandName}
              </p>
              <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-[#FAF8F2] text-balance sm:text-5xl">
                {t.heroHeadline}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#E9E6DC] sm:text-lg">
                {t.heroSubtitle}
              </p>

              {/* Two required Hero CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={scrollToExplore}
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-[#D4A853] px-6 py-3 text-sm font-semibold text-[#13261D] transition-colors hover:bg-[#E1B96B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>{t.heroCtaExplore}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => setListenModalOpen(true)}
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#FAF8F2]/40 bg-[#1B4332]/75 px-5 py-3 text-sm font-semibold text-[#FAF8F2] backdrop-blur-xs transition-colors hover:border-[#FAF8F2] hover:bg-[#2D6A5B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Headphones className="h-4 w-4 text-[#E7C679]" aria-hidden="true" />
                  <span>{t.heroCtaListen}</span>
                </button>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-[#E3DFD3]/85">
              {uiLang === 'vi'
                ? 'Ảnh thực tế: Tràng An, Ninh Bình · Tác giả: Hòa Nguyễn (CC BY 2.0)'
                : 'Real landscape photo: Tràng An, Ninh Bình · Photo: Hòa Nguyễn (CC BY 2.0)'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Explore Directory */}
      <section id="kham-pha" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="border-b border-[#E3DDD0] pb-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-[#16211B] sm:text-3xl">
              {t.sectionSitesTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#4A554E] sm:text-base">
              {t.sectionSitesSubtitle}
            </p>
          </div>

          {/* Search + Multi-category Filter Bar */}
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#66726A]"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label={t.searchPlaceholder}
                className="min-h-[46px] w-full rounded-xl border border-[#D7D0BF] bg-white pr-11 pl-10 text-sm text-[#16211B] placeholder:text-[#7A857D] focus:border-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#1B4332]/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label={t.searchClear}
                  className="absolute top-1/2 right-1.5 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#5A665E] hover:bg-[#F2EFE7] cursor-pointer"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <div
              role="tablist"
              aria-label={uiLang === 'vi' ? 'Lọc điểm đến theo chủ đề' : 'Filter destinations'}
              className="flex flex-wrap gap-1.5 rounded-xl border border-[#DDD5C3] bg-[#F2EFE7] p-1"
            >
              {filterTabs.map((tab) => {
                const selected = activeFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveFilter(tab.key)}
                    className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4332] sm:text-sm ${
                      selected
                        ? 'bg-[#1B4332] text-[#FAF8F2] shadow-xs'
                        : 'text-[#4A554E] hover:bg-white/60 hover:text-[#16211B]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-3 text-xs text-[#66726A]">{t.localSaveNotice}</p>
        </div>

        {/* 5 Destination Cards OR Clear Empty State */}
        {filteredSites.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredSites.map((site) => {
              const coverPhoto =
                site.photos.find((p) => p.id === site.coverPhotoId) || site.photos[0];
              const saved = isSaved(site.id);

              return (
                <article
                  key={site.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[#E0D9CA] bg-white transition-shadow hover:shadow-sm"
                >
                  <a
                    href={`/dia-diem/${site.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectSite(site.slug);
                    }}
                    className="group relative aspect-[4/3] w-full overflow-hidden bg-[#EBE6DA] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1B4332]"
                  >
                    <ResilientImage
                      src={coverPhoto.src}
                      alt={coverPhoto.alt[uiLang]}
                      loading="eager"
                      fallbackTitle={site.name[uiLang]}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-medium text-[#2D6A5B]">
                      {site.categories[uiLang].join(' · ')}
                    </p>

                    <h3 className="mt-1.5 font-display text-2xl font-semibold text-[#16211B]">
                      <a
                        href={`/dia-diem/${site.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onSelectSite(site.slug);
                        }}
                        className="hover:text-[#1B4332] focus-visible:outline-2 focus-visible:outline-[#1B4332]"
                      >
                        {site.name[uiLang]}
                      </a>
                    </h3>

                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#4A554E]">
                      {site.shortTagline[uiLang]}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#EFEAE0] pt-3.5 text-xs text-[#1B4332]">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Volume2 className="h-4 w-4 shrink-0 text-[#C6923A]" aria-hidden="true" />
                        <span>{t.bilingualAudioLabel}</span>
                      </span>
                      <span className="tabular-nums text-[#5A665E]">
                        {site.photos.length} {uiLang === 'vi' ? 'ảnh' : 'photos'}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2.5">
                      <a
                        href={`/dia-diem/${site.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onSelectSite(site.slug);
                        }}
                        className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#1B4332] px-4 py-2 text-sm font-semibold text-[#FAF8F2] transition-colors hover:bg-[#2D6A5B] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
                      >
                        <span>{t.exploreButton}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>

                      <button
                        type="button"
                        onClick={() => onToggleSave(site.id)}
                        aria-pressed={saved}
                        aria-label={`${saved ? t.savedSite : t.saveSite}: ${site.name[uiLang]}`}
                        className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] ${
                          saved
                            ? 'border-[#1B4332] bg-[#EDF3EF] text-[#1B4332]'
                            : 'border-[#D7D0BF] bg-white text-[#4A554E] hover:border-[#1B4332] hover:text-[#1B4332]'
                        }`}
                      >
                        <Heart
                          className={`h-4 w-4 ${saved ? 'fill-[#1B4332] text-[#1B4332]' : ''}`}
                          aria-hidden="true"
                        />
                        <span>{saved ? t.savedSite : t.saveSite}</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-[#E0D9CA] bg-white p-8 text-center sm:p-12">
            <h3 className="font-display text-xl font-semibold text-[#16211B]">
              {activeFilter === 'saved' && !searchQuery ? t.emptySavedTitle : t.emptySearchTitle}
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#4A554E]">
              {activeFilter === 'saved' && !searchQuery ? t.emptySavedDesc : t.emptySearchDesc}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#1B4332] px-5 py-2 text-sm font-semibold text-[#FAF8F2] hover:bg-[#2D6A5B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
            >
              {t.clearAllFilters}
            </button>
          </div>
        )}
      </section>

      {/* How-To-Use Section: Chọn điểm đến → Khám phá bằng hình ảnh → Nghe câu chuyện */}
      <section className="border-t border-[#E3DDD0] bg-[#F3EFE4]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#2D6A5B]">
              {t.howToUseHeading}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-[#16211B] sm:text-3xl">
              {t.howToUseFlow}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A554E] sm:text-base">
              {t.howToUseDesc}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-[#E0D9CA] bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF3EF] text-[#1B4332]">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[#16211B]">
                {uiLang === 'vi' ? '1. Chọn điểm đến' : '1. Choose a destination'}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4A554E]">
                {uiLang === 'vi'
                  ? 'Tìm theo tên hoặc lọc theo thiên nhiên, lịch sử – văn hóa và tâm linh để lên kế hoạch trước chuyến đi.'
                  : 'Search by name or browse by nature, history & culture, and spiritual themes before or during your trip.'}
              </p>
            </div>

            <div className="rounded-2xl border border-[#E0D9CA] bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF3EF] text-[#1B4332]">
                <ImageIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[#16211B]">
                {uiLang === 'vi' ? '2. Khám phá bằng hình ảnh' : '2. Explore through photos'}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4A554E]">
                {uiLang === 'vi'
                  ? 'Xem ảnh thực tế phân bổ xuyên suốt từ câu chuyện, điểm nổi bật đến bộ sưu tập phóng to kèm nguồn rõ ràng.'
                  : 'Browse real photography woven into story blocks, highlight cards, and a zoomable gallery with source attributions.'}
              </p>
            </div>

            <div className="rounded-2xl border border-[#E0D9CA] bg-white p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF3EF] text-[#1B4332]">
                <Headphones className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[#16211B]">
                {uiLang === 'vi' ? '3. Nghe câu chuyện' : '3. Listen to its story'}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4A554E]">
                {uiLang === 'vi'
                  ? 'Mở thuyết minh tiếng Việt hoặc tiếng Anh ngay tại điểm tham quan, điều chỉnh tốc độ và xem văn bản đối chiếu.'
                  : 'Play the Vietnamese or English audio narration right on site with speed control and a full readable transcript.'}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="/gioi-thieu"
              onClick={(e) => {
                e.preventDefault();
                onGoAbout();
              }}
              className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#1B4332] underline decoration-[#C6923A] decoration-2 underline-offset-4 hover:text-[#2D6A5B]"
            >
              <span>{t.aboutLinkLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <ListenPickerModal
        isOpen={listenModalOpen}
        onClose={() => setListenModalOpen(false)}
        sites={sites}
        uiLang={uiLang}
        onPickSite={(slug) => onSelectSite(slug, true)}
      />
    </div>
  );
}
