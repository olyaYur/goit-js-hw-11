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
const list = document.querySelector('.todo-list');



const imgList = document.querySelector('.images-list');
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
      <li>${hit.likes}</li>
      <li>${hit.downloads}</li>
      <li>${hit.comments}</li>
      <li>${hit.views}</li>
      <li><img src =${hit.webformatURL} alt =${hit.tags} /></li>
      
      `, "");
      imgList.innerHTML = renderImg;

      console.log(hits);
    })
    .catch((error) =>{
      iziToast.error({
        position: 'bottomCenter',
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
    })




/*
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((todos)=>{
      list.innerHTML = todos.reduce((html, todo) => html + `
      <li>${todo.title}</li>
      `, "");
      console.log(todos);
    })
    .catch((error) =>{
       console.log(error)
    })
*/
