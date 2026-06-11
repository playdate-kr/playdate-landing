"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Flower, Sparkle } from "@/components/Doodles";
import { track } from "@/lib/analytics";

type FormState = {
  name: string;
  phone: string;
  wish: string;
  budget: string;
  adult: boolean;
  consent: boolean;
  nickname: string;
};

type Touched = Partial<Record<keyof FormState, boolean>>;

const BUDGETS = ["2만원대", "3만원대", "4만원대", "5만원 이상", "상관없어요"];

export const BetaApply = () => {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [touched, setTouched] = useState<Touched>({});
  const [f, setF] = useState<FormState>({ name: "", phone: "", wish: "", budget: "", adult: false, consent: false, nickname: "" });
  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setF((p) => ({ ...p, [k]: v }));
  const touch = (k: keyof FormState) => setTouched((p) => ({ ...p, [k]: true }));

  useEffect(() => {
    const h = () => { setOpen(true); setDone(false); track("beta_opened"); };
    window.addEventListener("open-beta", h);
    return () => window.removeEventListener("open-beta", h);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  if (!open) return null;

  const miss = {
    name: !f.name.trim(), phone: !f.phone.trim(), wish: !f.wish.trim(), budget: !f.budget,
    adult: !f.adult, consent: !f.consent,
  };
  const canSubmit = !miss.name && !miss.phone && !miss.wish && !miss.budget && !miss.adult && !miss.consent;

  const Hint = ({ on, text }: { on?: boolean; text: string }) =>
    on ? <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--pink-hot)" }}>{text}</div> : null;

  const Label = ({ children, opt }: { children: ReactNode; opt?: boolean }) => (
    <label style={{ fontSize: 15, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.01em", lineHeight: 1.45 }}>
      {children}{!opt && <span style={{ color: "var(--pink-hot)" }}> *</span>}
    </label>
  );

  const Check = ({ k, children }: { k: "adult" | "consent"; children: ReactNode }) => (
    <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", padding: "15px 16px", background: "var(--paper)", border: (touched[k] && miss[k]) ? "2px solid var(--pink-hot)" : "2px solid var(--ink)", borderRadius: 12 }}>
      <input type="checkbox" checked={f[k]} onChange={(e) => { set(k, e.target.checked); touch(k); }} style={{ width: 22, height: 22, marginTop: 1, accentColor: "var(--pink-hot)", flexShrink: 0 }} />
      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", lineHeight: 1.55 }}>{children}</span>
    </label>
  );

  const submit = async () => {
    if (!canSubmit) {
      setTouched({ name: true, phone: true, wish: true, budget: true, adult: true, consent: true });
      return;
    }
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("beta_submitted");
      setDone(true);
    } catch {
      track("beta_submit_error");
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

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
            <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: "-0.04em", color: "var(--green-deep)", marginBottom: 12 }}>신청 완료! 🎉</h2>
            <p style={{ fontSize: 16, fontWeight: 600, color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 30 }}>운영자가 곧 연락드릴게요.</p>
            <button className="cta" style={{ fontSize: 15, padding: "14px 24px" }} onClick={() => setOpen(false)}><span>닫기</span></button>
          </div>
        ) : (
          <>
            <div style={{ margin: "14px 0 26px" }}>
              <h2 style={{ fontSize: 38, fontWeight: 900, letterSpacing: "-0.04em", color: "var(--ink)", lineHeight: 1.05, marginBottom: 10 }}>어떤 데이트 할래요?</h2>
              <p style={{ fontSize: 15.5, fontWeight: 600, color: "var(--ink-soft)" }}>신청하면 버디를 찾아 연락드려요.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <Label>이름</Label>
                <input className="gb-input" value={f.name} onChange={(e) => set("name", e.target.value)} onBlur={() => touch("name")} placeholder="이름" />
                <Hint on={touched.name && miss.name} text="이름을 적어주세요" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <Label>휴대폰 번호</Label>
                <input className="gb-input" type="tel" inputMode="numeric" value={f.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => touch("phone")} placeholder="010-0000-0000" />
                <Hint on={touched.phone && miss.phone} text="연락받을 번호를 적어주세요" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <Label>하고 싶은 데이트</Label>
                <textarea className="gb-textarea" style={{ minHeight: 150 }} value={f.wish} onChange={(e) => set("wish", e.target.value)} onBlur={() => touch("wish")} placeholder={"언제, 어디서, 뭘 하고 싶은지 편하게 적어주세요 :)\n예) 이번 주 토요일 오후, 성수동에서 같이 산책하고 카페 가실 분 (4만원대)\n아직 막연해도 괜찮아요 — 간단히만 적어주셔도 돼요"} />
                <Hint on={touched.wish && miss.wish} text="한 줄이면 충분해요 — 간단히 적어주세요" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <Label>희망 금액</Label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {BUDGETS.map((b) => (
                    <button key={b} type="button" onClick={() => { set("budget", b); touch("budget"); }} style={{ fontFamily: "inherit", fontSize: 14, fontWeight: 700, color: "var(--ink)", background: f.budget === b ? "var(--pink)" : "var(--paper)", border: "2px solid var(--ink)", borderRadius: 999, padding: "10px 16px", cursor: "pointer", boxShadow: f.budget === b ? "3px 3px 0 var(--ink)" : "none", transition: "all .12s ease" }}>{b}</button>
                  ))}
                </div>
                <Hint on={touched.budget && miss.budget} text="희망 금액을 골라주세요" />
              </div>
              <Check k="adult"><span style={{ whiteSpace: "nowrap" }}>만 19세 이상입니다 <span style={{ color: "var(--pink-hot)", fontWeight: 800 }}>*</span></span></Check>
              <Check k="consent">
                <b style={{ fontWeight: 800 }}>개인정보 수집·이용에 동의합니다 <span style={{ color: "var(--pink-hot)" }}>*</span></b><br />
                <span style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>수집 항목: 이름, 연락처, 신청 내용 / 목적: 베타 서비스 안내 및 매칭 / 보유 기간: 목적 달성 후 파기</span>
              </Check>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <Label opt>(미니 이벤트) 호스트는 버디라고 이름을 정했는데, 게스트는 뭐라고 부르는게 좋을까요? 채택되면 첫 데이트에 커피 2잔 지원해드려요! <span style={{ color: "var(--ink-soft)", fontWeight: 600 }}>(선택)</span></Label>
                <input className="gb-input" value={f.nickname} onChange={(e) => set("nickname", e.target.value)} placeholder="예: 플메, 데이트 버디, 하루친구..." />
              </div>
            </div>

            <button
              className="cta"
              disabled={!canSubmit || submitting}
              onClick={submit}
              style={{ width: "100%", justifyContent: "center", marginTop: 28, fontSize: 17, padding: "17px 22px", opacity: (canSubmit && !submitting) ? 1 : 0.45, cursor: (canSubmit && !submitting) ? "pointer" : "not-allowed", border: "2px solid var(--ink)" }}
            >
              <span style={{ whiteSpace: "nowrap" }}>{submitting ? "신청 중…" : "베타 신청 완료하기"}</span>
              {!submitting && <span className="arrow" style={{ width: 28, height: 28, fontSize: 14 }}>→</span>}
            </button>
            {submitError && <p style={{ fontSize: 12.5, fontWeight: 700, color: "var(--pink-hot)", textAlign: "center", marginTop: 12 }}>제출에 실패했어요. 잠시 후 다시 시도해주세요.</p>}
            {!canSubmit && !submitError && <p style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", textAlign: "center", marginTop: 12 }}>필수 항목을 채우면 신청할 수 있어요</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default BetaApply;
