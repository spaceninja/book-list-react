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
    selectedBook: {},
    showEditForm: false,
    adminMode: false,
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
      const index = filters.indexOf(name);
      if (index >= 0) filters.splice(index, 1);
    }
    this.setState({ filters });
  };

  checkForCollision = isbn => {
    const isbnList = this.state.books.map(book => book.isbn);
    const isbnCollision = isbnList.includes(isbn);
    this.setState({ isbnCollision });
  };

  createNewBook = () => {
    this.setState({ selectedBook: {} });
    this.setState({ showEditForm: true });
  };

  loadBook = isbn => {
    const books = this.state.books;
    const selectedBook = books.find(book => book.isbn === isbn);
    this.setState({ selectedBook });
    this.setState({ showEditForm: true });
  };

  saveBook = newBook => {
    const books = this.state.books;
    const index = books.findIndex(book => book.isbn === newBook.isbn);
    if (index >= 0) {
      books.splice(index, 1, newBook);
    } else {
      books.push(newBook);
    }
    this.setState({ books });
    this.setState({ selectedBook: {} });
    this.setState({ showEditForm: false });
  };

  deleteBook = isbn => {
    const books = this.state.books;
    const index = books.findIndex(book => book.isbn === isbn);
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
        {this.state.adminMode &&
          this.state.showEditForm && (
            <BookForm
              selectedBook={this.state.selectedBook}
              isbnCollision={this.state.isbnCollision}
              checkForCollision={this.checkForCollision}
              createNewBook={this.createNewBook}
              saveBook={this.saveBook}
              toggleModal={this.toggleModal}
            />
          )}
      </main>
    );
  }
}

export default App;
