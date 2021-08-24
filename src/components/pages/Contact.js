import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <form className="mb-5 mt-5">
          <div class="form-group mb-3">
              <label htmlFor="name">Name:</label>
              <input
                type="email"
                class="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div class="form-group mb-3">
              <label htmlFor="emailAddress">Email address:</label>
              <input
                type="email"
                class="form-control"
                id="emailAddress"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label htmlFor="textArea">Message:</label>
              <textarea
                class="form-control"
                id="textArea"
                rows="8"
              ></textarea>
            </div>
            <button className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
