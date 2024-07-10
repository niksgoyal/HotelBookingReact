import { create } from "zustand";
import axios from "axios";
const notesStore = create((set) => ({
  notes: null,
  createForm: {
    uname: "",
    contact: "",
    datefrom: "",
    dateto: "",
    pax: 0,
  },
  updateForm: {
    _id: null,
    uname: "",
    contact: "",
    datefrom: "",
    dateto: "",
    pax: 0,
  },
  fetchNotes: async () => {
    try {
      //fetch the notes
      const res = await axios.get("/notes");

      //set to state
      set({
        notes: res.data.notes,
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateCreateFormField: (event) => {
    try {
      const { name, value } = event.target;
      set((state) => {
        return {
          createForm: { ...state.createForm, [name]: value },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  createNote: async (event) => {
    event.preventDefault();
    const { createForm, notes } = notesStore.getState();
    //create the note
    try {
      const res = await axios.post("/notes", createForm);
      //update the state
      set({
        notes: [...notes, res.data.note],
        createForm: {
          uname: "",
          contact: "",
          datefrom: "",
          dateto: "",
          pax: 0,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteNote: async (_id) => {
    try {
      //delete the note
      await axios.delete(`/notes/${_id}`);
      const { notes } = notesStore.getState();
      //update the state
      const newNotes = notes.filter((note) => {
        return note._id !== _id;
      });
      set({
        notes: newNotes,
      });
    } catch (error) {
      console.log(error);
    }
  },
  handleUpdateForm: (event) => {
    const { name, value } = event.target;
    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },
  toggleUpdate: async (note) => {
    //set state on update form
    const { _id, uname, contact, datefrom, dateto, pax } = note;
    set({
      updateForm: { uname, contact, datefrom, dateto, pax, _id },
    });
  },
  updateNote: async (event) => {
    event.preventDefault();
    const {
      updateForm: { uname, contact, datefrom, dateto, pax, _id },
      notes,
    } = notesStore.getState();
    //send the update request
    const res = await axios.put(`/notes/${_id}`, {
      uname,
      contact,
      datefrom,
      dateto,
      pax,
    });
    console.log(res);
    //update state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === _id;
    });
    newNotes[noteIndex] = res.data.note;
    set({
      notes: newNotes,
      updateForm: {
        _id: null,
        uname: "",
        contact: "",
        datefrom: "",
        dateto: "",
        pax: 0,
      },
    });
  },
}));

export default notesStore;
