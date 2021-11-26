import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Shelves from "./components/Shelves";
import Search from "./components/Search";
import SearchButton from "./components/SearchButton";

import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {


  state = {
    showSearchPage: false,
    books: [],
    query: ""
  };

  updateSeachPageState = state => {
    this.setState({ showSearchPage: state });
  };

  componentDidMount = () =>  {
    BooksAPI.getAll().then(resp => this.setState({ books: resp }));
  }

  updateBookShelf = (book, shelf) => {
    let filteredBooks = this.state.books.filter(b => b.id === book.id);
    if (filteredBooks.length === 0) {
      // add new book
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.concat([book])
      }));
    } else {
      this.setState(state => ({
        books: state.books.map(b => {
          if ( b.id === book.id ) {
            b.shelf = shelf;
          }
          return b;
        })
      }));
    }
    BooksAPI.update(book, shelf);
  }



  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        {this.state.showSearchPage ? (

          <Search
              showSeachPage={this.updateSeachPageState}
              changeShelf={this.updateBookShelf}
          />

        ) : (
          <div className="list-books">

            <Shelves
              allBooks={this.state.books}
              changeShelf={this.updateBookShelf}
            />

            <SearchButton showSearchPage={this.updateSeachPageState} />


          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
