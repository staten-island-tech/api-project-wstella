import { DOMSelectors } from "./DOM";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;
    console.log(searchParams);
    const searchQuery = async function () {
      console.log("ansync");
      try {
         const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchParams}&key=${key}`);
  
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
          alert("error error!");
      }
  };
  searchQuery();
  });
};

listen();