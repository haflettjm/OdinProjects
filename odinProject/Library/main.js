// myLibrary Main JS File
// TODO Library Update Function (new book?)
// TODO Loop through the Library and create element per book
// TODO Have function connected to the book to update if the book has been read.

const myLibrary = [];

function Book(title, author, read=False) {
  this.author = author;
  this.title = title;
  this.read = read;
}

const main = () =>{
  console.log('Hello World')
}

main();
