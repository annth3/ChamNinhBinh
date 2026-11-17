import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { X, Download, Copy, Check } from 'lucide-react';
import type { Language } from '../types/heritage';
import { uiText } from '../data/uiTranslations';

interface ShareAndQrModalProps {
  isOpen: boolean;
  onClose: () => void;
  siteName: string;
  siteSlug: string;
  shareUrl: string;
  uiLang: Language;
}

export function ShareAndQrModal({
  isOpen,
  onClose,
  siteName,
  siteSlug,
  shareUrl,
  uiLang,
}: ShareAndQrModalProps) {
  const t = uiText[uiLang];
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [manualCopyNeeded, setManualCopyNeeded] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    let active = true;
    QRCode.toDataURL(shareUrl, {
      width: 320,
      margin: 2,
      color: {
        dark: '#1B4332',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M',
    })
      .then((url) => {
        if (active) setQrDataUrl(url);
      })
      .catch(() => {
        if (active) setQrDataUrl('');
      });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      active = false;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, shareUrl, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    setManualCopyNeeded(false);
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
        return;
      }
      setManualCopyNeeded(true);
    } catch {
      setManualCopyNeeded(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="qr-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-[#DDD5C3] bg-[#FAF8F2] p-6 text-[#16211B] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="qr-modal-title" className="font-display text-xl font-semibold text-[#1B4332]">
              {t.qrTitle} · {siteName}
            </h2>
            <p className="mt-1 text-sm text-[#4A554E]">{t.qrDesc}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-[#4A554E] hover:bg-[#EBE6DA] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4332]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 flex flex-col items-center rounded-xl border border-[#E3DDD0] bg-white p-5">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt={`${t.qrTitle}: ${siteName}`}
              className="h-52 w-52 rounded-lg"
            />
          ) : (
            <div className="flex h-52 w-52 items-center justify-center text-xs text-[#66726A]">
              QR
            </div>
          )}
          <p className="mt-3 max-w-full break-all text-center text-xs text-[#5A665E]">
            {shareUrl}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#1B4332] bg-white px-4 py-2 text-sm font-semibold text-[#1B4332] hover:bg-[#F2EFE7] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4332]"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                <span>{t.copiedSuccess}</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                <span>{t.shareButton}</span>
              </>
            )}
          </button>

          {qrDataUrl && (
            <a
              href={qrDataUrl}
              download={`qr-${siteSlug}.png`}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#1B4332] px-4 py-2 text-sm font-semibold text-[#FAF8F2] hover:bg-[#2D6A5B] focus-visible:outline-2 focus-visible:outline-[#1B4332]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>{t.qrDownload}</span>
            </a>
          )}
        </div>

        {manualCopyNeeded && (
          <div className="mt-3 rounded-lg border border-[#DFC48C] bg-[#FDF8EC] p-3 text-xs text-[#574115]">
            <p className="font-medium">{t.manualCopyHint}</p>
            <input
              type="text"
              readOnly
              value={shareUrl}
              onFocus={(e) => e.currentTarget.select()}
              aria-label={t.qrTitle}
              className="mt-2 w-full rounded border border-[#DFC48C] bg-white px-2.5 py-1.5 text-xs text-[#16211B]"
            />
          </div>
        )}

        <p className="mt-4 border-t border-[#E3DDD0] pt-3 text-xs leading-relaxed text-[#5A665E]">
          {t.qrManagementNote}
        </p>
      </div>
    </div>
  );
}
