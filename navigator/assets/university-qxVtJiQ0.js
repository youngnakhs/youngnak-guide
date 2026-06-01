import{a as R,b as j,m as S,c as E,u as B,i as C}from"./site-Ck_ArAu4.js";import{b as I,v as l,i as p,a as q,s as z}from"./data-1fpcbxBG.js";R();j("");S();function H(a){return new URLSearchParams(window.location.search).get(a)}function u(a){const e=z(a),s=p(a);let n="";return s&&(n+='<span class="badge badge--review">확인 필요</span> '),!1&&(n+=e.url?`<span class="src">출처: <a href="${e.url}" target="_blank" rel="noopener">${e.name||"링크"}</a>${e.page?" · "+e.page:""}</span>`:`<span class="src">출처: ${e.name}</span>`),n?`<div class="field-src">${n}</div>`:""}function r(a,e){const s=l(e);return s==null||s===""?"":`<div class="kv"><dt>${a}</dt><dd>${s===!0?"있음":s===!1?"없음":s}${u(e)}</dd></div>`}(async function(){var f,b,w,T;const a=H("id"),e=document.getElementById("uniContent");if(!a){e.innerHTML='<p class="center" style="padding:var(--space-10)">대학을 선택해 주세요. <a href="compare.html">대학 비교로 이동</a></p>';return}let s;try{s=await I(a)}catch{e.innerHTML=`<p class="center" style="padding:var(--space-10)">'${a}' 대학 정보를 찾을 수 없습니다.<br/><a href="compare.html">대학 비교로 이동</a></p>`;return}document.title=`${s.name} · 2028 대입 내비게이터`;const n=E(s.category),_=(s.admissionTypes||[]).map(t=>{const i=[r("모집인원",t.quota),r("전형방법",t.method),r("수능최저",t.suneungMinimum),r("면접",t.interview),r("전체 대비 비율",t.ratioOfTotal)].join("");return`
      <article class="card type-card fade-in">
        <div class="type-card__head">
          <h3>${t.track}${t.subType?` <span class="type-sub">${t.subType}</span>`:""}</h3>
        </div>
        <dl class="kv-list">${i||'<p class="text-soft">세부 정보 확인 필요</p>'}</dl>
      </article>`}).join(""),m=(s.changes2028||[]).map(t=>`<li>${l(t)} ${p(t)?'<span class="badge badge--review">확인 필요</span>':""}${u(t)}</li>`).join(""),h=([]).map(t=>`<a class="btn btn--ghost" href="${t.url}" target="_blank" rel="noopener">${t.name} ↗</a>`).join(""),g=(s.highlights||[]).map(t=>`<li>${t}</li>`).join(""),v=s.departments||[];function x(t){const i=l(t.suneungMinimum),c=i?`${i}${p(t.suneungMinimum)?' <span class="badge badge--review">확인 필요</span>':""}`:'<span class="text-faint">–</span>',o=l(t.quota);return`<tr data-name="${(t.name+" "+(t.college||"")).toLowerCase()}">
      <td><strong>${t.name}</strong></td>
      <td>${t.college||'<span class="text-faint">–</span>'}</td>
      <td>${t.track||'<span class="text-faint">–</span>'}</td>
      <td>${o??'<span class="text-faint">–</span>'}</td>
      <td>${c}</td>
    </tr>`}const M=v.length?`<section class="section no-print" style="padding-top:0" id="deptSection">
        <div class="section-head">
          <h2>모집단위(학과)별 수능최저</h2>
          <p class="text-soft">주요 모집단위 기준입니다. 전체 모집단위·세부 인원은 입학처 모집요강을 확인하세요.</p>
        </div>
        <input type="search" id="deptSearch" class="dept-search" placeholder="학과·단과대학 검색 (예: 의예, 컴퓨터, 경영)" aria-label="모집단위 검색" />
        <div class="table-wrap">
          <table class="data" id="deptTable">
            <caption>모집단위별 수능최저 — '확인 필요'는 입학처 대조 권장</caption>
            <thead><tr><th>모집단위</th><th>단과대학</th><th>전형</th><th>모집인원</th><th>수능최저</th></tr></thead>
            <tbody>${v.map(x).join("")}</tbody>
          </table>
        </div>
      </section>`:"";e.innerHTML=`
    <header class="uni-hero" style="--cat-color:${n.color}">
      <span class="badge ${n.badge}"><span class="cat-dot"></span>${s.category}</span>
      <button class="btn btn--ghost uni-print no-print" id="printBtn" type="button">🖨 인쇄 / PDF 저장</button>
      <h1>${s.name}</h1>
      <p class="uni-hero__meta">📍 ${l(s.region)||"소재지 확인 필요"} · ${s.campus||""} 캠퍼스</p>
    </header>

    <section class="section" style="padding-top:var(--space-6)">
      <div class="summary-strip">
        ${d("수시 비율",(f=s.summary)==null?void 0:f.susiRatio,"%")}
        ${d("정시 비율",(b=s.summary)==null?void 0:b.jeongsiRatio,"%")}
        ${d("수능최저",L((w=s.summary)==null?void 0:w.hasSuneungMinimum))}
        ${d("면접",L((T=s.summary)==null?void 0:T.hasInterview))}
      </div>
    </section>

    ${g?`<section class="section" style="padding-top:0"><div class="card"><h2 style="font-size:var(--fs-lg)">한눈에 보는 특징</h2><ul class="hl-list">${g}</ul></div></section>`:""}

    <section class="section" style="padding-top:0">
      <div class="section-head"><h2>전형별 상세</h2></div>
      <div class="type-grid">${_||'<p class="text-soft">전형 정보 확인 필요 — 입학처 공식 자료를 확인하세요.</p>'}</div>
    </section>

    ${M}

    ${l(s.naesinReflection)?`<section class="section" style="padding-top:0"><div class="card"><h2 style="font-size:var(--fs-lg)">내신 반영 방식</h2><p>${l(s.naesinReflection)}</p>${u(s.naesinReflection)}</div></section>`:""}

    ${m?`<section class="section" style="padding-top:0"><div class="card"><h2 style="font-size:var(--fs-lg)">🔔 2028 주요 변화</h2><ul class="change-list">${m}</ul></div></section>`:""}

    ${h?`<section class="section" style="padding-top:0"><div class="section-head"><h2 style="font-size:var(--fs-lg)">공식 출처</h2><p class="text-soft">최종 확인은 반드시 각 대학 입학처 공식 자료로 하세요.</p></div><div class="link-row">${h}</div></section>`:""}
  `;const $=document.getElementById("printBtn");$&&$.addEventListener("click",()=>window.print());const y=document.getElementById("deptSearch");y&&y.addEventListener("input",t=>{const i=t.target.value.trim().toLowerCase();document.querySelectorAll("#deptTable tbody tr").forEach(c=>{c.style.display=!i||c.dataset.name.includes(i)?"":"none"})});try{const i=((await q()).universities||[]).filter(c=>c.category===s.category&&c.id!==s.id);if(i.length){const c=i.map(k=>`<a class="rel-chip" href="${B(`university.html?id=${k.id}`)}">${k.name}</a>`).join(""),o=document.createElement("section");o.className="section no-print",o.style.paddingTop="0",o.innerHTML=`<div class="section-head"><h2 style="font-size:var(--fs-lg)">같은 분류 대학 <span class="badge ${n.badge}"><span class="cat-dot"></span>${s.category}</span></h2></div><div class="rel-row">${c}</div>`,e.appendChild(o)}}catch{}C()})();function L(a){return a===!0?"있음":a===!1?"없음":"확인필요"}function d(a,e,s=""){return`<div class="summary-item"><span class="summary-item__num">${e==null?"–":`${e}${s}`}</span><span class="summary-item__label">${a}</span></div>`}
