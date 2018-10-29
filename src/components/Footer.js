import React from "react";
import PropTypes from "prop-types";

class Footer extends React.Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    createNewBook: PropTypes.func.isRequired,
    loadSampleBooks: PropTypes.func.isRequired,
    loadInitBooks: PropTypes.func.isRequired,
    adminMode: PropTypes.bool.isRequired,
    authenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
  };

  render() {
    if (this.props.loading) {
      return null;
    }
    return (
      <footer>
        {!this.props.authenticated && (
          <button
            className="btn btn-primary"
            onClick={() => this.props.authenticate("Github")}
          >
            Log in with GitHub
          </button>
        )}
        {this.props.authenticated && (
          <button className="btn btn-primary" onClick={this.props.logOut}>
            Log out
          </button>
        )}
        {this.props.adminMode && (
          <React.Fragment>
            <button
              className="btn btn-secondary"
              onClick={this.props.loadInitBooks}
            >
              Load Init Books
            </button>
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
        {this.props.authenticated &&
          !this.props.adminMode && (
            <span className="alert alert--error">
              This account does not have admin access.
            </span>
          )}
      </footer>
    );
  }
}

export default Footer;
