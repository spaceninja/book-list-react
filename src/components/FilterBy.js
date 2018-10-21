import React from "react";

class FilterBy extends React.Component {
  handleChange = e => {
    this.props.setFilter(e.currentTarget.value, e.currentTarget.checked);
  };

  render() {
    return (
      <div className="filter">
        <p className="sr-only">Filter by:</p>
        <ul className="filter--list">
          <li className="filter--item filter--purchased">
            <input
              className="filter--checkbox"
              id="filter-purchased"
              name="filter"
              value="purchased"
              type="checkbox"
              onChange={this.handleChange}
            />
            <label htmlFor="filter-purchased" className="filter--label">
              Purchased
            </label>
          </li>
          <li className="filter--item filter--prioritize">
            <input
              className="filter--checkbox"
              id="filter-prioritize"
              name="filter"
              value="prioritize"
              type="checkbox"
              onChange={this.handleChange}
            />
            <label htmlFor="filter-prioritize" className="filter--label">
              Prioritize
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterBy;
