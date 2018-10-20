import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BookList extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired
  };

  applyFilters = books => {
    const filters = this.props.filters;
    for (let filter in filters) {
      if (filters[filter]) {
        books = books.filter(book => book[filter]);
      }
    }
    return books;
  };

  render() {
    let books = this.props.books;
    books = this.applyFilters(books);
    if (books.length > 0) {
      return (
        <ul className="book-list">
          {books.map((book, i) => (
            <Book key={book.isbn} index={book.isbn} details={books[i]} />
          ))}
        </ul>
      );
    } else {
      return <p className="alert alert--error">No Books Found</p>;
    }
  }
}

export default BookList;
