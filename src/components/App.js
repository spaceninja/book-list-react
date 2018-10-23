import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import BookList from "./BookList";
import BookForm from "./BookForm";
import Footer from "./Footer";
import initBooks from "../init-books";
import sampleBooks from "../sample-books";

class App extends React.Component {
  state = {
    books: [],
    filters: [],
    sort: {},
    editing: {},
    showModal: false,
    editMode: false
  };

  sortOptions = {
    title: { order: "ascending", thenBy: "author", thenByOrder: "ascending" },
    series: { order: "ascending", thenBy: "title", thenByOrder: "ascending" },
    author: { order: "ascending", thenBy: "title", thenByOrder: "ascending" },
    rating: { order: "descending", thenBy: "length", thenByOrder: "ascending" },
    length: { order: "ascending", thenBy: "rating", thenByOrder: "descending" }
  };

  toggleModal = () => {
    const showModal = !this.state.showModal;
    this.setState({ showModal });
  };

  toggleEditMode = () => {
    const editMode = !this.state.editMode;
    this.setState({ editMode });
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
    if (value) {
      filters.push(name);
    } else {
      const deleteMe = filters.indexOf(name);
      if (deleteMe >= 0) filters.splice(deleteMe, 1);
    }
    this.setState({ filters });
  };

  createNewBook = () => {
    this.setState({ editing: {} });
    this.setState({ showModal: true });
  };

  loadBook = isbn => {
    const books = this.state.books;
    const index = books.findIndex(b => b.isbn === isbn);
    const editing = books[index];
    this.setState({ editing });
    this.setState({ showModal: true });
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

  saveBook = () => {
    const books = this.state.books;
    const newBook = { ...this.state.editing };
    const index = books.findIndex(b => b.isbn === newBook.isbn);
    if (index >= 0) {
      books.splice(index, 1).push(newBook);
    } else {
      books.push(newBook);
    }
    this.setState({ books });
    this.setState({ editing: {} });
    this.setState({ showModal: false });
  };

  deleteBook = isbn => {
    const books = this.state.books;
    const index = books.findIndex(b => b.isbn === isbn);
    books.splice(index, 1);
    this.setState({ books });
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
          editMode={this.state.editMode}
          loadBook={this.loadBook}
          deleteBook={this.deleteBook}
        />
        <Footer
          editMode={this.state.editMode}
          createNewBook={this.createNewBook}
          loadSampleBooks={this.loadSampleBooks}
          toggleEditMode={this.toggleEditMode}
        />
        {this.state.editMode && (
          <BookForm
            editing={this.state.editing}
            showModal={this.state.showModal}
            createNewBook={this.createNewBook}
            editBook={this.editBook}
            saveBook={this.saveBook}
            toggleModal={this.toggleModal}
          />
        )}
      </main>
    );
  }
}

export default App;
