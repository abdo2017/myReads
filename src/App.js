import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Shelves from "./components/Shelves";
import Search from "./components/Search";
import SearchButton from "./components/SearchButton";
import Header from "./components/Header";

import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
    query: ""
  };

  updateSeachPageState = state => {
    console.log("HERE", state);
    this.setState({ showSearchPage: state });
  };

  componentDidMount() {
    BooksAPI.getAll().then(resp => this.setState({ books: resp }));
  }

  changeBookShelf = (book, shelf) => {
    // this.setState({
    //   books: this.state.books.map(b => {
    //     b.id === book.id ? (b.shelf = shelf) : b;
    //     return b;
    //   })
    // });
    const filteredBooks = this.state.books.map(b => {
      if (b.id === book.id) {
        b.shelf = shelf;
        return b;
      }else {
        return b;
      }
    })
    this.setState({books : filteredBooks});
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search showSeachPage={this.updateSeachPageState} />
        ) : (
          <div className="list-books">
            <Header />
            <Shelves
              allBooks={this.state.books}
              changeShelf={this.changeBookShelf}
            />
            <SearchButton showSearchPage={this.updateSeachPageState} />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
