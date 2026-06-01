import{a as u,b,m as f,i as o}from"./site-Ck_ArAu4.js";import{l as h}from"./data-1fpcbxBG.js";import{t as $,m as r}from"./charts-Dx4Cs95I.js";u();b("reform.html");f();function y(a){return a==="needs_review"?'<span class="badge badge--review">확인 필요</span>':'<span class="badge badge--confirmed">확정</span>'}function k(a){return a?a.url?`<a href="${a.url}" target="_blank" rel="noopener">${a.name||"출처"}</a>`:a.name||"":""}(async function(){var l;let a;try{a=await h()}catch{document.getElementById("introNote").textContent="데이터를 불러오지 못했습니다.";return}document.getElementById("introNote").innerHTML=`${a.audienceNote||""} <br />기준: <strong>${((l=a.primarySource)==null?void 0:l.name)||""}</strong> (${a.publishedDate||a.asOf} 발표)`;const d=document.getElementById("highlightGrid");d.innerHTML=(a.highlights||[]).map((e,t)=>{const m=(t<2||t<4,"span-6"),g=(e.details||[]).map(p=>`<li>${p}</li>`).join("");return`
      <article class="card highlight ${m} fade-in">
        <div class="highlight__head">
          <span class="highlight__icon">${e.icon||"•"}</span>
          ${y(e.status)}
        </div>
        <h3>${e.title}</h3>
        <p class="text-soft">${e.summary}</p>
        <ul class="highlight__list">${g}</ul>
        <div class="src">출처 · ${k(e.source)}</div>
      </article>`}).join(""),o();const i=a.naesinGrades||[],s=$();r(document.getElementById("naesinChart"),{type:"bar",data:{labels:i.map(e=>e.grade),datasets:[{label:"비율(%)",data:i.map(e=>e.pct),backgroundColor:["#4f46e5","#6366f1","#818cf8","#a5b4fc","#c7d2fe"],borderRadius:8}]},options:{plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>`${e.parsed.y}% (누적 ${i[e.dataIndex].cumulative}%)`}}},scales:{y:{beginAtZero:!0,ticks:{color:s.soft,callback:e=>e+"%"},grid:{color:s.grid}},x:{ticks:{color:s.soft},grid:{display:!1}}}}});const n=a.trackChanges||[];r(document.getElementById("trackChart"),{type:"bar",data:{labels:n.map(e=>e.track),datasets:[{label:"전년 대비 증감(명)",data:n.map(e=>e.delta),backgroundColor:n.map(e=>e.delta>=0?"#16a34a":"#ea580c"),borderRadius:8}]},options:{indexAxis:"y",plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>{const t=n[e.dataIndex];return`${t.track}: ${t.count.toLocaleString()}명 (${t.delta>=0?"+":""}${t.delta}명)`}}}},scales:{x:{ticks:{color:s.soft},grid:{color:s.grid}},y:{ticks:{color:s.soft},grid:{display:!1}}}}});const c=document.getElementById("timeline");c.innerHTML=(a.schedule||[]).map(e=>`
      <li class="timeline__item fade-in">
        <div class="timeline__date">${e.date}</div>
        <div class="timeline__body">
          <strong>${e.label}</strong> ${e.status==="needs_review"?'<span class="badge badge--review">확인 필요</span>':""}
          <p class="text-soft">${e.desc}</p>
        </div>
      </li>`).join(""),o()})();
