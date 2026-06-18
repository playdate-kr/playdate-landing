"use client";

import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { Flower } from "@/components/Doodles";
import { track } from "@/lib/analytics";

const AF_REGIONS = [
  "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구",
  "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구",
  "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구", "기타",
];

type FormState = {
  name: string;
  contact: string;
  regions: string[];
  regionEtc: string;
  hobby: string;
  consent: boolean;
};

const EMPTY: FormState = { name: "", contact: "", regions: [], regionEtc: "", hobby: "", consent: false };

const AfField = ({ label, required, hint, reveal, children }: {
  label: string;
  required?: boolean;
  hint?: string;
  reveal?: boolean;
  children: ReactNode;
}) => (
  <div className={reveal ? "af-field af-reveal" : "af-field"}>
    <label className="af-label">{label}{required && <span className="af-req"> *</span>}</label>
    {children}
    {hint && <div style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 600 }}>{hint}</div>}
  </div>
);

export const ApplyFlow = () => {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [f, setF] = useState<FormState>(EMPTY);
  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setF((p) => ({ ...p, [k]: v }));

  useEffect(() => {
    const h = () => { setOpen(true); setDone(false); setSubmitError(false); setF(EMPTY); track("apply_opened"); };
    window.addEventListener("open-apply", h);
    return () => window.removeEventListener("open-apply", h);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  if (!open) return null;

  // 순차 노출: 한 항목을 채우면 다음 항목이 나타남
  const regionOk = f.regions.length > 0 && (!f.regions.includes("기타") || f.regionEtc.trim() !== "");
  const showContact = f.name.trim() !== "";
  const showRegion = showContact && f.contact.trim() !== "";
  const showHobby = showRegion && regionOk;
  const showConsent = showHobby && f.hobby.trim() !== "";
  const canSubmit = showConsent && f.consent;

  const close = () => setOpen(false);
  const submit = async () => {
    if (!canSubmit) return;
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("apply_submitted");
      setDone(true);
    } catch {
      track("apply_submit_error");
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="af-overlay">
      <style>{"@keyframes afReveal{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}.af-reveal{animation:afReveal .34s ease both}"}</style>
      <div className="mx-auto w-full" style={{ maxWidth: 600, padding: "0 20px 48px", minHeight: "100%", display: "flex", flexDirection: "column" }}>
        <div className="flex items-center justify-between" style={{ padding: "20px 0 18px" }}>
          <img src="/brand/wordmark.png" alt="플레이데이트" style={{ height: 22 }} />
          <button className="af-closebtn" onClick={close} aria-label="닫기">✕</button>
        </div>

        {done ? (
          <div className="flex flex-col items-center justify-center text-center" style={{ flex: 1, padding: "40px 0" }}>
            <div className="bobble" style={{ marginBottom: 8 }}><Flower size={120} color="var(--pink)" center="var(--green)" /></div>
            <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: "-0.04em", color: "var(--green-deep)", lineHeight: 1.05, marginBottom: 16 }}>등록 완료!<br />고마워요 🌷</h2>
            <p style={{ fontSize: 16, fontWeight: 600, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 380, marginBottom: 32 }}>
              {f.name ? f.name + "님, " : ""}소중한 신청 잘 받았어요.<br />운영자가 검토 후 연락드릴게요.
            </p>
            <button className="af-nextbtn" onClick={close}><span>홈으로 돌아가기</span><span style={{ fontSize: 18 }}>→</span></button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 34, fontWeight: 900, letterSpacing: "-0.04em", color: "var(--ink)", lineHeight: 1.05, marginBottom: 8 }}>버디 등록하기</h2>
              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--ink-soft)" }}>1분이면 충분해요. 하나씩 알려주세요 🙂</p>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
              <AfField label="이름" required>
                <input className="af-input" value={f.name} onChange={(e) => set("name", e.target.value)} placeholder="실명 또는 활동명" autoFocus />
              </AfField>

              {showContact && (
                <AfField label="연락처" required hint="신청 결과를 안내할 핸드폰 번호예요." reveal>
                  <input className="af-input" type="tel" inputMode="numeric" value={f.contact} onChange={(e) => set("contact", e.target.value)} placeholder="010-0000-0000" />
                </AfField>
              )}

              {showRegion && (
                <AfField label="희망 활동 지역" required hint="여러 개 선택할 수 있어요." reveal>
                  <div className="flex flex-wrap gap-2.5">
                    {AF_REGIONS.map((r) => (
                      <button key={r} type="button" className="af-chip" data-on={f.regions.includes(r)} onClick={() => setF((p) => ({ ...p, regions: p.regions.includes(r) ? p.regions.filter((x) => x !== r) : [...p.regions, r] }))}>{r}</button>
                    ))}
                  </div>
                  {f.regions.includes("기타") && (
                    <input className="af-input" style={{ marginTop: 12 }} value={f.regionEtc} onChange={(e) => set("regionEtc", e.target.value)} placeholder="활동 희망 지역을 직접 입력해주세요" autoFocus />
                  )}
                </AfField>
              )}

              {showHobby && (
                <AfField label="희망 취미" required hint="어디서 뭘 하고 싶은지 한 줄이면 충분해요." reveal>
                  <input className="af-input" value={f.hobby} onChange={(e) => set("hobby", e.target.value)} placeholder="예) 건대에서 방탈출 해요 · 서촌에서 댕댕런 뛰어요" autoFocus />
                </AfField>
              )}

              {showConsent && (
                <label className="af-reveal" style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", padding: "16px", background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 12, marginTop: 12 }}>
                  <input type="checkbox" checked={f.consent} onChange={(e) => set("consent", e.target.checked)} style={{ width: 22, height: 22, marginTop: 1, accentColor: "var(--pink-hot)", flexShrink: 0 }} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", lineHeight: 1.55 }}>
                    <b style={{ fontWeight: 800 }}>개인정보 수집·이용에 동의해요. </b><span className="af-req">*</span><br />
                    <span style={{ color: "var(--ink-soft)" }}>이름·연락처는 버디 선발 및 결과 안내 목적으로만 사용되며, 선발 절차 종료 후 파기됩니다.</span>
                  </span>
                </label>
              )}
            </div>

            {submitError && (
              <p style={{ marginTop: 18, fontSize: 14, fontWeight: 700, color: "var(--pink-hot)", textAlign: "center" }}>
                제출에 실패했어요. 잠시 후 다시 시도해주세요.
              </p>
            )}
            <button
              className="af-nextbtn"
              onClick={submit}
              disabled={!canSubmit || submitting}
              style={{ width: "100%", justifyContent: "center", marginTop: submitError ? 12 : 28, opacity: canSubmit && !submitting ? 1 : 0.45, cursor: canSubmit && !submitting ? "pointer" : "not-allowed" }}
            >
              <span>{submitting ? "제출 중…" : "버디 등록하기"}</span>
              {!submitting && <span style={{ fontSize: 18 }}>→</span>}
            </button>
            {!canSubmit && !submitError && (
              <p style={{ marginTop: 12, fontSize: 12.5, fontWeight: 600, color: "var(--ink-soft)", textAlign: "center" }}>모든 항목을 채우면 등록할 수 있어요</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ApplyFlow;
