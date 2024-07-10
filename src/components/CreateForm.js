import React from "react";
import notesStore from "../stores/notesStore";
export default function CreateForm() {
  const store = notesStore();
  if (store.updateForm._id) return <></>;
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="w-75">
        <h1 className="mb-4 text-center text-light">Make a Booking</h1>
        <form
          onSubmit={store.createNote}
          className="p-4 border rounded shadow bg-light"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="uname"
              value={store.createForm.uname}
              onChange={store.updateCreateFormField}
              placeholder="Enter Your Name"
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
              value={store.createForm.contact}
              onChange={store.updateCreateFormField}
              placeholder="Enter Your Contact Number"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateFrom" className="form-label">
              Date From
            </label>
            <input
              type="date"
              className="form-control"
              id="dateFrom"
              name="datefrom"
              value={store.createForm.datefrom}
              onChange={store.updateCreateFormField}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateTo" className="form-label">
              Date To
            </label>
            <input
              type="date"
              className="form-control"
              id="dateTo"
              name="dateto"
              value={store.createForm.dateto}
              onChange={store.updateCreateFormField}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="persons" className="form-label">
              Number of Persons
            </label>
            <input
              type="number"
              className="form-control"
              id="persons"
              name="pax"
              value={store.createForm.pax}
              onChange={store.updateCreateFormField}
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
