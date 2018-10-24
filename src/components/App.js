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
    sort: {
      firstBy: "rating",
      firstByOrder: "descending",
      thenBy: "length",
      thenByOrder: "ascending"
    },
    bookFormContent: {},
    showEditForm: false,
    adminMode: false,
    editing: false,
    isbnCollision: false
  };

  sortOptions = {
    title: { order: "ascending", thenBy: "author", thenByOrder: "ascending" },
    series: { order: "ascending", thenBy: "title", thenByOrder: "ascending" },
    author: { order: "ascending", thenBy: "title", thenByOrder: "ascending" },
    rating: { order: "descending", thenBy: "length", thenByOrder: "ascending" },
    length: { order: "ascending", thenBy: "rating", thenByOrder: "descending" }
  };

  toggleModal = () => {
    const showEditForm = !this.state.showEditForm;
    this.setState({ showEditForm });
  };

  toggleAdminMode = () => {
    const adminMode = !this.state.adminMode;
    this.setState({ adminMode });
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

  checkForCollision = isbn => {
    const isbnList = this.state.books.map(b => b.isbn);
    console.log("ISBN List", isbnList);
    console.log("ISBN", isbn);
    const isbnCollision = isbnList.includes(isbn);
    console.log("COLLISION", isbnCollision);
    this.setState({ isbnCollision });
  };

  createNewBook = () => {
    this.setState({ bookFormContent: {} });
    this.setState({ editing: false });
    this.setState({ showEditForm: true });
  };

  loadBook = isbn => {
    const books = this.state.books;
    const bookFormContent = books.find(b => b.isbn === isbn);
    this.setState({ bookFormContent });
    this.setState({ editing: true });
    this.setState({ showEditForm: true });
  };

  editBook = (key, value) => {
    const bookFormContent = { ...this.state.bookFormContent };
    if (value) {
      bookFormContent[key] = value;
      if (key === "isbn") {
        this.checkForCollision(value);
      }
    } else {
      delete bookFormContent[key];
    }
    this.setState({ bookFormContent });
  };

  saveBook = () => {
    const books = this.state.books;
    const newBook = { ...this.state.bookFormContent };
    const index = books.findIndex(b => b.isbn === newBook.isbn);
    if (index >= 0) {
      books.splice(index, 1, newBook);
    } else {
      books.push(newBook);
    }
    this.setState({ books });
    this.setState({ bookFormContent: {} });
    this.setState({ editing: false });
    this.setState({ showEditForm: false });
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
          <h1 className="page-title">Reading List</h1>
          <FilterBy setFilter={this.setFilter} />
          <SortBy setSort={this.setSort} sort={this.state.sort} />
        </header>
        <BookList
          books={this.state.books}
          filters={this.state.filters}
          sort={this.state.sort}
          adminMode={this.state.adminMode}
          loadBook={this.loadBook}
          deleteBook={this.deleteBook}
        />
        <Footer
          adminMode={this.state.adminMode}
          createNewBook={this.createNewBook}
          loadSampleBooks={this.loadSampleBooks}
          toggleAdminMode={this.toggleAdminMode}
        />
        {this.state.adminMode && (
          <BookForm
            bookFormContent={this.state.bookFormContent}
            showEditForm={this.state.showEditForm}
            editing={this.state.editing}
            isbnCollision={this.state.isbnCollision}
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
