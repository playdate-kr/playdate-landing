-- Playdate Guest(게스트) 베타 신청 테이블
-- Supabase 대시보드 → SQL Editor에 붙여넣고 RUN 하세요.
-- (버디 신청은 기존 public.applications 테이블 사용)

create table if not exists public.guest_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  wish text not null,        -- 하고 싶은 데이트
  budget text not null,      -- 희망 금액 (칩 선택값)
  nickname text,             -- (선택) 게스트 호칭 공모
  adult boolean not null default false,
  consent boolean not null default false
);

-- RLS 활성화 (정책 없음 = service_role 키 / 대시보드에서만 접근 가능)
alter table public.guest_applications enable row level security;
