import"./modulepreload-polyfill-B5Qt9EMX.js";const h=document.getElementById("per-page"),m=document.getElementById("element-after-which"),f=document.querySelector(".fetch-btn"),d=document.querySelector(".number-elements"),p=document.querySelector(".page"),b=document.querySelector(".number-of-pages"),g=document.querySelector(".elements-list"),s=document.getElementById("prev"),u=document.getElementById("next");//! Кількість елементів N у групі (на сторінці):
let n;//! Кількість елементів у колекції:
let o;//! Номер сторінки (ініціалізуємо 1-ю сторінку за замовчуванням)
let t=1;//! Кількість груп (сторінок):
let a;f.addEventListener("click",l);s.addEventListener("click",E);u.addEventListener("click",y);function l(){x().then(e=>{console.log("Elements: ",e),typeof e.totalHits=="number"?(o=e.totalHits,a=Math.ceil(o/n)||1):typeof e.total=="number"?(o=e.total,a=Math.ceil(o/n)||1):(o=e.hits&&e.hits.length||e.results&&e.results.length||0,a=Math.ceil(o/n)||1),d.textContent=o,b.textContent=a,p.textContent=t,s.disabled=t<=1,u.disabled=t>=a,P(e)}).catch(e=>console.log("error:",e))}function E(){t>1&&(t--,l())}function y(){t++,l()}function x(){const e="https://pixabay.com/api/";n=Number(h.value),Number(m.value),(!Number.isFinite(n)||n<=0)&&(n=20),n=Math.max(3,Math.min(200,Math.floor(n))),t=Number(t)||1,t<1&&(t=1);const i=new URLSearchParams({key:"52184343-76bc171bca116367cd41e01b5",q:"cat",image_type:"photo",min_width:300,min_height:250,per_page:n,page:t});return fetch(`${e}?${i}`).then(r=>r.ok?r.json():r.text().then(c=>{throw new Error(r.status+" "+c)}))}function P(e){console.log(e);const r=(e.hits||e.results||[]).map(c=>`
        <li>
          <img src="${c.webformatURL}" alt="${c.tags}" width="300">
          <p>${c.tags||"Без опису"}</p>
          <p>Автор: ${c.user}</p>
          <a href="${c.pageURL}" target="_blank">Дивитись на Pixabay</a>
        </li>
      `).join("");g.innerHTML=r}
