import{a as x,b as M,m as T,i as R,c as k,u as j}from"./site-Ck_ArAu4.js";/* empty css                */import{a as q,b as A,v as S,i as H}from"./data-1fpcbxBG.js";import{t as z,m as I,C as V}from"./charts-Dx4Cs95I.js";x();M("compare.html");T();const C=[{key:"name",label:"대학",sortable:!0},{key:"category",label:"분류",sortable:!0},{key:"region",label:"소재지",sortable:!0},{key:"campus",label:"캠퍼스",sortable:!0},{key:"susiRatio",label:"수시%",sortable:!0,num:!0},{key:"jeongsiRatio",label:"정시%",sortable:!0,num:!0},{key:"hasSuneungMinimum",label:"수능최저",sortable:!0,bool:!0},{key:"hasInterview",label:"면접",sortable:!0,bool:!0}];let d=[],m=[],p="name",y=1;const s={cats:new Set,search:"",min:"all",interview:"all"},o=new Set,v=4;function O(e){var t,a,n,r;return{id:e.id,name:e.name,category:e.category,region:e.region||"–",campus:e.campus||"–",susiRatio:((t=e.summary)==null?void 0:t.susiRatio)??null,jeongsiRatio:((a=e.summary)==null?void 0:a.jeongsiRatio)??null,hasSuneungMinimum:((n=e.summary)==null?void 0:n.hasSuneungMinimum)??null,hasInterview:((r=e.summary)==null?void 0:r.hasInterview)??null}}function h(e){return e===!0?"있음":e===!1?"없음":'<span class="text-faint">확인 필요</span>'}function L(e){return e==null?'<span class="text-faint">–</span>':`${e}`}function u(){m=d.filter(e=>{if(s.cats.size&&!s.cats.has(e.category))return!1;if(s.search){const t=s.search.toLowerCase();if(!`${e.name}${e.region}${e.campus}`.toLowerCase().includes(t))return!1}return!(s.min==="yes"&&e.hasSuneungMinimum!==!0||s.min==="no"&&e.hasSuneungMinimum!==!1||s.interview==="yes"&&e.hasInterview!==!0||s.interview==="no"&&e.hasInterview!==!1)}),$(),E(),document.getElementById("resultCount").textContent=`${m.length}개 대학 표시 중 (전체 ${d.length})`}function $(){m.sort((e,t)=>{let a=e[p],n=t[p];return a==null?1:n==null?-1:(typeof a=="boolean"&&(a=a?1:0,n=n?1:0),typeof a=="string"?a.localeCompare(n,"ko")*y:(a-n)*y)})}function B(){const e=document.querySelector("#compareTable thead");e.innerHTML='<tr><th class="th-pick" aria-label="비교 담기">담기</th>'+C.map(t=>{const a=p===t.key?y===1?"▲":"▼":'<span class="arrow">⇅</span>';return`<th data-key="${t.key}" tabindex="0" role="button" aria-label="${t.label} 정렬">${t.label} ${a}</th>`}).join("")+"</tr>",e.querySelectorAll("th").forEach(t=>{const a=()=>{const n=t.dataset.key;p===n?y*=-1:(p=n,y=1),$(),B(),E()};t.addEventListener("click",a),t.addEventListener("keydown",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),a())})})}function E(){const e=document.querySelector("#compareTable tbody");if(!m.length){e.innerHTML=`<tr><td colspan="${C.length}" class="center text-soft" style="padding:var(--space-8)">조건에 맞는 대학이 없습니다.</td></tr>`;return}e.innerHTML=m.map(t=>{const a=k(t.category),n=o.has(t.id)?"checked":"";return`<tr data-id="${t.id}" tabindex="0">
        <td class="td-pick"><input type="checkbox" class="pick" data-id="${t.id}" ${n} aria-label="${t.name} 비교 담기" /></td>
        <td class="c-name"><strong>${t.name}</strong></td>
        <td class="c-cat"><span class="badge ${a.badge}"><span class="cat-dot"></span>${t.category}</span></td>
        <td data-label="소재지">${t.region}</td>
        <td data-label="캠퍼스">${t.campus}</td>
        <td data-label="수시 비율">${L(t.susiRatio)}</td>
        <td data-label="정시 비율">${L(t.jeongsiRatio)}</td>
        <td data-label="수능최저">${h(t.hasSuneungMinimum)}</td>
        <td data-label="면접">${h(t.hasInterview)}</td>
      </tr>`}).join(""),e.querySelectorAll("tr[data-id]").forEach(t=>{const a=n=>{n.target.closest(".td-pick")||(window.location.href=j(`university.html?id=${t.dataset.id}`))};t.addEventListener("click",a),t.addEventListener("keydown",n=>{n.key==="Enter"&&!n.target.closest(".td-pick")&&a(n)})}),e.querySelectorAll("input.pick").forEach(t=>{t.addEventListener("click",a=>a.stopPropagation()),t.addEventListener("change",a=>F(a.target.dataset.id,a.target.checked))})}function W(){const e=["인서울 주요대","지방거점국립대","수도권 주요대","지방캠퍼스"],t=document.getElementById("filterBar");t.innerHTML=`
    <div class="filter-group">
      <label class="filter-label">검색</label>
      <input type="search" id="searchInput" placeholder="대학명·지역 검색" class="filter-input" />
    </div>
    <div class="filter-group">
      <label class="filter-label">분류</label>
      <div class="chips" id="catChips">
        ${e.map(a=>`<button class="chip ${k(a).badge}" data-cat="${a}">${a}</button>`).join("")}
      </div>
    </div>
    <div class="filter-group">
      <label class="filter-label">수능최저</label>
      <select id="minSelect" class="filter-input">
        <option value="all">전체</option><option value="yes">있음</option><option value="no">없음</option>
      </select>
    </div>
    <div class="filter-group">
      <label class="filter-label">면접</label>
      <select id="interviewSelect" class="filter-input">
        <option value="all">전체</option><option value="yes">실시</option><option value="no">미실시</option>
      </select>
    </div>
    <div class="filter-group" id="mobileSortGroup">
      <label class="filter-label">정렬</label>
      <select id="mobileSort" class="filter-input">
        <option value="name|1">대학명 (가나다)</option>
        <option value="category|1">분류</option>
        <option value="region|1">소재지</option>
        <option value="susiRatio|-1">수시 비율 높은순</option>
        <option value="jeongsiRatio|-1">정시 비율 높은순</option>
        <option value="hasSuneungMinimum|-1">수능최저 있는 곳</option>
        <option value="hasInterview|-1">면접 있는 곳</option>
      </select>
    </div>
    <button class="btn btn--ghost" id="resetBtn">초기화</button>`,document.getElementById("searchInput").addEventListener("input",a=>{s.search=a.target.value,u()}),document.getElementById("minSelect").addEventListener("change",a=>{s.min=a.target.value,u()}),document.getElementById("interviewSelect").addEventListener("change",a=>{s.interview=a.target.value,u()}),document.getElementById("mobileSort").addEventListener("change",a=>{const[g,b]=a.target.value.split("|");p=g,y=+b,$(),B(),E()}),t.querySelectorAll(".chip").forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.cat;s.cats.has(n)?(s.cats.delete(n),a.classList.remove("is-on")):(s.cats.add(n),a.classList.add("is-on")),u()})}),document.getElementById("resetBtn").addEventListener("click",()=>{s.cats.clear(),s.search="",s.min="all",s.interview="all",t.querySelectorAll(".chip").forEach(a=>a.classList.remove("is-on")),document.getElementById("searchInput").value="",document.getElementById("minSelect").value="all",document.getElementById("interviewSelect").value="all",u()})}function P(){const e=z(),t={};d.forEach(i=>{t[i.category]=(t[i.category]||0)+1});const a=Object.keys(t);I(document.getElementById("catChart"),{type:"doughnut",data:{labels:a,datasets:[{data:a.map(i=>t[i]),backgroundColor:a.map(i=>V[i]||"#888"),borderWidth:0}]},options:{plugins:{legend:{position:"bottom",labels:{color:e.text,boxWidth:12,font:{size:11}}}}}});const n=i=>{let l=0,c=0,b=0;return d.forEach(f=>{const g=f[i];g===!0?l++:g===!1?c++:b++}),{yes:l,no:c,unk:b}},r=(i,l,c)=>{const{yes:b,no:f,unk:g}=n(l);I(document.getElementById(i),{type:"doughnut",data:{labels:[c[0],c[1],"확인 필요"],datasets:[{data:[b,f,g],backgroundColor:["#4f46e5","#94a3b8","#fcd9b6"],borderWidth:0}]},options:{plugins:{legend:{position:"bottom",labels:{color:e.text,boxWidth:12,font:{size:11}}}}}})};r("minChart","hasSuneungMinimum",["적용","미적용"]),r("intChart","hasInterview",["실시","미실시"])}function F(e,t){if(t){if(o.size>=v){alert(`최대 ${v}개까지 비교할 수 있어요. 다른 대학을 빼고 담아주세요.`);const a=document.querySelector(`input.pick[data-id="${e}"]`);a&&(a.checked=!1);return}o.add(e)}else o.delete(e);w()}function w(){const e=document.getElementById("compareTray");if(!o.size){e.hidden=!0;const a=document.getElementById("compareView");a&&(a.hidden=!0);return}e.hidden=!1;const t=[...o].map(a=>{const n=d.find(r=>r.id===a);return`<span class="tray-chip">${n?n.name:a}<button data-id="${a}" aria-label="빼기">✕</button></span>`}).join("");e.innerHTML=`
    <div class="tray-inner container">
      <span class="tray-label">비교 담기 <strong>${o.size}</strong>/${v}</span>
      <div class="tray-chips">${t}</div>
      <div class="tray-actions">
        <button class="btn btn--ghost" id="trayClear">비우기</button>
        <button class="btn btn--primary" id="trayShow"${o.size<2?" disabled":""}>나란히 비교 →</button>
      </div>
    </div>`,e.querySelectorAll(".tray-chip button").forEach(a=>a.addEventListener("click",()=>{const n=a.dataset.id;o.delete(n);const r=document.querySelector(`input.pick[data-id="${n}"]`);r&&(r.checked=!1),w()})),document.getElementById("trayClear").addEventListener("click",_),document.getElementById("trayShow").addEventListener("click",N)}function _(){o.clear(),document.querySelectorAll("input.pick").forEach(e=>e.checked=!1),w()}const D=[{label:"분류",get:e=>e.category},{label:"소재지",get:e=>S(e.region)||"–"},{label:"캠퍼스",get:e=>e.campus||"–"},{label:"수시 비율",get:e=>{var t;return((t=e.summary)==null?void 0:t.susiRatio)!=null?e.summary.susiRatio+"%":"확인 필요"}},{label:"정시 비율",get:e=>{var t;return((t=e.summary)==null?void 0:t.jeongsiRatio)!=null?e.summary.jeongsiRatio+"%":"확인 필요"}},{label:"수능최저",get:e=>{var t;return h((t=e.summary)==null?void 0:t.hasSuneungMinimum)}},{label:"면접",get:e=>{var t;return h((t=e.summary)==null?void 0:t.hasInterview)}},{label:"주요 전형",get:e=>(e.admissionTypes||[]).map(t=>`${t.track}${t.subType?" · "+t.subType:""}`).slice(0,5).join("<br>")||"–"},{label:"2028 변화",get:e=>(e.changes2028||[]).map(t=>`• ${S(t)}${H(t)?' <span class="badge badge--review">확인 필요</span>':""}`).join("<br>")||"–"}];async function N(){const e=[...o],t=document.getElementById("compareViewBody"),a=document.getElementById("compareView");t.innerHTML='<p class="text-soft" style="padding:var(--space-4)">불러오는 중…</p>',a.hidden=!1;let n;try{n=await Promise.all(e.map(l=>A(l)))}catch{t.innerHTML='<p class="text-soft" style="padding:var(--space-4)">일부 대학 정보를 불러오지 못했습니다.</p>';return}const r="<th>항목</th>"+n.map(l=>`<th><span class="badge ${k(l.category).badge}"><span class="cat-dot"></span></span> ${l.name}</th>`).join(""),i=D.map(l=>`<tr><th scope="row">${l.label}</th>${n.map(c=>`<td>${l.get(c)}</td>`).join("")}</tr>`).join("");t.innerHTML=`<table class="data compare-matrix"><caption>선택한 대학 항목별 비교 — '확인 필요' 항목은 입학처 공식 자료 대조 권장</caption><thead><tr>${r}</tr></thead><tbody>${i}</tbody></table>`,a.scrollIntoView({behavior:"smooth",block:"start"})}(async function(){try{d=((await q()).universities||[]).map(O)}catch{document.getElementById("resultCount").textContent="데이터를 불러오지 못했습니다.";return}m=[...d],W(),B(),$(),E(),u(),P(),R()})();
