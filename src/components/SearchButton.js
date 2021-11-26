import React from "react";

const SearchButton = (props) => {
  return (
      <div className="open-search">
        <a onClick={() => props.showSearchPage(true)}>Add a book</a>
      </div>
  );
}

export default SearchButton;
