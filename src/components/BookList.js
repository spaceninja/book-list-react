import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BookList extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired
  };

  applyFilters = books => {
    this.props.filters.forEach(key => {
      books = books.filter(book => book[key]);
    });
    return books;
  };

  render() {
    const books = this.applyFilters(this.props.books);
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
