import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import BookList from "./BookList";
import BookForm from "./BookForm";
import initBooks from "../init-books";
import sampleBooks from "../sample-books";

class App extends React.Component {
  state = {
    books: [],
    filters: [],
    sort: {},
    editing: {},
    showModal: false
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

  toggleModal = () => {
    const showModal = !this.state.showModal;
    this.setState({ showModal });
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

  saveBook = () => {
    const newBook = { ...this.state.editing };
    const books = this.state.books;
    books.push(newBook);
    this.setState({ books });
    this.setState({ editing: {} });
    this.toggleModal();
  };

  editBook = (key, value) => {
    const editing = { ...this.state.editing };
    if (value) {
      editing[key] = value;
    } else {
      delete editing[key];
    }
    this.setState({ editing });
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
        <BookForm
          toggleModal={this.toggleModal}
          showModal={this.state.showModal}
          editBook={this.editBook}
          saveBook={this.saveBook}
          editing={this.state.editing}
        />
        <footer>
          <button className="btn btn-secondary" onClick={this.loadSampleBooks}>
            Load Sample Books
          </button>
          <button className="btn btn-secondary" onClick={this.toggleModal}>
            Add New Book
          </button>
        </footer>
      </main>
    );
  }
}

export default App;
