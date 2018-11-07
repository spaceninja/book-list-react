import React from "react";
import PropTypes from "prop-types";
import Confirm from "./Confirm";
import { confirmAlert } from "react-confirm-alert";

class BookForm extends React.Component {
  static propTypes = {
    selectedBook: PropTypes.shape({
      title: PropTypes.string,
      authorLast: PropTypes.string,
      authorFirst: PropTypes.string,
      isbn: PropTypes.string,
      rating: PropTypes.number,
      length: PropTypes.number,
      series: PropTypes.string,
      release: PropTypes.string,
      textSnippet: PropTypes.string,
      source: PropTypes.string,
      note: PropTypes.string,
      purchased: PropTypes.bool,
      prioritize: PropTypes.bool
    }).isRequired,
    checkForCollision: PropTypes.func.isRequired,
    createNewBook: PropTypes.func.isRequired,
    saveBook: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    isbnCollision: PropTypes.bool.isRequired
  };

  state = {
    book: {
      title: this.props.selectedBook.title || "",
      authorLast: this.props.selectedBook.authorLast || "",
      authorFirst: this.props.selectedBook.authorFirst || "",
      isbn: this.props.selectedBook.isbn || "",
      rating: this.props.selectedBook.rating || "",
      length: this.props.selectedBook.length || "",
      series: this.props.selectedBook.series || "",
      release: this.props.selectedBook.release || "",
      textSnippet: this.props.selectedBook.textSnippet || "",
      source: this.props.selectedBook.source || "",
      note: this.props.selectedBook.note || "",
      purchased: this.props.selectedBook.purchased || false,
      prioritize: this.props.selectedBook.prioritize || false
    }
  };

  handleConfirmSubmit = e => {
    e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        const book = this.state.book;
        const message =
          "You are about to update a book that’s already in the book list. " +
          "Are you sure you want to do that? Pressing Cancel will return you " +
          "to the edit form. Double-check your ISBN number to avoid problems.";
        return (
          <Confirm
            onClose={onClose}
            title="Edit Existing Book?"
            message={message}
            yesButton="Edit Book"
            action={this.props.saveBook}
            option={book}
          />
        );
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const book = this.state.book;
    this.props.saveBook(book);
  };

  handleChange = e => {
    const book = this.state.book;
    const name = e.currentTarget.name;
    const type = e.currentTarget.type;
    let value;
    if (type === "checkbox") {
      value = e.currentTarget.checked;
    } else if (type === "number") {
      value = Number(e.currentTarget.value);
    } else {
      value = e.currentTarget.value;
    }
    if (name === "isbn") {
      this.props.checkForCollision(value);
    }
    book[name] = value;
    this.setState({ book });
  };

  render() {
    const book = this.state.book;
    let handler = this.handleSubmit;
    if (this.props.isbnCollision && !this.props.selectedBook.isbn) {
      handler = this.handleConfirmSubmit;
    }
    return (
      <div className="modal is-visible">
        <form className="form modal-contents" onSubmit={handler}>
          <div className="form-group">
            <label htmlFor="book-title">Title</label>
            <input
              type="text"
              className="form-control"
              id="book-title"
              name="title"
              required
              value={book.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-series">Series</label>
            <input
              type="text"
              className="form-control"
              id="book-series"
              name="series"
              value={book.series}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-author-first">Author First Name</label>
            <input
              type="text"
              className="form-control"
              id="book-author-first"
              name="authorFirst"
              required
              value={book.authorFirst}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-author-last">Author Last Name</label>
            <input
              type="text"
              className="form-control"
              id="book-author-last"
              name="authorLast"
              required
              value={book.authorLast}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-rating">Rating</label>
            <span className="input-group">
              <input
                type="number"
                step="0.01"
                min="0"
                max="5"
                className="form-control"
                id="book-rating"
                name="rating"
                required
                value={book.rating}
                onChange={this.handleChange}
              />
              <span className="input-group-append">/ 5</span>
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="book-length">Length</label>
            <span className="input-group">
              <input
                type="number"
                className="form-control"
                id="book-length"
                name="length"
                required
                value={book.length}
                onChange={this.handleChange}
              />
              <span className="input-group-append">pages</span>
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="book-isbn">ISBN</label>
            <input
              type="text"
              className="form-control"
              id="book-isbn"
              name="isbn"
              required
              value={book.isbn}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-release">Release Date</label>
            <input
              type="date"
              className="form-control"
              id="book-release"
              name="release"
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              value={book.release}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group form-group-doublewide">
            <label htmlFor="book-textsnippet">Blurb</label>
            <textarea
              className="form-control"
              id="book-textsnippet"
              name="textSnippet"
              rows="3"
              value={book.textSnippet}
              onChange={this.handleChange}
            />
            <small className="form-text text-muted">
              A short blurb introducing the book.
            </small>
          </div>
          <div className="form-group form-group-doublewide">
            <label htmlFor="book-source">Source</label>
            <span className="input-group">
              <span className="input-group-prepend">Recommended by</span>
              <input
                type="text"
                className="form-control"
                id="book-source"
                name="source"
                value={book.source}
                onChange={this.handleChange}
              />
            </span>
          </div>
          <div className="form-group form-group-doublewide">
            <label htmlFor="book-note">Note</label>
            <textarea
              className="form-control"
              id="book-note"
              name="note"
              rows="3"
              value={book.note}
              onChange={this.handleChange}
            />
            <small className="form-text text-muted">
              A note explaining why you’re interested in this book.
            </small>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="book-purchased"
              name="purchased"
              checked={book.purchased}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="book-purchased">
              Purchased
            </label>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="book-prioritize"
              name="prioritize"
              checked={book.prioritize}
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="book-prioritize">
              Prioritize
            </label>
          </div>
          <div className="form-group form-actions form-group-doublewide">
            <button className="btn btn-primary">Submit</button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.props.toggleModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookForm;
