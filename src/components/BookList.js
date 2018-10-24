import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import { firstBy } from "thenby";

class BookList extends React.Component {
  static propTypes = {
    adminMode: PropTypes.bool.isRequired,
    books: PropTypes.array.isRequired,
    deleteBook: PropTypes.func.isRequired,
    filters: PropTypes.array.isRequired,
    loadBook: PropTypes.func.isRequired,
    sort: PropTypes.shape({
      firstBy: PropTypes.string.isRequired,
      firstByOrder: PropTypes.string.isRequired,
      thenBy: PropTypes.string.isRequired,
      thenByOrder: PropTypes.string.isRequired
    }).isRequired
  };

  applyFilters = books => {
    this.props.filters.forEach(key => {
      books = books.filter(book => book[key]);
    });
    return books;
  };

  applySort = books => {
    const sort = this.props.sort;
    const firstByOptions = {
      ignoreCase: true,
      direction: sort.firstByOrder === "descending" ? -1 : 0
    };
    const thenByOptions = {
      ignoreCase: true,
      direction: sort.thenByOrder === "descending" ? -1 : 0
    };
    return books.sort(
      firstBy(sort.firstBy, firstByOptions).thenBy(sort.thenBy, thenByOptions)
    );
  };

  render() {
    const books = this.applySort(this.applyFilters(this.props.books));
    if (books.length > 0) {
      return (
        <ul className="book-list">
          {books.map((book, i) => (
            <Book
              key={book.isbn}
              isbn={book.isbn}
              details={books[i]}
              deleteBook={this.props.deleteBook}
              loadBook={this.props.loadBook}
              adminMode={this.props.adminMode}
            />
          ))}
        </ul>
      );
    } else {
      return <p className="alert alert--error">No Books Found</p>;
    }
  }
}

export default BookList;
