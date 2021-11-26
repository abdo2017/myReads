import React from "react";
import Shelf from "./Shelf";
import Header  from "./Header";

class Shelves extends React.Component {
  render() {
    const allBooks = this.props.allBooks;

    // object of shelves
    const SHELVES = {
      currentlyReading: allBooks.filter(b => b.shelf === "currentlyReading"),
      wantToRead: allBooks.filter(b => b.shelf === "wantToRead"),
      read: allBooks.filter(b => b.shelf === "read"),
    }

    return (
        <>
          <Header />

      <div className="list-books-content">
        <div>

          <Shelf
            books={SHELVES.currentlyReading}
            title={"Currently Reading"}
            changeShelf={this.props.changeShelf}
          />
          {/* currently reading */}
          <Shelf
            books={SHELVES.wantToRead}
            title={"Want to Read"}
            changeShelf={this.props.changeShelf}
          />
          {/* want to read*/}
          <Shelf
            books={SHELVES.read}
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
