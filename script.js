let addButton=document.querySelector('.addButton');
let theForm=document.querySelector('.theForm');
let cancelButton=document.querySelector('.cancel');
let addBookButton=document.querySelector('.addBooks')
let container=document.querySelector('.books-container')

let bookTitleInput=document.querySelector('.book-title');
let bookAuthorInput=document.querySelector('.author');
let bookPageInput=document.querySelector('.pages');
let isreadInput=document.querySelector('.isRead');
let error=document.querySelector('.error');



addButton.addEventListener('click',displayForm);
cancelButton.addEventListener('click',cancelForm);
addBookButton.addEventListener('click',addBook);


function displayForm(){
    theForm.classList.toggle('show');

}
function cancelForm(){
    theForm.style.display='none';
}


function addBook(){
    let thetitle=bookTitleInput.value;
    let theauthor=bookAuthorInput.value;
    let thepages=Number(bookPageInput.value);
    let isRead=isreadInput.value;

    let title;
    let author;
    let pages;
    
    
    if(thetitle.length>20 || thetitle.length<2){
        error.textContent='title length must be above 2 char and below 20 char';
    }
    else if(theauthor.length>20 || theauthor.length<2){
        error.textContent='autor length must be above 2 char and below 20 char';
    }
    else if(thepages<5){
        error.textContent='page must be greater than 5';
    }
    else{
        error.textContent='';
        title=thetitle;
        author=theauthor;
        pages=thepages;
    
    
    


        class Book{
            constructor (title,author,pages,isRead){
                this.title=title;
                this.author=author;
                this.pages=pages;
                this.isRead=isRead;
            }
        }
        
        let liberary=[];
        let myBook=new Book(title,author,pages,isRead);
        liberary.push(myBook);
        console.log(liberary);
        

        for(let i=0;i<liberary.length;i++){

            let theCard=document.createElement('div');
            let htmltitle=document.createElement('p')
            htmltitle.textContent=`the titel is ${liberary[i].title}`
            theCard.appendChild(htmltitle);

            let htmlauthor=document.createElement('p')
            htmlauthor.textContent=`the author is ${liberary[i].author}`
            theCard.appendChild(htmlauthor);

            let htmlpages=document.createElement('p')
            htmlpages.textContent=`the page is ${liberary[i].pages}`
            theCard.appendChild(htmlpages);

            let htmlisread=document.createElement('p')
            if (isreadInput.checked){
                htmlisread.textContent='the book is read'
            }else{
                htmlisread.textContent='the book is not read'
            }
            theCard.appendChild(htmlisread);


            let removeButton=document.createElement('button')
            removeButton.textContent='remove';
            theCard.appendChild(removeButton);


            removeButton.addEventListener('click',removeBook)
            function removeBook(){
                container.removeChild(theCard);
            }


            theCard.classList.add('theNew');
            container.appendChild(theCard);

            bookTitleInput.value='';
            bookAuthorInput.value='';
            bookPageInput.value='';
            isreadInput.value='';

        }
    }
    
    

}