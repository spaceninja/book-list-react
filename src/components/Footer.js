import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <button
          className="btn btn-secondary"
          onClick={this.props.toggleadminMode}
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
