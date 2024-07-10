import React from "react";
import notesStore from "../stores/notesStore";
export default function Note(props) {
  const store = notesStore((store) => {
    return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
  });
  return (
    <div className="card mx-5 border-dark " key={props.note._id}>
      <div className="card-body text-center">
        <h5 className="card-title">{props.note.uname}</h5>
        <p className="card-text">
          <strong>Contact:</strong> {props.note.contact}
        </p>
        <p className="card-text">
          <strong>Date From:</strong> {props.note.datefrom}
        </p>
        <p className="card-text">
          <strong>Date To:</strong> {props.note.dateto}
        </p>
        <p className="card-text">
          <strong>Number of Persons:</strong> {props.note.pax}
        </p>
        <div className="mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => store.toggleUpdate(props.note)}
          >
            Modify Booking
          </button>
          <button
            className="btn btn-danger"
            onClick={() => store.deleteNote(props.note._id)}
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
}
