import{S as p,i as y}from"./assets/vendor-46aac873.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const c=document.querySelector(".form"),m=document.querySelector("input"),g=document.querySelector(".gallery"),n=document.querySelector(".loader");c.addEventListener("submit",d);n.style.display="none";function d(o){o.preventDefault();let a=m.value;a!==""&&(n.style.display="block");let t=`https://pixabay.com/api/?${new URLSearchParams({key:"41835868-9a86cd0490c6a90cb9e6f50a0",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;console.log(t),fetch(t).then(e=>{if(n.style.display="none",!e.ok)throw new Error("Request is not ok");return e.json()}).then(e=>e).then(({hits:e})=>{const s=e.reduce((u,r)=>u+`
     <li class="gallery-list">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img class ="gallery-image" src =${r.webformatURL} alt =${r.tags} />
        </a>
        <span class="gallery-wrapper">
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Likes</b></span>
            <span class="gallery-sub-title-number">${r.likes}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Views</b></span>
            <span class="gallery-sub-title-number">${r.views}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Comments</b></span>
            <span class="gallery-sub-title-number">${r.comments}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Downloads</b></span>
            <span class="gallery-sub-title-number">${r.downloads}</span>
          </span>
        </span>
     </li> 
      `,"");g.innerHTML=s,new p(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,close:!0,enableKeyboard:!0,docClose:!0}).refresh()}).catch(e=>{y.error({position:"bottomCenter",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}),c.reset()}
//# sourceMappingURL=commonHelpers.js.map
