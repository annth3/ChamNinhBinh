import { useState, useRef, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from 'lucide-react';
import type { HeritageSite, Language } from '../types/heritage';
import { uiText } from '../data/uiTranslations';
import { formatTime } from '../utils/vietnameseSearch';

interface AudioGuidePlayerProps {
  site: HeritageSite;
  uiLang: Language;
  defaultAudioLang?: Language;
}

type PlaybackSpeed = 0.8 | 1 | 1.2;

export function AudioGuidePlayer({
  site,
  uiLang,
  defaultAudioLang,
}: AudioGuidePlayerProps) {
  const t = uiText[uiLang];
  const [audioLang, setAudioLang] = useState<Language>(defaultAudioLang || uiLang);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState<PlaybackSpeed>(1);
  const [showTranscript, setShowTranscript] = useState(false);

  const [audioLoadError, setAudioLoadError] = useState(false);
  const [matchingVoice, setMatchingVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [isSpeakingFallback, setIsSpeakingFallback] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const audioSrc = audioLang === 'vi' ? site.audio.viFile : site.audio.enFile;

  const stopAllAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    utteranceRef.current = null;
    setIsPlaying(false);
    setIsSpeakingFallback(false);
    setCurrentTime(0);
  }, []);

  useEffect(() => {
    stopAllAudio();
    setAudioLoadError(false);
    setDuration(0);
    return () => {
      stopAllAudio();
    };
  }, [site.id, audioLang, stopAllAudio]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed, audioSrc]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSpeechSupported(false);
      setMatchingVoice(null);
      return;
    }
    setSpeechSupported(true);

    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const prefix = audioLang === 'vi' ? 'vi' : 'en';
      const exact = voices.find((v) => v.lang.toLowerCase().startsWith(prefix));
      setMatchingVoice(exact || null);
    };

    pickVoice();
    window.speechSynthesis.addEventListener('voiceschanged', pickVoice);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', pickVoice);
    };
  }, [audioLang]);

  const startFallbackSpeech = () => {
    if (!speechSupported || !matchingVoice) return;
    window.speechSynthesis.cancel();
    const fullText = site.audio.sections.flatMap((s) => s.paragraphs[audioLang]).join(' ');
    const utt = new SpeechSynthesisUtterance(fullText);
    utt.voice = matchingVoice;
    utt.lang = matchingVoice.lang;
    utt.rate = speed;
    utt.onend = () => {
      setIsSpeakingFallback(false);
      setIsPlaying(false);
    };
    utt.onerror = () => {
      setIsSpeakingFallback(false);
      setIsPlaying(false);
    };
    utteranceRef.current = utt;
    setIsSpeakingFallback(true);
    setIsPlaying(true);
    window.speechSynthesis.speak(utt);
  };

  const handleTogglePlay = async () => {
    if (!audioLoadError && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          audioRef.current.playbackRate = speed;
          await audioRef.current.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }
      return;
    }

    if (audioLoadError && speechSupported && matchingVoice) {
      if (isSpeakingFallback) {
        window.speechSynthesis.cancel();
        setIsSpeakingFallback(false);
        setIsPlaying(false);
        return;
      }
      startFallbackSpeech();
    }
  };

  const handleReplay = async () => {
    if (!audioLoadError && audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
        audioRef.current.playbackRate = speed;
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    if (audioLoadError && speechSupported && matchingVoice) {
      startFallbackSpeech();
    }
  };

  const handleSeek = (newTime: number) => {
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleAudioLanguageChange = (nextLang: Language) => {
    if (nextLang === audioLang) return;
    stopAllAudio();
    setAudioLang(nextLang);
  };

  const canPlayAnyAudio = !audioLoadError || (speechSupported && Boolean(matchingVoice));

  return (
    <section
      id="audio-guide"
      aria-labelledby="audio-guide-heading"
      className="scroll-mt-20 rounded-2xl border border-[#D7D0BF] bg-white p-5 shadow-xs sm:p-7"
    >
      <audio
        key={audioSrc}
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onLoadedMetadata={(e) => {
          const dur = e.currentTarget.duration;
          if (Number.isFinite(dur)) setDuration(dur);
          e.currentTarget.playbackRate = speed;
        }}
        onTimeUpdate={(e) => {
          setCurrentTime(e.currentTarget.currentTime);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
        onError={() => {
          setAudioLoadError(true);
          setIsPlaying(false);
        }}
      />

      {/* Header row + Independent Audio Language Selector */}
      <div className="flex flex-col gap-4 border-b border-[#ECE6D8] pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-[#2D6A5B]">
            <Volume2 className="h-4 w-4 text-[#C6923A]" aria-hidden="true" />
            <span>{t.audioLanguageLabel}</span>
          </div>
          <h2
            id="audio-guide-heading"
            className="mt-1 font-display text-xl font-semibold text-[#16211B] sm:text-2xl"
          >
            {t.audioTitle} · {site.name[uiLang]}
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-[#4A554E]">
            <span className="font-semibold text-[#1B4332]">{t.audioToneLabel}:</span>{' '}
            {site.audio.toneDescription[uiLang]}
          </p>
        </div>

        <div
          role="group"
          aria-label={t.audioLanguageLabel}
          className="inline-flex self-start rounded-xl border border-[#DDD5C3] bg-[#FAF8F2] p-1"
        >
          <button
            type="button"
            onClick={() => handleAudioLanguageChange('vi')}
            aria-pressed={audioLang === 'vi'}
            className={`min-h-[40px] rounded-lg px-4 py-1.5 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] ${
              audioLang === 'vi'
                ? 'bg-[#1B4332] text-[#FAF8F2]'
                : 'text-[#4A554E] hover:text-[#16211B]'
            }`}
          >
            Tiếng Việt
          </button>
          <button
            type="button"
            onClick={() => handleAudioLanguageChange('en')}
            aria-pressed={audioLang === 'en'}
            className={`min-h-[40px] rounded-lg px-4 py-1.5 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] ${
              audioLang === 'en'
                ? 'bg-[#1B4332] text-[#FAF8F2]'
                : 'text-[#4A554E] hover:text-[#16211B]'
            }`}
          >
            English
          </button>
        </div>
      </div>

      {/* Honest voice & duration notice */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5A665E]">
        <span>{site.audio.voiceTypeNotice[uiLang]}</span>
        <span className="tabular-nums font-semibold text-[#1B4332]">
          {duration > 0 ? formatTime(duration) : site.audio.estimatedDuration[audioLang]}
        </span>
      </div>

      {audioLoadError && (
        <div
          role="status"
          className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#DFC48C] bg-[#FDF8EC] p-3.5 text-sm text-[#574115]"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#C6923A]" aria-hidden="true" />
          <p>
            {matchingVoice
              ? `${t.audioFallbackNotice} ${isSpeakingFallback ? t.audioDeviceFallbackActive : ''}`
              : t.audioNoVoiceNotice}
          </p>
        </div>
      )}

      {/* Player Controls */}
      {canPlayAnyAudio && (
        <div className="mt-5 flex flex-col gap-4 rounded-xl border border-[#EAE4D4] bg-[#FAF8F2] p-4 sm:p-5">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={handleTogglePlay}
              aria-label={isPlaying ? t.audioPause : t.audioPlay}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1B4332] text-[#FAF8F2] transition-transform hover:bg-[#2D6A5B] active:scale-[0.97] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Play className="h-5 w-5 translate-x-0.5" aria-hidden="true" />
              )}
            </button>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between text-xs font-medium text-[#4A554E]">
                <span>{isPlaying ? t.audioPause : t.audioPlay}</span>
                {!audioLoadError && (
                  <span className="tabular-nums">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                )}
              </div>

              {!audioLoadError && (
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  step={0.5}
                  value={Math.min(currentTime, duration || 100)}
                  disabled={!duration}
                  onChange={(e) => handleSeek(Number(e.target.value))}
                  aria-label={
                    uiLang === 'vi' ? 'Thanh tiến trình thuyết minh' : 'Audio narration progress'
                  }
                  className="mt-2 h-2 w-full cursor-pointer accent-[#1B4332] disabled:cursor-not-allowed disabled:opacity-50"
                />
              )}
            </div>

            <button
              type="button"
              onClick={handleReplay}
              aria-label={t.audioReplay}
              title={t.audioReplay}
              className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-lg border border-[#D7D0BF] bg-white px-3 py-2 text-xs font-semibold text-[#1B4332] transition-colors hover:border-[#1B4332] hover:bg-[#F2EFE7] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{t.audioReplay}</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E6DFCE] pt-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#5A665E]">{t.audioSpeedLabel}:</span>
              <div className="inline-flex rounded-lg border border-[#DCD4C0] bg-white p-0.5">
                {([0.8, 1, 1.2] as PlaybackSpeed[]).map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => setSpeed(rate)}
                    aria-pressed={speed === rate}
                    className={`min-h-[34px] min-w-[44px] rounded-md px-2.5 text-xs font-semibold tabular-nums transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#1B4332] ${
                      speed === rate
                        ? 'bg-[#1B4332] text-[#FAF8F2]'
                        : 'text-[#4A554E] hover:text-[#16211B]'
                    }`}
                  >
                    {rate}×
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-[#5A665E]">{t.audioNoAutoplayNote}</p>
          </div>
        </div>
      )}

      {/* Transcript toggle */}
      <div className="mt-4">
        <button
          type="button"
          onClick={() => setShowTranscript((prev) => !prev)}
          aria-expanded={showTranscript}
          className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#1B4332] underline decoration-[#C6923A] decoration-2 underline-offset-4 hover:text-[#2D6A5B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
        >
          <span>{showTranscript ? t.audioTranscriptHide : t.audioTranscriptShow}</span>
          {showTranscript ? (
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          )}
        </button>

        {(showTranscript || !canPlayAnyAudio) && (
          <div className="mt-4 space-y-5 rounded-xl border border-[#E5DFD2] bg-[#FCFBF7] p-4 sm:p-6">
            <div className="flex items-center justify-between border-b border-[#ECE6D8] pb-2 text-xs text-[#5A665E]">
              <span>
                {audioLang === 'vi'
                  ? 'Lời thuyết minh (Tiếng Việt)'
                  : 'Narration Transcript (English)'}
              </span>
              <span className="tabular-nums">{site.audio.estimatedDuration[audioLang]}</span>
            </div>
            {site.audio.sections.map((section) => (
              <div key={section.heading[audioLang]} className="space-y-2">
                <h3 className="text-sm font-semibold text-[#1B4332]">
                  {section.heading[audioLang]}
                </h3>
                {section.paragraphs[audioLang].map((para, idx) => (
                  <p key={idx} className="text-[15px] leading-relaxed text-[#2D3A33]">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
