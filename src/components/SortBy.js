import React from "react";
import PropTypes from "prop-types";

class SortBy extends React.Component {
  static propTypes = {
    setSort: PropTypes.func.isRequired,
    sort: PropTypes.shape({
      firstBy: PropTypes.string.isRequired,
      firstByOrder: PropTypes.string.isRequired,
      thenBy: PropTypes.string.isRequired,
      thenByOrder: PropTypes.string.isRequired
    }).isRequired
  };

  handleChange = e => {
    this.props.setSort(e.currentTarget.value);
  };

  render() {
    return (
      <div className="sort">
        <label className="sort--label" htmlFor="booklist-sort">
          Sort by:
        </label>
        <select
          className="sort--control"
          id="booklist-sort"
          onChange={this.handleChange}
          value={this.props.sort.firstBy}
        >
          <option value="title">Title</option>
          <option value="series">Series</option>
          <option value="author">Author</option>
          <option value="rating">Rating</option>
          <option value="length">Pages</option>
        </select>
      </div>
    );
  }
}

export default SortBy;
