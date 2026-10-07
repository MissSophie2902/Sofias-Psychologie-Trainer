const actions=document.querySelectorAll("[data-action], [data-nav], .term-row, .text-button, .secondary-button");
actions.forEach(el=>el.addEventListener("click",()=>{const label=el.dataset.action||el.dataset.nav||el.textContent.trim(); if(label==="start"||label==="Heute lernen") alert("Die Lernsession wird als Nächstes mit Supabase und deinen echten Fachbegriffen verbunden. 🌸");}));
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
