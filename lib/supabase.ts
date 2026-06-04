import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * 서버 전용 Supabase 클라이언트 (service_role 키).
 * - service_role 키는 RLS를 우회하므로 절대 클라이언트에 노출 금지 (NEXT_PUBLIC_ 아님).
 * - env 미설정 시 null 반환 → 호출부에서 503 처리.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
