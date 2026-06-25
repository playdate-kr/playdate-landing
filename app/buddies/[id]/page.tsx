"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { COURSES } from "@/content/courses";
import { CourseApply } from "@/components/guest/CourseApply";

/* 줄바꿈(\n) 텍스트 → <br/> */
const Multiline = ({ text }: { text: string }) =>
  <>{text.split("\n").map((l, i) => <span key={i}>{i > 0 && <br />}{l}</span>)}</>;

const ShareIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

const won = (c: { priceNum?: number; price: string }) =>
  c.priceNum ? `${c.priceNum.toLocaleString()}원` : c.price;

export default function CourseDetail() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const course = COURSES.find((c) => c.id === id);
  const [active, setActive] = useState(0);

  if (!course) return notFound();
  const d = course.detail;
  const meta = [d.age, d.job, d.mbti, d.langs].filter(Boolean) as string[];
  const others = COURSES.filter((c) => c.buddy === course.buddy && c.id !== course.id);

  const openApply = () =>
    window.dispatchEvent(new CustomEvent("open-request", { detail: { courseId: course.id, buddyName: course.buddy, courseTitle: course.title } }));

  return (
    <div className="bdetail">
      <nav className="bd-nav"><div className="in">
        <Link className="nav-back" href="/buddies" aria-label="뒤로">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </Link>
        <Link className="nav-wm" href="/buddies"><img className="wm" src="/brand/wordmark.png" alt="플레이데이트" /></Link>
        <div className="nav-title">{course.title}</div>
        <div className="links"><Link href="/buddies">버디 둘러보기</Link><Link href="/">버디로 활동하기</Link></div>
        <div className="nav-acts"><button type="button" className="iconbtn" aria-label="공유"><ShareIcon /></button></div>
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
              <span className="dot">·</span> <span className="mut">{course.region}</span>
            </div>
            <div className="acts">
              <button type="button" className="iconbtn" aria-label="공유"><ShareIcon /></button>
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
                <div className="host-top">
                  <div className="host-photo" style={{ backgroundImage: `url(${course.photo})`, backgroundPosition: course.photoPos }} />
                  <div className="host-nm">{course.buddy}</div>
                  <div className="host-vf">✓ 신원 확인 완료</div>
                  {meta.length > 0 && (
                    <div className="host-line">
                      {meta.map((v, i) => <span key={i}>{i > 0 && <span className="sep">·</span>}{v}</span>)}
                    </div>
                  )}
                </div>

                <p className="hi">{d.intro}</p>

                {d.personalTags && d.personalTags.length > 0 && (
                  <div className="host-tags">
                    {d.personalTags.map((t, i) => <span key={i} className="ht"><span className="h">#</span>{t}</span>)}
                  </div>
                )}

                <button type="button" className="bd-msgbtn">{course.buddy} 님에게 메시지 보내기</button>
                <p className="safe">안전한 만남을 위해 항상 플레이데이트를 통해 소통하고 결제하세요.</p>

                {others.length > 0 && (
                  <div className="othercourses">
                    <div className="oc-h">{course.buddy}의 다른 코스</div>
                    <div className="oc-list">
                      {others.map((o) => (
                        <Link key={o.id} className="oc-card" href={`/buddies/${o.id}`}>
                          <div className="oc-thumb" style={{ backgroundImage: `url(${o.photo})`, backgroundPosition: o.photoPos }} />
                          <div className="oc-body">
                            <div className="oc-name">{o.title}</div>
                            <div className="oc-meta">{o.duration} · {o.region} · <span className="pr">{won(o)}</span></div>
                          </div>
                          <div className="oc-go">→</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 체험 내용 */}
            <section className="bd-block">
              <h2>체험 내용</h2>
              <div className="bd-steps">
                {d.steps.map((s, i) => (
                  <div key={i} className="bd-step">
                    <div className="num">{i + 1}</div>
                    <div><div className="st">{s.title}</div><div className="sd">{s.desc}</div></div>
                  </div>
                ))}
              </div>
            </section>

            {/* 후기 */}
            {d.reviews.length > 0 && (
              <section className="bd-block">
                <div className="bd-rev-h">버디 후기</div>
                <div className="bd-reviews">
                  {d.reviews.map((r, i) => (
                    <div key={i} className="bd-review">
                      <div className="who"><span className="ra" style={{ background: r.color }}>{r.initial}</span><div><div className="rn">{r.name}</div><div className="rl">{r.loc}</div></div></div>
                      <div className="rs">
                        {r.courseTag && <><span className="rtag">{r.courseTag}</span> · </>}
                        {r.score && <><span className="score">★ {r.score}</span> · </>}
                        {r.when}
                      </div>
                      <p className="rt">{r.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 만나는 장소 */}
            <section className="bd-block bd-mapwrap">
              <h2>만나는 장소</h2>
              <div className="addr1">{d.meetSpot.name}</div>
              <div className="addr2">정확한 위치는 예약 확정 후 안내드려요</div>
            </section>

            {/* 참여 전 알아두세요 */}
            {d.knowNotes && d.knowNotes.length > 0 && (
              <section className="bd-block">
                <h2>참여 전 알아두세요</h2>
                <div className="bd-knownote">
                  {d.knowNotes.map((n, i) => (
                    <div key={i} className="kn-item">
                      <span className="kn-check"><svg width="13" height="13" viewBox="0 0 20 20" fill="none"><path d="M4 10.5 L8.5 15 L16 5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                      <span className="kn-tx">{n}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* sticky booking */}
          <aside className="bd-col-r">
            <div className="bd-book">
              <div className="ptop">
                <div>
                  <div className="price"><b>{won(course)}</b></div>
                  <div className="free">취소 수수료 없음</div>
                </div>
              </div>
              <div className="negobox">
                <div className="nt">시간은 버디와 협의해요</div>
                <div className="nd">신청해주시면 매니저가 24시간 안에 연락드려요.</div>
              </div>
              <button type="button" className="cta" style={{ width: "100%", justifyContent: "center" }} onClick={openApply}>신청하기</button>
            </div>
          </aside>
        </div>
      </div>

      {/* 모바일 상시 하단 신청 바 */}
      <div className="bd-mbar">
        <div className="mb-note">
          <div className="mb-note-txt">
            <div className="t1">시간은 버디와 협의해요</div>
            <div className="t2">신청해주시면 매니저가 24시간 안에 연락드려요</div>
          </div>
        </div>
        <div className="mb-pill">
          <div className="mb-price"><b>{won(course)}</b><span className="free">취소 수수료 없음</span></div>
          <button type="button" className="mb-cta" onClick={openApply}>신청하기</button>
        </div>
      </div>

      <CourseApply />
    </div>
  );
}
