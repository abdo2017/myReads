import React from "react";
import Book from "./Book";

class Shelf extends React.Component {
  render() {
    const shelfBooks = this.props.books;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

            {shelfBooks.map(book => (
                <Book
                    key={book.id}
                    image={book.imageLinks.thumbnail}
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

export default Shelf;
