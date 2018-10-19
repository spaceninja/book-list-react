import React from "react";

class FilterBy extends React.Component {
  render() {
    return (
      <ul className="legend">
        <li className="legend--item legend--purchased">
          <input
            className="legend--checkbox"
            id="filter-purchased"
            name="filter"
            value="purchased"
            type="checkbox"
          />
          <label htmlFor="filter-purchased" className="legend--label">
            Purchased
          </label>
        </li>
        <li className="legend--item legend--prioritize">
          <input
            className="legend--checkbox"
            id="filter-prioritize"
            name="filter"
            value="prioritize"
            type="checkbox"
          />
          <label htmlFor="filter-prioritize" className="legend--label">
            Prioritize
          </label>
        </li>
      </ul>
    );
  }
}

export default FilterBy;
