import React from "react";

class FilterBy extends React.Component {
  render() {
    return (
      <div className="filter">
        <p class="sr-only">Filter by:</p>
        <ul className="filter--list">
          <li className="filter--item filter--purchased">
            <input
              className="filter--checkbox"
              id="filter-purchased"
              name="filter"
              value="purchased"
              type="checkbox"
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
