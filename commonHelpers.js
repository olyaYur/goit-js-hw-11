import{S as p,i}from"./assets/vendor-46aac873.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g=document.querySelector(".form"),y=document.querySelector("input"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");new p(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,close:!0,enableKeyboard:!0,docClose:!0});g.addEventListener("submit",m);l.style.display="none";function m(o){o.preventDefault();let a=y.value;if(c.innerHTML="",f(),a===""){u(),i.error({title:"Error",timeout:"2000",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}let s=`https://pixabay.com/api/?${new URLSearchParams({key:"41835868-9a86cd0490c6a90cb9e6f50a0",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;console.log(s),fetch(s).then(e=>{if(l.style.display="none",!e.ok)throw new Error("Request is not ok");return e.json()}).then(e=>{if(e.hits.length===0){u(),i.error({title:"Error",timeout:"2000",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"});return}c.innerHTML=d(e.hits),new p(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,close:!0,enableKeyboard:!0,docClose:!0}).refresh()}).catch(e=>i.error({title:"Error",timeout:"2000",message:e,messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight"}))}function d(o){return o.reduce((a,t)=>a+`
  <li class="gallery-list">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img class ="gallery-image" src =${t.webformatURL} alt =${t.tags} />
    </a>
    <span class="gallery-wrapper">
      <span class="gallery-tit-wrap">  
        <span class="gallery-subtitle"><b>Likes</b></span>
        <span class="gallery-sub-title-number">${t.likes}</span>
      </span>
      <span class="gallery-tit-wrap">  
        <span class="gallery-subtitle"><b>Views</b></span>
        <span class="gallery-sub-title-number">${t.views}</span>
      </span>
      <span class="gallery-tit-wrap">  
        <span class="gallery-subtitle"><b>Comments</b></span>
        <span class="gallery-sub-title-number">${t.comments}</span>
      </span>
      <span class="gallery-tit-wrap">  
        <span class="gallery-subtitle"><b>Downloads</b></span>
        <span class="gallery-sub-title-number">${t.downloads}</span>
      </span>
    </span>
 </li> 
  `,"")}function f(){l.style.display="block"}function u(){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
