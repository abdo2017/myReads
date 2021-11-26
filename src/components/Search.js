import React from "react";
// import Shelf from "./Shelf";
import * as BooksAPI from "../BooksAPI"
import Book from "./Book";
import {DebounceInput} from 'react-debounce-input';


class Search extends React.Component {
  state = {
    query: "",
    searchBooks: []
  }

  handleSearch = (query) => {

    this.setState({query: query});

    if (!!query) {

        BooksAPI.search(query).then(bookResults => {
          if (!bookResults.error) {
            Promise.all(this.gettingShelfsFromAPI(bookResults)).then(updatedBooks => {
              this.setState({
                searchBooks: updatedBooks
              })});

          } else {
            this.setState({searchBooks: []})
          }
        });
    }else {
      this.setState({searchBooks:[] })
    }
  }

  gettingShelfsFromAPI = (books) => {
    return books.map(book => BooksAPI.get(book.id));
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">

          {/*back button */}
          <a
            className="close-search"
            onClick={() => this.props.showSeachPage(false)}
          >
            Close
          </a>


          <div className="search-books-input-wrapper">

            <DebounceInput
              type="text"
              placeholder="Search by title"
              onChange={e => {
                this.handleSearch(e.target.value)
              }}
              value={this.state.query}
            />

          </div>

        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            {this.state.searchBooks.map(book => (
              <Book
                key={book.id}
                image={!!book.imageLinks ? book.imageLinks.thumbnail : ""}
                shelf={book.shelf}
                title={book.title}
                authors={book.authors}
                currentBook={book}
                changeShelf={this.props.changeShelf}
              />
            ))}
          </ol>

        </div>
      </div>
    );
  }
}

export default Search;
