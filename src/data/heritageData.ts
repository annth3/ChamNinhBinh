import type { HeritageSite } from '../types/heritage';

export const heritageSites: HeritageSite[] = [
  {
    id: 'tam-chuc',
    slug: 'chua-tam-chuc',
    name: {
      vi: 'Chùa Tam Chúc',
      en: 'Tam Chúc Pagoda',
    },
    shortTagline: {
      vi: 'Quần thể văn hóa – tâm linh tựa núi Thất Tinh, hướng hồ Lục Nhạc thanh tịnh với kiến trúc quy mô lớn xây dựng từ đầu thế kỷ XXI.',
      en: 'A serene 21st-century Buddhist cultural complex nestled between Thất Tinh Ridge and Lục Nhạc Lake on a valley tied to older local lore.',
    },
    categoryKeys: ['spiritual', 'nature'],
    categories: {
      vi: ['Tâm linh', 'Thiên nhiên'],
      en: ['Spiritual', 'Nature'],
    },
    administrativeLocation: {
      vi: 'Phường Tam Chúc, tỉnh Ninh Bình (trước 01/07/2025 thuộc thị xã Kim Bảng, tỉnh Hà Nam — cập nhật theo Nghị quyết 1674/NQ-UBTVQH15 năm 2025, đối chiếu 15/11/2026).',
      en: 'Tam Chúc Ward, Ninh Bình Province (formerly Kim Bảng Town, Hà Nam Province prior to the July 1, 2025 merger under Resolution 1674/NQ-UBTVQH15; verified Nov 15, 2026).',
    },
    heritageStatus: {
      vi: 'Khu du lịch văn hóa – tâm linh và cảnh quan cấp quốc gia; nơi đăng cai Đại lễ Vesak Liên Hợp Quốc 2019 (không phải Di sản Thế giới UNESCO).',
      en: 'Major national cultural, spiritual, and scenic complex; host venue of the 2019 UN Day of Vesak (not a UNESCO World Heritage Site).',
    },
    coverPhotoId: 'tamchuc-3',
    photos: [
      {
        id: 'tamchuc-1',
        src: '/images/tamchuc-1.jpg',
        width: 1280,
        height: 960,
        caption: {
          vi: 'Hồ Tam Chúc (hồ Lục Nhạc) và các đảo đá vôi tự nhiên trong làn sương nhẹ buổi sớm.',
          en: 'Tam Chúc Lake (Lục Nhạc Lake) and natural limestone islets framed by soft morning mist.',
        },
        alt: {
          vi: 'Mặt hồ Tam Chúc tĩnh lặng phản chiếu đảo đá phủ cây xanh và dãy núi đá vôi phía sau.',
          en: 'Calm waters of Tam Chúc Lake reflecting green karst islets and limestone mountains behind.',
        },
        author: 'Hoangvantoanajc',
        license: 'CC0 1.0 (Phạm vi công cộng)',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:C%E1%BA%A3nh_tr%C3%AAn_H%E1%BB%93_Tam_Ch%C3%BAc,_Ninh_B%C3%ACnh.jpg',
      },
      {
        id: 'tamchuc-2',
        src: '/images/tamchuc-2.jpg',
        width: 1280,
        height: 1707,
        caption: {
          vi: 'Cổng Tam Quan Ngoại bằng đá và gỗ với ba lối vòm cùng hệ mái cong nhiều tầng.',
          en: 'The Outer Tam Quan Gate featuring three stone-arched entrances and tiered curved wooden roofs.',
        },
        alt: {
          vi: 'Cổng Tam Quan Ngoại Chùa Tam Chúc với ba cổng vòm đá xám và mái ngói cong nhiều lớp.',
          en: 'Three-arched stone and timber Outer Gate of Tam Chúc Pagoda with tiered curved roofs.',
        },
        author: 'Milad Mosapoor',
        license: 'Attribution (Ghi công tác giả)',
        licenseUrl:
          'https://commons.wikimedia.org/wiki/File:Tam_Chuc_Pagoda_-_Ha_Nam.jpg',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Tam_Chuc_Pagoda_-_Ha_Nam.jpg',
      },
      {
        id: 'tamchuc-3',
        src: '/images/tamchuc-3.jpg',
        width: 1280,
        height: 433,
        caption: {
          vi: 'Toàn cảnh mặt hồ rộng lớn và dãy núi đá vôi phía sau tạo thế “tựa sơn hướng thủy”.',
          en: 'Panoramic view of the wide lake and stepped limestone ridge behind the pagoda valley.',
        },
        alt: {
          vi: 'Ảnh toàn cảnh dãy núi đá vôi trùng điệp vươn lên từ mặt hồ Tam Chúc phẳng lặng.',
          en: 'Wide panoramic view of limestone peaks rising above calm waters of Tam Chúc Lake.',
        },
        author: 'Hoangvantoanajc',
        license: 'CC0 1.0 (Phạm vi công cộng)',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:H%E1%BB%93_Tam_Ch%C3%BAc.jpg',
      },
      {
        id: 'tamchuc-4',
        src: '/images/tamchuc-4.jpg',
        width: 1280,
        height: 549,
        caption: {
          vi: 'Khướu đá vôi (Annam limestone babbler) ghi nhận trên vách đá vôi tự nhiên khu vực Tam Chúc.',
          en: 'An Annam limestone babbler perched on natural karst rocks in the Tam Chúc area.',
        },
        alt: {
          vi: 'Chú chim khướu đá vôi màu nâu xám đậu trên tảng đá vôi rêu phong tại Tam Chúc.',
          en: 'An Annam limestone babbler standing on mossy limestone rock in Tam Chúc.',
        },
        author: 'Khoitran1957',
        license: 'CC BY-SA 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Annam_limestone_babbler_-_Tam_Chuc,_Ha_Nam,_Vietnam_2020-02-21_(cropped).jpg',
      },
    ],
    photoGoalNote: {
      vi: 'Kho ảnh xác thực hiện có: 4 / mục tiêu 10–15 ảnh. Các góc nội thất Điện Tam Thế, Điện Pháp Chủ, Điện Quan Âm, Vườn Cột Kinh và Chùa Ngọc hiện chưa có ảnh nguồn mở phù hợp; cần bổ sung thêm 6–11 ảnh chụp thực địa hoặc ảnh được Ban quản lý Tam Chúc cấp phép.',
      en: 'Current verified coverage: 4 / target 10–15 photos. Open-licensed photographs of Tam Thế, Pháp Chủ, and Quan Âm Halls, Sutra Pillars, and Ngọc Pagoda are still needed (6–11 photos pending on-site photography or management permission).',
    },
    storyBlocks: [
      {
        id: 'tc-story-1',
        heading: {
          vi: 'Thung lũng hồ Lục Nhạc – núi Thất Tinh',
          en: 'Between Lục Nhạc Lake and Thất Tinh Ridge',
        },
        body: {
          vi: [
            'Rời trục đường chính tiến vào vùng Ba Sao xưa (nay thuộc phường Tam Chúc, tỉnh Ninh Bình mới), tầm mắt mở ra một thung lũng đá vôi rộng lớn và tĩnh lặng. Trước mặt là hồ Lục Nhạc phẳng lặng với sáu ngọn núi nhỏ nhô lên như sáu chiếc đảo xanh, phía sau là dãy núi Thất Tinh làm điểm tựa vững chãi.',
            'Theo truyền tích dân gian địa phương, tên gọi “Tiền Lục Nhạc – Hậu Thất Tinh” gắn với câu chuyện bảy ngôi sao sáng trên đỉnh núi và ngôi chùa cổ từng tồn tại từ thời nhà Đinh. Dẫu công trình xưa không còn nguyên vẹn, địa thế sông núi hài hòa vẫn là linh hồn của toàn bộ không gian hôm nay.',
          ],
          en: [
            'Entering what was once the Ba Sao valley (now Tam Chúc Ward in expanded Ninh Bình Province), the road opens onto a broad limestone amphitheater. Ahead stretches Lục Nhạc Lake dotted with six small wooded islets, while the seven-peaked Thất Tinh Ridge rises calmly behind.',
            'Regional folklore speaks of “Six Bells Ahead, Seven Stars Behind” and remembers an ancient temple dating back to the 10th-century Đinh era. Though original ancient structures have long vanished, this mountain-backed, water-facing setting remains the soul of Tam Chúc.',
          ],
        },
        photoId: 'tamchuc-1',
      },
      {
        id: 'tc-story-2',
        heading: {
          vi: 'Công trình đương đại trên mạch văn hóa truyền thống',
          en: 'Contemporary Craftsmanship on Historic Grounds',
        },
        body: {
          vi: [
            'Điều quan trọng cần phân biệt khi khám phá Tam Chúc là niên đại xây dựng: toàn bộ quần thể bề thế từ Cổng Tam Quan Ngoại, Vườn Cột Kinh đến Điện Quan Âm, Điện Pháp Chủ và Điện Tam Thế là sản phẩm quy hoạch và xây dựng quy mô lớn đầu thế kỷ XXI (khởi động từ năm 2001, đẩy mạnh từ 2006 và hoàn thiện trọng điểm dịp Đại lễ Vesak Liên Hợp Quốc 2019).',
            'Thay vì tìm kiếm dấu tích rêu phong trăm tuổi, du khách đến đây để chiêm ngưỡng kỹ nghệ chế tác đá xanh, chạm khắc phù điêu đá núi lửa, đúc đồng và dựng mái gỗ truyền thống của hàng nghìn nghệ nhân đương đại trong một không gian cảnh quan khoáng đạt.',
          ],
          en: [
            'An essential part of understanding Tam Chúc is distinguishing its construction timeline: from the Outer Tam Quan Gate and Sutra Pillar Garden up to Quan Âm, Pháp Chủ, and Tam Thế Halls, the monumental architecture visible today is a 21st-century undertaking planned from 2001, accelerated after 2006, and completed in key phases for the 2019 UN Day of Vesak.',
            'Rather than looking for centuries-old timber patina, visitors come here to observe contemporary Vietnamese stone masonry, volcanic-rock bas-reliefs, bronze casting, and karst ecology side by side.',
          ],
        },
        photoId: 'tamchuc-2',
      },
    ],
    highlights: [
      {
        id: 'tc-lake',
        title: {
          vi: 'Hồ Lục Nhạc và sáu hòn đảo đá vôi',
          en: 'Lục Nhạc Lake & Six Karst Islets',
        },
        whatIsIt: {
          vi: 'Hồ nước tự nhiên rộng lớn nằm ngay phía trước trục chính điện, tạo không gian đệm yên tĩnh giữa khu đón tiếp và vùng lõi thờ tự.',
          en: 'A broad natural lake fronting the pagoda’s central ceremonial axis, forming a tranquil buffer between the visitor center and sanctuary.',
        },
        notablePoint: {
          vi: 'Các dãy núi đá vôi xung quanh vẫn là sinh cảnh tự nhiên của nhiều loài chim và thực vật núi đá đặc trưng như khướu đá vôi.',
          en: 'Surrounding limestone cliffs continue to shelter wild karst birds and flora, including the Annam limestone babbler.',
        },
        whatToObserve: {
          vi: 'Quan sát bóng núi đổ xuống mặt hồ vào sáng sớm hoặc chiều muộn và lắng nghe tiếng gió qua mặt nước trước khi bước vào điện thờ.',
          en: 'Notice mountain reflections on calm mornings or late afternoons and look quietly for birds along the vegetated rocky slopes.',
        },
        photoId: 'tamchuc-1',
      },
      {
        id: 'tc-gate',
        title: {
          vi: 'Cổng Tam Quan Ngoại và Cổng Tam Quan Nội',
          en: 'Outer & Inner Tam Quan Gates',
        },
        whatIsIt: {
          vi: 'Hai lớp cổng chào mở đầu trục thần đạo, kết hợp ba vòm cửa đá xám vững chãi với hệ mái ngói cong nhiều tầng.',
          en: 'Two monumental three-arched ceremonial gateways linking gray stone masonry with layered curved timber roofs.',
        },
        notablePoint: {
          vi: 'Đóng vai trò ranh giới chuyển nhịp từ không gian sinh hoạt bên ngoài sang sự tĩnh tại bên trong khuôn viên chùa.',
          en: 'They frame the central visual axis and mark a serene threshold into the spiritual grounds.',
        },
        whatToObserve: {
          vi: 'Ngắm tỷ lệ mái chồng diêm, hoa văn chạm đá trên các trụ cổng và khoảng mở nhìn thẳng lên sườn núi Thất Tinh.',
          en: 'Look at the tiered roof proportions, carved stone reliefs on the piers, and the uphill sightline toward Thất Tinh Mountain.',
        },
        photoId: 'tamchuc-2',
      },
      {
        id: 'tc-halls',
        title: {
          vi: 'Vườn Cột Kinh và trục ba chính điện',
          en: 'Sutra Pillar Garden & The Three Main Halls',
        },
        whatIsIt: {
          vi: 'Tuyến không gian trung tâm gồm 32 cột kinh bằng đá xanh cao khoảng 13,5 m dẫn lần lượt lên Điện Quan Âm, Điện Pháp Chủ và Điện Tam Thế.',
          en: 'The central terrace featuring 32 green-stone sutra pillars leading uphill through Quan Âm, Pháp Chủ, and Tam Thế Halls.',
        },
        notablePoint: {
          vi: 'Bên trong các điện chính có hàng nghìn bức phù điêu chạm khắc từ đá núi lửa và tượng Phật bằng đồng kích thước lớn.',
          en: 'Inside the halls are thousands of carved volcanic-stone bas-reliefs and monumental bronze statues.',
        },
        whatToObserve: {
          vi: 'Đọc những dòng chữ khắc trên thân cột kinh và tìm hiểu tích truyện Phật giáo thể hiện trên tường đá núi lửa.',
          en: 'Examine the engraved pillars outdoors and observe the narrative stone panels lining the hall walls.',
        },
      },
      {
        id: 'tc-ngoc',
        title: {
          vi: 'Chùa Ngọc trên đỉnh núi Thất Tinh',
          en: 'Ngọc (Jade) Pagoda on Thất Tinh Peak',
        },
        whatIsIt: {
          vi: 'Ngôi bảo tháp nằm ở điểm cao nhất trong trục kiến trúc (cao độ gần 170 m), lắp ghép từ các phiến đá granite đỏ.',
          en: 'A stone shrine perched atop the highest point of the ceremonial axis (~170 m elevation), assembled from interlocking red granite slabs.',
        },
        notablePoint: {
          vi: 'Từ sân chùa nhìn xuống có thể bao quát toàn bộ trục điện thờ và vùng hồ núi bên dưới.',
          en: 'The upper terrace opens onto sweeping views across the pagoda rooftops, Lục Nhạc Lake, and surrounding peaks.',
        },
        whatToObserve: {
          vi: 'Chuẩn bị giày thể thao thoải mái để leo các bậc đá; lưu ý kiểm tra trạng thái mở cửa lối lên đỉnh theo ngày.',
          en: 'Wear comfortable walking shoes for the steep stone staircase and check locally whether the upper trail is open during your visit.',
        },
        photoId: 'tamchuc-4',
      },
    ],
    photoTips: {
      editorialNote: {
        vi: 'Gợi ý biên tập giúp bạn ghi lại quy mô kiến trúc và sự thanh tịnh của cảnh quan Tam Chúc.',
        en: 'Editorial framing suggestions for capturing Tam Chúc’s scale and quiet reflections safely.',
      },
      items: [
        {
          id: 'tc-tip-1',
          aspect: { vi: 'Toàn cảnh hồ – núi sáng sớm', en: 'Early morning lake & peaks' },
          suggestion: {
            vi: 'Đứng tại lối dạo ven hồ Lục Nhạc khi mặt nước còn êm để lấy trọn hình ảnh núi đá phản chiếu và lớp sương nhẹ.',
            en: 'Stand along the Lục Nhạc lakeside promenade early in the morning while reflections and light valley mist remain intact.',
          },
        },
        {
          id: 'tc-tip-2',
          aspect: { vi: 'Đường dẫn trục thần đạo', en: 'Axial symmetry at the gates' },
          suggestion: {
            vi: 'Căn máy chính giữa tại Cổng Tam Quan hoặc khoảng sân trước Điện Quan Âm để thể hiện chiều sâu các tầng mái.',
            en: 'Align along the central walkway at the Tam Quan Gate or lower courtyard to emphasize the stepped ascent of halls.',
          },
        },
        {
          id: 'tc-tip-3',
          aspect: { vi: 'Chi tiết điêu khắc đá', en: 'Stone relief textures' },
          suggestion: {
            vi: 'Tận dụng ánh sáng tự nhiên xiên ngang ngoài hiên để làm nổi độ nổi của hoa văn đá, tránh bật đèn flash trong chính điện.',
            en: 'Use natural side-lighting on exterior stone carvings and avoid flash inside prayer halls.',
          },
        },
      ],
      safetyReminder: {
        vi: 'Không trèo lên lan can đá, bậc tượng hay vách đá; giữ lối đi thông thoáng và tránh chụp cận mặt người đang hành lễ.',
        en: 'Do not climb stone railings or plinths, keep walkways unobstructed, and avoid close-up photos of worshippers.',
      },
    },
    timeline: [
      {
        period: { vi: 'Thế kỷ X (theo truyền tích)', en: '10th Century (folk tradition)' },
        title: { vi: 'Truyền tích ngôi chùa cổ vùng Ba Sao', en: 'Traditions of an ancient Đinh-era temple' },
        detail: {
          vi: 'Truyền thuyết địa phương kể về ngôi chùa Tam Chúc cổ từ thời nhà Đinh gắn với vùng “Tiền Lục Nhạc – Hậu Thất Tinh”. Công trình cổ không còn nguyên vẹn qua biến thiên lịch sử.',
          en: 'Local legend recalls a Đinh-era pagoda in the Ba Sao valley linked to “Six Bells Ahead, Seven Stars Behind”; original historic buildings did not survive intact.',
        },
        category: 'legend',
      },
      {
        period: { vi: '2001 – 2006', en: '2001 – 2006' },
        title: { vi: 'Quy hoạch và khởi công quần thể mới', en: 'Modern masterplan & construction start' },
        detail: {
          vi: 'Dự án khu du lịch văn hóa – tâm linh Tam Chúc được phê duyệt từ 2001 và đẩy mạnh thi công từ 2006.',
          en: 'Approved in 2001 with major construction accelerating from 2006 onward.',
        },
        category: 'restoration',
      },
      {
        period: { vi: '12–14/05/2019', en: 'May 12–14, 2019' },
        title: { vi: 'Đăng cai Đại lễ Vesak Liên Hợp Quốc 2019', en: 'Host of the 2019 UN Day of Vesak' },
        detail: {
          vi: 'Các điện chính hoàn thiện trọng điểm để đón tiếp đại biểu từ hơn 100 quốc gia và vùng lãnh thổ.',
          en: 'Key ceremonial halls opened in time to host delegations from more than 100 countries and territories.',
        },
        category: 'history',
      },
      {
        period: { vi: 'Từ 01/07/2025', en: 'From July 1, 2025' },
        title: { vi: 'Thuộc phường Tam Chúc, tỉnh Ninh Bình', en: 'Incorporated into expanded Ninh Bình Province' },
        detail: {
          vi: 'Theo Nghị quyết 1674/NQ-UBTVQH15, khu vực Chùa Tam Chúc thuộc phường Tam Chúc, tỉnh Ninh Bình mới.',
          en: 'Under Resolution 1674/NQ-UBTVQH15, Tam Chúc lies in Tam Chúc Ward, Ninh Bình Province.',
        },
        category: 'history',
      },
    ],
    responsibleVisiting: {
      vi: [
        'Sử dụng tai nghe khi bật thuyết minh để giữ sự thanh tịnh cho người tham quan và hành hương.',
        'Lựa chọn trang phục lịch sự, kín đáo khi vào các điện thờ và Chùa Ngọc.',
        'Giữ giọng nói nhẹ nhàng, không chạy nhảy hay chạm tay vào tượng thờ, chuông đồng và phù điêu đá.',
        'Không xả rác xuống hồ Lục Nhạc và đường bậc đá lên núi Thất Tinh.',
        'Giữ khoảng cách yên tĩnh nếu bắt gặp chim hoang dã trên vách núi đá vôi.',
      ],
      en: [
        'Use earphones while playing audio narration to preserve a quiet atmosphere.',
        'Dress modestly before entering prayer halls and Ngọc Pagoda.',
        'Keep voices low and refrain from touching statues, bronze bells, or volcanic-stone carvings.',
        'Carry all waste out of Lục Nhạc Lake and the Thất Tinh Mountain trail.',
        'Observe wildlife along the limestone slopes quietly from designated paths.',
      ],
    },
    visitingInfoNote: {
      vi: 'Giờ mở cửa, lịch vận hành thuyền/xe điện nội khu và các mức phí dịch vụ có thể thay đổi theo mùa hoặc dịp lễ lớn. Vui lòng kiểm tra trực tiếp trên kênh thông báo chính thức của Khu du lịch Tam Chúc trước khi khởi hành.',
      en: 'Opening hours, shuttle boat/electric-cart schedules, and local service fees vary by season and major Buddhist holidays. Please verify directly with Tam Chúc Management prior to your visit.',
    },
    audio: {
      viFile: '/audio/chua-tam-chuc-vi.mp3',
      enFile: '/audio/chua-tam-chuc-en.mp3',
      estimatedDuration: {
        vi: '1 phút 44 giây',
        en: '1 min 25 sec',
      },
      toneDescription: {
        vi: 'Trầm lắng, trang nghiêm, nhịp kể chậm rãi gợi sự thanh tịnh giữa hồ và núi.',
        en: 'Calm, respectful, and unhurried — suited to quiet lakeside sanctuary walking.',
      },
      voiceTypeNotice: {
        vi: 'Giọng đọc tổng hợp (tiếng Việt) — không phải bản thu hướng dẫn viên; cần chuyên gia/quản lý đối chiếu trước khi dùng chính thức.',
        en: 'Synthesized voice (Vietnamese / English) — not a human guide recording; pending editorial/management verification.',
      },
      sections: [
        {
          heading: { vi: '1. Không gian mở đầu', en: '1. Arrival by the Lake' },
          paragraphs: {
            vi: [
              'Xin chào bạn đến với Chùa Tam Chúc, tọa lạc tại phường Tam Chúc, tỉnh Ninh Bình.',
              'Hãy hít một hơi thật sâu và phóng tầm mắt ra phía trước. Bạn đang đứng trước hồ Lục Nhạc rộng lớn, nơi sáu hòn đảo nhỏ phủ cây xanh nổi lên giữa mặt nước phẳng lặng, còn phía sau lưng là bảy ngọn núi của dãy Thất Tinh sừng sững che chở.',
            ],
            en: [
              'Welcome to Tam Chúc Pagoda in Tam Chúc Ward, Ninh Bình Province.',
              'Take a quiet breath and look out across Lục Nhạc Lake. Ahead, six small green islands rise gently from still water, while behind you the seven peaks of Thất Tinh Mountain shelter the entire valley.',
            ],
          },
        },
        {
          heading: { vi: '2. Bước qua trục kiến trúc', en: '2. Along the Central Axis' },
          paragraphs: {
            vi: [
              'Từ bến thuyền hoặc lối dạo ven hồ, bước qua Cổng Tam Quan Ngoại với ba vòm đá và hệ mái cong nhiều tầng, bạn sẽ cảm nhận nhịp sống ồn ã dần lùi lại phía sau.',
              'Dọc theo con đường hướng lên sườn núi là Vườn Cột Kinh với ba mươi hai cột đá xanh khắc lời Phật dạy, nối tiếp lên Điện Quan Âm, Điện Pháp Chủ và Điện Tam Thế. Trên cao nhất gần đỉnh Thất Tinh là Chùa Ngọc ghép từ những phiến đá granite đỏ.',
            ],
            en: [
              'Stepping past the three stone arches and curved roofs of the Outer Tam Quan Gate, everyday bustle softly recedes.',
              'Ascending the hillside walkway brings you past the Sutra Pillar Garden of thirty-two carved green-stone pillars, leading up through Quan Âm Hall, Pháp Chủ Hall, and Tam Thế Hall toward red-granite Ngọc Pagoda near the summit.',
            ],
          },
        },
        {
          heading: { vi: '3. Phân biệt truyền tích và hiện tại', en: '3. Legend & Modern Construction' },
          paragraphs: {
            vi: [
              'Người dân vùng Ba Sao xưa vẫn kể về một ngôi chùa cổ từ thời nhà Đinh từng ẩn mình nơi thung lũng này. Tuy nhiên, toàn bộ những điện thờ uy nghi bạn thấy hôm nay là công trình xây dựng và phục dựng quy mô của thế kỷ hai mươi mốt, khởi động từ đầu những năm hai nghìn và hoàn thiện trọng điểm cho Đại lễ Vesak Liên Hợp Quốc năm 2019.',
              'Hiểu điều đó giúp chúng ta càng trân trọng hơn bàn tay của các nghệ nhân đương đại trên từng phiến đá núi lửa, từng pho tượng đồng và từng nét chạm khắc.',
            ],
            en: [
              'Local memory remembers an ancient Đinh-era temple in this valley, yet every monumental hall standing today belongs to 21st-century construction launched in the early 2000s and highlighted during the 2019 United Nations Day of Vesak.',
              'Recognizing this modern layer helps us appreciate the contemporary stone carvers and bronze artisans whose work fills these halls.',
            ],
          },
        },
        {
          heading: { vi: '4. Lời nhắn trước khi rời điểm', en: '4. Peaceful Visiting Reminder' },
          paragraphs: {
            vi: [
              'Khi bước vào không gian thờ tự, mong bạn tiếp tục giữ âm lượng nhỏ, ăn mặc trang nhã, không chạm tay vào tượng thờ hay phù điêu đá để giữ trọn nét an nhiên cho Tam Chúc.',
            ],
            en: [
              'As you continue into the prayer halls, please keep voices gentle, dress modestly, and leave stone carvings untouched so Tam Chúc stays peaceful for everyone.',
            ],
          },
        },
      ],
    },
    sources: [
      {
        name: {
          vi: 'Cục Du lịch Quốc gia Việt Nam — Thông tin Đại lễ Vesak 2019 & Quần thể Tam Chúc',
          en: 'Vietnam National Authority of Tourism — 2019 Vesak & Tam Chúc Complex',
        },
        url: 'https://vietnamtourism.gov.vn',
        checkedDate: '15/11/2026',
        approvalStatus: {
          vi: 'Nguồn công khai; chưa được Ban quản lý Tam Chúc thẩm định trực tiếp.',
          en: 'Public source; awaiting direct review by Tam Chúc management.',
        },
      },
      {
        name: {
          vi: 'Nghị quyết số 1674/NQ-UBTVQH15 (16/06/2025) — Sắp xếp đơn vị hành chính cấp xã tỉnh Ninh Bình',
          en: 'Resolution 1674/NQ-UBTVQH15 (June 16, 2025) — Ninh Bình Administrative Reorganization',
        },
        url: 'https://chinhphu.vn',
        checkedDate: '15/11/2026',
        approvalStatus: {
          vi: 'Văn bản pháp lý hiện hành về địa giới hành chính.',
          en: 'Official legal record on administrative boundaries.',
        },
      },
    ],
  },
  {
    id: 'trang-an',
    slug: 'trang-an',
    name: {
      vi: 'Tràng An',
      en: 'Tràng An Landscape Complex',
    },
    shortTagline: {
      vi: 'Quần thể danh thắng Di sản Thế giới UNESCO nơi những ngọn tháp đá vôi soi bóng xuống dòng sông xanh, hang xuyên thủy và dấu tích người tiền sử 30.000 năm.',
      en: 'UNESCO Mixed World Heritage Site where limestone karst towers mirror in emerald rivers linking water caves and 30,000-year prehistoric shelters.',
    },
    categoryKeys: ['nature', 'history_culture'],
    categories: {
      vi: ['Thiên nhiên', 'Lịch sử – văn hóa'],
      en: ['Nature', 'History & Culture'],
    },
    administrativeLocation: {
      vi: 'Trải rộng qua các phường Tây Hoa Lư, Hoa Lư và Nam Hoa Lư, tỉnh Ninh Bình (cập nhật theo Nghị quyết 1674/NQ-UBTVQH15 năm 2025, đối chiếu 15/11/2026).',
      en: 'Spans Tây Hoa Lư, Hoa Lư, and Nam Hoa Lư Wards, Ninh Bình Province (updated per Resolution 1674/NQ-UBTVQH15 of 2025; verified Nov 15, 2026).',
    },
    heritageStatus: {
      vi: 'Di sản Văn hóa và Thiên nhiên Thế giới UNESCO (ghi danh năm 2014 theo tiêu chí v, vii và viii) — di sản hỗn hợp đầu tiên của Việt Nam và Đông Nam Á.',
      en: 'UNESCO Mixed Cultural & Natural World Heritage Site (inscribed 2014 under Criteria v, vii, and viii) — first mixed site in Vietnam and Southeast Asia.',
    },
    coverPhotoId: 'trangan-12',
    photos: [
      {
        id: 'trangan-1',
        src: '/images/trangan-1.jpg',
        width: 1280,
        height: 854,
        caption: {
          vi: 'Thuyền nan xuôi dòng nước xanh qua khe núi đá vôi dựng đứng dưới tán cây rủ bóng tại Tràng An.',
          en: 'Rowboats gliding along jade water beneath overhanging trees and sheer limestone walls in Tràng An.',
        },
        alt: {
          vi: 'Hai chiếc thuyền chở khách mặc áo phao trên mặt sông xanh cạnh vách núi đá vôi và cây rủ bóng.',
          en: 'Visitors in life vests riding small rowboats past limestone cliffs and overhanging trees.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Trang_An_Landscape_Complex,_Ninh_Binh_Province,_Vietnam,_20240202_1456_5313.jpg',
      },
      {
        id: 'trangan-2',
        src: '/images/trangan-2.jpg',
        width: 1280,
        height: 855,
        caption: {
          vi: 'Đỉnh karst đá vôi phân tầng địa chất rõ nét soi bóng xuống dòng sông trước mũi thuyền nan.',
          en: 'Stratified limestone karst tower towering above a traditional rowboat in Tràng An.',
        },
        alt: {
          vi: 'Người chèo đò đội nón lá trên mặt nước xanh trước vách núi đá vôi phân tầng tại Tràng An.',
          en: 'A boat rower wearing a conical hat passing layered limestone cliffs in Tràng An.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Trang_An_Landscape_Complex,_Ninh_Binh_Province,_Vietnam,_20240202_1433_5283.jpg',
      },
      {
        id: 'trangan-3',
        src: '/images/trangan-3.jpg',
        width: 1280,
        height: 854,
        caption: {
          vi: 'Thung lũng ngập nước rộng mở được bao bọc bởi các khối đá vôi đặc trưng của địa hình karst nhiệt đới.',
          en: 'Open flooded valley framed by steep tropical karst cones in Tràng An.',
        },
        alt: {
          vi: 'Cảnh sông nước Tràng An rộng thoáng với hai chiếc thuyền nhỏ hướng về dãy núi phía xa.',
          en: 'Wide river view in Tràng An with small rowboats heading toward distant karst ridges.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Trang_An_Landscape_Complex,_Ninh_Binh_Province,_Vietnam,_20240202_1447_5310.jpg',
      },
      {
        id: 'trangan-4',
        src: '/images/trangan-4.jpg',
        width: 1280,
        height: 1918,
        caption: {
          vi: 'Thủy Đình giữa mặt nước khu vực Hành cung Vũ Lâm — điểm dừng trên Tuyến 2 và Tuyến 3 (không đi qua trên Tuyến 1).',
          en: 'Thủy Đình water pavilion near Vũ Lâm Palace — visited on Boat Routes 2 and 3 (not Route 1).',
        },
        alt: {
          vi: 'Lầu Thủy Đình hai tầng mái cong nằm giữa hồ nước xanh bao quanh bởi vách đá vôi cao.',
          en: 'Two-tiered wooden water pavilion surrounded by tour boats and towering karst walls.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Trang_An_Landscape_Complex,_Ninh_Binh_Province,_Vietnam,_20240202_1407_5224.jpg',
      },
      {
        id: 'trangan-5',
        src: '/images/trangan-5.jpg',
        width: 1280,
        height: 855,
        caption: {
          vi: 'Chim le hôi nhỏ (Tachybaptus ruficollis) trong hệ sinh thái đất ngập nước của Tràng An.',
          en: 'A little grebe (Tachybaptus ruficollis) swimming in the Tràng An wetland ecosystem.',
        },
        alt: {
          vi: 'Một chú chim le hôi nhỏ bơi trên mặt nước xanh gợn sóng tại Tràng An.',
          en: 'Little grebe swimming across rippled emerald water in Tràng An.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Little_grebe,_Trang_An_Landscape_Complex,_Ninh_Binh_Province,_Vietnam,_20240202_1356_5179.jpg',
      },
      {
        id: 'trangan-6',
        src: '/images/trangan-6.jpg',
        width: 1280,
        height: 855,
        caption: {
          vi: 'Đoạn sông tĩnh lặng uốn quanh chân núi đá vôi phủ thảm thực vật dày đặc.',
          en: 'Quiet river bend winding beneath forested limestone slopes in Tràng An.',
        },
        alt: {
          vi: 'Dòng sông xanh phản chiếu dãy núi đá vôi phủ cây xanh rậm rạp tại Tràng An.',
          en: 'Emerald river reflecting densely forested limestone hills in Tràng An.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Trang_An_Landscape_Complex,_Ninh_Binh_Province,_Vietnam,_20240202_1504_5331.jpg',
      },
      {
        id: 'trangan-7',
        src: '/images/trangan-7.jpg',
        width: 1280,
        height: 1367,
        caption: {
          vi: 'Vách đá vôi dựng đứng và thảm lau sậy ven bờ sông trong hành trình thuyền Tràng An.',
          en: 'Sheer limestone cliff rising behind riverside reeds along a Tràng An boat channel.',
        },
        alt: {
          vi: 'Vách núi đá vôi dựng đứng bên bờ lau sậy xanh vàng trên mặt nước Tràng An.',
          en: 'Vertical limestone karst face rising behind tall marsh reeds along the Tràng An river.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Trang_An_Landscape_Complex,_Ninh_Binh_Province,_Vietnam,_20240202_1501_5328.jpg',
      },
      {
        id: 'trangan-8',
        src: '/images/trangan-8.jpg',
        width: 1280,
        height: 1918,
        caption: {
          vi: 'Cửa hẻm núi hẹp nơi hai bên vách đá dựng cao vút khép lại trước mũi thuyền.',
          en: 'Narrow gorge flanked by vertical limestone walls closing toward the waterline.',
        },
        alt: {
          vi: 'Khe núi hẹp với vách đá cao dựng đứng hai bên mặt nước phẳng lặng tại Tràng An.',
          en: 'Narrow waterway framed by towering vertical karst rock walls and overhanging foliage.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Trang_An_Landscape_Complex,_Ninh_Binh_Province,_Vietnam,_20240202_1524_5364.jpg',
      },
      {
        id: 'trangan-9',
        src: '/images/trangan-9.jpg',
        width: 1280,
        height: 1917,
        caption: {
          vi: 'Đoàn thuyền nan chèo tay nối đuôi nhau dưới chân hai ngọn tháp karst hùng vĩ.',
          en: 'Hand-rowed wooden boats cruising beneath twin limestone karst towers.',
        },
        alt: {
          vi: 'Nhiều thuyền nan chở du khách mặc áo phao cam di chuyển dưới chân hai đỉnh núi đá vôi cao.',
          en: 'Wooden rowboats carrying visitors in life vests beneath towering twin limestone peaks.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Trang_An_Landscape_Complex,_Ninh_Binh_Province,_Vietnam,_20240202_1541_5387.jpg',
      },
      {
        id: 'trangan-10',
        src: '/images/trangan-10.jpg',
        width: 1280,
        height: 812,
        caption: {
          vi: 'Khu vực bến thuyền với những hàng thuyền nan và cầu đá vòm bắc qua kênh dẫn.',
          en: 'Tràng An boat pier lined with rowboats and an arched stone footbridge.',
        },
        alt: {
          vi: 'Hàng chục thuyền du lịch xếp ngay ngắn cạnh bến tàu và cầu đá nhiều nhịp tại Tràng An.',
          en: 'Rows of green tour boats moored by the stone arched bridge at the Tràng An pier.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Tour_boats_at_Trang_An_Landscape_Complex,_Ninh_Binh_Province,_Vietnam,_20240202_1346_5149.jpg',
      },
      {
        id: 'trangan-11',
        src: '/images/trangan-11.jpg',
        width: 1280,
        height: 854,
        caption: {
          vi: 'Ngôi miếu nhỏ mái cong tựa vách đá bên bờ sông — nét giao thoa văn hóa tín ngưỡng trên tuyến thuyền.',
          en: 'A small riverside shrine nestled beneath limestone cliffs along the boat route.',
        },
        alt: {
          vi: 'Ngôi miếu mái ngói đỏ nhỏ nằm cạnh bờ nước xanh trước vách núi đá vôi Tràng An.',
          en: 'Small red-tiled riverside shrine standing beside green water and a limestone face.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Trang_An_Landscape_Complex,_Ninh_Binh_Province,_Vietnam,_20240202_1410_5232.jpg',
      },
      {
        id: 'trangan-12',
        src: '/images/trangan-12.jpg',
        width: 1280,
        height: 857,
        caption: {
          vi: 'Chiếc thuyền đơn lẻ trên dòng kênh giữa đồng cỏ lau và dãy núi đá vôi Tràng An.',
          en: 'A solitary rowboat gliding between golden marsh grass and blue-green karst peaks.',
        },
        alt: {
          vi: 'Một chiếc thuyền nan nhỏ đi giữa con lạch phẳng lặng hai bên là cỏ vàng và núi đá vôi phía xa.',
          en: 'Single rowboat moving down a calm channel bordered by autumn reeds and karst ridges.',
        },
        author: 'Hòa Nguyễn',
        license: 'CC BY 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Trang_An,_Ninh_Binh_(24089563857).jpg',
      },
    ],
    storyBlocks: [
      {
        id: 'ta-story-1',
        heading: {
          vi: 'Kỳ quan địa chất 250 triệu năm giữa đất liền',
          en: '250 Million Years of Limestone & Water',
        },
        body: {
          vi: [
            'Ngồi trên chiếc thuyền nan chèo tay rời bến Tràng An, tiếng mái chèo khua nhẹ thay thế hoàn toàn tiếng động cơ. Xung quanh bạn là những khối đá vôi kỷ Trias vươn thẳng lên trời như những ngọn tháp phủ cây xanh, ôm lấy thung lũng ngập nước trong suốt bốn mùa.',
            'Hàng triệu năm nước mưa và dòng chảy ngầm hòa tan đá vôi đã tạo nên mạng lưới hang xuyên thủy kỳ ảo. Có những đoạn vòm đá hạ thấp sát mặt nước, du khách cúi nhẹ người qua bóng tối mát lạnh rồi bất ngờ mở ra một thung lũng tràn ngập ánh nắng và chim nước.',
          ],
          en: [
            'As your hand-rowed wooden boat leaves the pier, engine noise disappears in favor of soft paddle strokes. Rising on every side are Triassic limestone towers clad in tropical greenery, enclosing tranquil flooded valleys.',
            'Over millions of years, rainwater and subterranean rivers dissolved these stone blocks into water-filled caves. Boats slip through cool, low-ceilinged rock tunnels only to emerge suddenly into sunlit basins alive with reeds and waterbirds.',
          ],
        },
        photoId: 'trangan-1',
      },
      {
        id: 'ta-story-2',
        heading: {
          vi: 'Nơi người tiền sử sống qua nhiều chu kỳ biển tiến',
          en: 'A 30,000-Year Human Chronicle',
        },
        body: {
          vi: [
            'Tràng An không chỉ đẹp ở bề mặt cảnh quan. Trên các hang động cao như hang Trống, hang Bói, hang Mòi, các nhà khảo cổ đã tìm thấy dấu tích vỏ nhuyễn thể biển, công cụ đá và tầng văn hóa kéo dài gần 30.000 năm — minh chứng con người cổ biết thích ứng linh hoạt khi mực nước biển dâng rồi rút qua hàng thiên niên kỷ.',
            'Đến thời lịch sử, địa hình “thành trì tự nhiên” ấy trở thành lớp vỏ bọc chiến lược phía nam cho Kinh đô Hoa Lư thế kỷ X và sau này là căn cứ Hành cung Vũ Lâm của triều Trần trong thế kỷ XIII. Chính sự giao hòa hiếm có đó đã đưa Tràng An trở thành Di sản Thế giới hỗn hợp đầu tiên của Việt Nam vào năm 2014.',
          ],
          en: [
            'Tràng An’s story reaches far beyond scenery. Inside elevated caves such as Trống, Bói, and Mòi, archaeologists uncovered shells, stone tools, and hearths spanning nearly 30,000 years — recording how early communities adapted as ancient seas repeatedly rose and retreated.',
            'Centuries later, these limestone ramparts shielded 10th-century Hoa Lư and served as the Trần Dynasty’s 13th-century Vũ Lâm base. In 2014, UNESCO recognized this rare synthesis of geology and heritage as Vietnam’s first Mixed World Heritage Site.',
          ],
        },
        photoId: 'trangan-4',
      },
    ],
    highlights: [
      {
        id: 'ta-karst',
        title: {
          vi: 'Địa hình karst tháp và thung lũng ngập nước',
          en: 'Tower Karst & Flooded Valleys',
        },
        whatIsIt: {
          vi: 'Hệ thống núi đá vôi hình nón và hình tháp dựng đứng bao quanh các hồ và dòng sông thông nối nhau qua hàng chục hang động.',
          en: 'Steep cone- and tower-karst limestone peaks framing interconnected valleys and emerald waterways.',
        },
        notablePoint: {
          vi: 'Minh họa tiêu biểu toàn cầu cho giai đoạn tiến hóa cuối của địa hình karst nhiệt đới ẩm chịu tác động của biển tiến – biển thoái.',
          en: 'One of the world’s clearest textbook examples of mature humid-tropical tower karst shaped by past sea-level shifts.',
        },
        whatToObserve: {
          vi: 'Chú ý các ngấn xâm thực biển cổ nằm ngang trên vách đá cao hơn mặt nước hiện tại nhiều mét.',
          en: 'Look for ancient horizontal sea-level notches etched high along sheer limestone cliffs above today’s waterline.',
        },
        photoId: 'trangan-2',
      },
      {
        id: 'ta-routes',
        title: {
          vi: 'Ba tuyến thuyền khám phá riêng biệt',
          en: 'Three Distinct Boat Routes',
        },
        whatIsIt: {
          vi: 'Mạng lưới tham quan bằng thuyền nan chèo tay chia thành Tuyến 1, Tuyến 2 và Tuyến 3 với hệ thống hang và điểm dừng khác nhau.',
          en: 'Hand-rowed sightseeing journeys organized into Routes 1, 2, and 3, each visiting different caves and historic stops.',
        },
        notablePoint: {
          vi: 'Tuyến 1 đi qua 9 hang động và 3 điểm tâm linh; Tuyến 2 và Tuyến 3 đưa khách qua khu vực Hành cung Vũ Lâm và lầu Thủy Đình.',
          en: 'Route 1 passes 9 caves and 3 shrines, whereas Routes 2 and 3 feature Vũ Lâm Palace and the iconic Thủy Đình pavilion.',
        },
        whatToObserve: {
          vi: 'Hỏi rõ quầy bán vé hoặc người chèo đò trước khi xuống thuyền để chọn tuyến phù hợp với thời gian và điểm muốn xem.',
          en: 'Confirm at the pier ticket counter which landmarks belong to your chosen route before boarding.',
        },
        photoId: 'trangan-10',
        routeNote: {
          vi: 'Lưu ý: Thủy Đình (ảnh trong phần câu chuyện) thuộc hành trình Tuyến 2 và Tuyến 3, không nằm trên Tuyến 1.',
          en: 'Route note: Thủy Đình water pavilion appears on Routes 2 and 3, not Route 1.',
        },
      },
      {
        id: 'ta-ecology',
        title: {
          vi: 'Hệ sinh thái đất ngập nước và hang khảo cổ',
          en: 'Wetland Wildlife & Prehistoric Caves',
        },
        whatIsIt: {
          vi: 'Môi trường sống của nhiều loài chim nước (như le hôi nhỏ), thủy sinh, thảm lau sậy cùng các hang khảo cổ nổi tiếng nằm sâu trong vùng lõi.',
          en: 'Protected freshwater wetlands sheltering waterbirds like the little grebe alongside archaeological cave shelters.',
        },
        notablePoint: {
          vi: 'Việc dùng hoàn toàn thuyền chèo tay giúp hạn chế tiếng ồn, sóng lớn và dầu mỡ làm xáo trộn thủy sinh.',
          en: 'Motor-free hand rowing preserves water clarity and quietness for nesting birds and aquatic plants.',
        },
        whatToObserve: {
          vi: 'Quan sát cỏ rong xanh biếc dưới làn nước trong và những chú chim nước bơi dọc bờ lau.',
          en: 'Peer gently into the clear water for submerged aquatic plants and watch reed edges quietly for grebes and herons.',
        },
        photoId: 'trangan-5',
      },
    ],
    photoTips: {
      editorialNote: {
        vi: 'Gợi ý biên tập giúp bạn sáng tác ảnh đẹp và an toàn tuyệt đối trên thuyền nan.',
        en: 'Editorial suggestions for safe, expressive photography from rowboats and stone piers.',
      },
      items: [
        {
          id: 'ta-tip-1',
          aspect: { vi: 'Đường dẫn mũi thuyền', en: 'Bow leading lines' },
          suggestion: {
            vi: 'Ngồi yên tại chỗ và hạ máy ngang tầm vai để lấy mũi thuyền dẫn thẳng về phía vách núi và mặt nước phẳng.',
            en: 'Remain seated and hold your camera near shoulder height so the boat bow leads the viewer into the karst walls.',
          },
        },
        {
          id: 'ta-tip-2',
          aspect: { vi: 'Khung cửa hang tự nhiên', en: 'Natural cave-mouth framing' },
          suggestion: {
            vi: 'Khi thuyền sắp ra khỏi hang, hướng ống kính ra ngoài để vòm đá tối ôm lấy khung cảnh sông núi bừng sáng.',
            en: 'As your boat nears a cave exit, frame outward so dark rock outlines the bright valley beyond.',
          },
        },
        {
          id: 'ta-tip-3',
          aspect: { vi: 'Khu vực bến và thủy sinh', en: 'Pier & wetland details' },
          suggestion: {
            vi: 'Từ cầu đá bến thuyền có thể chụp nhịp thuyền nối đuôi nhau; khi gặp chim nước hãy dùng zoom quang học từ xa.',
            en: 'Use the stone footbridge near the pier for overhead views of lined-up rowboats, and use optical zoom for birds.',
          },
        },
      ],
      safetyReminder: {
        vi: 'Tuyệt đối KHÔNG đứng dậy, không nhoài người qua mạn thuyền để chụp ảnh; mặc áo phao đúng quy cách và giữ tay, máy ảnh bên trong thuyền khi đi qua cửa hang thấp.',
        en: 'NEVER stand up or lean over the gunwale for a shot. Keep your life vest fastened and hold hands and gear inside the boat through low caves.',
      },
    },
    timeline: [
      {
        period: { vi: '~250 triệu năm trước', en: '~250 million years ago' },
        title: { vi: 'Tích tụ trầm tích đá vôi kỷ Trias', en: 'Deposition of Triassic marine limestone' },
        detail: {
          vi: 'Khối đá vôi biển cổ được nâng lên qua các vận động kiến tạo và bị phong hóa karst tạo thành tháp đá và hang động.',
          en: 'Ancient marine sediments were uplifted and carved by karst dissolution into steep towers and subterranean caves.',
        },
        category: 'archaeology',
      },
      {
        period: { vi: '~30.000 – 4.000 năm trước', en: '~30,000 – 4,000 years BP' },
        title: { vi: 'Cư dân tiền sử trong các hang cao', en: 'Prehistoric cave habitation' },
        detail: {
          vi: 'Các tầng văn hóa tại hang Trống, hang Bói, hang Mòi chứng minh sự thích ứng liên tục qua nhiều đợt biển tiến – biển thoái.',
          en: 'Excavations in Trống, Bói, and Mòi caves trace continuous human adaptation across Holocene sea-level fluctuations.',
        },
        category: 'archaeology',
      },
      {
        period: { vi: 'Thế kỷ X – XIII', en: '10th – 13th Centuries' },
        title: { vi: 'Thành lũy thiên nhiên & Hành cung Vũ Lâm', en: 'Natural defense & Vũ Lâm Palace' },
        detail: {
          vi: 'Vùng núi sông hiểm trở bảo vệ kinh đô Hoa Lư (thế kỷ X) và trở thành căn cứ Hành cung Vũ Lâm thời nhà Trần.',
          en: 'Natural river-and-mountain barriers sheltered 10th-century Hoa Lư and hosted the 13th-century Trần base at Vũ Lâm.',
        },
        category: 'history',
      },
      {
        period: { vi: '25/06/2014', en: 'June 25, 2014' },
        title: { vi: 'Di sản Văn hóa & Thiên nhiên Thế giới UNESCO', en: 'UNESCO Mixed World Heritage inscription' },
        detail: {
          vi: 'UNESCO chính thức ghi danh Quần thể danh thắng Tràng An theo ba tiêu chí v, vii và viii.',
          en: 'Inscribed on the UNESCO World Heritage List under cultural and natural criteria (v), (vii), and (viii).',
        },
        category: 'history',
      },
    ],
    responsibleVisiting: {
      vi: [
        'Mặc áo phao suốt hành trình thuyền nan và làm theo hướng dẫn an toàn của người chèo đò.',
        'Đeo tai nghe khi nghe thuyết minh để giữ không gian tĩnh lặng cho cả chuyến thuyền.',
        'Không chạm tay vào nhũ đá trong hang, không ngắt hoa súng hay cành cây ven bờ.',
        'Không vứt rác, vỏ chai nhựa xuống dòng sông; mang toàn bộ rác về bến tàu.',
        'Giữ trật tự, ăn mặc lịch sự khi dừng chân tại các điểm đền phủ dọc tuyến.',
      ],
      en: [
        'Keep your life vest fastened for the entire boat trip and follow your rower’s instructions.',
        'Use earphones while playing narration so fellow passengers enjoy the quiet valley.',
        'Never touch cave stalactites or pluck water plants along the banks.',
        'Carry all bottles and wrappers back to shore — never discard anything into the river.',
        'Speak softly and dress respectfully at shrines along the boat routes.',
      ],
    },
    visitingInfoNote: {
      vi: 'Giá vé tham quan, số lượng khách tối đa mỗi thuyền và giờ xuất bến cuối ngày tại Bến thuyền Tràng An có thể điều chỉnh theo mùa hoặc điều kiện thời tiết. Hãy kiểm tra thông tin chính thức tại quầy vé bến thuyền hoặc Ban quản lý Quần thể danh thắng Tràng An.',
      en: 'Boat ticket prices, passenger-per-boat rules, and last-departure hours vary seasonally and with weather conditions. Always confirm directly at the Tràng An pier or official site management before planning your route.',
    },
    audio: {
      viFile: '/audio/trang-an-vi.mp3',
      enFile: '/audio/trang-an-en.mp3',
      estimatedDuration: {
        vi: '1 phút 33 giây',
        en: '1 min 18 sec',
      },
      toneDescription: {
        vi: 'Khoáng đạt, giàu chất thơ, nhịp dịu êm như mái chèo trên dòng sông xanh.',
        en: 'Expansive and lyrical — moving at the unhurried rhythm of a hand-rowed boat.',
      },
      voiceTypeNotice: {
        vi: 'Giọng đọc tổng hợp (tiếng Việt) — không phải bản thu hướng dẫn viên; cần chuyên gia đối chiếu trước khi phát hành chính thức.',
        en: 'Synthesized voice (Vietnamese / English) — not a human guide recording; pending editorial verification.',
      },
      sections: [
        {
          heading: { vi: '1. Nhịp chèo mở ra di sản', en: '1. Setting Out by Rowboat' },
          paragraphs: {
            vi: [
              'Chào mừng bạn đến với Quần thể danh thắng Tràng An — Di sản Văn hóa và Thiên nhiên Thế giới hỗn hợp đầu tiên của Việt Nam và Đông Nam Á, được UNESCO ghi danh năm 2014.',
              'Khi chiếc thuyền nan chèo tay nhẹ nhàng rời bến, mọi tiếng động cơ đều lùi lại, nhường chỗ cho tiếng nước khua mái chèo và tiếng gió luồn qua những tháp núi đá vôi cao vút.',
            ],
            en: [
              'Welcome to the Tràng An Landscape Complex — Vietnam’s and Southeast Asia’s first UNESCO Mixed Cultural and Natural World Heritage Site, inscribed in 2014.',
              'As your hand-rowed wooden boat glides away from the pier, engines fall silent, leaving only the rhythm of oars and mountain breezes.',
            ],
          },
        },
        {
          heading: { vi: '2. Tuyến thuyền và hang xuyên thủy', en: '2. Caves & Three Routes' },
          paragraphs: {
            vi: [
              'Hàng triệu năm phong hóa đã chạm khắc tầng đá vôi ở đây thành những thung lũng ngập nước khép kín nối với nhau bằng hàng chục hang xuyên thủy.',
              'Tràng An có ba tuyến thuyền chính với hành trình riêng: Tuyến 1 đi qua chín hang động và ba điểm đền phủ; trong khi Tuyến 2 và Tuyến 3 sẽ đưa bạn ngang qua lầu Thủy Đình duyên dáng giữa mặt nước khu vực Hành cung Vũ Lâm.',
            ],
            en: [
              'Millions of years of karst weathering hollowed these limestone towers into enclosed flooded basins connected by river caves.',
              'Three distinct boat routes offer unique experiences: Route 1 traverses nine caves and three shrines, while Routes 2 and 3 pass Vũ Lâm Palace and the Thủy Đình water pavilion.',
            ],
          },
        },
        {
          heading: { vi: '3. Dấu ấn 30.000 năm và lịch sử', en: '3. 30,000 Years of Resilience' },
          paragraphs: {
            vi: [
              'Ít ai ngờ rằng ẩn trên các hang cao như hang Trống, hang Bói là dấu tích của cư dân tiền sử từ gần ba mươi nghìn năm trước, kể lại cách con người thích ứng qua những đợt biển tiến – biển thoái. Và đến thế kỷ thứ 10 rồi thế kỷ 13, chính vòng cung núi sông này lại trở thành bức tường thành che chở cho kinh đô Hoa Lư và Hành cung Vũ Lâm thời Trần.',
            ],
            en: [
              'High above the river inside caves like Trống and Bói lie archaeological layers going back nearly thirty thousand years, telling how early humans adapted across ancient sea-level shifts. Centuries later, these same cliffs shielded 10th-century Hoa Lư and the 13th-century Trần Dynasty base at Vũ Lâm.',
            ],
          },
        },
        {
          heading: { vi: '4. Lời nhắn trên dòng sông', en: '4. Caring for the Valley' },
          paragraphs: {
            vi: [
              'Trong suốt chuyến đò, bạn hãy mặc áo phao đầy đủ, ngồi giữ thăng bằng, không đứng lên khi chụp ảnh và tuyệt đối không chạm tay vào nhũ đá trong hang để giữ Tràng An nguyên vẹn cho mai sau.',
            ],
            en: [
              'Throughout your ride, please keep your life vest fastened, stay seated when taking photos, and never touch cave formations so Tràng An remains unspoiled.',
            ],
          },
        },
      ],
    },
    sources: [
      {
        name: {
          vi: 'UNESCO World Heritage Centre — Trang An Landscape Complex (Ref. 1438)',
          en: 'UNESCO World Heritage Centre — Trang An Landscape Complex (Ref. 1438)',
        },
        url: 'https://whc.unesco.org/en/list/1438/',
        checkedDate: '15/11/2026',
        approvalStatus: {
          vi: 'Hồ sơ công khai chính thức của UNESCO.',
          en: 'Official UNESCO World Heritage record.',
        },
      },
      {
        name: {
          vi: 'Cục Di sản văn hóa & Ban quản lý Quần thể danh thắng Tràng An',
          en: 'Department of Cultural Heritage & Tràng An Management Board',
        },
        url: 'https://dsvh.gov.vn',
        checkedDate: '15/11/2026',
        approvalStatus: {
          vi: 'Nguồn công khai; cần đơn vị quản lý xác nhận chi tiết trước khi gắn QR thực địa.',
          en: 'Public source; pending site-board review prior to physical QR installation.',
        },
      },
    ],
  },
  {
    id: 'hoa-lu',
    slug: 'co-do-hoa-lu',
    name: {
      vi: 'Cố đô Hoa Lư',
      en: 'Hoa Lư Ancient Capital',
    },
    shortTagline: {
      vi: 'Kinh đô đầu tiên của nhà nước Đại Cồ Việt (968–1010) tại vùng núi Trường Yên, lưu giữ Đền Vua Đinh – Vua Lê và bảo vật Long sàng đá thế kỷ XVII.',
      en: 'First capital of unified Đại Cồ Việt (968–1010) in Trường Yên, preserving the Đinh and Lê royal temples and 17th-century stone dragon beds.',
    },
    categoryKeys: ['history_culture', 'spiritual'],
    categories: {
      vi: ['Lịch sử – văn hóa', 'Tâm linh'],
      en: ['History & Culture', 'Spiritual'],
    },
    administrativeLocation: {
      vi: 'Khu vực xã Trường Yên cũ — nay thuộc địa bàn phường Tây Hoa Lư, tỉnh Ninh Bình (cập nhật theo Nghị quyết 1674/NQ-UBTVQH15 năm 2025, đối chiếu 15/11/2026).',
      en: 'Former Trường Yên Commune — now within Tây Hoa Lư Ward, Ninh Bình Province (updated per Resolution 1674/NQ-UBTVQH15 of 2025; verified Nov 15, 2026).',
    },
    heritageStatus: {
      vi: 'Di tích lịch sử và kiến trúc nghệ thuật quốc gia đặc biệt; đồng thời là một vùng cấu phần văn hóa trong Quần thể danh thắng Tràng An (UNESCO 2014).',
      en: 'Special National Monument of History & Architecture; cultural component within the Tràng An UNESCO World Heritage Complex (2014).',
    },
    distinctionNote: {
      vi: 'Phân biệt quan trọng: Cố đô Hoa Lư là quần thể di tích lịch sử tại vùng Trường Yên, KHÔNG phải khu “Phố cổ Hoa Lư” (khu dịch vụ – du lịch văn hóa xây mới gần hồ Kỳ Lân).',
      en: 'Important distinction: Hoa Lư Ancient Capital is the 10th-century historic site in Trường Yên, NOT “Hoa Lư Old Town” (Phố cổ Hoa Lư), a modern cultural-commercial area near Kỳ Lân Lake.',
    },
    coverPhotoId: 'hoalu-1',
    photos: [
      {
        id: 'hoalu-1',
        src: '/images/hoalu-1.jpg',
        width: 1280,
        height: 853,
        caption: {
          vi: 'Cổng Đông Môn (Nghi môn ngoại) bằng đá dẫn vào Đền Vua Đinh Tiên Hoàng, phía sau là núi đá vôi Trường Yên.',
          en: 'Stone East Gate (Nghi môn ngoại) leading into Emperor Đinh Tiên Hoàng Temple, backed by Trường Yên’s limestone ridge.',
        },
        alt: {
          vi: 'Cổng tam quan bằng đá xám mái ngói đỏ hai tầng với hai tượng nghê đá chầu hai bên và núi đá vôi phía sau.',
          en: 'Three-arched stone gateway with red-tiled roofs, stone guardians, and karst hills behind.',
        },
        author: 'Richard Mortel',
        license: 'CC BY 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Gateway_to_Temple_of_Emperor_Dinh_Tien_Hoang,_10th_century_(2)_(24629111998).jpg',
      },
      {
        id: 'hoalu-2',
        src: '/images/hoalu-2.jpg',
        width: 1280,
        height: 952,
        caption: {
          vi: 'Sân Rồng và chính diện tòa Bái đường Đền Vua Đinh Tiên Hoàng — công trình phục dựng từ thế kỷ XVII.',
          en: 'Dragon Courtyard and Bái đường hall facade of Emperor Đinh Tiên Hoàng Temple, rebuilt in the 17th century.',
        },
        alt: {
          vi: 'Sân gạch rộng trước tòa Bái đường mái ngói cổ Đền Vua Đinh Tiên Hoàng với trụ biểu đá ở giữa.',
          en: 'Wide brick courtyard before the tiled Bái đường hall of Đinh Tiên Hoàng Temple.',
        },
        author: 'Francisco Anzola',
        license: 'CC BY 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Dinh_Tien_Hoang_temple_(7172236091).jpg',
      },
      {
        id: 'hoalu-3',
        src: '/images/hoalu-3.jpg',
        width: 1280,
        height: 960,
        caption: {
          vi: 'Long sàng đá trước Bái đường Đền Vua Đinh — Bảo vật Quốc gia (2017) chạm khắc đá xanh nguyên khối năm 1696.',
          en: 'Monolithic green-stone dragon bed (Long sàng đá) before the main hall — carved in 1696 and named a National Treasure (2017).',
        },
        alt: {
          vi: 'Sập đá xanh nguyên khối chạm hình rồng ở hai tay vịn đặt giữa sân trước Đền Vua Đinh Tiên Hoàng.',
          en: 'Carved monolithic green-stone dragon bed resting in the courtyard before Đinh Tiên Hoàng Temple.',
        },
        author: 'Nguyễn Thanh Quang',
        license: 'CC BY-SA 3.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:%C4%90%E1%BB%81n_%C4%90inh_Ti%C3%AAn_Ho%C3%A0ng,_s%E1%BA%A1p_r%E1%BB%93ng.JPG',
      },
      {
        id: 'hoalu-4',
        src: '/images/hoalu-4.jpg',
        width: 1280,
        height: 960,
        caption: {
          vi: 'Hồ súng (ao bán nguyệt) kè đá và nếp nhà truyền thống trong khuôn viên Đền Vua Đinh Tiên Hoàng.',
          en: 'Stone-edged water-lily pond and traditional tiled roof within the Đinh Tiên Hoàng Temple grounds.',
        },
        alt: {
          vi: 'Hồ nước hoa súng bên tường đá và hàng cây xanh cạnh nếp nhà gỗ mái ngói cổ tại Hoa Lư.',
          en: 'Water-lily pond beside stone walls and green trees near a traditional tiled temple pavilion.',
        },
        author: 'Nguyễn Thanh Quang',
        license: 'CC BY-SA 3.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:%C4%90%E1%BB%81n_%C4%90inh_Ti%C3%AAn_Ho%C3%A0ng,_ao_s%C3%BAng.JPG',
      },
      {
        id: 'hoalu-5',
        src: '/images/hoalu-5.jpg',
        width: 1280,
        height: 855,
        caption: {
          vi: 'Lối gạch đỏ rợp bóng cổ thụ và cờ ngũ sắc dẫn vào Đền thờ Vua Lê Đại Hành.',
          en: 'Tree-shaded red-brick pathway lined with festival flags leading into Emperor Lê Đại Hành Temple.',
        },
        alt: {
          vi: 'Con đường lát gạch đỏ giữa hai hàng cây xanh và cờ hội truyền thống hướng về cổng Đền Vua Lê.',
          en: 'Brick walkway flanked by mature trees and ceremonial banners leading to Lê Đại Hành Temple.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Temple_of_Emperor_Le_Dai_Hanh,_Hoa_L%C6%B0,_Ninh_B%C3%ACnh,_Vietnam,_20240203_1525_5704.jpg',
      },
      {
        id: 'hoalu-6',
        src: '/images/hoalu-6.jpg',
        width: 1280,
        height: 960,
        caption: {
          vi: 'Cận cảnh hoa văn rồng thế kỷ XVII trên tay vịn Long sàng đá: chi rồng cách điệu tựa cánh tay người cùng vân mây.',
          en: 'Close-up of 17th-century dragon relief on the stone bed armrest showing stylized human-like limbs and clouds.',
        },
        alt: {
          vi: 'Chi tiết chạm khắc rồng đá cổ rêu phong trên thềm đá xanh tại Đền Vua Đinh Tiên Hoàng.',
          en: 'Weathered green-stone carving of a dragon with stylized clouds at Đinh Tiên Hoàng Temple.',
        },
        author: 'Nguyễn Thanh Quang',
        license: 'CC BY-SA 3.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:%C4%90%E1%BB%81n_%C4%90inh_Ti%C3%AAn_Ho%C3%A0ng,_r%E1%BB%93ng_%C4%91%C3%A1.JPG',
      },
      {
        id: 'hoalu-7',
        src: '/images/hoalu-7.jpg',
        width: 1280,
        height: 859,
        caption: {
          vi: 'Khu vực bia kỷ niệm Vua Lý Thái Tổ bên triền núi đá vôi tại vùng Trường Yên, Cố đô Hoa Lư.',
          en: 'Memorial stele pavilion dedicated to Emperor Lý Thái Tổ against the Trường Yên limestone cliff.',
        },
        alt: {
          vi: 'Lối đi lát gạch hướng về nhà bia mái ngói truyền thống đặt trước chân núi đá vôi Hoa Lư.',
          en: 'Brick walk leading toward the traditional tiled pavilion housing the Lý Thái Tổ stele.',
        },
        author: 'Kien1980v',
        license: 'Public domain (Phạm vi công cộng)',
        licenseUrl: 'https://commons.wikimedia.org/wiki/File:Co_do_Hoa_Lu_115.JPG',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Co_do_Hoa_Lu_115.JPG',
      },
      {
        id: 'hoalu-8',
        src: '/images/hoalu-8.jpg',
        width: 1280,
        height: 859,
        caption: {
          vi: 'Trụ biểu đá chạm khắc và tường gạch cổ bên sân Đền Vua Đinh Tiên Hoàng.',
          en: 'Carved stone pillars and weathered masonry walls bordering the courtyard at Đinh Tiên Hoàng Temple.',
        },
        alt: {
          vi: 'Cột đá chạm khắc đứng cạnh tường hoa văn gạch đỏ mái ngói rêu phong tại Đền Vua Đinh.',
          en: 'Carved stone pillars standing alongside historic brick walls and tiled roofs at Đinh Temple.',
        },
        author: 'Kien1980v',
        license: 'Public domain (Phạm vi công cộng)',
        licenseUrl: 'https://commons.wikimedia.org/wiki/File:Co_do_Hoa_Lu_114.JPG',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Co_do_Hoa_Lu_114.JPG',
      },
      {
        id: 'hoalu-9',
        src: '/images/hoalu-9.jpg',
        width: 1280,
        height: 1917,
        caption: {
          vi: 'Cổng gạch rêu phong và cổ thụ vươn cành bên bờ hồ súng khu Đền Vua Đinh.',
          en: 'Moss-tiled side gate and ancient spreading tree above the stone wall at Đinh Tiên Hoàng Temple.',
        },
        alt: {
          vi: 'Cổng vòm tường gạch cổ mái ngói rêu phong bên cạnh hồ hoa súng và cây cổ thụ tại Hoa Lư.',
          en: 'Weathered masonry side gate with mossy tiles overlooking the water-lily pond.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Dinh_Bo_Linh_Shrine,_Hoa_L%C6%B0,_Ninh_B%C3%ACnh,_Vietnam,_20240203_1502_5693.jpg',
      },
      {
        id: 'hoalu-10',
        src: '/images/hoalu-10.jpg',
        width: 1280,
        height: 1918,
        caption: {
          vi: 'Nếp cổng cổ hai tầng mái cong tại Đền thờ Vua Lê Đại Hành dưới bóng cây xanh.',
          en: 'Two-tiered traditional gate beneath leafy trees at Emperor Lê Đại Hành Temple.',
        },
        alt: {
          vi: 'Cổng gỗ – gạch hai tầng mái ngói rêu phong với chữ Hán truyền thống tại Đền Vua Lê Đại Hành.',
          en: 'Traditional two-story tiled archway nestled in shade at Lê Đại Hành Temple.',
        },
        author: 'Jakub Hałun',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Temple_of_Emperor_Le_Dai_Hanh,_Hoa_L%C6%B0,_Ninh_B%C3%ACnh,_Vietnam,_20240203_1527_5707.jpg',
      },
      {
        id: 'hoalu-11',
        src: '/images/hoalu-11.jpg',
        width: 1280,
        height: 1707,
        caption: {
          vi: 'Tượng nghê đá cổ chầu trước lối vào khu thờ tự Đền Vua Đinh Tiên Hoàng.',
          en: 'Weathered stone guardian (Nghê đá) standing beside the entrance of Đinh Tiên Hoàng Temple.',
        },
        alt: {
          vi: 'Tượng nghê đá xanh chạm khắc cổ đặt trên bệ đá trước cổng Đền Vua Đinh.',
          en: 'Carved green-stone guardian figure resting on a stone pedestal at Đinh Temple.',
        },
        author: 'Nguyễn Thanh Quang',
        license: 'CC BY-SA 3.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:%C4%90%E1%BB%81n_%C4%90inh_Ti%C3%AAn_Ho%C3%A0ng,_ngh%C3%AA_%C4%91%C3%A1.JPG',
      },
      {
        id: 'hoalu-12',
        src: '/images/hoalu-12.jpg',
        width: 1280,
        height: 960,
        caption: {
          vi: 'Văn bia đá cổ ghi lại dấu mốc lịch sử trùng tu đền thờ Đinh Tiên Hoàng thế kỷ XVII.',
          en: 'Historic stone stele recording 17th-century restorations inside the Đinh Tiên Hoàng Temple.',
        },
        alt: {
          vi: 'Bia đá khắc chữ Hán đặt trên lưng rùa đá trong nhà bia tại Đền Vua Đinh Tiên Hoàng.',
          en: 'Ancient inscribed stone stele mounted on a carved stone tortoise plinth at Đinh Temple.',
        },
        author: 'Nguyễn Thanh Quang',
        license: 'CC BY-SA 3.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:%C4%90%E1%BB%81n_%C4%90inh_Ti%C3%AAn_Ho%C3%A0ng,_bia_%C4%91%C3%A1.JPG',
      },
    ],
    storyBlocks: [
      {
        id: 'hl-story-1',
        heading: {
          vi: 'Thung lũng dựng nên quốc hiệu Đại Cồ Việt (968)',
          en: 'The Fortress Valley of Đại Cồ Việt (968–1010)',
        },
        body: {
          vi: [
            'Năm 968, sau khi dẹp yên loạn 12 sứ quân, Đinh Bộ Lĩnh lên ngôi Hoàng đế, xưng là Đinh Tiên Hoàng, đặt quốc hiệu Đại Cồ Việt và chọn quê hương Hoa Lư làm kinh đô đầu tiên của nhà nước phong kiến tập quyền Việt Nam. Thay vì xây thành lũy thuần nhân tạo giữa đồng bằng trống trải, ông nương vào vòng cung núi đá vôi Mã Yên, Cột Cờ, Phi Vân và chỉ cần đắp thêm 10 đoạn tường đất nối các khe núi.',
            'Năm 980, khi đất nước đứng trước nguy cơ xâm lăng, Lê Hoàn lên ngôi (Vua Lê Đại Hành) tiếp tục giữ Hoa Lư làm đại bản doanh và giành thắng lợi trước quân Tống năm 981. Đến năm 1010, nhận thấy vận nước cần không gian mở rộng giao thương, Vua Lý Thái Tổ dời đô ra Thăng Long — biến Hoa Lư thành Cố đô giàu ký ức hào hùng.',
          ],
          en: [
            'In 968, after ending the fragmentation of the twelve warlords, Đinh Bộ Lĩnh became Emperor Đinh Tiên Hoàng, proclaimed the state of Đại Cồ Việt, and established Vietnam’s first centralized capital in Hoa Lư. Rather than building an exposed lowland fortress, builders harnessed surrounding karst ridges and connected mountain passes with ten earthen ramparts.',
            'In 980, Emperor Lê Đại Hành led the realm from Hoa Lư to repel the 981 Song invasion. Four decades after its founding, in 1010, Emperor Lý Thái Tổ moved the capital to Thăng Long (modern Hanoi), leaving Hoa Lư as the revered Ancient Capital.',
          ],
        },
        photoId: 'hoalu-1',
      },
      {
        id: 'hl-story-2',
        heading: {
          vi: 'Hai lớp thời gian: thế kỷ X dưới lòng đất và thế kỷ XVII trên mặt đất',
          en: 'Two Historical Layers: 10th-Century Foundations, 17th-Century Temples',
        },
        body: {
          vi: [
            'Một điều thú vị giúp người xem hiểu sâu hơn về Cố đô Hoa Lư là sự tách bạch hai tầng di sản. Cung điện thế kỷ X xưa đã chìm vào lòng đất qua thời gian — minh chứng là các đợt khai quật khảo cổ đã phát lộ nền gạch “Đại Việt quốc quân thành chuyên” và chân tảng đá cổ bên dưới khuôn viên đền.',
            'Trong khi đó, hai ngôi đền khang trang mà du khách chiêm bái hôm nay — Đền Vua Đinh và Đền Vua Lê — chủ yếu mang kiến trúc gỗ chạm khắc thế kỷ XVII (đại trùng tu năm 1606 thời Hậu Lê) cùng cặp Long sàng đá xanh nguyên khối hoàn thành năm 1696 đã được công nhận là Bảo vật Quốc gia.',
          ],
          en: [
            'Understanding Hoa Lư deepens once we separate its two historical layers. The 10th-century royal palaces lie underground today, attested by archaeological excavations that revealed stamped bricks reading “Đại Việt Quốc Quân Thành Chuyên” and ancient stone column bases.',
            'The timber-and-tile sanctuaries standing above ground — the temples of Emperors Đinh and Lê — primarily reflect major 17th-century Later Lê reconstructions (recorded on stelae from 1606), including the National Treasure stone dragon beds carved in 1696.',
          ],
        },
        photoId: 'hoalu-3',
      },
    ],
    highlights: [
      {
        id: 'hl-dinh',
        title: {
          vi: 'Đền thờ Vua Đinh Tiên Hoàng',
          en: 'Temple of Emperor Đinh Tiên Hoàng',
        },
        whatIsIt: {
          vi: 'Ngôi đền tưởng niệm Hoàng đế đầu tiên của nước Đại Cồ Việt, dựng trên nền Chính cung thế kỷ X theo bố cục “nội công ngoại quốc”.',
          en: 'Commemorative sanctuary built over the 10th-century main palace footprint in the classic courtyard layout.',
        },
        notablePoint: {
          vi: 'Kiến trúc gỗ – đá thế kỷ XVII với hệ thống Cổng Đông Môn, Sân Rồng, Bái đường, Thiêu hương, Chính cung và bia cổ.',
          en: 'Rich 17th-century woodcarving and masonry spanning the East Gate, Dragon Courtyard, and inner timber halls.',
        },
        whatToObserve: {
          vi: 'Ngắm tượng nghê đá, hồ súng bán nguyệt, văn bia cổ đặt trên lưng rùa và kết cấu vì kèo chạm khắc tinh xảo.',
          en: 'Observe the weathered stone guardians, half-moon lily pond, tortoise-mounted stele, and carved timber roof beams.',
        },
        photoId: 'hoalu-2',
      },
      {
        id: 'hl-longsang',
        title: {
          vi: 'Cặp Long sàng đá — Bảo vật Quốc gia',
          en: 'Twin Stone Dragon Beds (National Treasures)',
        },
        whatIsIt: {
          vi: 'Hai sập đá xanh nguyên khối đặt trước Bái đường và tại Nghi môn ngoại Đền Vua Đinh (công nhận Bảo vật Quốc gia năm 2017).',
          en: 'Two monolithic green-stone royal dragon beds at Đinh Tiên Hoàng Temple, designated National Treasures in 2017.',
        },
        notablePoint: {
          vi: 'Chiếc trước Bái đường khắc niên đại Chính Hòa thứ 17 (1696), nổi bật với tay rồng cách điệu tựa cánh tay người cùng hình ảnh cá, tôm, hoa lá dân dã.',
          en: 'Dated 1696, their carvings famously blend royal dragons—with stylized human-like limbs—with rural motifs like fish, shrimp, and blossoms.',
        },
        whatToObserve: {
          vi: 'Quan sát hoa văn hai bên tay vịn và mặt phẳng chạm nổi từ khoảng cách tôn trọng (không chạm tay hoặc ngồi lên hiện vật).',
          en: 'Examine the side dragon armrests and surface relief closely without touching or climbing the stone.',
        },
        photoId: 'hoalu-6',
      },
      {
        id: 'hl-le',
        title: {
          vi: 'Đền thờ Vua Lê Đại Hành',
          en: 'Temple of Emperor Lê Đại Hành',
        },
        whatIsIt: {
          vi: 'Ngôi đền nằm cách Đền Vua Đinh khoảng 300 m, thờ Hoàng đế Lê Đại Hành, Hoàng hậu Dương Vân Nga và Thái tử Lê Long Đĩnh.',
          en: 'Sanctuary ~300 meters away honoring Emperor Lê Đại Hành, Empress Dương Vân Nga, and Crown Prince Lê Long Đĩnh.',
        },
        notablePoint: {
          vi: 'Không gian trầm mặc dưới vòm cổ thụ với nhiều bức cốn, đầu dư chạm gỗ thời Hậu Lê còn giữ nguyên nét tinh xảo.',
          en: 'Set quietly beneath ancient trees, preserving expressive Later Lê woodcarvings across doors and rafters.',
        },
        whatToObserve: {
          vi: 'Tản bộ dọc con đường lát gạch đỏ rợp bóng cây và ngắm kiến trúc cổng hai tầng mái ngói cổ rêu phong.',
          en: 'Walk the shaded red-brick path and notice the moss-patinated two-story traditional gateway.',
        },
        photoId: 'hoalu-5',
      },
      {
        id: 'hl-bia-nui',
        title: {
          vi: 'Thành núi Trường Yên & Bia Vua Lý Thái Tổ',
          en: 'Trường Yên Ramparts & Lý Thái Tổ Stele Pavilion',
        },
        whatIsIt: {
          vi: 'Hệ thống núi đá bao bọc thung lũng kinh thành xưa cùng khu nhà bia tưởng nhớ Chiếu dời đô năm 1010.',
          en: 'Natural limestone mountains ringing the ancient capital valley alongside the Lý Thái Tổ memorial pavilion.',
        },
        notablePoint: {
          vi: 'Cho thấy tư duy quân sự – địa lý sắc sảo của ông cha khi kết hợp núi tự nhiên với mười đoạn tường thành đắp đất.',
          en: 'Illustrates how 10th-century builders paired steep karst walls with engineered earthen ramparts across valley gaps.',
        },
        whatToObserve: {
          vi: 'Phóng tầm mắt lên dáng núi Mã Yên và khu vực nhà bia để hình dung quy mô kinh thành thế kỷ X.',
          en: 'Look toward Mã Yên Mountain and the stele pavilion to visualize the defensive perimeter of the 10th-century capital.',
        },
        photoId: 'hoalu-7',
      },
    ],
    photoTips: {
      editorialNote: {
        vi: 'Gợi ý biên tập giúp bạn tôn vinh vẻ cổ kính của kiến trúc gỗ – đá tại Cố đô Hoa Lư.',
        en: 'Editorial suggestions to highlight Hoa Lư’s stone masonry and shaded brick pathways respectfully.',
      },
      items: [
        {
          id: 'hl-tip-1',
          aspect: { vi: 'Cổng Đông Môn & dãy núi sau', en: 'East Gate & mountain backdrop' },
          suggestion: {
            vi: 'Đứng lùi trên cầu đá phía ngoài cổng để thu trọn ba vòm đá và dãy núi đá vôi Trường Yên phía sau.',
            en: 'Step back onto the stone approach bridge to frame all three gate arches against the limestone ridge.',
          },
        },
        {
          id: 'hl-tip-2',
          aspect: { vi: 'Góc chéo 45° tại Long sàng đá', en: '45-degree angle on the Dragon Bed' },
          suggestion: {
            vi: 'Chụp từ hai bên sân gạch ở góc 45 độ để thấy rõ khối đá nguyên khối và chi tiết chạm nổi rồng mây.',
            en: 'Shoot from a 45-degree side position to reveal the monolithic stone profile and dragon reliefs.',
          },
        },
        {
          id: 'hl-tip-3',
          aspect: { vi: 'Đường gạch đỏ Đền Vua Lê', en: 'Shaded path to Lê Temple' },
          suggestion: {
            vi: 'Tận dụng hàng cây cổ thụ và lối gạch đỏ làm đường dẫn mắt vào cổng gỗ rêu phong.',
            en: 'Use the red-brick pathway and overarching tree canopy as natural leading lines into the temple gate.',
          },
        },
      ],
      safetyReminder: {
        vi: 'Tuyệt đối KHÔNG ngồi, tựa hoặc trèo lên cặp Long sàng đá, bia đá và tượng nghê cổ; không bật flash trong chính cung để bảo vệ đồ gỗ sơn son thếp vàng.',
        en: 'NEVER sit on, lean against, or climb the stone dragon beds, stelae, or guardian statues. Do not use flash inside sanctuaries.',
      },
    },
    timeline: [
      {
        period: { vi: '968 – 980', en: '968 – 980' },
        title: { vi: 'Triều Đinh & quốc hiệu Đại Cồ Việt', en: 'Đinh Dynasty & Đại Cồ Việt' },
        detail: {
          vi: 'Đinh Bộ Lĩnh thống nhất đất nước, xưng Đinh Tiên Hoàng Đế và đặt kinh đô tại Hoa Lư.',
          en: 'Đinh Bộ Lĩnh unified the realm, assumed the title Emperor Đinh Tiên Hoàng, and chose Hoa Lư as capital.',
        },
        category: 'history',
      },
      {
        period: { vi: '980 – 1009', en: '980 – 1009' },
        title: { vi: 'Triều Tiền Lê & chiến thắng quân Tống 981', en: 'Early Lê Dynasty & 981 victory' },
        detail: {
          vi: 'Lê Hoàn lên ngôi (Lê Đại Hành), lãnh đạo đánh thắng quân Tống xâm lược năm 981 và củng cố kinh đô Hoa Lư.',
          en: 'Emperor Lê Đại Hành defended Đại Cồ Việt against the 981 Song invasion from the Hoa Lư capital.',
        },
        category: 'history',
      },
      {
        period: { vi: '1010', en: '1010' },
        title: { vi: 'Lý Thái Tổ dời đô ra Thăng Long', en: 'Capital moved to Thăng Long' },
        detail: {
          vi: 'Vua Lý Thái Tổ ban Chiếu dời đô ra thành Đại La (Thăng Long), Hoa Lư trở thành Cố đô lịch sử.',
          en: 'Emperor Lý Thái Tổ relocated the royal seat to Thăng Long, making Hoa Lư the historic Ancient Capital.',
        },
        category: 'history',
      },
      {
        period: { vi: 'Thế kỷ XVII (1606 & 1696)', en: '17th Century (1606 & 1696)' },
        title: { vi: 'Phục dựng đền thờ thời Hậu Lê & chế tác Long sàng đá', en: 'Later Lê temple rebuild & dragon beds' },
        detail: {
          vi: 'Đầu thế kỷ XVII (văn bia 1606), nhân dân và triều đình trùng tu lớn hai ngôi đền; năm 1696 hoàn thiện cặp Long sàng đá hiện còn.',
          en: 'Early 17th-century repairs (marked by a 1606 stele) rebuilt the temples; in 1696 artisans completed the carved stone dragon beds.',
        },
        category: 'restoration',
      },
      {
        period: { vi: 'Thế kỷ XX – 2017', en: '20th Century – 2017' },
        title: { vi: 'Khai quật nền gạch thế kỷ X & Bảo vật Quốc gia', en: 'Excavations & National Treasure status' },
        detail: {
          vi: 'Khảo cổ học phát lộ gạch thành Đại Cồ Việt thế kỷ X; năm 2017, hai Long sàng đá được công nhận Bảo vật Quốc gia.',
          en: 'Archaeology uncovered 10th-century palace bricks beneath the courtyard; in 2017, the twin dragon beds became National Treasures.',
        },
        category: 'archaeology',
      },
    ],
    responsibleVisiting: {
      vi: [
        'Sử dụng tai nghe khi nghe thuyết minh và giữ không gian trang nghiêm trong sân đền, chính cung.',
        'Không chạm tay, sờ xoa hay ngồi lên Long sàng đá, bia đá và các tượng cổ.',
        'Ăn mặc gọn gàng, lịch sự khi vào dâng hương hoặc tham quan nội thất đền.',
        'Không xả rác và không ngắt hoa súng trong ao di tích.',
        'Luôn phân biệt rõ Cố đô Hoa Lư (Trường Yên) với khu Phố cổ Hoa Lư khi chia sẻ thông tin.',
      ],
      en: [
        'Use earphones for audio narration and maintain a respectful tone in temple courtyards.',
        'Never touch, rub, or sit on the stone dragon beds, ancient stelae, or guardian statues.',
        'Dress modestly before entering sanctuaries.',
        'Keep gardens and lily ponds free of litter and do not pick flowers.',
        'Accurately distinguish Hoa Lư Ancient Capital in Trường Yên from modern Hoa Lư Old Town.',
      ],
    },
    visitingInfoNote: {
      vi: 'Giờ mở cửa tham quan, lịch tổ chức Lễ hội Hoa Lư (thường vào tháng 3 âm lịch) và quy định vé vào cửa thực tế do Trung tâm Bảo tồn Di tích lịch sử – văn hóa Cố đô Hoa Lư niêm yết tại cổng di tích. Vui lòng kiểm tra thông tin cập nhật từ đơn vị quản lý trước chuyến đi.',
      en: 'Current opening hours, entrance fees, and annual Hoa Lư Festival schedules (traditionally held in the 3rd lunar month) are posted by the Hoa Lư Conservation Center at the entrance. Check official management notices before visiting.',
    },
    audio: {
      viFile: '/audio/co-do-hoa-lu-vi.mp3',
      enFile: '/audio/co-do-hoa-lu-en.mp3',
      estimatedDuration: {
        vi: '1 phút 51 giây',
        en: '1 min 36 sec',
      },
      toneDescription: {
        vi: 'Hào sảng, trang trọng, giàu chiều sâu lịch sử về kinh đô đầu tiên của nước Việt độc lập.',
        en: 'Dignified and evocative — honoring Vietnam’s first centralized royal capital.',
      },
      voiceTypeNotice: {
        vi: 'Giọng đọc tổng hợp (tiếng Việt) — không phải bản thu hướng dẫn viên; cần cán bộ bảo tồn/lịch sử rà soát trước khi dùng chính thức.',
        en: 'Synthesized voice (Vietnamese / English) — not a human guide recording; pending historian/site-board review.',
      },
      sections: [
        {
          heading: { vi: '1. Kinh đô giữa thành núi', en: '1. A Capital Framed by Stone' },
          paragraphs: {
            vi: [
              'Xin chào bạn tại Cố đô Hoa Lư, vùng đất Trường Yên lịch sử, nay thuộc phường Tây Hoa Lư, tỉnh Ninh Bình.',
              'Trước hết, xin nhắc nhẹ một phân biệt quan trọng: đây là khu di tích cố đô từ thế kỷ thứ 10, hoàn toàn khác với khu Phố cổ Hoa Lư xây dựng mới ở khu vực trung tâm thành phố.',
            ],
            en: [
              'Welcome to the Hoa Lư Ancient Capital in historic Trường Yên, now within Tây Hoa Lư Ward, Ninh Bình Province.',
              'First, a helpful distinction: this is the authentic tenth-century imperial capital site — distinct from the modern commercial district called Hoa Lư Old Town in the city center.',
            ],
          },
        },
        {
          heading: { vi: '2. Dấu ấn Đinh – Tiền Lê', en: '2. From Đinh Tiên Hoàng to Lê Đại Hành' },
          paragraphs: {
            vi: [
              'Năm 968, sau khi thu phục mười hai sứ quân, Đinh Bộ Lĩnh lên ngôi Hoàng đế, đặt quốc hiệu Đại Cồ Việt và chọn Hoa Lư làm kinh đô. Người xưa khéo léo tựa vào dãy núi Mã Yên, Cột Cờ để biến cả thung lũng thành pháo đài tự nhiên vững chắc.',
              'Tiếp nối triều Đinh, Hoàng đế Lê Đại Hành đã lãnh đạo quân dân đánh thắng quân Tống xâm lược năm 981. Đến năm 1010, khi Vua Lý Thái Tổ ban Chiếu dời đô ra Thăng Long, Hoa Lư khép lại vai trò kinh thành sau bốn mươi hai năm lịch sử rực rỡ.',
            ],
            en: [
              'In 968, after reunifying the twelve warlords, Đinh Bộ Lĩnh became Emperor Đinh Tiên Hoàng, named the realm Đại Cồ Việt, and made Hoa Lư its capital, turning surrounding karst peaks into natural fortress walls.',
              'His successor, Emperor Lê Đại Hành, repelled the Song invasion of 981 from here before Emperor Lý Thái Tổ transferred the capital to Thăng Long in 1010 after forty-two pivotal years.',
            ],
          },
        },
        {
          heading: { vi: '3. Hai tầng ký ức của di tích', en: '3. Two Layers of Memory' },
          paragraphs: {
            vi: [
              'Khi dạo bước qua Cổng Đông Môn vào Đền Vua Đinh và sang Đền Vua Lê cách đó ba trăm mét, bạn hãy để ý hai lớp thời gian giao nhau: bên dưới lòng đất là nền gạch cung điện thế kỷ thứ 10 được khảo cổ học phát lộ; còn mái ngói gỗ uy nghiêm trước mắt chúng ta chủ yếu được phục dựng từ thế kỷ 17 thời Hậu Lê.',
              'Đặc biệt ngay trước Bái đường Đền Vua Đinh là chiếc Long sàng đá xanh nguyên khối chế tác năm 1696 — Bảo vật Quốc gia mang vẻ đẹp vừa uy nghi vừa gần gũi làng quê Việt Nam.',
            ],
            en: [
              'Walking through the stone East Gate to Emperor Đinh’s and Emperor Lê’s temples, notice how two centuries meet: beneath the earth lie tenth-century palace foundations, while the standing timber sanctuaries reflect major seventeenth-century Later Lê reconstructions.',
              'Before Emperor Đinh’s main hall rests the monolithic 1696 stone dragon bed — a National Treasure blending royal dragons with rural Vietnamese motifs.',
            ],
          },
        },
        {
          heading: { vi: '4. Gìn giữ cổ vật', en: '4. Preserving the Relics' },
          paragraphs: {
            vi: [
              'Mời bạn giữ nhịp bước nhẹ nhàng, không chạm tay hay ngồi lên Long sàng đá, bia đá cổ, và cùng lưu giữ nét trang nghiêm cho đất cố đô.',
            ],
            en: [
              'Please tread quietly, refrain from touching or sitting on the stone dragon beds and ancient stelae, and help keep the ancient capital dignified.',
            ],
          },
        },
      ],
    },
    sources: [
      {
        name: {
          vi: 'Cục Di sản văn hóa — Di tích Quốc gia đặc biệt Cố đô Hoa Lư & Bảo vật Quốc gia Long sàng đá',
          en: 'Department of Cultural Heritage — Hoa Lư Special National Monument',
        },
        url: 'https://dsvh.gov.vn',
        checkedDate: '15/11/2026',
        approvalStatus: {
          vi: 'Nguồn công khai chuyên ngành di sản; chưa gửi Ban quản lý Hoa Lư duyệt bản biên soạn.',
          en: 'Public cultural heritage documentation; awaiting direct review by Hoa Lư board.',
        },
      },
      {
        name: {
          vi: 'Cổng Thông tin điện tử tỉnh Ninh Bình & Trung tâm Bảo tồn Di tích Cố đô Hoa Lư',
          en: 'Ninh Bình Provincial Portal & Hoa Lư Conservation Center',
        },
        url: 'https://ninhbinh.gov.vn',
        checkedDate: '15/11/2026',
        approvalStatus: {
          vi: 'Đối chiếu niên đại phục dựng 1606, 1696 và phân biệt với Phố cổ Hoa Lư.',
          en: 'Cross-checked 1606 and 1696 restoration records.',
        },
      },
    ],
  },
  {
    id: 'cuc-phuong',
    slug: 'vuon-quoc-gia-cuc-phuong',
    name: {
      vi: 'Vườn quốc gia Cúc Phương',
      en: 'Cúc Phương National Park',
    },
    shortTagline: {
      vi: 'Vườn quốc gia đầu tiên của Việt Nam (thành lập năm 1962), nổi bật với rừng mưa nhiệt đới trên núi đá vôi, cây Chò ngàn năm, Động Người Xưa và các trung tâm cứu hộ động vật hoang dã.',
      en: 'Vietnam’s first national park (founded 1962), sheltering primary limestone rainforest, thousand-year-old trees, a prehistoric cave, and wildlife rescue centers.',
    },
    categoryKeys: ['nature', 'history_culture'],
    categories: {
      vi: ['Thiên nhiên', 'Lịch sử – văn hóa'],
      en: ['Nature', 'History & Culture'],
    },
    administrativeLocation: {
      vi: 'Trụ sở chính tại xã Cúc Phương, tỉnh Ninh Bình (xã Cúc Phương mới sau sáp nhập Văn Phương và Cúc Phương năm 2025 theo Nghị quyết 1674/NQ-UBTVQH15; vùng rừng trải rộng qua địa bàn ba tỉnh Ninh Bình, Hòa Bình cũ/Phú Thọ mới và Thanh Hóa — đối chiếu 15/11/2026).',
      en: 'Headquarters in Cúc Phương Commune, Ninh Bình Province (expanded commune under 2025 Resolution 1674/NQ-UBTVQH15; the forest spans adjoining areas of Ninh Bình, Hòa Bình/Phú Thọ, and Thanh Hóa — verified Nov 15, 2026).',
    },
    heritageStatus: {
      vi: 'Vườn quốc gia đầu tiên của Việt Nam (Quyết định số 72-TTg ngày 07/07/1962), diện tích hơn 22.000 ha; khu bảo tồn đa dạng sinh học và giáo dục môi trường trọng điểm quốc gia.',
      en: 'Vietnam’s first national park (Decision 72-TTg, July 7, 1962), spanning over 22,000 hectares of limestone rainforest and biodiversity conservation.',
    },
    coverPhotoId: 'cucphuong-1',
    photos: [
      {
        id: 'cucphuong-1',
        src: '/images/cucphuong-1.jpg',
        width: 1280,
        height: 850,
        caption: {
          vi: 'Con suối nhỏ và lối mòn dưới tán rừng mưa nhiệt đới xanh thẳm tại Vườn quốc gia Cúc Phương.',
          en: 'Forest stream and lush woodland trail inside Cúc Phương National Park.',
        },
        alt: {
          vi: 'Dòng suối trong chảy giữa bờ cây dương xỉ và thảm thực vật rừng nguyên sinh rậm rạp tại Cúc Phương.',
          en: 'Clear stream winding past ferns and dense tropical foliage in Cúc Phương rainforest.',
        },
        author: 'hds',
        license: 'CC BY 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Forest_in_Cuc_Phuong_National_Park_(15706323528).jpg',
      },
      {
        id: 'cucphuong-2',
        src: '/images/cucphuong-2.jpg',
        width: 1280,
        height: 1707,
        caption: {
          vi: 'Cây Chò ngàn năm (Terminalia myriocarpa) với bộ rễ bạnh vươn cao trong vùng lõi rừng nguyên sinh.',
          en: 'The thousand-year-old Chò tree (Terminalia myriocarpa) with towering buttress roots.',
        },
        alt: {
          vi: 'Thân cây Chò cổ thụ khổng lồ với bộ rễ bạnh lớn và bảng thông tin giữa rừng rậm Cúc Phương.',
          en: 'Massive ancient Chò tree trunk with wide buttress roots and park signboard in Cúc Phương.',
        },
        author: 'TomFitzhenry',
        license: 'CC BY-SA 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Thousand_year_old_tree_in_Cuc_Phuong_National_Park,_Vietnam.jpg',
      },
      {
        id: 'cucphuong-3',
        src: '/images/cucphuong-3.jpg',
        width: 1280,
        height: 960,
        caption: {
          vi: 'Dãy núi đá vôi mờ sương vươn lên trên vùng hồ lưu trú giữa rừng Cúc Phương.',
          en: 'Misty limestone ridge rising above tranquil water inside Cúc Phương National Park.',
        },
        alt: {
          vi: 'Núi rừng Cúc Phương phủ sương nhẹ phản chiếu xuống hồ nước xanh tĩnh lặng.',
          en: 'Misty forested karst mountains reflected in calm water at Cúc Phương.',
        },
        author: 'Ravikiran r',
        license: 'Public domain (Phạm vi công cộng)',
        licenseUrl:
          'https://commons.wikimedia.org/wiki/File:Cuc.Phuong.National.Park.jpg',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Cuc.Phuong.National.Park.jpg',
      },
      {
        id: 'cucphuong-4',
        src: '/images/cucphuong-4.jpg',
        width: 1280,
        height: 960,
        caption: {
          vi: 'Hồ nước yên bình và vòng núi đá vôi bao quanh thung lũng rừng Cúc Phương.',
          en: 'Peaceful lake framed by forested limestone hills in the Cúc Phương area.',
        },
        alt: {
          vi: 'Mặt hồ phẳng lặng soi bóng dãy núi đá vôi xanh thẫm tại Cúc Phương.',
          en: 'Calm lake mirroring dark green karst mountains in Cúc Phương.',
        },
        author: 'pululante',
        license: 'CC BY 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Parque_Nacional_de_Cuc_Phuong_(5182009321).jpg',
      },
      {
        id: 'cucphuong-5',
        src: '/images/cucphuong-5.jpg',
        width: 1280,
        height: 960,
        caption: {
          vi: 'Cổng chào khu rừng nguyên sinh Vườn quốc gia Cúc Phương.',
          en: 'Main entrance gate welcoming visitors into Cúc Phương National Park.',
        },
        alt: {
          vi: 'Cổng chính Vườn quốc gia Cúc Phương với hàng chữ chào mừng và rặng cây xanh hai bên.',
          en: 'Main entrance archway of Cúc Phương National Park bordered by trees.',
        },
        author: 'Kien1980v',
        license: 'Public domain (Phạm vi công cộng)',
        licenseUrl: 'https://commons.wikimedia.org/wiki/File:Cuc_Phuong_01.jpg',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cuc_Phuong_01.jpg',
      },
      {
        id: 'cucphuong-6',
        src: '/images/cucphuong-6.jpg',
        width: 1280,
        height: 853,
        caption: {
          vi: 'Cổng khu Chương trình Bảo tồn Rùa (Turtle Conservation Center) tại Cúc Phương.',
          en: 'Entrance to the Turtle Conservation Center (TCC) inside Cúc Phương National Park.',
        },
        alt: {
          vi: 'Cổng gỗ và biển tên Chương trình Bảo tồn Rùa rợp bóng cây xanh tại Cúc Phương.',
          en: 'Shaded wooden archway of the Turtle Conservation Center at Cúc Phương.',
        },
        author: 'Superbass',
        license: 'CC BY-SA 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:2024-03-26-tcc_cuc_phuong_entrance-2946.jpg',
      },
      {
        id: 'cucphuong-7',
        src: '/images/cucphuong-7.jpg',
        width: 1280,
        height: 960,
        caption: {
          vi: 'Tê tê mẹ và con được chăm sóc tại Trung tâm Cứu hộ Tê tê Cúc Phương.',
          en: 'Mother and baby pangolin cared for at the Pangolin Rescue Center in Cúc Phương.',
        },
        alt: {
          vi: 'Cá thể tê tê mẹ cõng tê tê con trong khu chăm sóc bảo tồn tại Cúc Phương.',
          en: 'A rescued mother pangolin carrying her baby at Cúc Phương National Park.',
        },
        author: 'U.S. Government Accountability Office',
        license: 'Public domain (Phạm vi công cộng)',
        licenseUrl:
          'https://commons.wikimedia.org/wiki/File:Mother_Pangolin_and_baby_pangolin_-_Pangolin_Rescue_Center,_Cuc_Phuong_National_Park,_Vietnam_(37627416742).jpg',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Mother_Pangolin_and_baby_pangolin_-_Pangolin_Rescue_Center,_Cuc_Phuong_National_Park,_Vietnam_(37627416742).jpg',
      },
      {
        id: 'cucphuong-8',
        src: '/images/cucphuong-8.jpg',
        width: 1280,
        height: 961,
        caption: {
          vi: 'Một loài bướm đêm cánh vàng ghi nhận trên lá rừng Cúc Phương — nơi có hơn 400 loài bướm.',
          en: 'A yellow moth/butterfly resting on a forest leaf — Cúc Phương hosts over 400 lepidoptera species.',
        },
        alt: {
          vi: 'Con bướm nhỏ cánh vàng đậu trên mặt lá xanh trong rừng Cúc Phương.',
          en: 'Small yellow moth resting on a green leaf inside Cúc Phương forest.',
        },
        author: 'Caitlin 0000',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Lepidoptera_C%C3%BAc_Ph%C6%B0%C6%A1ng_03.jpg',
      },
      {
        id: 'cucphuong-9',
        src: '/images/cucphuong-9.jpg',
        width: 1280,
        height: 961,
        caption: {
          vi: 'Ếch rêu Bắc Bộ (Theloderma corticale) với khả năng ngụy trang ấn tượng trong rừng ẩm Cúc Phương.',
          en: 'Vietnamese mossy frog (Theloderma corticale) camouflaged in the damp Cúc Phương forest.',
        },
        alt: {
          vi: 'Chú ếch rêu da xanh sần sùi giống đám rêu nằm trên nền đá ẩm tại Cúc Phương.',
          en: 'Moss-colored bumpy frog camouflaged against damp forest rock in Cúc Phương.',
        },
        author: 'Caitlin 0000',
        license: 'CC BY 4.0',
        licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Salientia_C%C3%BAc_Ph%C6%B0%C6%A1ng_08.jpg',
      },
      {
        id: 'cucphuong-10',
        src: '/images/cucphuong-10.jpg',
        width: 1024,
        height: 683,
        caption: {
          vi: 'Bên trong Động Người Xưa — di chỉ khảo cổ học lưu giữ dấu tích người tiền sử khoảng 7.500 năm trước.',
          en: 'Interior of the Cave of Prehistoric Man — archaeological shelter dating roughly 7,500 years BP.',
        },
        alt: {
          vi: 'Khoang hang đá vôi tự nhiên Động Người Xưa với ánh sáng tự nhiên chiếu vào từ cửa hang tại Cúc Phương.',
          en: 'Natural limestone chamber inside the Cave of Prehistoric Man at Cúc Phương.',
        },
        author: 'ChrisGoldNY',
        license: 'CC BY-NC 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-nc/2.0/',
        sourceUrl: 'https://www.flickr.com/photos/34325628@N05/8708000115',
      },
      {
        id: 'cucphuong-11',
        src: '/images/cucphuong-11.jpg',
        width: 1024,
        height: 680,
        caption: {
          vi: 'Voọc chà vá chân xám tại Trung tâm Cứu hộ Linh trưởng Nguy cấp (EPRC) Cúc Phương.',
          en: 'Grey-shanked douc langur at the Endangered Primate Rescue Center (EPRC), Cúc Phương.',
        },
        alt: {
          vi: 'Cá thể voọc chà vá chân xám quý hiếm tại khu chăm sóc của Trung tâm Cứu hộ Linh trưởng Cúc Phương.',
          en: 'Rare grey-shanked douc langur observed inside the EPRC sanctuary in Cúc Phương.',
        },
        author: 'ChrisGoldNY',
        license: 'CC BY-NC 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-nc/2.0/',
        sourceUrl: 'https://www.flickr.com/photos/34325628@N05/8705694339',
      },
      {
        id: 'cucphuong-12',
        src: '/images/cucphuong-12.jpg',
        width: 1024,
        height: 708,
        caption: {
          vi: 'Voọc Cát Bà (voọc đầu vàng) mẹ và con tại Trung tâm Cứu hộ Linh trưởng Nguy cấp Cúc Phương.',
          en: 'Cat Ba (golden-headed) langur parent and infant at the EPRC in Cúc Phương.',
        },
        alt: {
          vi: 'Voọc Cát Bà mẹ ôm voọc con lông vàng cam đặc trưng tại khu bảo tồn linh trưởng Cúc Phương.',
          en: 'Endangered Cat Ba langur holding its orange-gold infant at the Cúc Phương EPRC.',
        },
        author: 'ChrisGoldNY',
        license: 'CC BY-NC 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-nc/2.0/',
        sourceUrl: 'https://www.flickr.com/photos/34325628@N05/8706816200',
      },
    ],
    storyBlocks: [
      {
        id: 'cp-story-1',
        heading: {
          vi: 'Vườn quốc gia đầu tiên và nhịp thở rừng già 22.000 ha',
          en: 'Vietnam’s First National Park (Since 1962)',
        },
        body: {
          vi: [
            'Ngày 07 tháng 07 năm 1962, khu rừng nguyên sinh Cúc Phương chính thức trở thành Vườn quốc gia đầu tiên của Việt Nam theo Quyết định số 72-TTg. Trải dài hơn 22.000 héc-ta trên dãy núi đá vôi Tam Điệp, nơi đây giữ lại cấu trúc rừng mưa nhiệt đới nhiều tầng tán hiếm có ngay giữa miền Bắc.',
            'Bước qua cổng vườn, không khí dịu mát ngay dưới tán cây cổ thụ dây leo chằng chịt. Tiếng ve rừng, tiếng chim và mùi lá mục tạo nên cảm giác tươi mới hoàn toàn tách biệt khỏi phố thị. Vào khoảng cuối tháng 4 đến tháng 5 hằng năm, vườn thường ghi nhận nhiều đàn bướm bay dọc lối mòn — song mật độ xuất hiện tùy thuộc thời tiết từng năm nên không thể cam kết chắc chắn.',
          ],
          en: [
            'On July 7, 1962, Cúc Phương was formally established under Decision 72-TTg as Vietnam’s very first national park. Spanning more than 22,000 hectares across limestone ridges, it preserves a multi-layered tropical rainforest rarely left intact in northern Vietnam.',
            'Walking beneath towering canopies draped in lianas immediately cools the air. Late April through May often brings vibrant gatherings of butterflies along forest trails (over 400 species are recorded in the park), though exact sightings naturally vary with weather and rainfall.',
          ],
        },
        photoId: 'cucphuong-1',
      },
      {
        id: 'cp-story-2',
        heading: {
          vi: 'Từ dấu tích người tiền sử đến những trung tâm hồi sinh sự sống',
          en: 'From Prehistoric Shelters to Modern Rescue Centers',
        },
        body: {
          vi: [
            'Rừng Cúc Phương không chỉ bảo vệ thực vật cổ thụ mà còn giữ ký ức loài người. Tại Động Người Xưa — một hang đá vôi hai tầng rộng thoáng — các nhà khảo cổ đã phát hiện vỏ ốc núi, công cụ đá và mộ táng cổ thuộc văn hóa Hòa Bình có niên đại khoảng 7.500 năm trước.',
            'Ngay gần cổng vườn ngày nay là những mô hình bảo tồn được quốc tế biết đến: Trung tâm Cứu hộ Linh trưởng Nguy cấp (EPRC), Chương trình Bảo tồn Rùa và khu cứu hộ tê tê. Đây là nơi các chuyên gia và kiểm lâm chăm sóc động vật bị buôn bán trái phép trước khi tái thả về tự nhiên.',
          ],
          en: [
            'Beyond ancient trees, Cúc Phương shelters deep human history. Inside the Cave of Prehistoric Man, archaeological excavations revealed stone tools, snail shells, and burials linked to Hòa Bình culture dating roughly 7,500 years ago.',
            'Closer to the park entrance operate internationally recognized wildlife facilities: the Endangered Primate Rescue Center (EPRC), the Turtle Conservation Center, and pangolin rescue units — teaching visitors why protecting habitats matters far more than souvenirs.',
          ],
        },
        photoId: 'cucphuong-11',
      },
    ],
    highlights: [
      {
        id: 'cp-cho',
        title: {
          vi: 'Cây Chò ngàn năm và đường mòn rừng nguyên sinh',
          en: 'Thousand-Year-Old Chò Tree & Rainforest Trails',
        },
        whatIsIt: {
          vi: 'Cây Chò chỉ cổ thụ (Terminalia myriocarpa) khổng lồ với bộ rễ bạnh cao ngang tầm người lớn, nằm sâu trong tuyến đi bộ trung tâm vườn.',
          en: 'A colossal ancient Terminalia myriocarpa tree with massive buttress roots reached along a shaded 7-km forest loop.',
        },
        notablePoint: {
          vi: 'Thể hiện rõ cấu trúc đa tầng của rừng nhiệt đới trên núi đá vôi với cây ký sinh, phong lan và dây leo khổng lồ.',
          en: 'Showcases the multi-story architecture of limestone rainforest, covered in epiphytes, ferns, and woody vines.',
        },
        whatToObserve: {
          vi: 'Quan sát bộ rễ bạnh xòe rộng giữ thân cây cao trên nền đất mỏng và lắng nghe sự tĩnh lặng dưới tán lá.',
          en: 'Notice how wide buttress roots anchor the giant trunk on shallow karst soil, and walk softly along the boardwalk.',
        },
        photoId: 'cucphuong-2',
      },
      {
        id: 'cp-cave',
        title: {
          vi: 'Động Người Xưa (di chỉ khảo cổ)',
          en: 'Cave of Prehistoric Man',
        },
        whatIsIt: {
          vi: 'Hang đá vôi tự nhiên cách cổng vườn khoảng 5 km, nơi lưu giữ dấu tích cư trú và mộ táng của người tiền sử cách đây khoảng 7.500 năm.',
          en: 'A high limestone cavern located ~5 km inside the park preserving 7,500-year-old human habitation and burial traces.',
        },
        notablePoint: {
          vi: 'Gắn liền với văn hóa Hòa Bình — chứng minh con người đã sống nương tựa vào nguồn thức ăn và hang trú ẩn của rừng Cúc Phương từ rất sớm.',
          en: 'Connected to the Hòa Bình archaeological culture, illustrating early human reliance on forest shelters and river snails.',
        },
        whatToObserve: {
          vi: 'Mang theo đèn pin nhỏ hoặc đèn điện thoại vừa đủ soi lối bậc đá; không chạm vào vách hang hay làm kinh động dơi trú ngụ.',
          en: 'Use a modest flashlight along the damp stone steps and avoid disturbing roosting bats or rock surfaces.',
        },
        photoId: 'cucphuong-10',
      },
      {
        id: 'cp-rescue',
        title: {
          vi: 'Trung tâm Cứu hộ Linh trưởng, Rùa và Tê tê',
          en: 'Primate, Turtle & Pangolin Conservation Centers',
        },
        whatIsIt: {
          vi: 'Các khu bảo tồn chuyên biệt nằm gần cổng vườn, nơi cứu hộ voọc mông trắng, voọc Cát Bà, chà vá chân xám, các loài rùa cạn/rùa nước ngọt và tê tê quý hiếm.',
          en: 'Dedicated rescue facilities near the park gate caring for endangered langurs, freshwater tortoises/turtles, and pangolins.',
        },
        notablePoint: {
          vi: 'Du khách đi theo tour hướng dẫn chính thức của kiểm lâm để hiểu rõ tác hại của săn bắt và buôn bán động vật hoang dã.',
          en: 'Guided educational visits explain wildlife trafficking threats and long-term rehabilitation toward wild release.',
        },
        whatToObserve: {
          vi: 'Tìm hiểu tên loài bản địa (như Voọc mông trắng — biểu tượng của Vườn quốc gia Cúc Phương) và tuân thủ khoảng cách im lặng bên khu chuồng nuôi.',
          en: 'Look for Delacour’s langur—the park’s emblem—and keep quiet around enclosures so animals stay stress-free.',
        },
        photoId: 'cucphuong-6',
      },
      {
        id: 'cp-bio',
        title: {
          vi: 'Đa dạng sinh học bướm, lưỡng cư và hồ rừng',
          en: 'Biodiversity: Butterflies, Amphibians & Forest Lakes',
        },
        whatIsIt: {
          vi: 'Môi trường sống của hàng nghìn loài thực vật bậc cao, hơn 400 loài bướm, cùng nhiều loài lưỡng cư đặc hữu như ếch rêu Bắc Bộ.',
          en: 'Rich habitat supporting over 400 butterfly species, distinctive karst amphibians like the mossy frog, and quiet forest lakes.',
        },
        notablePoint: {
          vi: 'Vào cuối xuân – đầu hè, ánh nắng lọc qua tán lá thường thu hút nhiều loài bướm và côn trùng rừng, song sự xuất hiện tự nhiên phụ thuộc thời tiết.',
          en: 'Late April to May often sees colorful butterfly flights along sunny trail clearings, though nature offers no fixed schedule.',
        },
        whatToObserve: {
          vi: 'Quan sát vẻ ngụy trang kỳ lạ của các loài bọ que, ếch rêu và chỉ chụp ảnh từ khoảng cách an toàn.',
          en: 'Notice delicate camouflage on moss-covered rocks and tree bark, and photograph without touching any wild creatures.',
        },
        photoId: 'cucphuong-9',
        routeNote: {
          vi: 'Lưu ý tham quan ban đêm (soi thú/côn trùng): chỉ tham gia khi đăng ký tuyến có kiểm lâm Vườn quốc gia đi cùng.',
          en: 'Night wildlife walks are conducted strictly under official park ranger supervision.',
        },
      },
    ],
    photoTips: {
      editorialNote: {
        vi: 'Gợi ý biên tập giúp bạn ghi lại ánh sáng rừng già và thế giới sinh học tự nhiên mà không xâm hại môi trường.',
        en: 'Editorial framing suggestions for forest canopy light and wildlife photography without disturbing habitats.',
      },
      items: [
        {
          id: 'cp-tip-1',
          aspect: { vi: 'Ánh sáng xuyên tán rừng', en: 'Sunbeams through canopy' },
          suggestion: {
            vi: 'Vào buổi sáng nắng nhẹ, hướng máy dọc theo con suối hoặc bậc gỗ quanh Cây Chò ngàn năm để lấy tia sáng lọc qua tầng lá.',
            en: 'In morning light, frame along forest streams or wooden walkways near the ancient Chò tree to capture filtered sunbeams.',
          },
        },
        {
          id: 'cp-tip-2',
          aspect: { vi: 'Góc rộng cho cổ thụ', en: 'Low vertical angle for giant trees' },
          suggestion: {
            vi: 'Đặt máy ở góc thấp hướng lên trên tại rễ cây Chò để thể hiện rõ chiều cao khổng lồ và bộ rễ bạnh.',
            en: 'Shoot upward from a low angle near the buttress roots to convey the towering vertical scale of ancient trees.',
          },
        },
        {
          id: 'cp-tip-3',
          aspect: { vi: 'Chụp động vật cứu hộ', en: 'At wildlife rescue centers' },
          suggestion: {
            vi: 'Tắt hoàn toàn đèn flash và tiếng màn trập, dùng ống kính tele nhẹ chụp xuyên qua khoảng trống lưới theo hướng dẫn của kiểm lâm.',
            en: 'Disable camera flash and shutter sounds completely, and stay behind barrier lines as directed by sanctuary staff.',
          },
        },
      ],
      safetyReminder: {
        vi: 'Luôn đi đúng đường mòn quy định, mang giày chống trượt và đồ dài tay tránh vắt rừng vào mùa ẩm; tuyệt đối KHÔNG đuổi bắt bướm, bẻ cành hoặc chạm vào động vật hoang dã.',
        en: 'Stay strictly on marked trails, wear non-slip footwear and long sleeves in damp weather, and NEVER catch butterflies or touch wild animals.',
      },
    },
    timeline: [
      {
        period: { vi: '~7.500 năm trước', en: '~7,500 years BP' },
        title: { vi: 'Cư dân văn hóa Hòa Bình tại Động Người Xưa', en: 'Hòa Bình culture at the Cave of Prehistoric Man' },
        detail: {
          vi: 'Các hiện vật vỏ nhuyễn thể, rìu đá và dấu tích mộ táng cho thấy người tiền sử sinh sống lâu dài trong các hang động rừng Cúc Phương.',
          en: 'Stone implements, freshwater shells, and ancient burials attest to early human life inside Cúc Phương’s limestone caves.',
        },
        category: 'archaeology',
      },
      {
        period: { vi: '07/07/1962', en: 'July 7, 1962' },
        title: { vi: 'Thành lập Vườn quốc gia đầu tiên của Việt Nam', en: 'Designated Vietnam’s First National Park' },
        detail: {
          vi: 'Thủ tướng Chính phủ ban hành Quyết định số 72-TTg thành lập Khu rừng cấm Cúc Phương — tiền thân Vườn quốc gia Cúc Phương.',
          en: 'Decision 72-TTg formally established the Cúc Phương protected forest, pioneering Vietnam’s national park system.',
        },
        category: 'history',
      },
      {
        period: { vi: '1993 – nay', en: '1993 – present' },
        title: { vi: 'Phát triển các trung tâm cứu hộ linh trưởng, rùa & tê tê', en: 'Establishment of Wildlife Rescue Programs' },
        detail: {
          vi: 'Các chương trình hợp tác quốc tế tại Cúc Phương đã cứu hộ, sinh sản bảo tồn và tái thả nhiều cá thể linh trưởng, rùa và tê tê nguy cấp.',
          en: 'Collaborative conservation centers at Cúc Phương have rescued, bred, and rehabilitated critically endangered primates, turtles, and pangolins.',
        },
        category: 'restoration',
      },
      {
        period: { vi: 'Từ 01/07/2025', en: 'From July 1, 2025' },
        title: { vi: 'Cập nhật địa giới hành chính xã Cúc Phương mới', en: '2025 Commune Merger Update' },
        detail: {
          vi: 'Theo Nghị quyết 1674/NQ-UBTVQH15, xã Văn Phương sáp nhập vào xã Cúc Phương, tỉnh Ninh Bình mới.',
          en: 'Following Resolution 1674/NQ-UBTVQH15, Văn Phương merged into expanded Cúc Phương Commune in Ninh Bình Province.',
        },
        category: 'history',
      },
    ],
    responsibleVisiting: {
      vi: [
        'Không xả rác, không mang đồ nhựa dùng một lần vào sâu trong rừng.',
        'Đi đúng đường mòn và bảng chỉ dẫn; không tự ý tách đoàn khi đi bộ trong vùng lõi.',
        'Tuyệt đối không bắt bướm, hái phong lan, bẻ cành hoặc làm ồn gần khu cứu hộ linh trưởng, rùa và tê tê.',
        'Không sử dụng đèn flash hoặc cho động vật ăn dưới bất kỳ hình thức nào.',
        'Đăng ký qua Ban quản lý Vườn nếu có nhu cầu đi tuyến dài hoặc quan sát sinh thái ban đêm.',
      ],
      en: [
        'Pack out all waste and minimize single-use plastics inside the rainforest.',
        'Stay on marked trails and avoid wandering off alone into core forest zones.',
        'Never catch butterflies, pick wild orchids, or raise voices near primate, turtle, and pangolin enclosures.',
        'Do not use camera flash or feed any wildlife.',
        'Book official park guides/rangers for deep forest treks or night wildlife walks.',
      ],
    },
    visitingInfoNote: {
      vi: 'Vé vào cổng Vườn quốc gia, vé tham quan các trung tâm cứu hộ, giờ đón khách và lịch hướng dẫn viên theo tuyến được cập nhật trên cổng thông tin chính thức của Vườn quốc gia Cúc Phương (cucphuongtourism.com.vn). Vui lòng kiểm tra trước khi khởi hành, nhất là vào mùa mưa.',
      en: 'Park entry fees, rescue center guided-tour schedules, and trail access vary seasonally (especially during heavy rain). Please confirm current details via Cúc Phương National Park’s official channels before setting out.',
    },
    audio: {
      viFile: '/audio/vuon-quoc-gia-cuc-phuong-vi.mp3',
      enFile: '/audio/vuon-quoc-gia-cuc-phuong-en.mp3',
      estimatedDuration: {
        vi: '1 phút 48 giây',
        en: '1 min 30 sec',
      },
      toneDescription: {
        vi: 'Tươi mới, gần gũi thiên nhiên, khơi gợi sự tò mò và ý thức nâng niu từng sinh linh của rừng già.',
        en: 'Fresh, attentive, and close to nature — awakening curiosity about rainforest ecology and wildlife conservation.',
      },
      voiceTypeNotice: {
        vi: 'Giọng đọc tổng hợp (tiếng Việt) — không phải bản thu hướng dẫn viên kiểm lâm; cần chuyên gia bảo tồn rà soát trước khi dùng chính thức.',
        en: 'Synthesized voice (Vietnamese / English) — not a park-ranger recording; pending conservation-staff review.',
      },
      sections: [
        {
          heading: { vi: '1. Nhịp thở của rừng già', en: '1. Breathing the Ancient Rainforest' },
          paragraphs: {
            vi: [
              'Chào mừng bạn bước qua cánh cổng của Vườn quốc gia Cúc Phương — vườn quốc gia đầu tiên của Việt Nam, được thành lập từ ngày bảy tháng bảy năm 1962.',
              'Trải rộng hơn hai mươi hai nghìn héc-ta trên dãy núi đá vôi, chỉ cần rời mặt đường bê tông vài bước là bạn đã chạm vào làn không khí mát rượi dưới tán rừng nhiều tầng, nơi dây leo, dương xỉ và tiếng ve rừng dệt nên bản hòa ca xanh thẳm.',
            ],
            en: [
              'Welcome to Cúc Phương National Park — Vietnam’s very first national park, founded on July 7, 1962.',
              'Covering more than twenty-two thousand hectares of limestone forest, just a few steps inside bring cooler air beneath multi-tiered canopies woven with ferns, lianas, and forest song.',
            ],
          },
        },
        {
          heading: { vi: '2. Cây Chò ngàn năm & Động Người Xưa', en: '2. Ancient Tree & Prehistoric Cave' },
          paragraphs: {
            vi: [
              'Dọc theo tuyến rừng nguyên sinh, điểm dừng chân khiến nhiều người sững sờ nhất là Cây Chò ngàn năm cao vút với bộ rễ bạnh xòe rộng như bức tường sống giữa đại ngàn.',
              'Cách cổng vườn khoảng năm ki-lô-mét còn có Động Người Xưa, nơi các nhà khảo cổ tìm thấy công cụ đá, vỏ ốc và mộ táng cổ có niên đại khoảng bảy nghìn năm trăm năm, nhắc nhớ rằng rừng xanh từng là mái nhà che chở cho tổ tiên từ thuở tiền sử.',
            ],
            en: [
              'Along the core trail stands the thousand-year-old Chò tree, anchored in thin karst soil by massive buttress roots.',
              'About five kilometers from the gate lies the Cave of Prehistoric Man, where stone tools and burials dating roughly seven thousand five hundred years show how early humans once called this forest home.',
            ],
          },
        },
        {
          heading: { vi: '3. Mái nhà của voọc, rùa và tê tê', en: '3. Sanctuary for Primates, Turtles & Pangolins' },
          paragraphs: {
            vi: [
              'Cúc Phương còn được biết đến như trạm hồi sinh sự sống. Ngay gần khu đón tiếp là Trung tâm Cứu hộ Linh trưởng Nguy cấp, Chương trình Bảo tồn Rùa và khu chăm sóc tê tê.',
              'Ở đây, những cá thể voọc mông trắng, voọc Cát Bà hay rùa quý được cứu hộ khỏi nạn săn bắt trái phép đang từng ngày phục hồi sức khỏe. Và nếu ghé thăm vào cuối tháng tư hay tháng năm, bạn có thể bắt gặp sắc bướm bay dọc lối mòn — dù thiên nhiên luôn giữ nhịp điệu riêng tùy theo thời tiết từng mùa.',
            ],
            en: [
              'Cúc Phương is also a sanctuary of second chances. Near the entrance operate the Endangered Primate Rescue Center, Turtle Conservation Center, and pangolin rescue programs.',
              'Here, rare Delacour’s and Cat Ba langurs, tortoises, and pangolins recover from illegal wildlife trade. In late April and May, sunlight often brings colorful butterflies across trail clearings, though nature reveals herself on her own schedule.',
            ],
          },
        },
        {
          heading: { vi: '4. Lời hẹn với rừng xanh', en: '4. Leaving Only Footprints' },
          paragraphs: {
            vi: [
              'Khi khám phá Cúc Phương, bạn hãy đi đúng lối mòn, giữ im lặng gần khu cứu hộ, không bắt bướm hay ngắt cây rừng, và mang toàn bộ rác thải rời khỏi rừng già.',
            ],
            en: [
              'As you walk these trails, please keep to marked paths, stay quiet near rescue enclosures, never touch plants or wild creatures, and carry every wrapper back out.',
            ],
          },
        },
      ],
    },
    sources: [
      {
        name: {
          vi: 'Vườn quốc gia Cúc Phương — Cổng thông tin chính thức về thành lập (1962), tuyến tham quan & bảo tồn',
          en: 'Cúc Phương National Park Official Portal — History (1962), Trails & Conservation',
        },
        url: 'https://cucphuongtourism.com.vn',
        checkedDate: '15/11/2026',
        approvalStatus: {
          vi: 'Nguồn thông tin chính thức công khai của Vườn quốc gia Cúc Phương.',
          en: 'Official public information portal of Cúc Phương National Park.',
        },
      },
      {
        name: {
          vi: 'Nghị quyết 1674/NQ-UBTVQH15 (16/06/2025) — Địa giới xã Cúc Phương, tỉnh Ninh Bình',
          en: 'Resolution 1674/NQ-UBTVQH15 (June 16, 2025) — Cúc Phương Commune Update',
        },
        url: 'https://chinhphu.vn',
        checkedDate: '15/11/2026',
        approvalStatus: {
          vi: 'Đối chiếu đơn vị hành chính cấp xã mới từ 01/07/2025.',
          en: 'Verified 2025 commune boundary reorganization.',
        },
      },
    ],
  },
  {
    id: 'dia-tang',
    slug: 'chua-dia-tang-phi-lai-tu',
    name: {
      vi: 'Chùa Địa Tạng Phi Lai Tự',
      en: 'Địa Tạng Phi Lai Tự Pagoda',
    },
    shortTagline: {
      vi: 'Ngôi chùa thanh tịnh nép bên đồi thông xanh với khoảng sân sỏi trắng khắc họa 12 vòng tròn nhân duyên, phục dựng từ cuối năm 2015 trên nền chùa Đùng xưa.',
      en: 'A serene monastery backed by pine hills, renowned for its white-pebble courtyard traced with twelve concentric circles, restored from late 2015 on the historic Chùa Đùng grounds.',
    },
    categoryKeys: ['spiritual', 'nature'],
    categories: {
      vi: ['Tâm linh', 'Thiên nhiên'],
      en: ['Spiritual', 'Nature'],
    },
    administrativeLocation: {
      vi: 'Thôn Ninh Trung, xã Thanh Bình, tỉnh Ninh Bình (trước 01/07/2025 thuộc xã Liêm Sơn, huyện Thanh Liêm, tỉnh Hà Nam — cập nhật theo Nghị quyết 1674/NQ-UBTVQH15 năm 2025, đối chiếu 15/11/2026).',
      en: 'Ninh Trung Village, Thanh Bình Commune, Ninh Bình Province (formerly Liêm Sơn Commune, Thanh Liêm District, Hà Nam Province prior to the July 1, 2025 merger under Resolution 1674/NQ-UBTVQH15; verified Nov 15, 2026).',
    },
    heritageStatus: {
      vi: 'Cơ sở tự viện Phật giáo và không gian thiền tịnh tiêu biểu tại Ninh Bình mới (tên cổ dân gian: chùa Đùng; không phải Di sản Thế giới UNESCO).',
      en: 'Notable Buddhist monastery and peaceful spiritual retreat in expanded Ninh Bình Province (traditionally known locally as Chùa Đùng; not a UNESCO World Heritage Site).',
    },
    coverPhotoId: 'diatang-1',
    photos: [
      {
        id: 'diatang-1',
        src: '/images/diatang-1.jpg',
        width: 1280,
        height: 851,
        caption: {
          vi: 'Khoảng sân trải sỏi trắng, cặp tượng voi đá và mái chùa Tam Bảo nép mình dưới rặng thông xanh tại Chùa Địa Tạng Phi Lai Tự (chùa Đùng).',
          en: 'White-gravel forecourt, stone elephants, and tiled Tam Bảo Hall nestled against pine hills at Địa Tạng Phi Lai Tự.',
        },
        alt: {
          vi: 'Ngôi chùa mái ngói truyền thống màu nâu vàng với sân sỏi trắng phía trước và đồi thông xanh mướt phía sau tại thôn Ninh Trung.',
          en: 'Traditional brown-tiled pagoda overlooking a white pebble courtyard backed by green pine hills.',
        },
        author: 'Kien1980v',
        license: 'CC0 1.0 (Phạm vi công cộng)',
        licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
        sourceUrl:
          'https://commons.wikimedia.org/wiki/File:Ch%C3%B9a_%C4%90%C3%B9ng.jpg',
      },
    ],
    photoGoalNote: {
      vi: 'Kho ảnh xác thực hiện có: 1 / mục tiêu 10–15 ảnh. Hiện mới tìm thấy 1 ảnh nguồn mở hợp lệ (chùa Đùng, tác giả Kien1980v, CC0). Các góc cận cảnh 12 vòng tròn sân sỏi trắng, Tổ đường, điện Đức Ông, vườn cây và đồi thông cần được bổ sung thêm 9–14 ảnh thực địa sau khi xin phép nhà chùa (không dùng ảnh cắt lặp thay thế).',
      en: 'Current verified coverage: 1 / target 10–15 photos. Only 1 open-licensed photo is currently verified on Wikimedia Commons. 9–14 additional photographs (12-circle white pebble courtyard, Ancestral Hall, gardens, and pine hills) remain needed through on-site photography with monastery permission.',
    },
    storyBlocks: [
      {
        id: 'dt-story-1',
        heading: {
          vi: 'Từ tên gọi chùa Đùng xưa đến “Phi Lai” giữa đồi thông',
          en: 'From Ancient Chùa Đùng to “Phi Lai” Beneath the Pines',
        },
        body: {
          vi: [
            'Ẩn mình nơi thôn Ninh Trung (xã Thanh Bình, tỉnh Ninh Bình mới), Chùa Địa Tạng Phi Lai Tự mang vẻ bình dị rất khác với những quần thể đồ sộ. Trước khi có tên gọi như hôm nay, người dân địa phương vẫn quen gọi nơi đây là chùa Đùng — một ngôi cổ tự gắn với nhiều lời kể dân gian qua hàng trăm năm.',
            'Theo truyền tích địa phương, ngôi chùa xưa hình thành từ khoảng thế kỷ X–XI, từng gắn với dấu chân Vua Trần Nghệ Tông về ở ẩn và câu chuyện Vua Tự Đức ban tên “Phi Lai” (với hàm ý nơi chốn thanh tịnh khiến người đến tìm thấy sự an yên). Cần lưu ý rằng phần lớn giai thoại cổ này lưu truyền qua văn hóa dân gian địa phương chứ chưa có bia ký nguyên vẹn từ thế kỷ X còn tồn tại tại chỗ.',
          ],
          en: [
            'Tucked quietly into Ninh Trung Village (Thanh Bình Commune, Ninh Bình Province), Địa Tạng Phi Lai Tự feels intimate and unhurried compared with grand monumental complexes. For generations, local villagers knew the site simply as Chùa Đùng.',
            'Local oral traditions trace the temple’s earliest origins to the 10th–11th centuries and link it to later retreats by Trần Dynasty Emperor Trần Nghệ Tông as well as the name “Phi Lai” attributed to Nguyễn Emperor Tự Đức. As no original 10th-century architectural relics survive intact here, these stories are thoughtfully presented as regional heritage traditions.',
          ],
        },
        photoId: 'diatang-1',
      },
      {
        id: 'dt-story-2',
        heading: {
          vi: 'Hồi sinh không gian thiền tịnh từ cuối năm 2015',
          en: 'A Quiet Revival Since December 2015',
        },
        body: {
          vi: [
            'Trải qua biến thiên thời gian, ngôi chùa Đùng cũ từng bị xuống cấp hoang phế nhiều thập kỷ. Từ tháng 12 năm 2015, Đại đức Thích Minh Quang về tiếp nhận, chủ trì tu bổ, quy hoạch lại khuôn viên và đổi tên thành Địa Tạng Phi Lai Tự.',
            'Điểm chạm cảm xúc nhất khi bước qua tam quan là khoảng sân lớn rải đầy sỏi trắng thay cho nền bê tông thường thấy. Trên mặt sỏi khắc họa 12 vòng tròn đồng tâm biểu trưng cho 12 nhân duyên trong triết lý nhà Phật, hài hòa cùng gam màu nâu đất, mái ngói mộc mạc, vườn hoa theo mùa và tiếng gió xào xạc qua rặng thông xanh phía sau chùa.',
          ],
          en: [
            'Decades of neglect left old Chùa Đùng weathered and overgrown until December 2015, when Venerable Thích Minh Quang initiated careful restoration and named the monastery Địa Tạng Phi Lai Tự.',
            'Instead of heavy concrete paving, the renovated forecourt spreads clean white pebbles traced with twelve concentric circles symbolizing the Buddhist twelve links of dependent origination. Framed by warm earth-toned timber roofs, seasonal gardens, and whispering pine hills, the grounds invite quiet reflection.',
          ],
        },
      },
    ],
    highlights: [
      {
        id: 'dt-pebble',
        title: {
          vi: 'Khoảng sân sỏi trắng và 12 vòng tròn nhân duyên',
          en: 'White Pebble Courtyard & 12 Concentric Circles',
        },
        whatIsIt: {
          vi: 'Khoảng sân lớn phía trước tòa Tam Bảo được trải sỏi trắng tinh khôi với 12 vòng tròn đồng tâm xếp đặt hài hòa.',
          en: 'The broad front courtyard paved with smooth white pebbles patterned into twelve concentric circles.',
        },
        notablePoint: {
          vi: 'Vừa tạo cảm giác thoáng sạch, lắng dịu thị giác, vừa gợi nhắc giáo lý 12 nhân duyên và bước chân chánh niệm.',
          en: 'Visually calms the mind while symbolizing the Buddhist cycle of twelve causes and conditions.',
        },
        whatToObserve: {
          vi: 'Bước đi chậm rãi theo lối gạch đá quy định hai bên hoặc đường dẫn chính, không dẫm xáo trộn các vòng tròn sỏi.',
          en: 'Walk gently along the designated stone pathways without disturbing the carefully raked pebble patterns.',
        },
        photoId: 'diatang-1',
      },
      {
        id: 'dt-sanctuary',
        title: {
          vi: 'Tòa Tam Bảo, Tổ đường và không gian thiền',
          en: 'Tam Bảo Hall & Ancestral Sanctuary',
        },
        whatIsIt: {
          vi: 'Quần thể các nếp nhà thờ tự chính bằng gỗ – gạch mộc mạc tôn trí tượng Đức Địa Tạng Vương Bồ Tát và chư vị Tổ sư.',
          en: 'Timber-and-tile worship halls enshrining Bodhisattva Kṣitigarbha (Địa Tạng Vương) and monastery patriarchs.',
        },
        notablePoint: {
          vi: 'Công trình phục dựng sau năm 2015 tiết chế phô trương, chú trọng sự hài hòa giữa kiến trúc truyền thống Bắc Bộ và cảnh quan đồi cây.',
          en: 'Post-2015 architecture avoids ostentation, blending warm northern Vietnamese carpentry with hillside gardens.',
        },
        whatToObserve: {
          vi: 'Ngắm sắc nâu trầm của gỗ, thư pháp treo hiên chùa và giữ giọng nói thì thầm khi qua khu hành lễ.',
          en: 'Appreciate the understated timber joinery and seasonal flowers while keeping voices soft near active meditation spaces.',
        },
      },
      {
        id: 'dt-pine',
        title: {
          vi: 'Đồi thông xanh và thế tựa sơn tự nhiên',
          en: 'Pine-Covered Hillside Backdrop',
        },
        whatIsIt: {
          vi: 'Dải đồi thông bao bọc phía sau khuôn viên chùa, góp phần điều hòa không khí mát dịu và tạo phông nền xanh êm đềm.',
          en: 'The gentle pine-covered ridge sheltering the rear of the monastery and cooling the valley breeze.',
        },
        notablePoint: {
          vi: 'Tạo nên bầu không khí tách biệt hẳn với sự ồn ào bên ngoài, đặc biệt dễ chịu vào sáng sớm hoặc chiều muộn.',
          en: 'Gives the monastery a quiet sanctuary feel, especially serene in early morning or late afternoon.',
        },
        whatToObserve: {
          vi: 'Chỉ tham quan các lối dạo trên đồi trong khung giờ nhà chùa cho phép và không đốt nhang nến bừa bãi gần rừng thông.',
          en: 'Follow only open hillside paths during permitted hours and never bring open flames near pine needles.',
        },
      },
    ],
    photoTips: {
      editorialNote: {
        vi: 'Gợi ý biên tập giúp bạn lưu giữ sự an nhiên của chùa Địa Tạng Phi Lai Tự một cách tế nhị nhất.',
        en: 'Editorial suggestions for capturing the quiet mood of Địa Tạng Phi Lai Tự with utmost respect.',
      },
      items: [
        {
          id: 'dt-tip-1',
          aspect: { vi: 'Toàn cảnh sân sỏi & đồi thông', en: 'Pebble courtyard & pines' },
          suggestion: {
            vi: 'Chụp từ bậc tam quan nhìn bao quát sân sỏi trắng, hai tượng voi đá và mái chùa nép dưới hàng thông phía sau.',
            en: 'Frame from the front approach to include the white gravel courtyard, stone elephants, and pine ridge behind the roof.',
          },
        },
        {
          id: 'dt-tip-2',
          aspect: { vi: 'Ánh sáng dịu sáng – chiều', en: 'Soft morning or late afternoon light' },
          suggestion: {
            vi: 'Mặt sỏi trắng phản chiếu ánh nắng trưa khá gắt; nên chọn buổi sáng sớm hoặc chiều muộn để màu gỗ và thông lên dịu mắt.',
            en: 'White gravel reflects harsh midday sun; early morning or late afternoon light yields softer timber and foliage tones.',
          },
        },
        {
          id: 'dt-tip-3',
          aspect: { vi: 'Không gian tĩnh cho người tu tập', en: 'Respecting quiet spaces' },
          suggestion: {
            vi: 'Tránh giơ máy chụp gần tăng ni, phật tử đang tụng kinh hoặc thiền hành; giữ tiếng chụp ở chế độ im lặng.',
            en: 'Use silent shutter mode and never photograph monastics or devotees up close during chanting or meditation.',
          },
        },
      ],
      safetyReminder: {
        vi: 'Không bước chân lên các vòng tròn sỏi trắng nếu có biển nhắc lối đi riêng; tuân thủ tuyệt đối các khu vực nội viện hạn chế khách tham quan.',
        en: 'Do not step onto raked white-pebble circles outside designated walkways, and honor all private monastic residence zones.',
      },
    },
    timeline: [
      {
        period: { vi: 'Thế kỷ X–XI (truyền tích dân gian)', en: '10th–11th Centuries (folk tradition)' },
        title: { vi: 'Dấu ấn tên gọi chùa Đùng xưa', en: 'Origins of ancient Chùa Đùng' },
        detail: {
          vi: 'Truyền tích địa phương kể ngôi chùa cổ hình thành từ thời Lý – Tiền Lê, về sau từng là nơi Vua Trần Nghệ Tông ẩn tu và được Vua Tự Đức nhắc đến với tên “Phi Lai”.',
          en: 'Regional accounts link early Chùa Đùng to the 10th–11th centuries, later retreats by Trần Nghệ Tông, and the poetic name “Phi Lai”.',
        },
        category: 'legend',
      },
      {
        period: { vi: 'Trước năm 2015', en: 'Prior to 2015' },
        title: { vi: 'Giai đoạn xuống cấp qua thời gian', en: 'Period of decay' },
        detail: {
          vi: 'Trải qua chiến tranh và thời gian dài không được trùng tu lớn, khu chùa cũ bị hư hại, bỏ trống nhiều năm.',
          en: 'Decades without major upkeep left the older village temple weathered and largely abandoned.',
        },
        category: 'restoration',
      },
      {
        period: { vi: 'Từ tháng 12/2015', en: 'From December 2015' },
        title: { vi: 'Tu bổ và mang tên Địa Tạng Phi Lai Tự', en: 'Restoration as Địa Tạng Phi Lai Tự' },
        detail: {
          vi: 'Đại đức Thích Minh Quang về tiếp nhận và chủ trì phục dựng, kiến tạo không gian sân sỏi trắng 12 vòng nhân duyên giữa đồi thông.',
          en: 'Venerable Thích Minh Quang led the restoration, creating the serene pine-hill sanctuary and white-pebble courtyard.',
        },
        category: 'restoration',
      },
      {
        period: { vi: 'Từ 01/07/2025', en: 'From July 1, 2025' },
        title: { vi: 'Thuộc xã Thanh Bình, tỉnh Ninh Bình mới', en: 'Updated Ninh Bình Province administration' },
        detail: {
          vi: 'Sau sắp xếp đơn vị hành chính năm 2025 (Nghị quyết 1674/NQ-UBTVQH15), thôn Ninh Trung thuộc xã Thanh Bình, tỉnh Ninh Bình.',
          en: 'Following 2025 Resolution 1674/NQ-UBTVQH15, Ninh Trung Village sits in Thanh Bình Commune, Ninh Bình Province.',
        },
        category: 'history',
      },
    ],
    responsibleVisiting: {
      vi: [
        'Ăn mặc trang nhã, kín đáo (quần/váy dài qua gối, áo có tay) khi bước vào khuôn viên chùa.',
        'Đeo tai nghe khi bật thuyết minh và giữ không gian yên tĩnh, không nói cười lớn tiếng.',
        'Đi theo đúng lối gạch/đá quy định, không dẫm đạp hay nghịch phá mặt sân sỏi trắng.',
        'Không tự ý đi vào khu vực sinh hoạt riêng của chư tăng, ni và cư sĩ nội viện.',
        'Không xả rác và không mang lửa hay đốt vàng mã gần rặng thông dễ cháy.',
      ],
      en: [
        'Dress modestly (covered shoulders and knees) when entering monastery grounds.',
        'Use earphones for audio narration and speak in hushed tones.',
        'Stay on paved paths and never disturb or scatter the white gravel circles.',
        'Respect private monastic residence areas closed to general visitors.',
        'Keep grounds spotless and avoid bringing open flames anywhere near the pine trees.',
      ],
    },
    visitingInfoNote: {
      vi: 'Giờ mở cửa đón khách tham quan, quy định trang phục và thời điểm đóng cửa lối lên đồi thông có thể thay đổi theo lịch tu học của nhà chùa và các ngày lễ Phật giáo. Vui lòng theo dõi thông báo chính thức của Chùa Địa Tạng Phi Lai Tự trước khi đến.',
      en: 'Visiting hours, hillside trail cut-off times, and special holiday etiquette follow the monastery’s liturgical calendar. Please check official announcements from Địa Tạng Phi Lai Tự before visiting.',
    },
    audio: {
      viFile: '/audio/chua-dia-tang-phi-lai-tu-vi.mp3',
      enFile: '/audio/chua-dia-tang-phi-lai-tu-en.mp3',
      estimatedDuration: {
        vi: '1 phút 35 giây',
        en: '1 min 24 sec',
      },
      toneDescription: {
        vi: 'Nhẹ nhàng, an yên, chậm rãi như một buổi tản bộ sớm giữa sân sỏi trắng và đồi thông.',
        en: 'Gentle, calm, and unhurried — echoing a peaceful walk across white pebbles and pine needles.',
      },
      voiceTypeNotice: {
        vi: 'Giọng đọc tổng hợp (tiếng Việt) — không phải bản thu của nhà chùa; cần đại diện tự viện/chuyên gia đối chiếu trước khi dùng chính thức.',
        en: 'Synthesized voice (Vietnamese / English) — not an official monastery recording; pending temple/editorial review.',
      },
      sections: [
        {
          heading: { vi: '1. Chốn bình yên giữa đồi thông', en: '1. Peace Beneath the Pines' },
          paragraphs: {
            vi: [
              'Xin chào bạn tại Chùa Địa Tạng Phi Lai Tự, nằm nơi thôn Ninh Trung, xã Thanh Bình, tỉnh Ninh Bình.',
              'Vừa bước qua cổng chùa, bạn sẽ nhận ra sự khác biệt rất dịu dàng: không quá phô trương ồn ã, ngôi chùa nép mình bên rặng thông xanh mướt với gam màu nâu gỗ và mùi hương hoa cỏ thoang thoảng.',
            ],
            en: [
              'Welcome to Địa Tạng Phi Lai Tự Pagoda in Ninh Trung Village, Thanh Bình Commune, Ninh Bình Province.',
              'Passing through the gate brings a gentle shift in pace: rather than grand monuments, brown-tiled roofs nestle quietly against whispering pine hills.',
            ],
          },
        },
        {
          heading: { vi: '2. Sân sỏi trắng 12 nhân duyên', en: '2. Twelve Circles in White Gravel' },
          paragraphs: {
            vi: [
              'Ngay trước tòa Tam Bảo là khoảng sân trải đầy sỏi trắng tinh khôi, thay cho sân bê tông thông thường. Trên nền sỏi ấy khắc họa mười hai vòng tròn đồng tâm tượng trưng cho mười hai nhân duyên của đời người, như lời nhắc nhẹ về sự tỉnh thức trong từng bước chân.',
              'Xung quanh là những góc vườn nhỏ chăm chút tỉ mỉ, những bức thư pháp và mái ngói mộc mạc gợi cảm giác thư thái, gần gũi.',
            ],
            en: [
              'Spreading before Tam Bảo Hall is a broad courtyard of smooth white pebbles instead of gray concrete. Across the gravel, twelve concentric circles evoke the Buddhist twelve links of dependent origination, inviting mindful steps.',
              'Around the edges, seasonal flower beds, subtle calligraphy, and warm timber corridors offer a soothing, intimate space.',
            ],
          },
        },
        {
          heading: { vi: '3. Từ chùa Đùng xưa đến diện mạo hôm nay', en: '3. From Chùa Đùng to Today' },
          paragraphs: {
            vi: [
              'Trước khi mang tên Địa Tạng Phi Lai Tự, người dân quanh vùng gọi nơi đây là chùa Đùng. Truyền tích dân gian kể ngôi chùa có cội rễ từ nhiều thế kỷ trước và từng gắn với tên gọi “Phi Lai”, dẫu đã có thời gian dài bị hoang phế.',
              'Từ tháng mười hai năm hai nghìn không trăm mười lăm, Đại đức Thích Minh Quang về tiếp nhận và chủ trì tu bổ, đưa không gian thiền tịnh này hồi sinh như bạn đang chiêm ngưỡng hôm nay.',
            ],
            en: [
              'For generations, locals called this older monastery Chùa Đùng. Oral folklore links its distant roots to earlier dynasties and the poetic name “Phi Lai,” though decades of neglect later left it quiet and overgrown.',
              'Beginning in December 2015, Venerable Thích Minh Quang led a thoughtful restoration that brought the sanctuary back to life.',
            ],
          },
        },
        {
          heading: { vi: '4. Giữ trọn nét tĩnh lặng', en: '4. Keeping the Sanctuary Still' },
          paragraphs: {
            vi: [
              'Trong lúc dạo bước, bạn hãy đeo tai nghe, đi theo lối gạch quy định để không làm xáo trộn sân sỏi trắng, ăn mặc trang nhã và giữ trọn sự tĩnh lặng cho chốn thiền môn.',
            ],
            en: [
              'As you explore, please use earphones, stay on paved walkways to preserve the white pebble patterns, dress modestly, and share in keeping the monastery serene.',
            ],
          },
        },
      ],
    },
    sources: [
      {
        name: {
          vi: 'Cổng Thông tin Giáo hội Phật giáo Việt Nam & tư liệu báo chí địa phương về Chùa Địa Tạng Phi Lai Tự (tu bổ 12/2015)',
          en: 'Vietnam Buddhist Sangha Portal & Regional Heritage Reports on Địa Tạng Phi Lai Tự',
        },
        url: 'https://phatgiao.org.vn',
        checkedDate: '15/11/2026',
        approvalStatus: {
          vi: 'Nguồn công khai; tách rõ truyền tích dân gian chùa Đùng với mốc tu bổ từ tháng 12/2015.',
          en: 'Public source; separates regional folk traditions from documented 2015 restoration.',
        },
      },
      {
        name: {
          vi: 'Nghị quyết số 1674/NQ-UBTVQH15 (16/06/2025) — Xã Thanh Bình, tỉnh Ninh Bình mới',
          en: 'Resolution 1674/NQ-UBTVQH15 (June 16, 2025) — Thanh Bình Commune Update',
        },
        url: 'https://chinhphu.vn',
        checkedDate: '15/11/2026',
        approvalStatus: {
          vi: 'Văn bản pháp lý hiện hành (sáp nhập xã Liêm Sơn vào xã Thanh Bình từ 01/07/2025).',
          en: 'Official legal reorganization merging Liêm Sơn into Thanh Bình Commune as of July 1, 2025.',
        },
      },
    ],
  },
];
