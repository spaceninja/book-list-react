import React from "react";

class SortBy extends React.Component {
  render() {
    return (
      <div className="sort">
        <label className="sort--label" htmlFor="booklist-sort">
          Sort by:
        </label>
        <select className="sort--control" id="booklist-sort">
          <option
            value="title"
            data-sort-order="ascending"
            data-sort-secondary="author"
            data-sort-secondary-order="ascending"
          >
            Title
          </option>
          <option
            value="series"
            data-sort-order="ascending"
            data-sort-secondary="title"
            data-sort-secondary-order="ascending"
          >
            Series
          </option>
          <option
            value="author"
            data-sort-order="ascending"
            data-sort-secondary="title"
            data-sort-secondary-order="ascending"
          >
            Author
          </option>
          <option
            defaultValue
            value="rating"
            data-sort-order="descending"
            data-sort-secondary="length"
            data-sort-secondary-order="ascending"
          >
            Rating
          </option>
          <option
            value="length"
            data-sort-order="ascending"
            data-sort-secondary="rating"
            data-sort-secondary-order="descending"
          >
            Pages
          </option>
        </select>
      </div>
    );
  }
}

export default SortBy;
