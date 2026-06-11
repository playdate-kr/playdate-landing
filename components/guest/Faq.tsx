"use client";

import { useState } from "react";
import { Section, Kicker } from "@/components/guest/GuestSection";

const FAQ_ITEMS = [
  { q: "데이팅 서비스인가요?", a: "아니에요, 맘에 드는 버디와 친구처럼 즐거운 시간을 보내는 서비스입니다." },
  { q: "하루 친구가 뭐예요?", a: "렌탈 친구와 비슷하게, 내가 원하는 취미를 내가 원하는 시간에 함께 해주는 친구입니다." },
  { q: "꼭 1:1로 만나야 하나요?", a: "네, 현재는 1:1 만남만 운영하고 있습니다." },
  { q: "버디는 누구나 할 수 있나요?", a: "좋아하는 취미가 있고, 처음 만난 사람과 즐거운 시간을 보낼 매력이 있는 분이라면 누구든 버디에 등록할 수 있습니다. (단, 인증 과정 필수)" },
  { q: "미성년자도 참여가 가능한가요?", a: "아니요, 현재는 안전상의 이유로 성인만 참여 가능합니다." },
];

export const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <Section label="05-faq" pad="96px 80px">
      <div style={{ marginBottom: 20 }}><Kicker index="05" label="자주 묻는 질문" /></div>
      <h2 style={{ fontSize: 64, fontWeight: 900, lineHeight: 0.98, letterSpacing: "-0.04em", color: "var(--ink)", marginBottom: 48 }}>
        궁금한게 <span style={{ color: "var(--green-deep)" }}>있어요.</span>
      </h2>
      <div style={{ maxWidth: 880, borderBottom: "1.5px solid var(--ink)" }}>
        {FAQ_ITEMS.map((it, i) => (
          <div key={i} style={{ borderTop: "1.5px solid var(--ink)" }}>
            <button className="faq-q" data-open={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{it.q}</span><span className="ico">+</span>
            </button>
            <div className="faq-a" style={{ maxHeight: open === i ? 200 : 0 }}>
              <p>{it.a}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Faq;
