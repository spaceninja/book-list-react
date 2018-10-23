import React from "react";
import PropTypes from "prop-types";
import { reverseName } from "../helpers";

class Book extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      isbn: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      length: PropTypes.number.isRequired,
      series: PropTypes.string,
      textSnippet: PropTypes.string,
      source: PropTypes.string,
      note: PropTypes.string,
      purchased: PropTypes.bool,
      prioritize: PropTypes.bool
    }).isRequired
  };

  handleEdit = () => {
    this.props.loadBook(this.props.index);
  };

  handleDelete = () => {
    this.props.deleteBook(this.props.index);
  };

  render() {
    const { ...book } = this.props.details;
    let classes = "book";
    if (book.purchased) classes += " book--purchased";
    if (book.prioritize) classes += " book--prioritized";

    return (
      <li className={classes}>
        <h2 className="book__headline">
          <span className="book__title">{book.title}</span>
          {book.series && " "}
          {book.series && <span className="book__series">({book.series})</span>}
        </h2>
        <p className="book__author">by {reverseName(book.author)}</p>
        <p className="book__rating num">
          <span className="sr-only">Rating:</span> {book.rating.toFixed(1)}
        </p>
        <p className="book__length num">
          <span className="sr-only">Length:</span> {book.length}p
        </p>
        {book.textSnippet && (
          <blockquote>
            <p className="book__snippet">{book.textSnippet}</p>
          </blockquote>
        )}
        {(book.source || book.note) && (
          <p className="book__recommendation">
            {book.source && (
              <span className="book__source">Recommended by {book.source}</span>
            )}
            {book.source && book.note && ": "}
            {book.note && <q className="book__note">{book.note}</q>}
          </p>
        )}
        {this.props.editMode && (
          <div className="book__actions">
            <button
              className="btn btn-sm btn-primary"
              type="button"
              onClick={this.handleEdit}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-secondary"
              type="button"
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </li>
    );
  }
}

export default Book;
