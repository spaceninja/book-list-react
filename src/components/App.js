import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import Book from "./Book";

class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <h1>Reading List</h1>
          <FilterBy />
          <SortBy />
        </header>
        <ul className="book-list" id="booklist-content">
          <Book />
        </ul>
      </main>
    );
  }
}

export default App;
