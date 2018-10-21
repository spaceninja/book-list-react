import React from "react";

class SortBy extends React.Component {
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
