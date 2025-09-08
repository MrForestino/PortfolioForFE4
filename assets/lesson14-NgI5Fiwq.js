import"./modulepreload-polyfill-B5Qt9EMX.js";//! Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.
const e=((o,r)=>new Promise(a=>{setTimeout(()=>{a(o)},r)})),s=[e("Mango",1e3),e("Melon",500),e("Banana",1500),e("Apple",3e3),e("Blackbarry",2500)];Promise.all(s).then(o=>{console.log("All promises finished!"),console.log(o)});//! Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race і отримати результат найшвидшого проміса.
const n=o=>{const r=Math.floor(Math.random()*2001+1e3);return new Promise(a=>{setTimeout(()=>{a(o)},r)})},l=[n("Salmon"),n("Tuna"),n("Cod"),n("Sardines"),n("Rainbow Trout")];Promise.race(l).then(o=>{console.log(`Ви зловили: 
`,o)});//!     Promise.all([promise1, promise2, promise3, ...])
//!     Promise.race([promise1, promise2, promise3, ...])
//!     Promise.any([promise1, promise2, promise3, ...])
