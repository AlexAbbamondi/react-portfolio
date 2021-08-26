import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <form
            action="mailto:alex.abbamondi@gmail.com"
            method="POST"
            name="myForm"
            className="mb-5 mt-5"
          >
            <div class="form-group mb-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div class="form-group mb-3">
              <label htmlFor="emailAddress">Email address:</label>
              <input
                type="email"
                class="form-control"
                id="emailAddress"
                placeholder="name@example.com"
                name="email"
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="textArea">Message:</label>
              <textarea
                class="form-control"
                id="textArea"
                rows="8"
                name="message"
                required
              ></textarea>
            </div>
            <button
              className="btn btn-primary mt-3"
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
