const form = document.querySelector("form");
const bookBtn = document.querySelector("main>div>div:first-of-type button");
const cancelBtn = document.querySelector("main>div>div:last-of-type button:first-of-type");
const submitBtn = document.querySelector("main>div>div:last-of-type button:last-of-type");
const bookDiv = document.querySelector(".add")
// let books = document.querySelectorAll("main>div>div>div");
// let bookLength = books.length;
// const bok = books[0];
const container = document.querySelector("main>div>div:nth-of-type(2)")
document.querySelector("main>div>div>div")
const Library = [];
const title = document.querySelector("form input:first-of-type");
const author = document.querySelector("form input:nth-of-type(2)");
const pages = document.querySelector("form input:nth-of-type(3)");

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

// Book object construct
function Book(name,author,pages,state){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.state = state;
}

//
// Book.prototype.checkSt = function(button) {
//     button.addEventListener("click", () => {
//         p3.innerText = "STATE: " + button.innerText;
//     })
// }

// function AddBoo

function AddBook(name,author,pages,state){
    Book.call(this,name,author,pages,state)
    const cont = document.createElement("div");
    cont.style.minWidth = "310px";
    const h2 = document.createElement("h2");
    h2.innerText = this.name;
    // h2.pr
    cont.appendChild(h2);
    const detail = document.createElement("div")
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const button = document.createElement("button");
    button.innerText = "REMOVE";
    const read = document.createElement("button")
    read.innerText = "READ";
    const Unread = document.createElement("button")
    Unread.innerText = "UNREAD";
    const reading = document.createElement("button")
    reading.innerText = "READING";
    const radios = document.createElement("div");
    radios.appendChild(Unread);
    radios.appendChild(read);
    radios.appendChild(reading);
    radios.style.display = "flex";
    radios.style.flexDirection = "row";
    radios.style.gap = "10px";
    radios.style.height = "50px";
    radios.style.marginBottom = "5px";
    read.style.backgroundColor = "#ffffff";
    read.style.borderColor = "#ffffff";
    Unread.style.backgroundColor = "#ffffff";
    Unread.style.borderColor = "#ffffff";
    reading.style.backgroundColor = "#ffffff";
    reading.style.borderColor = "#ffffff";
    read.style.color = "rgb(3, 119, 81)";
    Unread.style.color = "lightcoral";
    reading.style.color = "rgb(42, 124, 231)";
    button.style.backgroundColor = "rgb(83, 83, 238)";
    button.style.borderColor = "rgb(83, 83, 238)";
    button.style.color = "#ffffff";
    button.addEventListener("click", () => {
        container.removeChild(cont)
    })
    p1.innerText = "AUTHOR: " + this.author;
    p2.innerText = "PAGES: " + this.pages;
    p3.innerText = "STATE: " + this.state;
    detail.appendChild(p1);
    detail.appendChild(p2);
    detail.appendChild(p3);
    cont.appendChild(detail);
    cont.appendChild(radios);
    cont.appendChild(button);
    cont.classList.add(this.state);
    this.joinBook = function(){
    container.appendChild(cont);
    }
    read.addEventListener("click", () => {
        p3.innerText = "STATE: " + read.innerText;
        cont.classList.replace(this.state,read.innerText);
        this.state = read.innerText;
    })
    Unread.addEventListener("click", () => {
        p3.innerText = "STATE: " + Unread.innerText;
        cont.classList.replace(this.state,Unread.innerText)
        this.state = Unread.innerText;
    })
    reading.addEventListener("click", () => {
        p3.innerText = "STATE: " + reading.innerText;
        cont.classList.replace(this.state,reading.innerText)
        this.state = reading.innerText;
    })
    // this.checkSt(read);
    // this.checkSt(Unread);
    // this.checkSt(reading);
}
AddBook.prototype = Object.create(Book.prototype);

//add default books
window.addEventListener("load",() => {
    const bookA = new AddBook("NO SWEETNESS HERE","AMA ATTA AIDOO",230,"READ");
    bookA.joinBook();
    Library.push(bookA)
    const bookB = new AddBook("THE KAYA-GIRL","MAMLE WOLO",160,"UNREAD");
    bookB.joinBook();
    Library.push(bookB)
    const bookC = new AddBook("THE SON OF UMBELE","BILL MARSHALL",78,"UNREAD");
    bookC.joinBook()
    Library.push(bookC);
    alert("Change the state of the books by clicking on the corresponding button");
})



//form submit button
submitBtn.addEventListener("click",(event) => {
    event.preventDefault();
    const state = document.querySelector("fieldset>div input:checked");
    const book1 = new AddBook(title.value,author.value,pages.value,state.value);
    book1.joinBook();
    Library.push(book1);
    if(form.style.display = "block"){
        form.style.display = "none";
    }
    title.value = "";
    author.value = "";
    pages.value = "";
    state.value = "";
    // if (books[bookLength- 1] !== bookDiv) {

    // }
})

// console.log(Library)

//make elements
