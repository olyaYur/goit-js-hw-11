

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const formSearch = document.querySelector('.form');
const inputField = document.querySelector('input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', 
      {captionsData: "alt",
       captionDelay: 250,
       nav: true,
       close: true,
       enableKeyboard: true,
       docClose: true,
      });

formSearch.addEventListener("submit", searchImages);

loader.style.display = 'none';

function searchImages(event) {
  event.preventDefault();

  let name = inputField.value;

  gallery.innerHTML = '';

  showLoader();

  if (name === '') {
    closeLoader();

    iziToast.error({
      title: 'Error',
      timeout: '2000',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
      position: 'topRight',
    });
    return;
  }

  let searchParams = new URLSearchParams({
    key: '41835868-9a86cd0490c6a90cb9e6f50a0',
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  });

  let url = `https://pixabay.com/api/?${searchParams}`
  console.log(url);

  fetch(url)
    .then(response => {
      loader.style.display = 'none';
      if (!response.ok) {
        throw new Error('Request is not ok');
      }

      return response.json();
    })
    .then(images => {
      if (images.hits.length === 0) {
        closeLoader();

        iziToast.error({
          title: 'Error',
          timeout: '2000',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FAFAFB',
          backgroundColor: '#EF4040',
          position: 'topRight',
        });
        return;
      }

      gallery.innerHTML = addImages(images.hits);
      const lightbox = new SimpleLightbox('.gallery a', 
      {captionsData: "alt",
       captionDelay: 250,
       nav: true,
       close: true,
       enableKeyboard: true,
       docClose: true,
      });
      lightbox.refresh();
    })
    .catch(error =>
      iziToast.error({
        title: 'Error',
        timeout: '2000',
        message: error,
        messageColor: '#FAFAFB',
        backgroundColor: '#EF4040',
        position: 'topRight',
      })
    );
}

function addImages(images) {
  return images.reduce((html, hit) => html + `
  <li class="gallery-list">
    <a class="gallery-link" href="${hit.largeImageURL}">
      <img class ="gallery-image" src =${hit.webformatURL} alt =${hit.tags} />
    </a>
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
}

function showLoader() {
  loader.style.display = 'block';
}
function closeLoader() {
  loader.style.display = 'none';
}