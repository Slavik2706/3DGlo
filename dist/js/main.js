(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let a=setInterval((()=>{let e=(()=>{let e=(new Date("25 june 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.hours.toString().padStart(2,"0"),o.textContent=e.minutes.toString().padStart(2,"0"),r.textContent=e.seconds.toString().padStart(2,"0"),e.timeRemaining<=0&&(clearInterval(a),t.textContent="0".padStart(2,"0"),o.textContent="0".padStart(2,"0"),r.textContent="0".padStart(2,"0"))}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(e=>{e.target.matches("a")&&o()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=window.innerWidth;let r=0;t.forEach((t=>{t.addEventListener("click",(()=>{if(o<768)e.style.display="block";else{e.style.opacity=r,e.style.display="block";let t=setInterval((function(){r<=1?(r+=.05,e.style.opacity=r):clearInterval(t)}),30)}}))})),e.addEventListener("click",(t=>{if(!t.target.closest(".popup-content")||t.target.classList.contains("popup-close")){let t=setInterval((function(){r>0?(r-=.05,e.style.opacity=r):(clearInterval(t),e.style.display="none")}),30)}}))})(),(()=>{const e=document.querySelectorAll(".calc-block input"),t=document.querySelectorAll("form [type=text]"),o=document.querySelector('form [placeholder="Ваше сообщение"]'),r=document.querySelectorAll("form [type=email]"),a=document.querySelectorAll("form [type=tel]");e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\- ]/,""),console.log(e.target.value)}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/,"")}))})),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\- ]/,"")})),a.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d()\-]/,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let r,a=0;for(let e=0;e<t.length;e++){const e=document.createElement("li");e.classList.add("dot"),o.append(e)}const n=document.querySelectorAll(".dot"),l=(e,t,o)=>{e[t].classList.remove(o)},c=(e,t,o)=>{e[t].classList.add(o)},s=()=>{l(t,a,"portfolio-item-active"),l(n,a,"dot-active"),a++,a>=t.length&&(a=0),c(t,a,"portfolio-item-active"),c(n,a,"dot-active")},i=(e=1500)=>{r=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,a,"portfolio-item-active"),l(n,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&n.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),c(t,a,"portfolio-item-active"),c(n,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(r)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})()})();