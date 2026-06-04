import mixpanel from "mixpanel-browser";

const TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
let started = false;

/**
 * Mixpanel 초기화. 토큰이 없으면(미설정) 아무 동작도 하지 않음(no-op).
 * 개인정보 보호: autocapture/페이지뷰 자동수집 끔 → 수동 track()만 전송.
 * (이름·연락처 등 폼 입력값은 절대 Mixpanel로 보내지 않음)
 */
export function initAnalytics(): void {
  if (started || !TOKEN || typeof window === "undefined") return;
  mixpanel.init(TOKEN, {
    autocapture: false,
    track_pageview: false,
    persistence: "localStorage",
  } as unknown as Parameters<typeof mixpanel.init>[1]);
  started = true;
}

/** 이벤트 전송. 토큰 없으면 no-op. props에는 개인정보를 넣지 말 것. */
export function track(event: string, props?: Record<string, unknown>): void {
  if (!TOKEN || typeof window === "undefined") return;
  if (!started) initAnalytics();
  try {
    mixpanel.track(event, props);
  } catch {
    /* no-op */
  }
}
