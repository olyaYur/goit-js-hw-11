"use strict";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";




const form = document.querySelector('.form');
const list = document.querySelector('.list');

/*var API_KEY = '41835868-9a86cd0490c6a90cb9e6f50a0';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="*/



let searchParams = new URLSearchParams({
    key: '41835868-9a86cd0490c6a90cb9e6f50a0',
    q: 'dog',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  });

let url = `https://pixabay.com/api/?${searchParams}`
console.log(url);

form.addEventListener("click", () => {  
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Sorry, there are no images matching your search query. Please try again!");
      }
      return response.json();
    })
    .then((images) => {
        
      console.log(images);  

      const markup = images.reduce((html, image) => {
				return (
                    html +
                    `<li class= "gallery-item"> 
                        <img src=${image.webformatURL} data-sourse=${image.largeImageURL} alt=${image.tags} />
                        <p>likes : ${image.likes}</p>
                        <p>views : ${image.views} </p>
                        <p>comments: ${image.comments} </p>
                        <p>downloads: ${image.downloads} </p>
	        </li>`
        );
    }, '');
        
        list.insertAdjacentHTML("beforeend", markup);
    })
    .catch((error) => console.log(error));
});

/*
const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((users) => {
      const markup = users.map((user) => {
				return `<li>
	          <p><b>Title</b>: ${user.title}</p>
	          <p><b>url</b>: ${user.url}</p>
	          <p><b>thumbnailUrl</b>: ${user.thumbnailUrl}</p>
            <img src=${user.url} alt="альтернативний текст">
	        </li>`;
        })
        .join("");
        
			userList.insertAdjacentHTML("beforeend", markup);
    })
    .catch((error) => console.log(error));
});

*/