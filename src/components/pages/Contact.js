import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xbjqqqvy");
  if (state.succeeded) {
    return (
      <div className="contact-response">
        <h1>Thanks for Contacting Me!</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row custom-row">
        <div className="col-sm-12 col-md-8 mt-5">
          <h1 className="mb-4 contact-title">Contact Me</h1>
          <form onSubmit={handleSubmit} className="mb-5">
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
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div class="form-group mb-3">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div class="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                class="form-control"
                id="message"
                rows="8"
                name="message"
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              className="btn mt-3"
              type="submit"
              disabled={state.submitting}
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
