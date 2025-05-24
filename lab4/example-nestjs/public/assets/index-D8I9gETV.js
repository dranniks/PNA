(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class v{constructor(t){this.parent=t}getHTML(t){return`
                <div class="network-card">
                    <div class="card-image-container">
                        <img src="${t.src||"default-image.png"}" 
                            class="card-image" 
                            alt="${t.title||"Без названия"}">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${t.title||"Без названия"}</h3>
                        <p class="card-description">${t.text||"Описание отсутствует"}</p>
                        <div class="divider"></div>
                        <p class="card-fulltext">${t.fulltext||"Полное описание отсутствует"}</p>
                        
                        <div class="card-details">
                            <div class="details-column">
                                <p class="detail-item"><span class="detail-label">Капитализация:</span> ${t.cap||"Нет данных"}</p>
                                <p class="detail-item"><span class="detail-label">Популярность:</span> ${t.popular||"Нет данных"}</p>
                                <p class="detail-item"><span class="detail-label">Пользователи:</span> ${t.users||"Нет данных"}</p>
                            </div>
                            <div class="details-column">
                                <p class="detail-item"><span class="detail-label">TPS:</span> ${t.tps||"Нет данных"}</p>
                                <p class="detail-item"><span class="detail-label">Безопасность:</span> ${t.security||"Нет данных"}</p>
                                <p class="detail-item"><span class="detail-label">Токены:</span> ${t.coins?t.coins.join(", "):"Нет данных"}</p>
                            </div>
                        </div>
                    </div>
                </div>
        `}render(t){if(!t){console.error("No data provided for L2Component");return}const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e)}}class f{constructor(t){this.parent=t}addListeners(t){document.getElementById("back-button").addEventListener("click",t)}getHTML(){return'<button id="back-button" class="back-button">Назад</button>'}render(t){const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),this.addListeners(t)}}class b{async get(t,e){try{const n=await fetch(t);await this._handleFetchResponse(n,e)}catch(n){this._handleError(n,e)}}async post(t,e,n){try{const s=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});await this._handleFetchResponse(s,n)}catch(s){this._handleError(s,n)}}async patch(t,e,n){try{const s=await fetch(t,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});await this._handleFetchResponse(s,n)}catch(s){this._handleError(s,n)}}async delete(t,e){try{const n=await fetch(t,{method:"DELETE",headers:{"Content-Type":"application/json"}});await this._handleFetchResponse(n,e)}catch(n){this._handleError(n,e)}}async _handleFetchResponse(t,e){try{const n=t.headers.get("content-type"),s=t.status;let r=null;if(s===204||t.headers.get("content-length")==="0"){e(null,s);return}n&&n.includes("application/json")?r=await t.json():r=await t.text(),e(r,s)}catch(n){console.error("Response handling error:",n),e(null,t.status)}}_handleError(t,e){console.error("Network error:",t),e(null,0)}}const o=new b;class L{constructor(){this.baseUrl="http://localhost:3000"}getL2(){return`${this.baseUrl}/l2`}getL2ById(t){return`${this.baseUrl}/l2/${t}`}createL2(){return`${this.baseUrl}/l2`}removeL2ById(t){return`${this.baseUrl}/l2/${t}`}updateL2ById(t){return`${this.baseUrl}/l2/${t}`}}const l=new L;class y{constructor(t,e){this.parent=t,this.id=e}getData(t){o.get(l.getL2ById(this.id),(e,n)=>{n===200&&e?t(e):(console.error("Ошибка получения данных карточки:",n),t(null))})}get pageRoot(){return document.getElementById("product-page")}getHTML(){return'<div id="product-page"></div>'}clickBack(){new h(this.parent).render()}render(){this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getHTML()),new f(this.pageRoot).render(this.clickBack.bind(this)),this.getData(e=>{e?new v(this.pageRoot).render(e):this.pageRoot.innerHTML="<p>Карточка не найдена</p>"})}}class E{constructor(t){this.parent=t}getHTML(t){return`
            <div class="l2-card" data-card-id="${t.id}">
                <img class="l2-card-img" 
                    src="${t.src}" 
                    alt="${t.title}">
                <div class="l2-card-body">
                    <h5 class="l2-card-title">${t.title}</h5>
                    <p class="l2-card-text">${t.text}</p>
                    <div class="d-flex justify-content-between">
                        <button class="l2-card-button details-btn" 
                                data-id="${t.id}">
                            Подробнее
                        </button>
                        <div class="btn-group">
                            <button class="l2-card-button edit-btn" 
                                    data-id="${t.id}">
                                ✏️
                            </button>
                            <button class="l2-card-button delete-btn" 
                                    data-id="${t.id}">
                                🗑️
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `}render(t,e){const n=this.getHTML(t),s=document.createElement("div");s.innerHTML=n,this.parent.appendChild(s.firstElementChild),this.addListeners(t,e)}addListeners(t,e){const n=this.parent.lastElementChild;n.querySelector(".details-btn").addEventListener("click",e),n.querySelector(".delete-btn").addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("delete-card",{detail:t.id}))}),n.querySelector(".edit-btn").addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("edit-card",{detail:t.id}))})}}class C{constructor(t){this.parent=t}addListeners(t){document.getElementById("add-button").addEventListener("click",t)}getHTML(){return'<button id="add-button" class="add-button">Добавить</button>'}render(t){const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),this.addListeners(t)}}const w=i=>{const t=i.map(n=>n.title),e=new Map;return t.forEach(n=>{const s=[...n.replace(/\s+/g,"").toLowerCase()].sort().join("");e.has(s)||e.set(s,[]),e.get(s).push(n)}),Array.from(e.values()).filter(n=>n.length>1)},T=(i,t,e)=>{const n=document.createElement("button");n.textContent="Показать анаграммы",n.className="l2-button l2-button-anagram",t.appendChild(n);let s=!1;n.addEventListener("click",()=>{if(s=!s,s){const a=w(i).flat(),d=i.filter(c=>a.includes(c.title));e(d),n.textContent="Показать все"}else e(i),n.textContent="Показать анаграммы"})},M=(i,t,e)=>{t.className="l2-search-input",t.addEventListener("input",()=>{const n=t.value.toLowerCase().trim(),s=i.filter(r=>r.title.toLowerCase().startsWith(n));e(s)})},x=(i,t)=>{const e=document.querySelector(t);if(!e)return;const n=document.createElement("div"),s=document.createElement("button"),r=document.createElement("div");s.className="l2-button l2-button-concat",r.className="l2-coins-container";const a=()=>{const c=[...new Set(i.flatMap(u=>u.coins))].sort((u,p)=>u.localeCompare(p,"en",{sensitivity:"base"}));r.innerHTML=`
            <span>Все монеты:</span>
            ${c.join("<span>, </span>")}
        `};s.textContent="Конкатенация названий монет";let d=!1;s.addEventListener("click",()=>{d=!d,r.style.display=d?"block":"none",s.textContent=d?"Скрыть":"Конкатенация названий монет",a()}),n.append(s,r),e.append(n)},$=i=>i.filter(t=>t.title&&t.title!=="Undefined"&&t.src&&t.text&&t.cap!==0&&t.coins.length>0),B=(i,t,e)=>{const n=document.querySelector(t);if(!n)return;const s=document.createElement("button");s.textContent="Удаление нежелательных значений",s.className="l2-button l2-button-clean",s.addEventListener("click",()=>{const r=$(i);i.splice(0,i.length,...r),e(r)}),n.appendChild(s)};class H{constructor(t,e=null){this.parent=t,this.data=e,this.isEditMode=!!e}getHTML(){var t,e,n,s,r,a,d,c,u,p,g;return`
            <div class="edit-form">
                <form id="l2-form">
                    <div class="form-group">
                        <label>URL изображения:</label>
                        <input type="url" id="src" 
                            value="${((t=this.data)==null?void 0:t.src)||""}" 
                            required>
                    </div>

                    <div class="form-group">
                        <label>Название:</label>
                        <input type="text" id="title" 
                            value="${((e=this.data)==null?void 0:e.title)||""}" 
                            required>
                    </div>
                    
                    <div class="form-group">
                        <label>Краткое описание:</label>
                        <textarea id="text" required>${((n=this.data)==null?void 0:n.text)||""}</textarea>
                    </div>

                    <div class="form-group">
                        <label>Полное описание:</label>
                        <textarea id="fulltext">${((s=this.data)==null?void 0:s.fulltext)||""}</textarea>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label>Капитализация:</label>
                            <input type="text" id="cap" 
                                value="${((r=this.data)==null?void 0:r.cap)||""}">
                        </div>

                        <div class="form-group">
                            <label>Популярность:</label>
                            <input type="text" id="popular" 
                                value="${((a=this.data)==null?void 0:a.popular)||""}">
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label>Пользователи:</label>
                            <input type="text" id="users" 
                                value="${((d=this.data)==null?void 0:d.users)||""}">
                        </div>

                        <div class="form-group">
                            <label>TPS:</label>
                            <input type="number" id="tps" 
                                value="${((c=this.data)==null?void 0:c.tps)||0}" 
                                min="0">
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Безопасность:</label>
                        <input type="text" id="security" 
                            value="${((u=this.data)==null?void 0:u.security)||""}">
                    </div>

                    <div class="form-group">
                        <label>Токены (через запятую):</label>
                        <input type="text" id="coins" 
                            value="${((g=(p=this.data)==null?void 0:p.coins)==null?void 0:g.join(", "))||""}">
                    </div>

                    <button type="submit" class="save-btn">
                        ${this.isEditMode?"Сохранить":"Создать"}
                    </button>
                </form>
            </div>
        `}getFormData(){return{src:document.getElementById("src").value,title:document.getElementById("title").value,text:document.getElementById("text").value,fulltext:document.getElementById("fulltext").value,cap:document.getElementById("cap").value,popular:document.getElementById("popular").value,users:document.getElementById("users").value,coins:document.getElementById("coins").value.split(",").map(t=>t.trim()).filter(t=>t),tps:Number(document.getElementById("tps").value),security:document.getElementById("security").value}}validateForm(t){const e=[];return t.src.trim()||e.push("URL изображения обязателен"),t.title.trim()||e.push("Название обязательно"),t.text.trim()||e.push("Краткое описание обязательно"),isNaN(t.tps)&&e.push("TPS должен быть числом"),e.length>0?(alert(e.join(`
`)),!1):!0}render(t){const e=this.getHTML();this.parent.innerHTML=e,document.getElementById("l2-form").addEventListener("submit",n=>{n.preventDefault();const s=this.getFormData();this.validateForm(s)&&t(s)})}}class m{constructor(t,e=null){this.parent=t,this.id=e,this.isEditMode=!!e}get pageRoot(){return document.getElementById("edit-page")}getHTML(){return'<div id="edit-page"></div>'}render(){this.parent.innerHTML="",this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.isEditMode?this.loadExistingData():this.showForm()}async loadExistingData(){o.get(l.getL2ById(this.id),(t,e)=>{e===200?this.showForm(t):console.error("Ошибка загрузки данных")})}showForm(t=null){new H(this.pageRoot,t).render(n=>{this.isEditMode?this.updateL2(n):this.createL2(n)})}createL2(t){o.post(l.createL2(),t,(e,n)=>{n===201&&new h(this.parent).render()})}updateL2(t){o.patch(l.updateL2ById(this.id),t,(e,n)=>{n===200&&new h(this.parent).render()})}}class h{constructor(t){this.parent=t,this.currentData=[]}get pageRoot(){return document.getElementById("main-page")}getHTML(){return`
            <div>
                <div class="main-controls">
                    <input type="text" 
                        id="search-input" 
                        class="main-search-input"
                        placeholder="Поиск названия по префиксу">
                    <div id="add-button-container"></div>
                </div>
                <div class="coins-container"></div>
                <div id="main-page" class="main-page-container"></div>
            </div>
        `}getData(t){o.get(l.getL2(),(e,n)=>{n===200&&Array.isArray(e)?(this.currentData=e,this.renderCards(e),t&&t()):console.error("Ошибка получения данных:",n)})}clickCard(t){const e=t.target.dataset.id;new y(this.parent,e).render()}addL2Card(){new m(this.parent).render()}DeleteL2Card(){document.addEventListener("delete-card",t=>{const e=t.detail;o.delete(l.getL2ById(e),(n,s)=>{s===200&&this.getData()})})}renderCards(t){const e=this.pageRoot;if(!e){console.error("Container not found");return}e.innerHTML="",t.forEach(n=>{new E(e).render(n,this.clickCard.bind(this))}),new C(e).render(this.addL2Card.bind(this))}setupEditListener(){document.addEventListener("edit-card",t=>{const e=t.detail;new m(this.parent,e).render()})}setupEventListeners(){document.addEventListener("delete-card",t=>{const e=t.detail;this.handleDeleteCard(e)}),document.addEventListener("edit-card",t=>{const e=t.detail;this.handleEditCard(e)})}handleDeleteCard(t){o.delete(l.removeL2ById(t),(e,n)=>{n===200&&(this.currentData=this.currentData.filter(s=>s.id!==t),this.renderCards(this.currentData))})}handleEditCard(t){new m(this.parent,t).render()}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),this.setupEventListeners(),this.getData(()=>{T(this.currentData,document.querySelector(".main-controls"),this.renderCards.bind(this)),M(this.currentData,document.getElementById("search-input"),this.renderCards.bind(this)),x(this.currentData,".coins-container"),B(this.currentData,".main-controls",this.renderCards.bind(this))})}}const D=document.getElementById("root"),I=new h(D);I.render();
