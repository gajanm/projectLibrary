const cardsContainer = document.querySelector(".cards");
const addButton = document.querySelector("#add");
const formPopup = document.querySelector(".form-popup")
const form = document.querySelector(".form-container")
const bookInput = document.querySelector("#book-title");
const authorInput = document.querySelector("#author");
const pageInput = document.querySelector("#page-number");
const readInput = document.querySelector("#read");
const unreadInput = document.querySelector("#unread");
const everythingExcept = document.querySelectorAll(".overlay")

let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    
}



let tempTitle;
let tempAuthor;
let tempPages;
let tempRead;

addButton.addEventListener("click", () =>{
    formPopup.style.display = "block";
    everythingExcept.forEach((one) =>
    {
        one.style.opacity = "0.2";
    });

})
 



form.addEventListener("submit", (event) =>{

    tempTitle = bookInput.value;
    tempAuthor= authorInput.value;
    tempPages = pageInput.value;
    if(readInput.checked){
        tempRead = "Yes";
    }
    else if (unreadInput.checked){
        tempRead = "No";
    }
    const book = new Book(tempTitle, tempAuthor, tempPages, tempRead);
    myLibrary.push(book);


    everythingExcept.forEach((one) =>
    {
        one.style.opacity = "1";
    });
    event.preventDefault();


    form.reset();
    formPopup.style.display = "none";
    
    addBookToLibrary();
   
})


function addBookToLibrary() {
    makeCard()
}



function makeCard(){
    const cell = document.createElement("div");

    const titleNode = document.createElement("h3");
    titleNode.innerHTML = `Title: ${tempTitle}`

    const authorNode = document.createElement("h3");
    authorNode.innerHTML = `Author: ${tempAuthor}`

    const pagesNode = document.createElement("h3");
    pagesNode.innerHTML = `Pages: ${tempPages}`

    const readNode = document.createElement("h3");
    readNode.innerHTML = `Read: ${tempRead}`

    const deleteNode = document.createElement("button");
    deleteNode.innerHTML = "Delete";

    const changeReadNode = document.createElement("button");
    changeReadNode.innerHTML = "Update";
    

    cell.appendChild(titleNode).className = "title";
    cell.appendChild(authorNode).className = "author";
    cell.appendChild(pagesNode).className = "pages";
    cell.appendChild(readNode).className = "readStatus";
    cell.appendChild(deleteNode).className = "deleteButton";
    cell.appendChild(changeReadNode).className = "updateButton";

    cardsContainer.appendChild(cell).className = "card";

    let deleter = document.querySelectorAll(".deleteButton");
    let updater = document.querySelectorAll(".updateButton");

    deleter.forEach((one)=>{
        one.addEventListener("click", ()=>{
            cardsContainer.removeChild(one.parentNode);
            myLibrary.splice(myLibrary.length-1, 1)
        })
    })

    updater.forEach((one)=>{
        one.addEventListener("click", ()=>{
            let readStat = one.parentNode.querySelector(".readStatus");
            if (readStat.innerHTML == "Read: Yes"){
                readStat.innerHTML = "Read: No";
            }
            else{
                readStat.innerHTML = "Read: Yes";
            }

        }
        )  
        })
    



}












function displayLibrary(){
    for (book in myLibrary){
        console.log(book);
    }
}
