import"./modulepreload-polyfill-B5Qt9EMX.js";const c=document.getElementById("fetch"),a=document.querySelector(".data-list"),r=document.querySelector(".input");c.addEventListener("click",o);function o(){const n=r.value;n&&i(n).then(e=>u(e)).catch(e=>console.log("error:",e))}function i(n){const e=`https://pixabay.com/api/?key=52184343-76bc171bca116367cd41e01b5&q=cat&image_type=photo&min_width=300&min_height=250&per_page=${n}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits).catch(t=>{alert("Помилка при завантаженні зображень: "+t.message)})}function u(n){const e=n.map(t=>`
        <li>
          <img src="${t.webformatURL}" alt="${t.tags}" width="300">
          <p>${t.tags||"Без опису"}</p>
          <p>Автор: ${t.user}</p>
          <a href="${t.pageURL}" target="_blank">Дивитись на Pixabay</a>
        </li>
      `).join("");a.innerHTML=e}
