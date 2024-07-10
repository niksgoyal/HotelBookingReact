import React from "react";
import { useEffect } from "react";
import notesStore from "../stores/notesStore";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";
import "../components/HomeStyle.css";

import NavbarBook from "../components/NavbarBook";
export default function NotesPage() {
  const store = notesStore();

  //useEffect
  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div className="background">
      <NavbarBook />
      <Notes />
      <UpdateForm />
      <CreateForm />
    </div>
  );
}
