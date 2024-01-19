import{S as c,i as u}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=document.querySelector(".form"),m=document.querySelector("input"),y=document.querySelector(".gallery");document.querySelector(".loader");p.addEventListener("submit",g);function g(n){n.preventDefault();let s=m.value,t=`https://pixabay.com/api/?${new URLSearchParams({key:"41835868-9a86cd0490c6a90cb9e6f50a0",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(t).then(e=>{if(!e.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.json()}).then(e=>e).then(({hits:e})=>{const r=e.reduce((i,a)=>i+`
     <li class="gallery-list">
        <a class="gallery-link" href="${a.largeImageURL}">
          <img class ="gallery-image" src =${a.webformatURL} alt =${a.tags} />
        </>
        <span class="gallery-wrapper">
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Likes</b></span>
            <span class="gallery-sub-title-number">${a.likes}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Views</b></span>
            <span class="gallery-sub-title-number">${a.views}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Comments</b></span>
            <span class="gallery-sub-title-number">${a.comments}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Downloads</b></span>
            <span class="gallery-sub-title-number">${a.downloads}</span>
          </span>
        </span>
     </li> 
      `,"");y.innerHTML=r,new c(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,close:!0,enableKeyboard:!0,docClose:!0}).refresh()}).catch(e=>{u.error({position:"bottomCenter",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}
//# sourceMappingURL=commonHelpers.js.map
