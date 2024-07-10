import React from "react";
import notesStore from "../stores/notesStore";

export default function UpdateForm() {
  const store = notesStore();
  if (!store.updateForm._id) return <></>;
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="w-75">
        <h1 className="mb-4 text-center text-light">Modify Booking</h1>
        <form
          onSubmit={store.updateNote}
          className="p-4 border rounded shadow bg-light"
        >
          <div className="mb-3">
            <label htmlFor="uname" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="uname"
              name="uname"
              value={store.updateForm.uname}
              onChange={store.handleUpdateForm}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact
            </label>
            <input
              type="text"
              className="form-control"
              id="contact"
              name="contact"
              value={store.updateForm.contact}
              onChange={store.handleUpdateForm}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="datefrom" className="form-label">
              Date From
            </label>
            <input
              type="date"
              className="form-control"
              id="datefrom"
              name="datefrom"
              value={store.updateForm.datefrom}
              onChange={store.handleUpdateForm}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateto" className="form-label">
              Date To
            </label>
            <input
              type="date"
              className="form-control"
              id="dateto"
              name="dateto"
              value={store.updateForm.dateto}
              onChange={store.handleUpdateForm}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pax" className="form-label">
              Number of Persons
            </label>
            <input
              type="number"
              className="form-control"
              id="pax"
              name="pax"
              value={store.updateForm.pax}
              onChange={store.handleUpdateForm}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
