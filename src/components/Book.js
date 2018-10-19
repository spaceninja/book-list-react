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

  render() {
    const { ...book } = this.props.details;
    let classes = "book";
    if (book.purchased) classes += " book--purchased";
    if (book.prioritize) classes += " book--prioritized";

    return (
      <li className={classes}>
        <h2 className="book--headline">
          <span className="book--title">{book.title}</span>
          {book.series && " "}
          {book.series && <span className="book--series">({book.series})</span>}
        </h2>
        <p className="book--author">by {reverseName(book.author)}</p>
        <p className="book--rating num">
          <span className="sr-only">Rating:</span> {book.rating.toFixed(1)}
        </p>
        <p className="book--length num">
          <span className="sr-only">Length:</span> {book.length}p
        </p>
        {book.textSnippet && (
          <blockquote>
            <p className="book--snippet">{book.textSnippet}</p>
          </blockquote>
        )}
        {(book.source || book.note) && (
          <p className="book--recommendation">
            {book.source && (
              <span className="book--source">Recommended by {book.source}</span>
            )}
            {book.source && book.note && ": "}
            {book.note && <q className="book--note">{book.note}</q>}
          </p>
        )}
      </li>
    );
  }
}

export default Book;
