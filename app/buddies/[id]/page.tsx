"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { COURSES } from "@/content/courses";

/* 줄바꿈(\n) 텍스트 → <br/> */
const Multiline = ({ text }: { text: string }) =>
  <>{text.split("\n").map((l, i) => <span key={i}>{i > 0 && <br />}{l}</span>)}</>;

export default function CourseDetail() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const course = COURSES.find((c) => c.id === id);
  const [active, setActive] = useState(0);

  if (!course) return notFound();
  const d = course.detail;
  const conj = ["시드", "도키"].includes(course.buddy) ? "님" : "님";

  return (
    <div className="bdetail">
      <nav className="bd-nav"><div className="in">
        <Link href="/buddies"><img className="wm" src="/brand/wordmark.png" alt="플레이데이트" /></Link>
        <div className="links"><Link href="/buddies">버디 둘러보기</Link><Link href="/">버디로 활동하기</Link></div>
      </div></nav>

      <div className="bd-page">
        <div className="bd-crumb">
          <Link href="/buddies">버디 둘러보기</Link> &nbsp;›&nbsp; {course.region} &nbsp;›&nbsp; {course.title}
        </div>

        {/* HERO */}
        <div className="bd-hero">
          <div className="bd-gallery">
            <div className="bd-gmain" style={{ backgroundImage: `url(${d.gallery[active].src})`, backgroundPosition: d.gallery[active].pos }}>
              <span className="more">＋ 사진 모두 보기</span>
            </div>
            <div className="bd-filmstrip">
              {d.gallery.map((g, i) => (
                <button key={i} className="t" data-on={active === i} onClick={() => setActive(i)}
                  style={{ backgroundImage: `url(${g.src})`, backgroundPosition: g.pos }} aria-label={`사진 ${i + 1}`} />
              ))}
            </div>
          </div>

          <div className="bd-info">
            <h1><Multiline text={d.heroTitle} /></h1>
            <p className="lede">{d.lede}</p>
            <div className="rate">
              {d.reviewCount > 0
                ? <><span className="star">★</span> {d.rating} <span className="dot">·</span> <span>후기 {d.reviewCount}개</span></>
                : <span className="mut">신규 코스</span>}
              <span className="dot">·</span> <span className="mut">{course.region}</span> <span className="dot">·</span> <span className="mut">하루 친구 체험</span>
            </div>
            <div className="acts">
              <button className="iconbtn" aria-label="공유"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg></button>
              <button className="iconbtn" aria-label="저장"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg></button>
            </div>
            <div className="inforow">
              <div className="av" style={{ backgroundImage: `url(${course.photo})` }} />
              <div><div className="t1">버디: {course.buddy} 님</div><div className="t2">하루 친구</div></div>
            </div>
            <div className="inforow">
              <div className="pin"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--bc-green-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div>
              <div><div className="t1">{d.meetSpot.name}</div><div className="t2">{course.region}, 서울</div></div>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="bd-main">
          <div className="bd-col-l">
            {/* 버디 소개 */}
            <section className="bd-block">
              <h2>버디 소개</h2>
              <div className="bd-host">
                <p className="hi">
                  <b style={{ fontWeight: 900 }}>{course.buddy}</b> · 하루 친구 · <span style={{ color: "var(--bc-green-deep)", fontWeight: 800 }}>✓ 신원 확인 완료</span><br /><br />
                  {d.intro}
                </p>
                <button className="bd-msgbtn">{course.buddy} {conj}에게 메시지 보내기</button>
                <p className="safe">안전한 만남을 위해 항상 플레이데이트를 통해 소통하고 결제하세요.</p>
              </div>
            </section>

            {/* 체험 내용 */}
            <section className="bd-block">
              <h2>체험 내용</h2>
              <div className="bd-steps">
                {d.steps.map((s, i) => (
                  <div key={i} className="bd-step">
                    <div className="ph" style={{ backgroundImage: `url(${s.src})`, backgroundPosition: s.pos }} />
                    <div><div className="st">{s.title}</div><div className="sd">{s.desc}</div></div>
                  </div>
                ))}
              </div>
              <div className="bd-lang">한국어로 진행되는 하루 친구 체험이에요.</div>
            </section>

            {/* 후기 */}
            {d.reviews.length > 0 && (
              <section className="bd-block">
                <div className="bd-rev-h"><span className="star">★</span> {d.rating} · 후기 {d.reviewCount}개</div>
                <div className="bd-reviews">
                  {d.reviews.map((r, i) => (
                    <div key={i} className="bd-review">
                      <div className="who"><span className="ra" style={{ background: r.color }}>{r.initial}</span><div><div className="rn">{r.name}</div><div className="rl">{r.loc}</div></div></div>
                      <div className="rs"><span className="star">{r.stars}</span> · {r.when}</div>
                      <p className="rt">{r.text}</p>
                    </div>
                  ))}
                </div>
                <button className="bd-allbtn">후기 {d.reviewCount}개 모두 보기</button>
              </section>
            )}

            {/* 만나는 장소 */}
            <section className="bd-block bd-mapwrap">
              <h2>만나는 장소</h2>
              <div className="addr1">{d.meetSpot.name}</div>
              <div className="addr2">{d.meetSpot.sub}</div>
              <div className="bd-map">
                <svg className="mpin" width="34" height="42" viewBox="0 0 34 42" fill="none"><path d="M17 41C17 41 32 25 32 16A15 15 0 1 0 2 16C2 25 17 41 17 41Z" fill="var(--bc-ink)" /><circle cx="17" cy="16" r="5.5" fill="#fff" /></svg>
                <span className="mlbl">만나는 장소</span>
              </div>
            </section>

            {/* 알아두어야 할 사항 */}
            <section className="bd-block">
              <h2>알아두어야 할 사항</h2>
              <div className="bd-know">
                <div className="k">
                  <div className="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17.5" cy="8.5" r="2.4" /><path d="M15.5 14.2c2.6.4 4.5 2.6 4.5 5.8" /></svg></div>
                  <h4>게스트 필수조건</h4><p>만 19세 이상만 참여할 수 있어요. 현재는 1:1 만남만 운영해요.</p>
                </div>
                <div className="k">
                  <div className="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.4 8 11 4.6-2.6 8-6 8-11V5z" /><path d="M9 12l2 2 4-4" /></svg></div>
                  <h4>안전 수칙</h4><p>공개된 장소에서만 만나요. 신체 접촉은 없고, 사적 연락은 하지 않아요.</p>
                </div>
                <div className="k">
                  <div className="ic"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="2.5" /><path d="M3 9h18M8 2v4M16 2v4" /><path d="M9.5 15.5l5-3" /></svg></div>
                  <h4>환불 정책</h4><p>시작 1일 전까지 취소하면 예약금이 전액 환불돼요.</p>
                </div>
              </div>
            </section>
          </div>

          {/* sticky booking */}
          <aside className="bd-col-r">
            <div className="bd-book">
              <div className="ptop">
                <div>
                  <div className="price"><b>{course.price}</b> 부터</div>
                  <div className="free">취소 수수료 없음</div>
                </div>
                <button className="cta">날짜 보기</button>
              </div>
              <div className="slots">
                {d.slots.map((s, i) => (
                  <button key={i} className="slot"><div className="sl"><div className="sd">{s.date}</div><div className="stime">{s.time}</div></div><div className="sr">예약 가능</div></button>
                ))}
              </div>
              <div className="allslots">모든 날짜 표시</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
