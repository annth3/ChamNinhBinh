export type Language = 'vi' | 'en';

export type DestinationCategoryKey = 'nature' | 'history_culture' | 'spiritual';

export interface LocalizedText {
  vi: string;
  en: string;
}

export interface LocalizedList {
  vi: string[];
  en: string[];
}

export interface HeritagePhoto {
  id: string;
  src: string;
  width: number;
  height: number;
  caption: LocalizedText;
  alt: LocalizedText;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  modifications?: LocalizedText;
}

export interface StoryBlock {
  id: string;
  heading: LocalizedText;
  body: LocalizedList;
  photoId?: string;
}

export interface HighlightItem {
  id: string;
  title: LocalizedText;
  whatIsIt: LocalizedText;
  notablePoint: LocalizedText;
  whatToObserve: LocalizedText;
  photoId?: string;
  routeNote?: LocalizedText;
}

export interface TimelineEntry {
  period: LocalizedText;
  title: LocalizedText;
  detail: LocalizedText;
  category: 'history' | 'archaeology' | 'restoration' | 'legend';
}

export interface PhotoTipItem {
  id: string;
  aspect: LocalizedText;
  suggestion: LocalizedText;
}

export interface SourceCitation {
  name: LocalizedText;
  url: string;
  checkedDate: string;
  approvalStatus: LocalizedText;
}

export interface AudioSection {
  heading: LocalizedText;
  paragraphs: LocalizedList;
}

export interface AudioGuideData {
  viFile: string;
  enFile: string;
  estimatedDuration: LocalizedText;
  toneDescription: LocalizedText;
  voiceTypeNotice: LocalizedText;
  sections: AudioSection[];
}

export interface HeritageSite {
  id: string;
  slug: string;
  name: LocalizedText;
  shortTagline: LocalizedText;
  categoryKeys: DestinationCategoryKey[];
  categories: LocalizedList;
  administrativeLocation: LocalizedText;
  heritageStatus: LocalizedText;
  distinctionNote?: LocalizedText;
  coverPhotoId: string;
  photos: HeritagePhoto[];
  photoGoalNote?: LocalizedText;
  storyBlocks: StoryBlock[];
  highlights: HighlightItem[];
  photoTips: {
    editorialNote: LocalizedText;
    items: PhotoTipItem[];
    safetyReminder: LocalizedText;
  };
  timeline: TimelineEntry[];
  responsibleVisiting: LocalizedList;
  visitingInfoNote: LocalizedText;
  audio: AudioGuideData;
  sources: SourceCitation[];
}
