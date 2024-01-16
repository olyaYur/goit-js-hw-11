"use strict";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


let searchParams = new URLSearchParams({
    key: '41835868-9a86cd0490c6a90cb9e6f50a0',
    q: 'dog',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  });

let url = `https://pixabay.com/api/?${searchParams}`
console.log(url);


const form = document.querySelector('.form');

const imgList = document.querySelector('.gallery');
    fetch(url)
    
    .then((response) => {
      if(!response.ok) {
        throw new Error(
         'Sorry, there are no images matching your search query. Please try again!',
      ); 
      }
      return response.json();
    })
    .then((value) => {
      let {total, totalHits, hits} = value;
      console.log(value);
      console.log(total);
      console.log(totalHits);
      console.log(hits);
       return {total, totalHits, hits} = value;     
    })
    .then(({hits}) => { const renderImg = hits.reduce((html, hit) => html + `
     <li class="gallery-list">
        <a class="gallery-link" href="${hit.largeImageURL}">
          <img class ="gallery-image" src =${hit.webformatURL} alt =${hit.tags} />
        </>
        <span class="gallery-wrapper">
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Likes</b></span>
            <span class="gallery-sub-title-number">${hit.likes}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Views</b></span>
            <span class="gallery-sub-title-number">${hit.views}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Comments</b></span>
            <span class="gallery-sub-title-number">${hit.comments}</span>
          </span>
          <span class="gallery-tit-wrap">  
            <span class="gallery-subtitle"><b>Downloads</b></span>
            <span class="gallery-sub-title-number">${hit.downloads}</span>
          </span>
        </span>
     </li> 
      
      
      `, "");
      imgList .innerHTML = renderImg;

      console.log(hits);
    })
    .catch((error) =>{
      iziToast.error({
        position: 'bottomCenter',
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
    })

    var lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});

    lightbox.refresh();


