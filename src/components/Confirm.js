import React from "react";

const Confirm = props => (
  <div className="confirm-dialog">
    <h3 className="confirm-dialog__title">{props.title}</h3>
    <p className="confirm-dialog__message">{props.message}</p>
    <div className="confirm-dialog__actions">
      <button
        className="btn btn-primary"
        onClick={() => {
          props.action(props.option);
          props.onClose();
        }}
      >
        {props.yesButton}
      </button>
      <button className="btn btn-secondary" onClick={props.onClose}>
        {props.noButton || "Cancel"}
      </button>
    </div>
  </div>
);

export default Confirm;
