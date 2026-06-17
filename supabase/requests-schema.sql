-- Playdate 코스 신청(requests) 테이블 — 1단계 제품
-- Supabase 대시보드 → SQL Editor에 붙여넣고 RUN 하세요.
-- (buddies·courses는 코드 시드, 신청만 여기에 저장. course_id로 버디까지 추적됨)

create table if not exists public.requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  applicant_name text not null,
  contact text not null,
  course_id text not null,          -- content/buddies.ts 의 코스 id
  memo text,                         -- 원하는 데이트 메모 (자유 입력)
  adult boolean not null default false,
  consent boolean not null default false,
  status text not null default '신청됨'
);

-- RLS 활성화 (정책 없음 = service_role 키 / 대시보드에서만 접근)
alter table public.requests enable row level security;
