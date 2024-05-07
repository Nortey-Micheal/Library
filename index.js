const form = document.querySelector("form");
const bookBtn = document.querySelector("main>div>div:first-of-type button");
const cancelBtn = document.querySelector("main>div>div:last-of-type button:first-of-type");
const submitBtn = document.querySelector("main>div>div:last-of-type button:last-of-type");
const books = document.querySelectorAll("main>div>div>div")
let Library = Array.from(books) 

// display form to add book
bookBtn.addEventListener("click", () => {
    if(form.style.display = "none") {
        form.style.display = "block";
    }
})

// remove form to add book
cancelBtn.addEventListener("click", () => {
    if(form.style.display = "block"){
        form.style.display = "none";
    }
})

function Book(name,author,pages,state){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.state = state;
}



submitBtn.addEventListener("click",() => {

})