import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import BookList from "./BookList";
import BookForm from "./BookForm";
import Footer from "./Footer";
import initBooks from "../init-books";
import sampleBooks from "../sample-books";
import { clean } from "../helpers";
import firebase from "firebase";
import base, { firebaseApp } from "../base";

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
    authenticated: false,
    adminMode: false,
    isbnCollision: false,
    loading: true
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

  logOut = async () => {
    await firebase.auth().signOut();
    this.setState({ authenticated: false });
    this.setState({ adminMode: false });
  };

  authHandler = async authData => {
    const owner = await base.fetch("owner", { context: this });
    this.setState({ authenticated: true });
    if (owner === authData.user.uid) {
      this.setState({ adminMode: true });
    }
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
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
    clean(newBook);
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

  loadInitBooks = () => {
    this.setState({ books: initBooks });
  };

  componentDidMount() {
    // sync state with firebase
    this.ref = base.syncState("books", {
      context: this,
      state: "books",
      asArray: true,
      then() {
        this.setState({ loading: false });
      }
    });

    // check if the user is already logged into firebase
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
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
          loading={this.state.loading}
          loadBook={this.loadBook}
          deleteBook={this.deleteBook}
        />
        <Footer
          adminMode={this.state.adminMode}
          authenticated={this.state.authenticated}
          loading={this.state.loading}
          createNewBook={this.createNewBook}
          loadInitBooks={this.loadInitBooks}
          loadSampleBooks={this.loadSampleBooks}
          authenticate={this.authenticate}
          logOut={this.logOut}
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
