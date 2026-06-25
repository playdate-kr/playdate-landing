"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";
import { Flower, Sparkle } from "@/components/Doodles";
import { track } from "@/lib/analytics";

type Ctx = { courseId: string; buddyName: string; courseTitle: string };
type FormState = { name: string; phone: string; memo: string; adult: boolean; consent: boolean };
type Touched = Partial<Record<keyof FormState, boolean>>;

const EMPTY: FormState = { name: "", phone: "", memo: "", adult: false, consent: false };

/** 코스 카드에 들어가는 "이 코스로 신청하기" 버튼 — 코스 컨텍스트를 담아 모달을 연다. */
export function CourseApplyButton({
  courseId,
  buddyName,
  courseTitle,
  style,
}: {
  courseId: string;
  buddyName: string;
  courseTitle: string;
  style?: CSSProperties;
}) {
  return (
    <button
      type="button"
      className="cta"
      onClick={() => {
        track("course_apply_click", { courseId, page: "guest" });
        window.dispatchEvent(new CustomEvent("open-request", { detail: { courseId, buddyName, courseTitle } }));
      }}
      style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "13px 18px", ...style }}
    >
      <span>이 코스로 신청하기</span>
      <span className="arrow" style={{ width: 26, height: 26, fontSize: 14 }}>→</span>
    </button>
  );
}

/** 신청 폼 모달 — 상세 페이지에 한 번 마운트. open-request 이벤트로 열림. */
export function CourseApply() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [ctx, setCtx] = useState<Ctx | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [touched, setTouched] = useState<Touched>({});
  const [f, setF] = useState<FormState>(EMPTY);
  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setF((p) => ({ ...p, [k]: v }));
  const touch = (k: keyof FormState) => setTouched((p) => ({ ...p, [k]: true }));

  useEffect(() => {
    const h = (e: Event) => {
      const d = (e as CustomEvent<Ctx>).detail;
      setCtx(d);
      setF(EMPTY);
      setTouched({});
      setDone(false);
      setSubmitError(false);
      setOpen(true);
      track("request_opened", { courseId: d?.courseId, page: "guest" });
    };
    window.addEventListener("open-request", h);
    return () => window.removeEventListener("open-request", h);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  if (!open || !ctx) return null;

  const miss = { name: !f.name.trim(), phone: !f.phone.trim(), adult: !f.adult, consent: !f.consent };
  const canSubmit = !miss.name && !miss.phone && !miss.adult && !miss.consent;

  const submit = async () => {
    if (!canSubmit) {
      setTouched({ name: true, phone: true, adult: true, consent: true });
      return;
    }
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: f.name, contact: f.phone, courseId: ctx.courseId, memo: f.memo, adult: f.adult, consent: f.consent }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("request_submitted", { courseId: ctx.courseId, page: "guest" });
      setDone(true);
    } catch {
      track("request_submit_error", { courseId: ctx.courseId, page: "guest" });
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const Hint = ({ on, text }: { on?: boolean; text: string }) =>
    on ? <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--pink-hot)" }}>{text}</div> : null;

  const Check = ({ k, children }: { k: "adult" | "consent"; children: ReactNode }) => (
    <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", padding: "15px 16px", background: "var(--paper)", border: touched[k] && miss[k] ? "2px solid var(--pink-hot)" : "2px solid var(--ink)", borderRadius: 12 }}>
      <input type="checkbox" checked={f[k]} onChange={(e) => { set(k, e.target.checked); touch(k); }} style={{ width: 22, height: 22, marginTop: 1, accentColor: "var(--pink-hot)", flexShrink: 0 }} />
      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", lineHeight: 1.55 }}>{children}</span>
    </label>
  );

  return (
    <div className="af-overlay" style={{ position: "fixed", inset: 0, zIndex: 200, background: "var(--bg)", overflowY: "auto", WebkitOverflowScrolling: "touch", wordBreak: "keep-all" }}>
      <div style={{ margin: "0 auto", width: "100%", maxWidth: 560, padding: "0 20px 56px", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0 14px" }}>
          <img src="/brand/wordmark.png" alt="플레이데이트" style={{ height: 22 }} />
          <button onClick={() => setOpen(false)} aria-label="닫기" style={{ background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 999, width: 40, height: 40, fontSize: 17, cursor: "pointer", color: "var(--ink)" }}>✕</button>
        </div>

        {done ? (
          <div style={{ textAlign: "center", padding: "64px 0 40px" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 14, marginBottom: 10 }}>
              <Sparkle size={30} color="var(--pink-hot)" />
              <div className="bobble" style={{ display: "inline-block" }}><Flower size={104} color="var(--pink)" center="var(--green)" /></div>
              <Sparkle size={22} color="var(--green-soft)" />
            </div>
            <h2 style={{ fontSize: 38, fontWeight: 900, letterSpacing: "-0.04em", color: "var(--green-deep)", marginBottom: 12, lineHeight: 1.1 }}>신청 완료! 🎉</h2>
            <p style={{ fontSize: 16, fontWeight: 600, color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 30 }}>운영자가 24시간 안에 연락드려요.</p>
            <button className="cta" style={{ fontSize: 15, padding: "14px 24px" }} onClick={() => setOpen(false)}><span>닫기</span></button>
          </div>
        ) : (
          <>
            <div style={{ margin: "14px 0 22px" }}>
              <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: "-0.04em", color: "var(--ink)", lineHeight: 1.1, marginBottom: 14 }}>이 코스로 신청해요</h2>
              {/* 선택한 버디·코스 (미리 채워짐) */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "13px 16px", background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 12, boxShadow: "3px 3px 0 var(--ink)" }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--pink-hot)", flexShrink: 0 }} />
                <span style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.01em" }}>{ctx.buddyName}</span>
                <span style={{ color: "var(--ink-soft)", opacity: 0.5 }}>·</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: "var(--green-deep)" }}>{ctx.courseTitle}</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <label style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)" }}>이름<span style={{ color: "var(--pink-hot)" }}> *</span></label>
                <input className="gb-input" value={f.name} onChange={(e) => set("name", e.target.value)} onBlur={() => touch("name")} placeholder="이름" />
                <Hint on={touched.name && miss.name} text="이름을 적어주세요" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <label style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)" }}>휴대폰 번호<span style={{ color: "var(--pink-hot)" }}> *</span></label>
                <input className="gb-input" type="tel" inputMode="numeric" value={f.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => touch("phone")} placeholder="010-0000-0000" />
                <Hint on={touched.phone && miss.phone} text="연락받을 번호를 적어주세요" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <label style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)" }}>문의사항 <span style={{ color: "var(--ink-soft)", fontWeight: 600 }}>(선택)</span></label>
                <textarea className="gb-textarea" value={f.memo} onChange={(e) => set("memo", e.target.value)} placeholder={"언제쯤 만나고 싶은지, 원하는 점이 있으면 자유롭게 적어주세요 :)\n예) 이번 주 토요일 오후가 좋아요"} />
              </div>
              <Check k="adult"><span style={{ whiteSpace: "nowrap" }}>만 19세 이상입니다 <span style={{ color: "var(--pink-hot)", fontWeight: 800 }}>*</span></span></Check>
              <Check k="consent">
                <b style={{ fontWeight: 800 }}>개인정보 수집·이용에 동의합니다 <span style={{ color: "var(--pink-hot)" }}>*</span></b><br />
                <span style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>수집 항목: 이름, 연락처, 신청 내용 / 목적: 매칭 및 안내 / 보유 기간: 목적 달성 후 파기</span>
              </Check>
            </div>

            <button
              className="cta"
              disabled={!canSubmit || submitting}
              onClick={submit}
              style={{ width: "100%", justifyContent: "center", marginTop: 26, fontSize: 17, padding: "17px 22px", opacity: canSubmit && !submitting ? 1 : 0.45, cursor: canSubmit && !submitting ? "pointer" : "not-allowed", border: "2px solid var(--ink)" }}
            >
              <span style={{ whiteSpace: "nowrap" }}>{submitting ? "신청 중…" : "신청 완료하기"}</span>
              {!submitting && <span className="arrow" style={{ width: 28, height: 28, fontSize: 14 }}>→</span>}
            </button>
            {submitError && <p style={{ fontSize: 12.5, fontWeight: 700, color: "var(--pink-hot)", textAlign: "center", marginTop: 12 }}>제출에 실패했어요. 잠시 후 다시 시도해주세요.</p>}
            {!submitError && <p style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", textAlign: "center", marginTop: 12 }}>매니저가 24시간 안에 문자로 연락드려요</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default CourseApply;
