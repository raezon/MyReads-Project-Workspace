
import React, { useState } from 'react';
import Shelves from './Shelves';
export default function Search(props) {
 const [books, setBooks] =  useState([]);
 const [query, setQuery] =  useState("");

  const getBooks = event => {
	
    const query1 = event.target.value;
    let AllBooks=[];
     setQuery( query1 );
    // if user input => run the search
    if (query1) {
      
       AllBooks=props.AllBooks.filter(function(item){return item.title === query1;})
       console.log(AllBooks)
	   if(AllBooks.length>0){
         setBooks(AllBooks)
       }
          
       else
           setBooks([])

      // if query is empty => reset state to default
    } else setBooks([]);
   
  };




  return (
 
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => props.showSearchPage(false)}>Close</a>
              <div className="search-books-input-wrapper">
            	  <input
                     type='text' 
                    placeholder="Search by title or author"
                    value={query}
                    onChange={getBooks}
                  />

               {books.length > 0 && (
				<div>
                  <h3>Search returned {books.length} books </h3>
                  <ol className="books-grid">
                    {books.map(book => (
                         <Shelves allBooks={books} changeBookShelf={props.changeBookShelf}/>
                    ))}
                  </ol>
                </div>
          )}
                           

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
  )
}