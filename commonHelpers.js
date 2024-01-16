import{i as c}from"./assets/vendor-4d6948b9.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let a=new URLSearchParams({key:"41835868-9a86cd0490c6a90cb9e6f50a0",q:"dog",image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`https://pixabay.com/api/?${a}`;console.log(s);document.querySelector(".form");document.querySelector(".todo-list");const u=document.querySelector(".images-list");fetch(s).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()}).then(r=>{let{total:n,totalHits:i,hits:o}=r;return console.log(r),console.log(n),console.log(i),console.log(o),{total:n,totalHits:i,hits:o}=r}).then(({hits:r})=>{const n=r.reduce((i,o)=>i+`
      <li>${o.likes}</li>
      <li>${o.downloads}</li>
      <li>${o.comments}</li>
      <li>${o.views}</li>
      <li><img src =${o.webformatURL} alt =${o.tags} /></li>
      
      `,"");u.innerHTML=n,console.log(r)}).catch(r=>{c.error({position:"bottomCenter",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})});
//# sourceMappingURL=commonHelpers.js.map
