import{i as a,S as c}from"./assets/vendor-46aac873.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let m=new URLSearchParams({key:"41835868-9a86cd0490c6a90cb9e6f50a0",q:"dog",image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`https://pixabay.com/api/?${m}`;console.log(s);document.querySelector(".form");const u=document.querySelector(".gallery");fetch(s).then(o=>{if(!o.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.json()}).then(o=>{let{total:l,totalHits:n,hits:r}=o;return console.log(o),console.log(l),console.log(n),console.log(r),{total:l,totalHits:n,hits:r}=o}).then(({hits:o})=>{const l=o.reduce((n,r)=>n+`
     <li>
        <a class="gallery-link" href="${r.largeImageURL}">
          <img src =${r.webformatURL} alt =${r.tags} />
        </>  
     </li> 
      <li><b>Likes</b> ${r.likes}</li>
      <li><b>Views</b> ${r.views}</li>
      <li><b>Comments</b> ${r.comments}</li>
      <li><b>Downloads</b> ${r.downloads}</li>
      `,"");u.innerHTML=l,console.log(o)}).catch(o=>{a.error({position:"bottomCenter",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})});var f=new c(".gallery a",{captionsData:"alt",captionDelay:250});f.refresh();
//# sourceMappingURL=commonHelpers.js.map
