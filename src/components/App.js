import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import Book from "./Book";
import sampleBooks from "../sample-books";

class App extends React.Component {
  state = {
    books: [
      {
        title: "Example Book with Everything",
        author: "McBigName, Author",
        isbn: "0123456789",
        rating: 4.99,
        length: 999,
        purchased: true,
        prioritize: true,
        release: "2018-05-08",
        source: "somebody",
        note:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        series: "Series Name #3",
        textSnippet:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Minimum Viable Book",
        author: "Selfpublished, Timmy",
        isbn: "9876543210",
        rating: 0.01,
        length: 1
      }
    ]
  };

  loadSampleBooks = () => {
    this.setState({ books: sampleBooks });
  };

  render() {
    return (
      <main>
        <header>
          <h1>Reading List</h1>
          <FilterBy />
          <SortBy />
        </header>
        <ul className="book-list" id="booklist-content">
          {this.state.books.map((b, i) => (
            <Book key={b.isbn} index={b.isbn} details={this.state.books[i]} />
          ))}
        </ul>
        <footer>
          <button onClick={this.loadSampleBooks}>Load Sample Books</button>
        </footer>
      </main>
    );
  }
}

export default App;
