const TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

// mixpanel-browser를 지연 로딩(dynamic import)해서 메인 번들에서 분리.
// → 초기 로딩 JS가 가벼워지고, 마운트 후 백그라운드로만 SDK를 받음.
type MP = Awaited<typeof import("mixpanel-browser")>["default"];
let mp: MP | null = null;
let loadPromise: Promise<void> | null = null;

function ensureLoaded(): Promise<void> {
  if (!TOKEN || typeof window === "undefined") return Promise.resolve();
  if (!loadPromise) {
    loadPromise = import("mixpanel-browser")
      .then((m) => {
        m.default.init(TOKEN, {
          autocapture: false,
          track_pageview: false,
          persistence: "localStorage",
        } as unknown as Parameters<typeof m.default.init>[1]);
        mp = m.default;
      })
      .catch(() => {
        /* no-op */
      });
  }
  return loadPromise;
}

/** SDK 로딩 시작 (마운트 시 호출). 토큰 없으면 no-op. */
export function initAnalytics(): void {
  void ensureLoaded();
}

/** 이벤트 전송. SDK 로딩 완료 후 전송. 토큰 없으면 no-op. props에 개인정보 금지. */
export function track(event: string, props?: Record<string, unknown>): void {
  if (!TOKEN || typeof window === "undefined") return;
  void ensureLoaded().then(() => {
    try {
      mp?.track(event, props);
    } catch {
      /* no-op */
    }
  });
}
