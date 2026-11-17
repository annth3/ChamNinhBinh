import type { DestinationCategoryKey, Language } from '../types/heritage';

export const uiText: Record<
  Language,
  {
    brandName: string;
    navExplore: string;
    navSaved: string;
    navAbout: string;
    langToggleLabel: string;
    heroHeadline: string;
    heroSubtitle: string;
    heroCtaExplore: string;
    heroCtaListen: string;
    listenModalTitle: string;
    listenModalDesc: string;
    listenModalOpenAction: string;
    sectionSitesTitle: string;
    sectionSitesSubtitle: string;
    searchPlaceholder: string;
    searchClear: string;
    filterAll: string;
    categoryLabels: Record<DestinationCategoryKey, string>;
    filterSavedOnly: string;
    emptySearchTitle: string;
    emptySearchDesc: string;
    emptySavedTitle: string;
    emptySavedDesc: string;
    clearAllFilters: string;
    bilingualAudioLabel: string;
    exploreButton: string;
    saveSite: string;
    savedSite: string;
    localSaveNotice: string;
    howToUseHeading: string;
    howToUseFlow: string;
    howToUseDesc: string;
    aboutLinkLabel: string;
    backToList: string;
    listenJumpButton: string;
    shareButton: string;
    copiedSuccess: string;
    manualCopyHint: string;
    qrTitle: string;
    qrDesc: string;
    qrManagementNote: string;
    qrOpenButton: string;
    qrDownload: string;
    close: string;
    audioTitle: string;
    audioLanguageLabel: string;
    audioToneLabel: string;
    audioPlay: string;
    audioPause: string;
    audioReplay: string;
    audioSpeedLabel: string;
    audioTranscriptShow: string;
    audioTranscriptHide: string;
    audioFallbackNotice: string;
    audioNoVoiceNotice: string;
    audioDeviceFallbackActive: string;
    audioNoAutoplayNote: string;
    storyTitle: string;
    highlightsTitle: string;
    highlightWhat: string;
    highlightNotable: string;
    highlightObserve: string;
    galleryTitle: string;
    galleryHint: string;
    photoSource: string;
    photoLicense: string;
    photoAuthor: string;
    photoOpenSource: string;
    photoPrev: string;
    photoNext: string;
    photoTipsTitle: string;
    photoTipsSafetyTitle: string;
    timelineTitle: string;
    timelineTypes: {
      history: string;
      archaeology: string;
      restoration: string;
      legend: string;
    };
    responsibleTitle: string;
    sourcesAndVisitingTitle: string;
    visitingInfoHeading: string;
    sourcesChecked: string;
    sourcesStatus: string;
    footerNote: string;
    footerAboutLink: string;
  }
> = {
  vi: {
    brandName: 'chạm Ninh Bình',
    navExplore: 'Khám phá',
    navSaved: 'Điểm đến yêu thích',
    navAbout: 'Giới thiệu',
    langToggleLabel: 'Chuyển sang tiếng Anh',
    heroHeadline: 'Chạm một điểm đến – Nghe một câu chuyện',
    heroSubtitle:
      'Khám phá cảnh sắc, lắng nghe những câu chuyện và cảm nhận vẻ đẹp Ninh Bình theo cách của bạn.',
    heroCtaExplore: 'Khám phá điểm đến',
    heroCtaListen: 'Chọn điểm đến để nghe',
    listenModalTitle: 'Chọn điểm đến để nghe thuyết minh',
    listenModalDesc:
      'Chọn một điểm đến bên dưới để mở trang chi tiết và bắt đầu nghe câu chuyện bằng tiếng Việt hoặc tiếng Anh.',
    listenModalOpenAction: 'Mở & nghe ngay',
    sectionSitesTitle: 'Năm điểm đến tại Ninh Bình',
    sectionSitesSubtitle:
      'Tìm theo tên hoặc lọc theo nhóm trải nghiệm để khám phá bộ ảnh thực tế, câu chuyện điểm đến và thuyết minh hai ngôn ngữ.',
    searchPlaceholder: 'Tìm theo tên điểm đến (hỗ trợ không dấu, ví dụ: cuc phuong, trang an)...',
    searchClear: 'Xóa từ khóa',
    filterAll: 'Tất cả',
    categoryLabels: {
      nature: 'Thiên nhiên',
      history_culture: 'Lịch sử – văn hóa',
      spiritual: 'Tâm linh',
    },
    filterSavedOnly: 'Yêu thích',
    emptySearchTitle: 'Không tìm thấy điểm đến phù hợp',
    emptySearchDesc:
      'Thử thay đổi từ khóa tìm kiếm hoặc xóa bộ lọc để xem đầy đủ 5 điểm đến hiện có.',
    emptySavedTitle: 'Bạn chưa lưu điểm đến yêu thích nào',
    emptySavedDesc:
      'Nhấn biểu tượng yêu thích trên mỗi điểm đến để lưu lại hành trình riêng. Dữ liệu chỉ lưu trên trình duyệt hiện tại và không thu thập thông tin cá nhân.',
    clearAllFilters: 'Xóa bộ lọc',
    bilingualAudioLabel: 'Thuyết minh Việt – Anh',
    exploreButton: 'Khám phá',
    saveSite: 'Lưu yêu thích',
    savedSite: 'Đã thích',
    localSaveNotice: 'Lưu trên thiết bị hiện tại (localStorage), chưa đồng bộ tài khoản.',
    howToUseHeading: 'Cách đồng hành cùng chạm Ninh Bình',
    howToUseFlow: 'Chọn điểm đến → Khám phá bằng hình ảnh → Nghe câu chuyện.',
    howToUseDesc:
      'Không cần đăng ký tài khoản. Mở trực tiếp trên điện thoại trước chuyến đi hoặc ngay tại điểm tham quan để xem ảnh tư liệu, đọc thông tin đã kiểm chứng và nghe thuyết minh Việt – Anh.',
    aboutLinkLabel: 'Xem thông tin biên tập & nguồn dữ liệu',
    backToList: 'Quay lại danh sách điểm đến',
    listenJumpButton: 'Nghe thuyết minh',
    shareButton: 'Chia sẻ',
    copiedSuccess: 'Đã sao chép liên kết điểm đến.',
    manualCopyHint:
      'Trình duyệt không hỗ trợ tự động sao chép. Vui lòng chọn và sao chép đường dẫn bên dưới:',
    qrTitle: 'Mã QR điểm đến',
    qrDesc: 'Quét mã để mở trực tiếp trang của điểm đến này trên điện thoại.',
    qrManagementNote:
      'Lưu ý thực địa: Việc đặt bảng mã QR tại điểm tham quan cần có sự đồng ý của đơn vị quản lý.',
    qrOpenButton: 'Mã QR',
    qrDownload: 'Tải ảnh QR',
    close: 'Đóng',
    audioTitle: 'Thuyết minh câu chuyện điểm đến',
    audioLanguageLabel: 'Ngôn ngữ nghe (độc lập với giao diện)',
    audioToneLabel: 'Sắc thái kể chuyện',
    audioPlay: 'Phát thuyết minh',
    audioPause: 'Tạm dừng',
    audioReplay: 'Nghe lại từ đầu',
    audioSpeedLabel: 'Tốc độ',
    audioTranscriptShow: 'Đọc văn bản thuyết minh',
    audioTranscriptHide: 'Thu gọn văn bản',
    audioFallbackNotice:
      'Tệp âm thanh thu sẵn chưa tải được. Đang chuyển sang giọng đọc của thiết bị nếu có giọng đúng ngôn ngữ.',
    audioNoVoiceNotice:
      'Thiết bị hiện không tải được tệp âm thanh và chưa có giọng đọc phù hợp. Mời bạn đọc toàn văn câu chuyện bên dưới.',
    audioDeviceFallbackActive: 'Đang phát qua giọng đọc thiết bị (dự phòng).',
    audioNoAutoplayNote: 'Nhấn Phát để nghe — khuyến khích dùng tai nghe khi tham quan.',
    storyTitle: 'Câu chuyện điểm đến',
    highlightsTitle: 'Có gì để khám phá?',
    highlightWhat: 'Đây là gì?',
    highlightNotable: 'Có gì đáng chú ý?',
    highlightObserve: 'Nên quan sát và tìm hiểu điều gì?',
    galleryTitle: 'Bộ sưu tập ảnh mở rộng',
    galleryHint: 'Chạm vào ảnh để phóng to, chuyển ảnh và xem thông tin tác giả, giấy phép.',
    photoSource: 'Nguồn gốc',
    photoLicense: 'Giấy phép',
    photoAuthor: 'Tác giả',
    photoOpenSource: 'Xem trang nguồn gốc',
    photoPrev: 'Ảnh trước',
    photoNext: 'Ảnh sau',
    photoTipsTitle: 'Gợi ý góc chụp (đề xuất biên tập)',
    photoTipsSafetyTitle: 'Lưu ý an toàn và tôn trọng không gian chung',
    timelineTitle: 'Dấu mốc lịch sử và thời gian',
    timelineTypes: {
      history: 'Sự kiện lịch sử',
      archaeology: 'Khảo cổ học',
      restoration: 'Xây dựng / Tu bổ',
      legend: 'Truyền thuyết',
    },
    responsibleTitle: 'Tham quan có trách nhiệm',
    sourcesAndVisitingTitle: 'Nguồn tham khảo & thông tin tham quan',
    visitingInfoHeading: 'Lưu ý giờ mở cửa, vé và tuyến tham quan',
    sourcesChecked: 'Ngày kiểm tra',
    sourcesStatus: 'Ghi chú xác minh',
    footerNote:
      'chạm Ninh Bình — Bạn đồng hành số khám phá cảnh sắc, văn hóa và thiên nhiên Ninh Bình. Không yêu cầu đăng nhập và không thu thập dữ liệu cá nhân.',
    footerAboutLink: 'Giới thiệu & ghi chú biên tập',
  },
  en: {
    brandName: 'chạm Ninh Bình',
    navExplore: 'Explore',
    navSaved: 'Favorites',
    navAbout: 'About',
    langToggleLabel: 'Switch to Vietnamese',
    heroHeadline: 'Touch a destination – Hear a story',
    heroSubtitle:
      'Explore scenic landscapes, listen to living stories, and experience the beauty of Ninh Bình at your own pace.',
    heroCtaExplore: 'Explore destinations',
    heroCtaListen: 'Choose a destination to listen',
    listenModalTitle: 'Choose a destination to listen',
    listenModalDesc:
      'Select a destination below to open its guide and play the Vietnamese or English audio narration.',
    listenModalOpenAction: 'Open & listen',
    sectionSitesTitle: 'Five Destinations in Ninh Bình',
    sectionSitesSubtitle:
      'Search by name or filter by theme to browse real photography, verified stories, and bilingual audio guides.',
    searchPlaceholder: 'Search by destination name (e.g., Cuc Phuong, Trang An)...',
    searchClear: 'Clear search',
    filterAll: 'All',
    categoryLabels: {
      nature: 'Nature',
      history_culture: 'History & Culture',
      spiritual: 'Spiritual',
    },
    filterSavedOnly: 'Favorites',
    emptySearchTitle: 'No matching destination found',
    emptySearchDesc:
      'Try adjusting your search keyword or clearing filters to view all five destinations.',
    emptySavedTitle: 'No favorite destinations saved yet',
    emptySavedDesc:
      'Tap the favorite icon on any destination to build your shortlist. Saved items stay on this browser only without collecting personal data.',
    clearAllFilters: 'Clear filters',
    bilingualAudioLabel: 'VI & EN audio',
    exploreButton: 'Explore',
    saveSite: 'Favorite',
    savedSite: 'Favorited',
    localSaveNotice: 'Stored locally on this device (localStorage); no account sync.',
    howToUseHeading: 'How to use chạm Ninh Bình',
    howToUseFlow: 'Choose a destination → Explore through photos → Listen to its story.',
    howToUseDesc:
      'No account needed. Use on your phone before your trip or right at the site to view verified images, read curated stories, and listen in Vietnamese or English.',
    aboutLinkLabel: 'View editorial notes & source checklist',
    backToList: 'Back to all destinations',
    listenJumpButton: 'Listen to guide',
    shareButton: 'Share',
    copiedSuccess: 'Destination link copied.',
    manualCopyHint: 'Clipboard copy is unavailable. Please select and copy the URL below:',
    qrTitle: 'Destination QR Code',
    qrDesc: 'Scan to open this exact destination guide on a smartphone.',
    qrManagementNote:
      'On-site note: Installing physical QR signage at any destination requires approval from its management authority.',
    qrOpenButton: 'QR Code',
    qrDownload: 'Download QR',
    close: 'Close',
    audioTitle: 'Storytelling Audio Guide',
    audioLanguageLabel: 'Audio language (independent from interface)',
    audioToneLabel: 'Narration mood',
    audioPlay: 'Play narration',
    audioPause: 'Pause',
    audioReplay: 'Replay',
    audioSpeedLabel: 'Speed',
    audioTranscriptShow: 'Read matching transcript',
    audioTranscriptHide: 'Hide transcript',
    audioFallbackNotice:
      'Pre-generated audio file could not be loaded. Switching to device speech synthesis if a matching voice is installed.',
    audioNoVoiceNotice:
      'Audio playback is unavailable right now and no matching device voice was found. You can read the full narration below.',
    audioDeviceFallbackActive: 'Playing via device speech synthesis (fallback).',
    audioNoAutoplayNote: 'Press Play to start — headphones are recommended on site.',
    storyTitle: 'Destination Story',
    highlightsTitle: 'What to Explore',
    highlightWhat: 'What is it?',
    highlightNotable: 'What makes it notable?',
    highlightObserve: 'What to look for and learn',
    galleryTitle: 'Extended Photo Gallery',
    galleryHint: 'Tap any photo to enlarge, browse, and view author and license attributions.',
    photoSource: 'Source',
    photoLicense: 'License',
    photoAuthor: 'Author',
    photoOpenSource: 'View original source',
    photoPrev: 'Previous photo',
    photoNext: 'Next photo',
    photoTipsTitle: 'Photography Suggestions (Editorial Guide)',
    photoTipsSafetyTitle: 'Safety & Respect Guidelines',
    timelineTitle: 'Historical & Natural Timeline',
    timelineTypes: {
      history: 'Historical record',
      archaeology: 'Archaeology',
      restoration: 'Construction / Restoration',
      legend: 'Folk legend',
    },
    responsibleTitle: 'Responsible Visiting',
    sourcesAndVisitingTitle: 'Sources & Visiting Notes',
    visitingInfoHeading: 'Tickets, opening hours & route checks',
    sourcesChecked: 'Verified on',
    sourcesStatus: 'Verification note',
    footerNote:
      'chạm Ninh Bình — A digital travel companion for exploring landscapes, history, nature, and spiritual places in Ninh Bình. No account required and no personal data collected.',
    footerAboutLink: 'About & editorial notes',
  },
};
