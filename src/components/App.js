import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import BookList from "./BookList";
import initBooks from "../init-books";
import sampleBooks from "../sample-books";

class App extends React.Component {
  state = {
    books: [],
    filters: [],
    sort: {}
  };

  sortOptions = {
    title: { order: "ascending", thenBy: "author", thenByOrder: "ascending" },
    series: { order: "ascending", thenBy: "title", thenByOrder: "ascending" },
    author: { order: "ascending", thenBy: "title", thenByOrder: "ascending" },
    rating: { order: "descending", thenBy: "length", thenByOrder: "ascending" },
    length: { order: "ascending", thenBy: "rating", thenByOrder: "descending" }
  };

  setSort = value => {
    const sort = {
      firstBy: value,
      firstByOrder: this.sortOptions[value].order,
      thenBy: this.sortOptions[value].thenBy,
      thenByOrder: this.sortOptions[value].thenByOrder
    };
    this.setState({ sort });
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
    this.setSort("rating");
  }

  render() {
    return (
      <main>
        <header>
          <h1>Reading List</h1>
          <FilterBy setFilter={this.setFilter} />
          <SortBy setSort={this.setSort} sort={this.state.sort} />
        </header>
        <BookList
          books={this.state.books}
          filters={this.state.filters}
          sort={this.state.sort}
        />
        <footer>
          <button onClick={this.loadSampleBooks}>Load Sample Books</button>
        </footer>
      </main>
    );
  }
}

export default App;
