import { DOMSelectors } from "./DOM";
const key = "AIzaSyCm0wguE_cR7SS3niaYP7PjVHj0_HWoMO0";


const query = async function(){
    try {
       const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=summer&maxResults=12&printType=books&key=${key}`);

         const data = await response.json();
         data.items.forEach((book) => {
             DOMSelectors.grid.insertAdjacentHTML("beforeend", `<div class="book-card">
             <div class="book-card-front">
               <img
                 src="${book.volumeInfo.imageLinks.thumbnail}"
                 alt=""
                 class="poster"
               />
             </div>
             <div class="book-card-back">
               <h3 class="book-card-header">${book.volumeInfo.title}</h3>
               <div class="author-box">
                    <p class="author">By</p>
                    <p class="author">${book.volumeInfo.authors}</p>
               </div>
     
               <div class="publish-box">
                 <p class="publish-date">Published on</p>
                 <p class="publish-date">${book.volumeInfo.publishedDate}</p>
               </div>
     
               <div class="book-genres">
                 <li class="book-genre">${book.volumeInfo.categories}</li>

               </div>
             </div>
           </div>`);
         });

    } catch (error) {
        console.log(error);
        alert("error error");
    }
};
query();