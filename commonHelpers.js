import{i,S as c}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}})();let p=new URLSearchParams({key:"41835868-9a86cd0490c6a90cb9e6f50a0",q:"dog",image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`https://pixabay.com/api/?${p}`;console.log(n);document.querySelector(".form");const g=document.querySelector(".gallery");fetch(n).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()}).then(r=>{let{total:t,totalHits:l,hits:s}=r;return console.log(r),console.log(t),console.log(l),console.log(s),{total:t,totalHits:l,hits:s}=r}).then(({hits:r})=>{const t=r.reduce((l,s)=>l+`
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
      
      
      `,"");g.innerHTML=t,console.log(r)}).catch(r=>{i.error({position:"bottomCenter",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})});var u=new c(".gallery a",{captionsData:"alt",captionDelay:250});u.refresh();
//# sourceMappingURL=commonHelpers.js.map
