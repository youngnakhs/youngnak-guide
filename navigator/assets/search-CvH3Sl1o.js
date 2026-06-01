import{a as b,b as f,m as g,i as h,c as m,u as v}from"./site-Ck_ArAu4.js";/* empty css                */b();f("search.html");g();const $="./",p=[{key:"name",label:"모집단위"},{key:"college",label:"단과대학"},{key:"uni",label:"대학"},{key:"category",label:"분류"},{key:"track",label:"전형"},{key:"suneungMinimum",label:"수능최저"}];let o=[],r=[],l="uni",c=1;const s={cats:new Set,search:""};function i(){const n=s.search.trim().toLowerCase();r=o.filter(e=>!(s.cats.size&&!s.cats.has(e.category)||n&&!`${e.name} ${e.college} ${e.uni}`.toLowerCase().includes(n))),d(),u(),document.getElementById("resultCount").textContent=`${r.length}개 모집단위 표시 중 (전체 ${o.length})`}function d(){r.sort((n,e)=>{let t=(n[l]||"").toString(),a=(e[l]||"").toString();return t.localeCompare(a,"ko")*c})}function y(){const n=document.querySelector("#deptTable thead");n.innerHTML="<tr>"+p.map(e=>{const t=l===e.key?c===1?"▲":"▼":'<span class="arrow">⇅</span>';return`<th data-key="${e.key}" tabindex="0" role="button">${e.label} ${t}</th>`}).join("")+"</tr>",n.querySelectorAll("th").forEach(e=>{const t=()=>{const a=e.dataset.key;l===a?c*=-1:(l=a,c=1),d(),y(),u()};e.addEventListener("click",t),e.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),t())})})}function u(){const n=document.querySelector("#deptTable tbody");if(!r.length){n.innerHTML=`<tr><td colspan="${p.length}" class="center text-soft" style="padding:var(--space-8)">조건에 맞는 모집단위가 없습니다.</td></tr>`;return}n.innerHTML=r.map(e=>{const t=m(e.category),a=e.suneungMinimum?`${e.suneungMinimum}${e.review?' <span class="badge badge--review">확인 필요</span>':""}`:'<span class="text-faint">–</span>';return`<tr data-id="${e.uniId}" tabindex="0">
        <td><strong>${e.name}</strong></td>
        <td>${e.college||'<span class="text-faint">–</span>'}</td>
        <td>${e.uni}</td>
        <td><span class="badge ${t.badge}"><span class="cat-dot"></span>${e.category}</span></td>
        <td>${e.track||'<span class="text-faint">–</span>'}</td>
        <td style="white-space:normal;min-width:220px">${a}</td>
      </tr>`}).join(""),n.querySelectorAll("tr[data-id]").forEach(e=>{const t=()=>{window.location.href=v(`university.html?id=${e.dataset.id}`)};e.addEventListener("click",t),e.addEventListener("keydown",a=>{a.key==="Enter"&&t()})})}function k(){const n=["인서울 주요대","지방거점국립대","수도권 주요대","지방캠퍼스"],e=document.getElementById("filterBar");e.innerHTML=`
    <div class="filter-group">
      <label class="filter-label">검색</label>
      <input type="search" id="searchInput" placeholder="학과·계열·대학 검색" class="filter-input" />
    </div>
    <div class="filter-group">
      <label class="filter-label">분류</label>
      <div class="chips" id="catChips">
        ${n.map(t=>`<button class="chip ${m(t).badge}" data-cat="${t}">${t}</button>`).join("")}
      </div>
    </div>
    <button class="btn btn--ghost" id="resetBtn">초기화</button>`,document.getElementById("searchInput").addEventListener("input",t=>{s.search=t.target.value,i()}),e.querySelectorAll(".chip").forEach(t=>{t.addEventListener("click",()=>{const a=t.dataset.cat;s.cats.has(a)?(s.cats.delete(a),t.classList.remove("is-on")):(s.cats.add(a),t.classList.add("is-on")),i()})}),document.getElementById("resetBtn").addEventListener("click",()=>{s.cats.clear(),s.search="",e.querySelectorAll(".chip").forEach(t=>t.classList.remove("is-on")),document.getElementById("searchInput").value="",i()})}(async function(){try{o=(await(await fetch(`${$}data/departments.json`)).json()).departments||[]}catch{document.getElementById("resultCount").textContent="데이터를 불러오지 못했습니다.";return}k(),y(),r=[...o],d(),u(),i(),h()})();
