# Playdate — Buddy 모집 랜딩

시간 단위 데이트 플랫폼 **Playdate**의 Buddy(데이트 코스를 만드는 사람) 모집 랜딩 페이지.
Next.js 14 (App Router) + Tailwind CSS.

## 개발

```bash
npm install
npm run dev   # http://localhost:3000
```

## 빌드

```bash
npm run build
npm start
```

## 구조

```
app/
  layout.tsx                 # 메타데이터, 글로벌 스타일
  page.tsx                   # 9개 섹션 조립
  globals.css                # 디자인 토큰, 폰트, 헬퍼 클래스
  icon.png / apple-icon.png  # 파비콘
components/
  Section.tsx                # 공통 섹션 래퍼 (max 1440)
  Photo.tsx                  # 이미지 컴포넌트
  Doodles.tsx                # 손그림 SVG
  sections/                  # Hero · Concept · Steps · Not · Buddies
                             # Criteria · Rewards · Safety · FinalCTA
content/
  landing.ts                 # 메타데이터 · 구글폼 링크
public/
  brand/wordmark.png         # 로고
  photos/                    # 버디 프로필 이미지
```

## 디자인

- **폰트**: SUIT (가변)
- **컬러**: off-white 베이스 · green `#218A3D`(로고/구조) · pink(CTA/강조)
- **반응형**: 모바일 / 태블릿(`md`) / 데스크탑(`xl`, 1440 기준)

## 운영자 콘텐츠 교체

- `content/landing.ts` — 구글폼 URL, 메타데이터
- `public/photos/` — 버디 프로필 사진
- 섹션별 카피는 `components/sections/*.tsx` 에 인라인
