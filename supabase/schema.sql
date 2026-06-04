-- 플레이데이트 — 버디 신청서 테이블
-- Supabase 대시보드 → SQL Editor 에 붙여넣고 Run 하세요.

create table if not exists public.applications (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,          -- 이름(실명/활동명)
  contact     text not null,          -- 연락처(핸드폰)
  region      text not null,          -- 희망 활동 지역(구)
  region_etc  text,                   -- '기타' 선택 시 직접 입력
  intro       text not null,          -- 1줄 소개
  course      text not null,          -- 데이트 코스
  etc         text,                   -- 건의사항(선택)
  consent     boolean not null default false  -- 개인정보 동의(필수)
);

-- RLS 활성화 + 정책 없음
-- → 공개(anon) 키로는 읽기/쓰기 모두 불가.
-- → 서버 라우트(service_role 키)만 insert. 조회는 Supabase 대시보드(Table Editor)에서.
alter table public.applications enable row level security;
