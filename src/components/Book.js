import React from "react";
import PropTypes from "prop-types";
import Confirm from "./Confirm";
import { confirmAlert } from "react-confirm-alert";

class Book extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authorLast: PropTypes.string.isRequired,
      authorFirst: PropTypes.string.isRequired,
      isbn: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      length: PropTypes.number.isRequired,
      series: PropTypes.string,
      release: PropTypes.string,
      textSnippet: PropTypes.string,
      source: PropTypes.string,
      note: PropTypes.string,
      purchased: PropTypes.bool,
      prioritize: PropTypes.bool,
      thumbnail: PropTypes.string
    }).isRequired,
    adminMode: PropTypes.bool.isRequired,
    deleteBook: PropTypes.func.isRequired,
    isbn: PropTypes.string.isRequired,
    loadBook: PropTypes.func.isRequired
  };

  handleEdit = () => {
    this.props.loadBook(this.props.isbn);
  };

  handleDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Confirm
            onClose={onClose}
            title="Delete This Book?"
            message="Are you sure you want to delete this book from the list?"
            yesButton="Delete Book"
            action={this.props.deleteBook}
            option={this.props.isbn}
          />
        );
      }
    });
  };

  render() {
    const { ...book } = this.props.details;
    let classes = "book";
    if (book.purchased) classes += " book--purchased";
    if (book.prioritize) classes += " book--prioritized";

    return (
      <li className={classes}>
        <div className="book__thumbnail">
          {book.thumbnail && (
            <img
              src={book.thumbnail}
              alt=""
              className="book__thumbnail-media"
            />
          )}
        </div>
        <div className="book__info">
          <h2 className="book__headline">
            <span className="book__title">{book.title}</span>
            {book.series && " "}
            {book.series && (
              <span className="book__series">({book.series})</span>
            )}
          </h2>
          <p className="book__author">
            by {book.authorFirst} {book.authorLast}
          </p>
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
                <span className="book__source">
                  Recommended by {book.source}
                </span>
              )}
              {book.source && book.note && ": "}
              {book.note && <q className="book__note">{book.note}</q>}
            </p>
          )}
        </div>
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        {this.props.adminMode && (
          <div className="book__actions">
            <button
              aria-label="Edit"
              className="btn btn-icon-only btn-primary"
              type="button"
              onClick={this.handleEdit}
            >
              <div aria-hidden="true" className="btn__icon">
                ✏️
              </div>
            </button>
            <button
              aria-label="Delete"
              className="btn btn-icon-only btn-secondary"
              type="button"
              onClick={this.handleDelete}
            >
              <div aria-hidden="true" className="btn__icon">
                ❌
              </div>
            </button>
          </div>
        )}
      </li>
    );
  }
}

export default Book;
