import"./assets/vendor-f070e68e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.querySelector(".form"),a=document.querySelector(".list");let u=new URLSearchParams({key:"41835868-9a86cd0490c6a90cb9e6f50a0",q:"dog",image_type:"photo",orientation:"horizontal",safesearch:!0}),l=`https://pixabay.com/api/?${u}`;console.log(l);i.addEventListener("click",()=>{fetch(l).then(o=>{if(!o.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.json()}).then(o=>{console.log(o);const n=o.reduce((s,r)=>s+`<li class= "gallery-item"> 
                        <img src=${r.webformatURL} data-sourse=${r.largeImageURL} alt=${r.tags} />
                        <p>likes : ${r.likes}</p>
                        <p>views : ${r.views} </p>
                        <p>comments: ${r.comments} </p>
                        <p>downloads: ${r.downloads} </p>
	        </li>`,"");a.insertAdjacentHTML("beforeend",n)}).catch(o=>console.log(o))});
//# sourceMappingURL=commonHelpers.js.map
