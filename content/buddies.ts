/**
 * Playdate 버디 카탈로그 시드 데이터 (1단계 — 코드 시드)
 *
 * 운영자 편집 가이드:
 * - 버디 추가: BUDDIES 배열에 항목 추가 + public/photos/ 에 사진 넣기 + COURSES에 그 버디의 코스 추가.
 * - id는 URL 슬러그가 됩니다 (/buddies/<id>). 영문 소문자 권장.
 * - 가격(price)은 숫자(원). 화면에는 "4만원"처럼 포맷됩니다.
 * - buddies·courses는 아직 DB가 아니라 이 파일이 원본입니다. 신청(requests)만 Supabase에 저장돼요.
 */

export type Buddy = {
  id: string;
  name: string;
  nameColor?: string;
  photos: string[];   // 첫 장이 대표 사진
  pos?: string;       // 사진 object-position (얼굴 프레이밍)
  oneLiner: string;   // 카드용 한 줄 소개
  intro: string;      // 상세용 자기소개
  region: string;
  availability: string;
  rating: string;
  reviews: number;
  trustBadge: boolean;
  tags: string[];
  isNew?: boolean;
};

export type Course = {
  id: string;
  buddyId: string;
  title: string;
  duration: string;
  price: number;      // 원
  desc: string;
};

export type Review = {
  buddyId: string;
  by: string;
  course: string;
  text: string;
};

export const BUDDIES: Buddy[] = [
  {
    id: "ian",
    name: "이안",
    nameColor: "var(--green-deep)",
    photos: ["/photos/ian.jpg", "/photos/ian-4.jpeg", "/photos/ian-5.jpeg"],
    pos: "50% 30%",
    oneLiner: "성수동 10년차, 포켓몬부터 방탈출까지 같이 놀아요",
    intro: "안녕하세요, 성수동에서 10년 산 이안이에요. 포켓몬고 레이드부터 방탈출·코인노래방까지 — 같이 있으면 시간 가는 줄 모르는 하루를 만들어드려요. 낯가림 있으셔도 편하게 리드할게요 :)",
    region: "성동구",
    availability: "평일 저녁 · 주말 종일",
    rating: "4.9",
    reviews: 38,
    trustBadge: true,
    tags: ["포켓몬", "방탈출", "코인노래방"],
  },
  {
    id: "sid",
    name: "시드",
    nameColor: "var(--pink-hot)",
    photos: ["/photos/sid.jpg"],
    pos: "50% 28%",
    oneLiner: "서촌 라떼 맛집에서 편하게 이야기 나눠요",
    intro: "라떼 한 잔 앞에 두고 도란도란 이야기 나누는 걸 제일 좋아해요. 연애든 일상 고민이든, 판단 없이 들어주는 하루 친구가 되어드릴게요. 서촌·북촌 골목은 제가 제일 잘 알아요.",
    region: "종로구",
    availability: "주말 오후",
    rating: "4.8",
    reviews: 52,
    trustBadge: true,
    tags: ["연애 고민", "라떼 맛집", "산책"],
  },
  {
    id: "doki",
    name: "도키",
    nameColor: "var(--green-deep)",
    photos: ["/photos/doki.jpg"],
    pos: "50% 22%",
    oneLiner: "동네 한 바퀴 돌며 인생샷 찍어드려요",
    intro: "사진 찍는 걸 좋아하는 신입 버디예요. 동네를 천천히 걸으며 인생샷도 건지고, 부담 없이 즐거운 시간 보내요. 신규라 합리적인 가격으로 모셔요!",
    region: "강남구",
    availability: "평일 낮 · 주말 오전",
    rating: "5.0",
    reviews: 6,
    trustBadge: true,
    tags: ["사진", "산책", "벚꽃"],
    isNew: true,
  },
];

export const COURSES: Course[] = [
  // 이안
  { id: "ian-pokemon", buddyId: "ian", title: "성수 포켓몬 산책", duration: "약 2시간", price: 40000, desc: "성수동 골목을 함께 걸으며 포켓몬고 레이드를 돌고, 숨은 골목 카페에서 쉬어가요." },
  { id: "ian-escape", buddyId: "ian", title: "방탈출 + 코인노래방", duration: "약 3시간", price: 60000, desc: "난이도별 방탈출 한 판을 깨고, 코인노래방에서 신나게 마무리하는 하루." },
  // 시드
  { id: "sid-cafe", buddyId: "sid", title: "서촌 라떼 투어", duration: "약 2시간", price: 40000, desc: "서촌의 라떼 맛집 세 곳을 돌며 천천히 이야기 나누는 코스." },
  { id: "sid-talk", buddyId: "sid", title: "연애 고민 상담 산책", duration: "약 2시간", price: 45000, desc: "북촌 한옥길을 걸으며 편하게 연애·일상 고민을 들어드려요." },
  // 도키
  { id: "doki-spring", buddyId: "doki", title: "벚꽃 봄 산책 & 사진", duration: "약 1.5시간", price: 20000, desc: "동네 벚꽃길을 천천히 걸으며 인생샷을 찍어드려요." },
  { id: "doki-hangang", buddyId: "doki", title: "한강 자전거 노을", duration: "약 2시간", price: 30000, desc: "한강에서 자전거를 타고 노을 지는 시간까지 함께해요." },
];

export const REVIEWS: Review[] = [
  { buddyId: "ian", by: "ㅈ**", course: "성수 포켓몬 산책", text: "혼자선 못 갈 곳들을 편하게 다녔어요. 대화도 잘 통하고 시간 순삭!" },
  { buddyId: "ian", by: "민**", course: "방탈출 + 코인노래방", text: "방탈출 호흡 진짜 잘 맞아요 ㅋㅋ 코노까지 완벽한 하루였습니다." },
  { buddyId: "sid", by: "수**", course: "서촌 라떼 투어", text: "카페 취향 저격… 고민 상담도 편하게 해주셔서 마음이 가벼워졌어요." },
  { buddyId: "sid", by: "현**", course: "연애 고민 상담 산책", text: "판단 없이 들어주셔서 좋았어요. 산책 코스도 예뻤습니다." },
  { buddyId: "doki", by: "유**", course: "벚꽃 봄 산책 & 사진", text: "사진 진짜 잘 찍어주세요! 프로필 사진 싹 다 바꿨어요 :)" },
];

// ── helpers ──────────────────────────────────────────────
export const getBuddy = (id: string): Buddy | undefined => BUDDIES.find((b) => b.id === id);
export const coursesOf = (buddyId: string): Course[] => COURSES.filter((c) => c.buddyId === buddyId);
export const getCourse = (id: string): Course | undefined => COURSES.find((c) => c.id === id);
export const reviewsOf = (buddyId: string): Review[] => REVIEWS.filter((r) => r.buddyId === buddyId);
export const minPrice = (buddyId: string): number => {
  const ps = coursesOf(buddyId).map((c) => c.price);
  return ps.length ? Math.min(...ps) : 0;
};
/** 40000 → "4만원" */
export const won = (n: number): string => {
  if (n >= 10000 && n % 10000 === 0) return `${n / 10000}만원`;
  if (n >= 10000) return `${Math.floor(n / 10000)}만 ${(n % 10000).toLocaleString()}원`;
  return `${n.toLocaleString()}원`;
};
