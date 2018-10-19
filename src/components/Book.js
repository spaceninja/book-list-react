import React from "react";

class Book extends React.Component {
  render() {
    return (
      <li className="book">
        <h2 className="book--headline">
          <span className="book--title">Before Mars</span>
          <span className="book--series">Planetfall #3</span>
        </h2>
        <p className="book--author" data-prefix="by ">
          Emma Newman
        </p>
        <p className="book--rating num">4.1</p>
        <p className="book--length num" data-suffix="p">
          320
        </p>
        <blockquote>
          <p className="book--snippet">
            After months of travel, Anna Kubrin finally arrives on Mars for her
            new job as a geologist and de facto artist-in-residence.
          </p>
        </blockquote>
        <p className="book--recommendation">
          <span className="book--source" data-prefix="Recommended by ">
            io9
          </span>
          <q className="book--note">
            A woman undergoes a long, grueling journey to her new job on Mars,
            only to have an eerie sense of déjà vu once she arrives.
          </q>
        </p>
      </li>
    );
  }
}

export default Book;
