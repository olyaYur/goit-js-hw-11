import{i as c,S as p}from"./assets/vendor-46aac873.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const y=document.querySelector(".form"),m=document.querySelector("input"),g=document.querySelector(".gallery"),n=document.querySelector(".loader");y.addEventListener("submit",d);function d(o){o.preventDefault();let a=m.value;if(f(),a===""){b(),c.error({title:"Error",timeout:"2000",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}let t=`https://pixabay.com/api/?${new URLSearchParams({key:"41835868-9a86cd0490c6a90cb9e6f50a0",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(t).then(e=>{if(n.style.display="none",!e.ok)throw new Error("Request is not ok");return e.json()}).then(value).then(e=>e).then(({hits:e})=>{const r=e.reduce((u,s)=>u+`
     <li class="gallery-list">
        <a class="gallery-link" href="${s.largeImageURL}">
          <img class ="gallery-image" src =${s.webformatURL} alt =${s.tags} />
        </>
        <span class="gallery-wrapper">
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Likes</b></span>
            <span class="gallery-sub-title-number">${s.likes}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Views</b></span>
            <span class="gallery-sub-title-number">${s.views}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Comments</b></span>
            <span class="gallery-sub-title-number">${s.comments}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Downloads</b></span>
            <span class="gallery-sub-title-number">${s.downloads}</span>
          </span>
        </span>
     </li> 
      `,"");g.innerHTML=r,new p(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,close:!0,enableKeyboard:!0,docClose:!0}).refresh()}).catch(e=>{c.error({position:"bottomCenter",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}function f(){n.style.display="block"}function b(){n.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
