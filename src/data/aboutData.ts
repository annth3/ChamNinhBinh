import type { LocalizedText, LocalizedList } from '../types/heritage';

export interface EditorialPillar {
  step: string;
  title: LocalizedText;
  summary: LocalizedText;
  points: LocalizedList;
}

export interface CoverageItem {
  id: string;
  destination: LocalizedText;
  photoCount: string;
  status: 'complete' | 'partial';
  note: LocalizedText;
}

export const editorialPillars: EditorialPillar[] = [
  {
    step: '01',
    title: {
      vi: 'Xem cảnh — Ảnh thực tế có nguồn rõ ràng',
      en: 'See the Place — Verified Real Photography',
    },
    summary: {
      vi: 'Mỗi điểm đến đều có ảnh bìa mở đầu, ảnh xen kẽ trong bài viết, ảnh điểm nổi bật và bộ sưu tập ảnh mở rộng.',
      en: 'Each destination pairs an opening panorama, story-interspersed photos, highlight visuals, and an extended zoomable gallery.',
    },
    points: {
      vi: [
        'Tất cả ảnh đều ghi rõ tác giả, giấy phép (CC0, CC BY, CC BY-SA, CC BY-NC) và liên kết trang nguồn.',
        'Không sao chép hay cắt lặp ảnh để tăng số lượng giả tạo; các nơi còn thiếu ảnh mở được ghi chú minh bạch.',
      ],
      en: [
        'Every image credits its photographer, license (CC0, CC BY, CC BY-SA, CC BY-NC), and source link.',
        'Photos are never duplicated or cropped to inflate counts; gaps in open-licensed coverage are transparently reported.',
      ],
    },
  },
  {
    step: '02',
    title: {
      vi: 'Nghe chuyện — Thuyết minh song ngữ giàu sắc thái',
      en: 'Hear the Story — Expressive Bilingual Audio',
    },
    summary: {
      vi: 'Mỗi điểm đến có hai bài thuyết minh Việt – Anh dài khoảng 2–3 phút, điều chỉnh sắc thái riêng cho tâm linh, sử thi hay rừng nguyên sinh.',
      en: 'Every destination provides 2–3 minute Vietnamese and English narration tailored in tone to spiritual stillness, history, or forest nature.',
    },
    points: {
      vi: [
        'Chọn ngôn ngữ nghe độc lập với ngôn ngữ giao diện; có nút Phát, Tạm dừng, Nghe lại từ đầu và chỉnh tốc độ 0.8× / 1× / 1.2×.',
        'Ghi rõ bản hiện tại sử dụng giọng đọc tổng hợp, đi kèm toàn văn để đọc trực tiếp hoặc đối chiếu khi cần.',
      ],
      en: [
        'Audio language works independently of UI language, with Play, Pause, Replay, scrubbing, and 0.8× / 1× / 1.2× speed controls.',
        'Clearly labeled as synthesized narration with a matching readable transcript and device fallback.',
      ],
    },
  },
  {
    step: '03',
    title: {
      vi: 'Hiểu điểm đến — Trung thực với sử liệu và địa lý',
      en: 'Understand the Destination — Fact-Checked Content',
    },
    summary: {
      vi: 'Nội dung tách bạch giữa sự kiện lịch sử có chứng cứ, dấu tích khảo cổ, giai đoạn phục dựng hiện đại và truyền thuyết dân gian.',
      en: 'Editorial content separates documented history and archaeology from modern restorations and oral traditions.',
    },
    points: {
      vi: [
        'Phân biệt rõ Cố đô Hoa Lư (di tích thế kỷ X tại Trường Yên) với khu Phố cổ Hoa Lư xây mới.',
        'Cập nhật đơn vị hành chính tỉnh Ninh Bình mới sau Nghị quyết 1674/NQ-UBTVQH15 (từ 01/07/2025, đối chiếu 15/11/2026).',
      ],
      en: [
        'Distinguishes Hoa Lư Ancient Capital (10th-century royal site in Trường Yên) from the modern commercial Hoa Lư Old Town.',
        'Reflects updated Ninh Bình Province commune and ward boundaries effective July 1, 2025 under Resolution 1674/NQ-UBTVQH15.',
      ],
    },
  },
];

export const destinationCoverageList: CoverageItem[] = [
  {
    id: 'tam-chuc',
    destination: { vi: 'Chùa Tam Chúc', en: 'Tam Chúc Pagoda' },
    photoCount: '4 / 10–15',
    status: 'partial',
    note: {
      vi: 'Đã xác minh 4 ảnh nguồn mở (Hồ Tam Chúc, Cổng Tam Quan Ngoại, toàn cảnh hồ – núi, chim núi đá vôi tại Tam Chúc). Ảnh nội thất Điện Tam Thế, Điện Pháp Chủ, Điện Quan Âm và Chùa Ngọc cần bổ sung sau khi xin phép Ban quản lý.',
      en: '4 open-licensed photos verified (Tam Chúc Lake, Outer Gate, panorama, limestone babbler). Interior hall and Ngọc Pagoda shots await management-board permission.',
    },
  },
  {
    id: 'trang-an',
    destination: { vi: 'Tràng An', en: 'Tràng An Landscape Complex' },
    photoCount: '12 / 10–15',
    status: 'complete',
    note: {
      vi: '12 ảnh thực tế (cảnh quan karst, thuyền nan, Thủy Đình tuyến 2–3, cầu đá bến đò, miếu ven sông, vùng đất ngập nước và chim le hôi nhỏ).',
      en: '12 verified photos covering karst cliffs, rowboats, Thủy Đình (Routes 2–3), bridge pier, riverside shrine, wetland channels, and little grebe.',
    },
  },
  {
    id: 'hoa-lu',
    destination: { vi: 'Cố đô Hoa Lư', en: 'Hoa Lư Ancient Capital' },
    photoCount: '12 / 10–15',
    status: 'complete',
    note: {
      vi: '12 ảnh thực tế (Cổng Đông Môn, Đền Vua Đinh, Long sàng đá 1696, hồ súng, Đền Vua Lê, bia Lý Thái Tổ, nghê đá và bia cổ).',
      en: '12 verified photos covering East Gate, Emperor Đinh Temple, 1696 Stone Dragon Bed, lily pond, Emperor Lê Temple, Lý Thái Tổ pavilion, stone guardian, and ancient stelae.',
    },
  },
  {
    id: 'cuc-phuong',
    destination: { vi: 'Vườn quốc gia Cúc Phương', en: 'Cúc Phương National Park' },
    photoCount: '12 / 10–15',
    status: 'complete',
    note: {
      vi: '12 ảnh thực tế (cổng vườn, rừng nguyên sinh, Cây Chò ngàn năm, Động Người Xưa, hồ Mạc/Yên Quang, Trung tâm cứu hộ linh trưởng EPRC, Chương trình bảo tồn rùa, tê tê, ếch rêu và côn trùng rừng).',
      en: '12 verified photos covering entrance gate, primary forest trail, 1,000-year-old Chò tree, Cave of Prehistoric Man, lake ridge, EPRC langurs, Turtle Conservation Center, pangolins, mossy frog, and moth.',
    },
  },
  {
    id: 'dia-tang',
    destination: { vi: 'Chùa Địa Tạng Phi Lai Tự', en: 'Địa Tạng Phi Lai Tự Pagoda' },
    photoCount: '1 / 10–15',
    status: 'partial',
    note: {
      vi: 'Hiện mới tìm được 1 ảnh nguồn mở xác thực (Chùa Đùng / Địa Tạng Phi Lai Tự của tác giả Kien1980v, CC0). Các góc sân sỏi 12 nhân duyên, Tổ đường, đồi thông sẽ được bổ sung từ ảnh tự chụp thực địa hoặc xin phép nhà chùa.',
      en: 'Currently 1 verified open-licensed photo (Kien1980v, CC0). Photos of the 12-circle white pebble courtyard, Ancestral Hall, and pine backdrop will be added via on-site photography or monastery permission.',
    },
  },
];

export const expansionGuideSteps: {
  title: LocalizedText;
  steps: LocalizedList;
}[] = [
  {
    title: {
      vi: '1. Bổ sung ảnh còn thiếu cho Chùa Tam Chúc & Chùa Địa Tạng Phi Lai Tự',
      en: '1. Adding missing photos for Tam Chúc & Địa Tạng Phi Lai Tự',
    },
    steps: {
      vi: [
        'Chuẩn bị ảnh thật chụp trực tiếp hoặc có văn bản chấp thuận bản quyền từ đơn vị quản lý/nhà chùa (kích thước chiều ngang từ 1200px, định dạng .jpg/.webp).',
        'Lưu tệp vào thư mục public/images/ (ví dụ: public/images/diatang-2.jpg) và giữ nguyên tệp gốc không cắt ghép giả.',
        'Khai báo thêm mục ảnh trong mảng photos của điểm đến tương ứng tại src/data/heritageData.ts với đầy đủ caption, alt, author, license và sourceUrl.',
      ],
      en: [
        'Collect genuine on-site photographs or written management permissions (recommended width >= 1200px, .jpg/.webp).',
        'Place image files in public/images/ (e.g., public/images/diatang-2.jpg) without duplicating existing images.',
        'Add entries to the photos array in src/data/heritageData.ts including caption, alt, author, license, and sourceUrl.',
      ],
    },
  },
  {
    title: {
      vi: '2. Mở rộng sang điểm đến thứ 6 tại Ninh Bình',
      en: '2. Expanding to a 6th Ninh Bình destination',
    },
    steps: {
      vi: [
        'Cấu trúc HeritageSite trong src/types/heritage.ts hỗ trợ đa danh mục (nature, history_culture, spiritual) và các khối câu chuyện kèm ảnh xen kẽ.',
        'Thêm một đối tượng mới vào mảng heritageSites trong src/data/heritageData.ts với id và slug duy nhất (ví dụ: hang-mua, van-long, phat-diem).',
        'Trang chủ, bộ lọc danh mục, tìm kiếm không dấu, danh sách chọn nghe thuyết minh và đường dẫn /dia-diem/:slug sẽ tự động nhận điểm đến mới.',
      ],
      en: [
        'The HeritageSite schema in src/types/heritage.ts supports multi-category filters and photo-interspersed story blocks.',
        'Append a new object to heritageSites in src/data/heritageData.ts with a unique id and slug (e.g., hang-mua, van-long, phat-diem).',
        'Home cards, category tabs, accent-insensitive search, listen picker, and /dia-diem/:slug routes adapt automatically.',
      ],
    },
  },
  {
    title: {
      vi: '3. Nâng cấp bản thu thuyết minh giọng người thật',
      en: '3. Upgrading narration audio to human voice recordings',
    },
    steps: {
      vi: [
        'Trước khi phát hành rộng rãi, cần mời giảng viên lịch sử địa phương, chuyên gia bảo tồn hoặc đại diện ban quản lý kiểm tra lại nội dung và phát âm tên riêng.',
        'Thay các tệp .mp3 trong public/audio/ bằng bản thu giọng đọc truyền cảm thực tế (giữ nguyên tên tệp khai báo trong audio.viFile và audio.enFile).',
        'Cập nhật audio.voiceTypeNotice trong src/data/heritageData.ts để phản ánh đúng nguồn giọng thu âm mới.',
      ],
      en: [
        'Have local historians, conservation staff, or site managers review scripts and proper-noun pronunciation prior to public release.',
        'Replace the .mp3 files in public/audio/ keeping the declared audio.viFile and audio.enFile paths.',
        'Update audio.voiceTypeNotice in src/data/heritageData.ts accurately to reflect the human recording.',
      ],
    },
  },
];
