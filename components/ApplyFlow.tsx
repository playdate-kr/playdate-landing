"use client";

import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { Flower } from "@/components/Doodles";

const AF_STEPS = [
  { title: "기본 정보", desc: "먼저 당신을 알려주세요." },
  { title: "버디 활동", desc: "어디서, 어떤 모습으로 활동할까요?" },
  { title: "데이트 코스", desc: "당신만의 코스를 들려주세요." },
  { title: "거의 다 왔어요", desc: "마지막으로 확인할게요." },
];
const AF_REGIONS = [
  "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구",
  "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구",
  "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구", "기타",
];

type FormState = {
  name: string;
  contact: string;
  region: string;
  regionEtc: string;
  intro: string;
  course: string;
  etc: string;
  consent: boolean;
};

const AfField = ({ label, required, hint, children }: {
  label: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) => (
  <div className="af-field">
    <label className="af-label">{label}{required && <span className="af-req"> *</span>}</label>
    {children}
    {hint && <div style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 600 }}>{hint}</div>}
  </div>
);

export const ApplyFlow = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [f, setF] = useState<FormState>({ name: "", contact: "", region: "", regionEtc: "", intro: "", course: "", etc: "", consent: false });
  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setF((p) => ({ ...p, [k]: v }));

  useEffect(() => {
    const h = () => { setOpen(true); setStep(0); setDone(false); };
    window.addEventListener("open-apply", h);
    return () => window.removeEventListener("open-apply", h);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  if (!open) return null;

  const valid: Array<() => boolean | string> = [
    () => f.name.trim() !== "" && f.contact.trim() !== "",
    () => f.region.trim() !== "" && (f.region !== "기타" || f.regionEtc.trim() !== "") && f.intro.trim() !== "",
    () => f.course.trim() !== "",
    () => f.consent,
  ];
  const canNext = Boolean(valid[step]());
  const close = () => setOpen(false);
  const next = () => { if (step < 3) setStep(step + 1); else setDone(true); };
  const back = () => { if (step > 0) setStep(step - 1); };

  return (
    <div className="af-overlay">
      <div className="mx-auto w-full" style={{ maxWidth: 600, padding: "0 20px 48px", minHeight: "100%", display: "flex", flexDirection: "column" }}>
        <div className="flex items-center justify-between" style={{ padding: "20px 0 18px" }}>
          <img src="/brand/wordmark.png" alt="플레이데이트" style={{ height: 22 }} />
          <button className="af-closebtn" onClick={close} aria-label="닫기">✕</button>
        </div>

        {done ? (
          <div className="flex flex-col items-center justify-center text-center" style={{ flex: 1, padding: "40px 0" }}>
            <div className="bobble" style={{ marginBottom: 8 }}><Flower size={120} color="var(--pink)" center="var(--green)" /></div>
            <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: "-0.04em", color: "var(--green-deep)", lineHeight: 1.05, marginBottom: 16 }}>신청 완료!<br />고마워요 🌷</h2>
            <p style={{ fontSize: 16, fontWeight: 600, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 380, marginBottom: 32 }}>
              {f.name ? f.name + "님, " : ""}소중한 신청 잘 받았어요.<br />운영자가 검토 후 연락드릴게요.
            </p>
            <button className="af-nextbtn" onClick={close}><span>홈으로 돌아가기</span><span style={{ fontSize: 18 }}>→</span></button>
          </div>
        ) : (
          <>
            <div className="flex gap-2" style={{ marginBottom: 26 }}>
              {AF_STEPS.map((s, i) => (
                <div key={i} style={{ flex: 1, height: 6, borderRadius: 999, border: "1.5px solid var(--ink)", background: i <= step ? "var(--pink)" : "var(--paper)", transition: "background .2s ease" }} />
              ))}
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--pink-hot)", letterSpacing: "0.04em", marginBottom: 8 }}>STEP {step + 1} / 4</div>
              <h2 style={{ fontSize: 34, fontWeight: 900, letterSpacing: "-0.04em", color: "var(--ink)", lineHeight: 1.05, marginBottom: 8 }}>{AF_STEPS[step].title}</h2>
              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--ink-soft)" }}>{AF_STEPS[step].desc}</p>
            </div>

            <div style={{ flex: 1 }}>
              {step === 0 && (
                <>
                  <AfField label="이름" required>
                    <input className="af-input" value={f.name} onChange={(e) => set("name", e.target.value)} placeholder="실명 또는 활동명" />
                  </AfField>
                  <AfField label="연락처" required hint="신청 결과를 안내할 핸드폰 번호예요.">
                    <input className="af-input" value={f.contact} onChange={(e) => set("contact", e.target.value)} placeholder="010-0000-0000" />
                  </AfField>
                </>
              )}
              {step === 1 && (
                <>
                  <AfField label="희망 활동 지역" required hint="주로 활동하고 싶은 동네를 골라주세요.">
                    <div className="flex flex-wrap gap-2.5">
                      {AF_REGIONS.map((r) => (
                        <button key={r} type="button" className="af-chip" data-on={f.region === r} onClick={() => set("region", r)}>{r}</button>
                      ))}
                    </div>
                    {f.region === "기타" && (
                      <input className="af-input" style={{ marginTop: 12 }} value={f.regionEtc} onChange={(e) => set("regionEtc", e.target.value)} placeholder="활동 희망 지역을 직접 입력해주세요" autoFocus />
                    )}
                  </AfField>
                  <AfField label="1줄 소개" required hint="게스트에게 보일 한 문장이에요.">
                    <input className="af-input" value={f.intro} onChange={(e) => set("intro", e.target.value)} placeholder="예: 저랑 성수동에서 포켓몬 잡고 산책해요" />
                  </AfField>
                </>
              )}
              {step === 2 && (
                <AfField label="데이트 코스" required hint="어떤 장소를 어떻게 함께할지 자유롭게 적어주세요.">
                  <textarea className="af-textarea" value={f.course} onChange={(e) => set("course", e.target.value)} placeholder={"예) 성수동 빈티지숍 세 곳을 돌고, 골목 안쪽 카페에서 커피 한 잔.\n2~3시간 정도, 천천히 걸으며 동네 이야기를 들려드려요."} />
                </AfField>
              )}
              {step === 3 && (
                <>
                  <AfField label="건의사항" hint="선택 사항이에요. 궁금한 점이나 하고 싶은 말을 자유롭게.">
                    <textarea className="af-textarea" style={{ minHeight: 110 }} value={f.etc} onChange={(e) => set("etc", e.target.value)} placeholder="자유롭게 적어주세요 (선택)" />
                  </AfField>
                  <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", padding: "16px", background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 12, marginTop: 6 }}>
                    <input type="checkbox" checked={f.consent} onChange={(e) => set("consent", e.target.checked)} style={{ width: 22, height: 22, marginTop: 1, accentColor: "var(--pink-hot)", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", lineHeight: 1.55 }}>
                      <b style={{ fontWeight: 800 }}>개인정보 수집·이용에 동의해요. </b><span className="af-req">*</span><br />
                      <span style={{ color: "var(--ink-soft)" }}>이름·연락처는 버디 선발 및 결과 안내 목적으로만 사용되며, 선발 절차 종료 후 파기됩니다.</span>
                    </span>
                  </label>
                </>
              )}
            </div>

            <div className="flex items-center justify-between" style={{ marginTop: 28, gap: 16 }}>
              {step > 0 ? <button className="af-backbtn" onClick={back}>← 이전</button> : <span />}
              <button className="af-nextbtn" onClick={next} disabled={!canNext}>
                <span>{step < 3 ? "다음" : "신청서 제출하기"}</span>
                <span style={{ fontSize: 18 }}>→</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplyFlow;
