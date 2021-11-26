import React from "react";
import Shelf from "./Shelf";
import Header  from "./Header";

class Shelves extends React.Component {
  render() {
    const allBooks = this.props.allBooks;

    const currentlyReading = allBooks.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToRead = allBooks.filter(book => book.shelf === "wantToRead");
    const read = allBooks.filter(book => book.shelf === "read");
    return (
        <>
          <Header />

      <div className="list-books-content">
        <div>

          <Shelf
            books={currentlyReading}
            title={"Currently Reading"}
            changeShelf={this.props.changeShelf}
          />
          {/* currently reading */}
          <Shelf
            books={wantToRead}
            title={"Want to Read"}
            changeShelf={this.props.changeShelf}
          />
          {/* want to read*/}
          <Shelf
            books={read}
            title={"Read"}
            changeShelf={this.props.changeShelf}
          />
        </div>
      </div>
      </>
    );
  }
}

export default Shelves;
