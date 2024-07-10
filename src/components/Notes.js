import notesStore from "../stores/notesStore";
import React from "react";
import Note from "./Note";
export default function Notes() {
  const store = notesStore();
  return (
    <div>
      <div>
        <h1 className="text-center text-light my-5">Booking Details</h1>
        {store.notes &&
          store.notes.map((note) => {
            return <Note note={note} key={note._id} />;
          })}
      </div>
    </div>
  );
}
