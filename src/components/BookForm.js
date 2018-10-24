import React from "react";
import PropTypes from "prop-types";
import { confirmAlert } from "react-confirm-alert";

class BookForm extends React.Component {
  static propTypes = {
    bookFormContent: PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      isbn: PropTypes.string,
      rating: PropTypes.number,
      length: PropTypes.number,
      series: PropTypes.string,
      textSnippet: PropTypes.string,
      source: PropTypes.string,
      note: PropTypes.string,
      purchased: PropTypes.bool,
      prioritize: PropTypes.bool
    }).isRequired,
    createNewBook: PropTypes.func.isRequired,
    editBook: PropTypes.func.isRequired,
    editing: PropTypes.bool.isRequired,
    isbnList: PropTypes.array.isRequired,
    saveBook: PropTypes.func.isRequired,
    showEditForm: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
  };

  handleConfirmSubmit = e => {
    e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="confirm-dialog">
            <h3 className="confirm-dialog__title">Edit Existing Book?</h3>
            <p className="confirm-dialog__message">
              You are about to update a book that's already in the book list.
              Are you sure you want to do that? Pressing 'cancel' will return
              you to the edit form. Double-check your ISBN number to avoid
              problems.
            </p>
            <div className="confirm-dialog__actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.props.saveBook();
                  onClose();
                }}
              >
                Edit Book
              </button>
              <button className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        );
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveBook();
  };

  handleChange = e => {
    const name = e.currentTarget.name;
    const type = e.currentTarget.type;
    let value;
    if (type === "checkbox") {
      value = e.currentTarget.checked;
    } else if (type === "number") {
      value = parseInt(e.currentTarget.value);
    } else {
      value = e.currentTarget.value;
    }
    this.props.editBook(name, value);
  };

  render() {
    const { ...book } = this.props.bookFormContent;
    let classes = "modal";
    if (this.props.showEditForm) classes += " is-visible";
    let handler = this.handleSubmit;
    const isbnCollision = this.props.isbnList.find(x => x === book.isbn);
    if (isbnCollision && this.props.editing === false) {
      console.log("DANGER: ISBN COLLISION IN NEW BOOK MODE!", book.isbn);
      handler = this.handleConfirmSubmit;
    }
    return (
      <div className={classes}>
        <form className="form modal-contents" onSubmit={handler}>
          <div className="form-group">
            <label htmlFor="book-title">Title</label>
            <input
              type="text"
              className="form-control"
              id="book-title"
              name="title"
              required
              value={book.title || ""}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-author">Author</label>
            <input
              type="text"
              className="form-control"
              id="book-author"
              name="author"
              required
              value={book.author || ""}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-isbn">ISBN</label>
            <input
              type="text"
              className="form-control"
              id="book-isbn"
              name="isbn"
              required
              value={book.isbn || ""}
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
              value={book.series || ""}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-rating">Rating</label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="5"
              className="form-control"
              id="book-rating"
              name="rating"
              required
              value={book.rating || ""}
              onChange={this.handleChange}
            />
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
                value={book.length || ""}
                onChange={this.handleChange}
              />
              <span className="input-group-append">pages</span>
            </span>
          </div>
          <div className="form-group form-group-doublewide">
            <label htmlFor="book-textsnippet">Blurb</label>
            <textarea
              className="form-control"
              id="book-textsnippet"
              name="textSnippet"
              rows="3"
              value={book.textSnippet || ""}
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
                value={book.source || ""}
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
              value={book.note || ""}
              onChange={this.handleChange}
            />
            <small className="form-text text-muted">
              A note explaining why you're interested in this book.
            </small>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="book-purchased"
              name="purchased"
              checked={book.purchased || ""}
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
              checked={book.prioritize || ""}
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
