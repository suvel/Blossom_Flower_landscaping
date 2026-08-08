import { useState } from 'react';
import { contact } from '../../data/siteInfo.js';

export default function ContactForm() {
  const [subject, setSubject] = useState('');

  return (
    <div className="col-lg-6 animated fadeIn">
      <p className="fs-5 fw-bold text-primary">Contact Us</p>
      <h1 className="display-5 mb-5">We&apos;re here to assist you in every step – just a click away.</h1>
      <form action={`mailto:${contact.email}`} method="get" encType="multipart/form-data">
        <div className="row g-3">
          <div className="col-12">
            <h5>Subject</h5>
            <div className="form-floating">
              <input
                type="text"
                name="subject"
                id="subject"
                className="form-control"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
              <label htmlFor="subject">Name, contact_no</label>
            </div>
          </div>
          <h6>Add further details in mail. </h6>
          <div className="col-12">
            <button className="btn btn-primary py-3 px-4" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
