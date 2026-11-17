import { ArrowLeft, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import type { Language } from '../types/heritage';
import { uiText } from '../data/uiTranslations';
import {
  editorialPillars,
  destinationCoverageList,
  expansionGuideSteps,
} from '../data/aboutData';

interface AboutPageProps {
  uiLang: Language;
  onBack: () => void;
}

export function AboutPage({ uiLang, onBack }: AboutPageProps) {
  const t = uiText[uiLang];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#1B4332] hover:text-[#2D6A5B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        <span>{t.backToList}</span>
      </button>

      <header className="mt-4 border-b border-[#E3DDD0] pb-6">
        <p className="text-xs font-semibold tracking-wider text-[#2D6A5B]">
          {t.brandName} · {t.howToUseFlow}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-[#16211B] sm:text-4xl">
          {uiLang === 'vi'
            ? 'Giới thiệu, nguồn tư liệu & hướng dẫn mở rộng'
            : 'About chạm Ninh Bình, Sources & Expansion Guide'}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#4A554E] sm:text-base">
          {uiLang === 'vi'
            ? 'chạm Ninh Bình là bạn đồng hành du lịch tương tác miễn phí, không yêu cầu đăng nhập, giúp du khách xem ảnh thực tế, nghe thuyết minh tiếng Việt – tiếng Anh và hiểu điểm đến bằng thông tin đã đối chiếu.'
            : 'chạm Ninh Bình is an interactive, account-free travel companion designed to help visitors explore real photography, listen to Vietnamese and English stories, and understand each destination through fact-checked notes.'}
        </p>
      </header>

      {/* 1. Three Experience Pillars */}
      <section className="mt-10 space-y-5">
        <h2 className="font-display text-2xl font-semibold text-[#16211B]">
          {uiLang === 'vi'
            ? '1. Nguyên tắc biên tập: Xem cảnh – Nghe chuyện – Hiểu điểm đến'
            : '1. Editorial Principles: See – Listen – Understand'}
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {editorialPillars.map((pillar) => (
            <div key={pillar.step} className="rounded-2xl border border-[#E3DDD0] bg-white p-5">
              <p className="text-xs font-semibold tabular-nums text-[#C6923A]">{pillar.step}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-[#16211B]">
                {pillar.title[uiLang]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4A554E]">
                {pillar.summary[uiLang]}
              </p>
              <ul className="mt-3 space-y-1.5 border-t border-[#EFEAE0] pt-3 text-xs leading-relaxed text-[#2D3A33]">
                {pillar.points[uiLang].map((pt, idx) => (
                  <li key={idx}>• {pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Transparent Photo Coverage Report across all 5 sites */}
      <section className="mt-12 space-y-4">
        <h2 className="font-display text-2xl font-semibold text-[#16211B]">
          {uiLang === 'vi'
            ? '2. Minh bạch kho ảnh 5 điểm đến (tổng 41 ảnh xác thực)'
            : '2. Transparent Photo Coverage Across All 5 Destinations (41 Verified Photos)'}
        </h2>
        <p className="text-sm leading-relaxed text-[#4A554E]">
          {uiLang === 'vi'
            ? 'Mỗi điểm đến hướng tới 10–15 ảnh chất lượng cao. Với những điểm chưa đủ ảnh nguồn mở hợp lệ, website báo cáo rõ số lượng hiện có và hạng mục cần bổ sung thay vì dùng ảnh trùng lặp.'
            : 'Each destination targets 10–15 high-quality photos. Where fewer open-licensed photos are currently verified, exact counts and remaining gaps are reported honestly rather than padding with duplicates.'}
        </p>

        <div className="space-y-3">
          {destinationCoverageList.map((item) => (
            <div
              key={item.id}
              className={`flex items-start gap-3 rounded-xl border p-4 ${
                item.status === 'complete'
                  ? 'border-[#D5E2DA] bg-white'
                  : 'border-[#DFC48C] bg-[#FDF8EC]'
              }`}
            >
              {item.status === 'complete' ? (
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#2D6A5B]"
                  aria-hidden="true"
                />
              ) : (
                <AlertCircle
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#C6923A]"
                  aria-hidden="true"
                />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-[#16211B]">
                    {item.destination[uiLang]}
                  </p>
                  <span className="text-xs font-semibold tabular-nums text-[#1B4332]">
                    {item.photoCount} {uiLang === 'vi' ? 'ảnh' : 'photos'}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[#4A554E]">{item.note[uiLang]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Expansion & Maintenance Guide */}
      <section className="mt-12 space-y-5">
        <div className="flex items-center gap-2.5">
          <Wrench className="h-5 w-5 text-[#1B4332]" aria-hidden="true" />
          <h2 className="font-display text-2xl font-semibold text-[#16211B]">
            {uiLang === 'vi'
              ? '3. Hướng dẫn cập nhật ảnh, âm thanh và thêm điểm đến mới'
              : '3. Guide to Updating Photos, Audio & Adding New Destinations'}
          </h2>
        </div>

        <div className="space-y-4">
          {expansionGuideSteps.map((block, idx) => (
            <div key={idx} className="rounded-xl border border-[#E3DDD0] bg-white p-5">
              <h3 className="text-base font-semibold text-[#1B4332]">{block.title[uiLang]}</h3>
              <ol className="mt-3 space-y-2 text-sm leading-relaxed text-[#2D3A33]">
                {block.steps[uiLang].map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5">
                    <span className="mt-0.5 tabular-nums text-xs font-semibold text-[#C6923A]">
                      {sIdx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
