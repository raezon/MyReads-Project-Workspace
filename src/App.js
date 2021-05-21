import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './components/Header';
import Shelves from './components/Shelves';
import Search from './components/Search';
import SearchButton from './components/SearchButton';

import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
   
    showSearchPage: false,
    books:[]
  }
  
updateSearchPageState(state){
  this.setState({showSearchPage:state})
}

  changeBookShelf = (book: any, shelf: string) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getBooksOnShelf();
    });
  };

  getBooksOnShelf() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }


  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(resp => this.setState({ books:resp}));
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
       
    
         <Search showSearchPage={this.updateSearchPageState.bind(this)}/>
   

        ) : (
          <div className="list-books">
      
          <Header/>
          <Shelves allBooks={this.state.books} changeBookShelf={this.changeBookShelf.bind(this)}/>
		  <SearchButton  showSearchPage={this.updateSearchPageState.bind(this)}/>
  			
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
