import React from 'react';
import Shelf from './Shelf';

export default function Shelves(props) {
  const allBooks=props.allBooks;
  const currentlyReding=allBooks.filter(book=>book.shelf==="currentlyReading");
  const wantToRead=allBooks.filter(book=>book.shelf==="wantToRead");
  const read=allBooks.filter(book=>book.shelf==="read");
 // console.log(currentlyReding)
  return (
   
            <div className="list-books-content">
              <div>
                  <Shelf books={currentlyReding} title={"CurrentlyReading"} changeBookShelf={props.changeBookShelf}/>
                  <Shelf books={wantToRead} title={"WantToRead"} changeBookShelf={props.changeBookShelf}/>
                  <Shelf books={read} title={"Read"} changeBookShelf={props.changeBookShelf}/>
   
              </div>
            </div>
  );
}


