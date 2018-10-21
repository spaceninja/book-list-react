import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import BookList from "./BookList";
import initBooks from "../init-books";
import sampleBooks from "../sample-books";

class App extends React.Component {
  state = {
    books: [],
    filters: []
  };

  setFilter = (name, value) => {
    const filters = this.state.filters;
    if (value === true) {
      filters.push(name);
    } else {
      const deleteMe = filters.indexOf(name);
      if (deleteMe >= 0) filters.splice(deleteMe, 1);
    }
    this.setState({ filters });
  };

  loadSampleBooks = () => {
    this.setState({ books: sampleBooks });
  };

  componentDidMount() {
    this.setState({ books: initBooks });
  }

  render() {
    return (
      <main>
        <header>
          <h1>Reading List</h1>
          <FilterBy setFilter={this.setFilter} />
          <SortBy />
        </header>
        <BookList filters={this.state.filters} books={this.state.books} />
        <footer>
          <button onClick={this.loadSampleBooks}>Load Sample Books</button>
        </footer>
      </main>
    );
  }
}

export default App;
