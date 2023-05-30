let myBookCollection = [];

const triggerButton = document.querySelector("#trigger");
const body = document.querySelector('body')
const bookDivContainer = document.querySelector('#collection-container');

//Object constructor

function BookRegistration (title, author, numberOfPages, haveRead){
	this.title = title,
	this.author = author,
	this.numberOfPages = numberOfPages,
	this.haveRead = Boolean(haveRead);
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
		registeredBook.setAttribute('style', 'background-color: grey; height:100%; width: 100%; border-radius: 15px; box-sizing: border-box; padding: 20px 10px; display: flex; flex-direction: column; justify-content: space-around; align-items: center;')
		bookDivContainer.appendChild(registeredBook)
		addBookInfo(i, 'title', registeredBook, 'Title');
		addBookInfo(i, 'author', registeredBook, 'Author Name');
		addBookInfo(i, 'numberOfPages', registeredBook, 'Number of Pages');
		let buttonsSpace = document.createElement('div');
		buttonsSpace.setAttribute('style', 'display: flex; justify-content: space-around; width: 215px;');
		registeredBook.appendChild(buttonsSpace);
		let changeReadStatus = document.createElement('button');
		changeReadStatus.setAttribute('style', 'border-radius: 5px; border: none;')
		changeReadStatus.classList.add('status');
		if (myBookCollection[i].haveRead) {
			console.log(registeredBook.haveRead);
			changeReadStatus.textContent = 'READ';
			changeReadStatus.classList.toggle('read');
		} else {
			changeReadStatus.textContent = "NOT READ";
		}
		buttonsSpace.appendChild(changeReadStatus);
		let bookEraser = document.createElement("button");
		bookEraser.setAttribute('style', 'border-radius: 5px; border: none;')
		bookEraser.textContent = 'ERASE';
		buttonsSpace.appendChild(bookEraser);
	}
}

//Pop up data collecter creation

const divDataCollecter = document.createElement('div');
divDataCollecter.style.backgroundColor = 'rgb(219, 134, 73)';
divDataCollecter.setAttribute('id', 'data-collecter');

const exitDisplay = document.createElement('div');
divDataCollecter.appendChild(exitDisplay);

const exitButton = document.createElement('button');
exitButton.setAttribute('type', 'button');
exitButton.setAttribute('style', 'border-radius: 50%; padding: 2px 7px; font-size: 14px;  position: absolute; top: 5px; right: 5px;');
exitButton.textContent = 'x';
exitDisplay.appendChild(exitButton);


const titleDisplay = document.createElement('div');
divDataCollecter.appendChild(titleDisplay);

const titleLabel = document.createElement('label');
titleLabel.setAttribute('for', 'title');
titleLabel.textContent = 'Title: ';
titleDisplay.appendChild(titleLabel);

const titleInput = document.createElement('input');
titleInput.setAttribute('id', 'name');
titleInput.setAttribute('placeholder', 'Book Title');
titleDisplay.appendChild(titleInput);


const authorDisplay = document.createElement('div');
divDataCollecter.appendChild(authorDisplay);

const authorLabel = document.createElement('label');
authorLabel.setAttribute('for', 'author');
authorLabel.textContent = 'Author: ';
authorDisplay.appendChild(authorLabel);

const authorInput = document.createElement('input');
authorInput.setAttribute('id', 'author');
authorInput.setAttribute('placeholder', 'Author Name')
authorDisplay.appendChild(authorInput);


const pageDisplay = document.createElement('div');
divDataCollecter.appendChild(pageDisplay);

const pagesLabel = document.createElement('label');
pagesLabel.setAttribute('for', 'pages');
pagesLabel.textContent = "Number of Pages: ";
pageDisplay.appendChild(pagesLabel);

const pagesInput = document.createElement('input');
pagesInput.setAttribute('id', 'pages')
pagesInput.setAttribute('placeholder', 'Number of Pages');
pagesInput.setAttribute('type', 'number');
pageDisplay.appendChild(pagesInput);



const readDisplay = document.createElement('div');
divDataCollecter.appendChild(readDisplay);

const readCheckbox = document.createElement('input');
readCheckbox.setAttribute('type', 'checkbox');
readCheckbox.setAttribute('id', 'read');
readDisplay.appendChild(readCheckbox);

const readLabel = document.createElement('label');
readLabel.setAttribute('for', 'read');
readLabel.textContent = 'Have you read this book?';
readDisplay.appendChild(readLabel);

const submitDisplay = document.createElement('div');
divDataCollecter.appendChild(submitDisplay);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Save';
submitDisplay.appendChild(submitButton);


//Pop up data collecter
triggerButton.addEventListener('click', ()=> {
  body.appendChild(divDataCollecter);
});


//Create new book
submitButton.addEventListener('click', (event)=> {
	let titleEntered = titleInput.value;
	let authorEntered = authorInput.value;
	let pagesEntered = pagesInput.value
	let readStatus = readCheckbox.checked;
	if (titleEntered && authorEntered && pagesEntered){
		let bookCreated = new BookRegistration (titleEntered, authorEntered, pagesEntered, readStatus);
		addBookToLibrary(bookCreated);
		checkBookCollection(myBookCollection);
		titleInput.value = '';
		authorInput.value = '';
		pagesInput.value = '';
		readCheckbox.checked = false;
		body.removeChild(divDataCollecter);
	} else {
		titleInput.value = '';
		authorInput.value = '';
		pagesInput.value = '';
		readCheckbox.checked = false;
		alert('All the fields should be filled for the book to be registered.');
	}
	
});

//Exit button

exitButton.addEventListener('click', ()=> {
	titleInput.value = '';
	authorInput.value = '';
	pagesInput.value = '';
	readCheckbox.checked = false;
  body.removeChild(divDataCollecter);
})