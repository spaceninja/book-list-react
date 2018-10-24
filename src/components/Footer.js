import React from "react";
import PropTypes from "prop-types";

class Footer extends React.Component {
  static propTypes = {
    createNewBook: PropTypes.func.isRequired,
    loadSampleBooks: PropTypes.func.isRequired,
    toggleAdminMode: PropTypes.func.isRequired,
    adminMode: PropTypes.bool.isRequired
  };

  render() {
    return (
      <footer>
        <button
          className="btn btn-secondary"
          onClick={this.props.toggleAdminMode}
        >
          {this.props.adminMode ? "Exit" : "Enter"} Admin Mode
        </button>
        {this.props.adminMode && (
          <React.Fragment>
            <button
              className="btn btn-secondary"
              onClick={this.props.loadSampleBooks}
            >
              Load Sample Books
            </button>
            <button
              className="btn btn-secondary"
              onClick={this.props.createNewBook}
            >
              Add New Book
            </button>
          </React.Fragment>
        )}
      </footer>
    );
  }
}

export default Footer;
