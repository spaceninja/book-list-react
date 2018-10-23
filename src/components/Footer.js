import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <button
          className="btn btn-secondary"
          onClick={this.props.toggleEditMode}
        >
          {this.props.editMode ? "Exit" : "Enter"} Edit Mode
        </button>
        {this.props.editMode && (
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
