/**
 * 버디 카탈로그 / 상세 시드 데이터
 * 운영자 편집 가이드:
 * - 코스 추가: COURSES 배열에 항목 추가 + public/photos/ 에 사진 넣기
 * - id 는 URL 경로가 됩니다 (/buddies/[id])
 * - accent: "green" | "pink" — 첫 태그 칩 색
 * - photo.pos: background-position (인물 얼굴 위치 보정)
 */

export type Course = {
  id: string;
  accent: "green" | "pink";
  isNew?: boolean;
  // 카탈로그 카드
  buddy: string;
  title: string;        // 코스명 (오버레이 큰 글씨, 줄바꿈은 \n)
  blurb: string;        // 오버레이 작은 설명 한 줄
  photo: string;        // 대표 사진 경로
  photoPos: string;     // background-position
  tags: string[];
  duration: string;     // "약 2시간"
  region: string;       // "성동구"
  price: string;        // "4만원"
  // 상세 페이지
  detail: {
    heroTitle: string;          // 상세 h1 (줄바꿈 \n)
    lede: string;
    rating: string;             // "4.9"
    reviewCount: number;        // 38
    gallery: { src: string; pos: string }[];
    intro: string;              // 버디 소개 본문
    meetSpot: { name: string; sub: string };
    steps: { src: string; pos: string; title: string; desc: string }[];
    reviews: { initial: string; color: string; name: string; loc: string; stars: string; when: string; text: string }[];
    slots: { date: string; time: string }[];
  };
};

export const CATALOG_HEAD = {
  kicker: "PLAYDATE · 버디 카탈로그",
  title: ["오늘, 어떤 하루를", "보내볼까요?"],   // 2줄, 2번째 줄에 accent
  sub: "버디가 직접 꾸린 코스예요. 마음이 가는 하루를 골라 신청하면, 운영자가 24시간 안에 연락드려요.",
};

export const COURSES: Course[] = [
  {
    id: "seongsu-pokemon",
    accent: "green",
    buddy: "이안",
    title: "성수 포켓몬 산책",
    blurb: "성수동 10년차가 안내하는",
    photo: "/photos/ian.jpg",
    photoPos: "center 24%",
    tags: ["포켓몬", "골목산책", "동네토박이"],
    duration: "약 2시간",
    region: "성동구",
    price: "4만원",
    detail: {
      heroTitle: "성수동 토박이와 함께하는\n포켓몬 골목 산책",
      lede: "성수동에서 10년 산 이안과 골목을 걸으며 포켓몬고 레이드를 돌고, 숨은 카페에서 쉬어가요.",
      rating: "4.9",
      reviewCount: 38,
      gallery: [
        { src: "/photos/ian.jpg", pos: "center 24%" },
        { src: "/photos/ian-4.jpeg", pos: "center 18%" },
        { src: "/photos/ian-5.jpeg", pos: "center 30%" },
        { src: "/photos/ian.jpg", pos: "center 60%" },
      ],
      intro:
        "안녕하세요, 성수동에서 10년 산 이안이에요. 포켓몬고 레이드부터 방탈출·코인노래방까지 — 같이 있으면 시간 가는 줄 모르는 하루를 만들어드려요. 낯가림 있으셔도 편하게 리드할게요 :)",
      meetSpot: { name: "성수역 2호선 4번 출구 앞", sub: "서울 성동구 · 정확한 위치는 예약 확정 후 안내드려요" },
      steps: [
        { src: "/photos/ian.jpg", pos: "center 22%", title: "성수역에서 만나요", desc: "편하게 인사하고, 오늘 어디를 돌지 함께 코스를 정해요." },
        { src: "/photos/ian-4.jpeg", pos: "center 18%", title: "골목을 걸으며 포켓몬 레이드", desc: "동네 토박이만 아는 스팟에서 레이드를 돌고 희귀 포켓몬도 잡아요." },
        { src: "/photos/ian-5.jpeg", pos: "center 30%", title: "숨은 골목 카페에서 쉬어가요", desc: "걷다가 분위기 좋은 카페에서 음료 한 잔 하며 한숨 돌려요." },
        { src: "/photos/ian.jpg", pos: "center 60%", title: "깔끔하게 마무리", desc: "정해진 시간이 끝나면 아쉽지만 인사하고 헤어져요." },
      ],
      reviews: [
        { initial: "ㅈ", color: "#8DB87A", name: "ㅈ**", loc: "성동구, 서울", stars: "★★★★★", when: "5일 전", text: "혼자선 못 갈 곳들을 편하게 다녔어요. 대화도 잘 통하고 시간 순삭! 성수 오면 또 신청할 거예요." },
        { initial: "민", color: "#E8799F", name: "민**", loc: "마포구, 서울", stars: "★★★★★", when: "2026년 5월", text: "방탈출 호흡 진짜 잘 맞아요 ㅋㅋ 코노까지 완벽한 하루였습니다. 이안님 텐션 최고!" },
        { initial: "수", color: "#6FA8C8", name: "수**", loc: "분당, 경기", stars: "★★★★★", when: "2026년 5월", text: "낯가림 심한 편인데 먼저 편하게 리드해주셔서 하나도 안 어색했어요. 골목 카페도 취향 저격." },
        { initial: "유", color: "#C8A26F", name: "유**", loc: "인천", stars: "★★★★☆", when: "2026년 4월", text: "포켓몬 같이 잡는 게 이렇게 재밌을 줄이야! 다만 그날 비가 와서 코스를 좀 줄인 게 아쉬웠어요." },
      ],
      slots: [
        { date: "6월 21일 (토)", time: "오후 2:00 ~ 4:00" },
        { date: "6월 22일 (일)", time: "오전 11:00 ~ 오후 1:00" },
        { date: "6월 25일 (수)", time: "저녁 7:00 ~ 9:00" },
        { date: "6월 28일 (토)", time: "오후 3:00 ~ 5:00" },
      ],
    },
  },
  {
    id: "seochon-latte", accent: "pink", buddy: "시드", title: "서촌 라떼 투어", blurb: "서촌 골목을 제일 잘 아는",
    photo: "/photos/sid.jpg", photoPos: "center 22%", tags: ["라떼맛집", "수다", "서촌골목"], duration: "약 2시간", region: "종로구", price: "4만원",
    detail: { heroTitle: "서촌 골목을 제일 잘 아는\n시드와 라떼 투어", lede: "서촌 골목골목 숨은 카페를 함께 돌며 수다도 떨고 라떼도 즐겨요.", rating: "4.8", reviewCount: 52,
      gallery: [{ src: "/photos/sid.jpg", pos: "center 22%" }, { src: "/photos/sid.jpg", pos: "center 40%" }, { src: "/photos/sid.jpg", pos: "center 55%" }],
      intro: "안녕하세요, 커피 좋아하는 시드예요. 서촌 골목의 숨은 카페라면 자신 있어요. 편하게 수다 떨며 라떼 투어 함께해요 :)",
      meetSpot: { name: "경복궁역 2번 출구 앞", sub: "서울 종로구 · 정확한 위치는 예약 확정 후 안내드려요" },
      steps: [{ src: "/photos/sid.jpg", pos: "center 22%", title: "경복궁역에서 만나요", desc: "가볍게 인사하고 오늘 코스를 정해요." }, { src: "/photos/sid.jpg", pos: "center 45%", title: "숨은 카페 라떼 투어", desc: "서촌 골목의 분위기 좋은 카페를 함께 돌아요." }, { src: "/photos/sid.jpg", pos: "center 60%", title: "깔끔하게 마무리", desc: "정해진 시간이 끝나면 아쉽지만 인사하고 헤어져요." }],
      reviews: [{ initial: "하", color: "#8DB87A", name: "하**", loc: "종로구, 서울", stars: "★★★★★", when: "1주 전", text: "혼자 못 가던 카페들 다 가봤어요. 대화도 편하고 좋았습니다." }, { initial: "준", color: "#E8799F", name: "준**", loc: "은평구, 서울", stars: "★★★★★", when: "2026년 5월", text: "라떼 취향 저격 코스였어요. 시드님 추천 카페 다 좋았어요." }],
      slots: [{ date: "6월 21일 (토)", time: "오후 1:00 ~ 3:00" }, { date: "6월 24일 (화)", time: "오후 3:00 ~ 5:00" }, { date: "6월 29일 (일)", time: "오전 11:00 ~ 오후 1:00" }] } },
  {
    id: "konkuk-escape", accent: "pink", buddy: "이안", title: "방탈출 + 코인노래방", blurb: "텐션 담당 버디가 이끄는",
    photo: "/photos/ian-4.jpeg", photoPos: "center 18%", tags: ["방탈출", "코인노래방", "팀플레이"], duration: "약 3시간", region: "성동구", price: "6만원",
    detail: { heroTitle: "텐션 담당 버디와\n방탈출 + 코인노래방", lede: "난이도별 방탈출을 함께 깨고, 코인노래방에서 신나게 마무리해요.", rating: "4.9", reviewCount: 38,
      gallery: [{ src: "/photos/ian-4.jpeg", pos: "center 18%" }, { src: "/photos/ian.jpg", pos: "center 24%" }, { src: "/photos/ian-5.jpeg", pos: "center 30%" }],
      intro: "포켓몬고 레이드부터 방탈출·코인노래방까지 — 같이 있으면 시간 가는 줄 모르는 하루를 만들어드려요. 낯가림 있으셔도 편하게 리드할게요 :)",
      meetSpot: { name: "건대입구역 2번 출구 앞", sub: "서울 광진구 · 정확한 위치는 예약 확정 후 안내드려요" },
      steps: [{ src: "/photos/ian-4.jpeg", pos: "center 18%", title: "건대입구에서 만나요", desc: "가볍게 인사하고 난이도를 정해요." }, { src: "/photos/ian.jpg", pos: "center 24%", title: "방탈출 한 판", desc: "호흡 맞춰 방을 탈출해요." }, { src: "/photos/ian-5.jpeg", pos: "center 30%", title: "코인노래방 마무리", desc: "신나게 노래 부르며 마무리해요." }],
      reviews: [{ initial: "민", color: "#E8799F", name: "민**", loc: "마포구, 서울", stars: "★★★★★", when: "2026년 5월", text: "방탈출 호흡 진짜 잘 맞아요 ㅋㅋ 코노까지 완벽한 하루였습니다." }],
      slots: [{ date: "6월 22일 (일)", time: "오후 2:00 ~ 5:00" }, { date: "6월 28일 (토)", time: "저녁 6:00 ~ 9:00" }] } },
  {
    id: "cherry-blossom", accent: "pink", isNew: true, buddy: "도키", title: "벚꽃 봄 산책 & 사진", blurb: "인생샷 찍어주는 신입 버디",
    photo: "/photos/doki.jpg", photoPos: "center 22%", tags: ["사진", "벚꽃", "산책"], duration: "약 1.5시간", region: "강남구", price: "2만원",
    detail: { heroTitle: "인생샷 찍어주는 도키와\n벚꽃 봄 산책", lede: "벚꽃 명소를 함께 걸으며 인생샷을 남겨요.", rating: "신규", reviewCount: 0,
      gallery: [{ src: "/photos/doki.jpg", pos: "center 22%" }, { src: "/photos/doki.jpg", pos: "center 40%" }],
      intro: "사진 찍는 거 좋아하는 신입 버디 도키예요. 벚꽃 명소에서 인생샷 책임질게요!",
      meetSpot: { name: "양재시민의숲 입구", sub: "서울 강남구 · 정확한 위치는 예약 확정 후 안내드려요" },
      steps: [{ src: "/photos/doki.jpg", pos: "center 22%", title: "공원 입구에서 만나요", desc: "가볍게 인사하고 코스를 정해요." }, { src: "/photos/doki.jpg", pos: "center 45%", title: "벚꽃 산책 & 사진", desc: "벚꽃길을 걸으며 인생샷을 남겨요." }],
      reviews: [],
      slots: [{ date: "6월 21일 (토)", time: "오후 4:00 ~ 5:30" }, { date: "6월 23일 (월)", time: "오후 2:00 ~ 3:30" }] } },
  {
    id: "love-talk", accent: "pink", buddy: "시드", title: "연애 고민 상담 산책", blurb: "판단 없이 들어주는",
    photo: "/photos/sid.jpg", photoPos: "center 52%", tags: ["연애상담", "산책", "한옥길"], duration: "약 2시간", region: "종로구", price: "4만 5천원",
    detail: { heroTitle: "판단 없이 들어주는\n시드와 고민 상담 산책", lede: "북촌 한옥길을 걸으며 편하게 연애 고민을 나눠요.", rating: "4.8", reviewCount: 52,
      gallery: [{ src: "/photos/sid.jpg", pos: "center 52%" }, { src: "/photos/sid.jpg", pos: "center 30%" }],
      intro: "잘 들어주는 게 장점인 시드예요. 판단 없이 편하게 고민 들어드릴게요.",
      meetSpot: { name: "안국역 2번 출구 앞", sub: "서울 종로구 · 정확한 위치는 예약 확정 후 안내드려요" },
      steps: [{ src: "/photos/sid.jpg", pos: "center 30%", title: "안국역에서 만나요", desc: "가볍게 인사하고 코스를 정해요." }, { src: "/photos/sid.jpg", pos: "center 52%", title: "한옥길 걸으며 상담", desc: "조용한 한옥길을 걸으며 편하게 이야기해요." }],
      reviews: [{ initial: "하", color: "#8DB87A", name: "하**", loc: "종로구, 서울", stars: "★★★★★", when: "2주 전", text: "정말 편하게 들어주셔서 마음이 가벼워졌어요." }],
      slots: [{ date: "6월 25일 (수)", time: "오후 5:00 ~ 7:00" }, { date: "6월 29일 (일)", time: "오후 2:00 ~ 4:00" }] } },
  {
    id: "hangang-bike", accent: "green", isNew: true, buddy: "도키", title: "한강 자전거 노을", blurb: "노을 명당 아는 신입 버디",
    photo: "/photos/doki.jpg", photoPos: "center 40%", tags: ["자전거", "노을", "한강"], duration: "약 2시간", region: "강남구", price: "3만원",
    detail: { heroTitle: "노을 명당 아는 도키와\n한강 자전거 노을", lede: "한강을 자전거로 달리며 노을 명당에서 사진도 남겨요.", rating: "신규", reviewCount: 0,
      gallery: [{ src: "/photos/doki.jpg", pos: "center 40%" }, { src: "/photos/doki.jpg", pos: "center 25%" }],
      intro: "한강 노을 명당이라면 자신 있는 신입 버디 도키예요. 같이 달려요!",
      meetSpot: { name: "잠원한강공원 자전거 대여소", sub: "서울 강남구 · 정확한 위치는 예약 확정 후 안내드려요" },
      steps: [{ src: "/photos/doki.jpg", pos: "center 40%", title: "대여소에서 만나요", desc: "자전거를 빌리고 코스를 정해요." }, { src: "/photos/doki.jpg", pos: "center 25%", title: "노을 명당까지 라이딩", desc: "한강을 달려 노을 명당에서 사진을 남겨요." }],
      reviews: [],
      slots: [{ date: "6월 21일 (토)", time: "오후 6:00 ~ 8:00" }, { date: "6월 27일 (금)", time: "오후 6:30 ~ 8:30" }] } },
];
