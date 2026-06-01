import{a as r,b as i,m as d,c as l,i as m}from"./site-Ck_ArAu4.js";import{l as p,a as g}from"./data-1fpcbxBG.js";r();i("sources.html");d();(async function(){try{const a=await p(),n=document.getElementById("commonSources");n.innerHTML=(a.sources||[]).map(s=>`<a class="card card--hover source-row" href="${s.url}" target="_blank" rel="noopener">
          <span>${s.name}</span><span class="src">↗</span></a>`).join(""),document.getElementById("dataMeta").textContent=`데이터 기준일: ${a.asOf||""} · 발표일: ${a.publishedDate||""}`}catch(a){console.warn(a)}try{const a=await g(),n=a.dataStatus,s=document.getElementById("dataMeta");if(n&&s){const e=(n.confirmed||0)+(n.needsReview||0),t=e?Math.round(n.confirmed/e*100):0;s.insertAdjacentHTML("beforebegin",`<p class="data-status">전체 출처 항목 <strong>${e}</strong>개 중
         <span class="badge badge--confirmed">확정 ${n.confirmed}</span>
         <span class="badge badge--review">확인 필요 ${n.needsReview}</span>
         <span class="text-soft">(확정 비율 ${t}%)</span></p>`)}const c=document.getElementById("uniSources");c.innerHTML=(a.universities||[]).map(e=>{const t=l(e.category),o=e.officialLinks&&e.officialLinks[0]||null;return`<a class="card card--hover uni-source" href="${o?o.url:"https://www.adiga.kr"}" target="_blank" rel="noopener">
          <span class="badge ${t.badge}"><span class="cat-dot"></span>${e.category}</span>
          <strong>${e.name}</strong>
          <span class="src">입학처 ↗</span>
        </a>`}).join("")}catch(a){console.warn(a)}m()})();
