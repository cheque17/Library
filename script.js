let myBookCollection = [];

const triggerButton = document.querySelector("#trigger");
const body = document.querySelector('body')
const bookDivContainer = document.querySelector('#collection-container');

//Object constructor

function BookRegistration (title, author, numberOfPages, haveRead){
    this.title = title,
    this.author = author,
    this.numberOfPages = numberOfPages,
    this.haveRead = haveRead
}

//Store books in the array function

function addBookToLibrary (newBook) {
    myBookCollection.push(newBook);
}

//Function that attaches a new paragraph with info in the book card

function addBookInfo (i, propertyName, addedBook, infoDisplayed ) {
    let infoParagraph = document.createElement('p');
    infoParagraph.textContent = `${infoDisplayed}: ${myBookCollection[i][propertyName]}`;   
    addedBook.appendChild(infoParagraph);
}

//Loop through the array function

function checkBookCollection (bookCollection) {
    for (let i = (bookDivContainer.childElementCount); i<(bookCollection.length); i++) {
        let registeredBook = document.createElement('div');
        registeredBook.style.backgroundColor = 'grey';
        registeredBook.style.height = '100%';
        registeredBook.style.width = "100%";
        registeredBook.style.borderRadius= '15px';
        registeredBook.style.boxSizing = 'border-box';
        registeredBook.style.padding = '20px 10px'
        bookDivContainer.appendChild(registeredBook)
        addBookInfo(i, 'title', registeredBook, 'Title');
        addBookInfo(i, 'author', registeredBook, 'Author Name');
        addBookInfo(i, 'numberOfPages', registeredBook, 'Number of Pages');
        addBookInfo(i, 'haveRead', registeredBook, 'Read Status');
    }
}

//Pop up data collecter

const divDataCollecter = document.createElement('div')
divDataCollecter.setAttribute('id', 'data-collecter')
divDataCollecter.textContent='ADD A NEW BOOK'
divDataCollecter.style.backgroundColor = 'grey';

triggerButton.addEventListener('click', (event)=> {
    console.log(event);
    checkBookCollection(myBookCollection);
});
    //body.appendChild(divDataCollecter))