import React from 'react'

export default function SearchButton(props) {
 
  return (
 
             <div className="open-search">
              <a onClick={() =>  props.showSearchPage(true)}>Add a book</a>
            </div>
  )
}