import React, { useRef, useState } from "react";
import '../App.css';
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserAstronaut,faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_wetrcqk',
        'template_8hug0ah',
        {
          from_name: form.name,
          to_name: "Shraddha Singh",
          from_email: form.email,
          to_email: "sh913738@dal.ca",
          message: form.message,
        },
        'yKqy7MMnjHZqT5NNK'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible. Have a great day :)");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="contact section" id="contact" style={{ marginTop: '4rem' }}>
      <div className="container">
        <h2 className="section-title padd-15">Contact Me</h2>
        <div className="row">
          <div className="contact-box padd-15">
            <div className="contact-data">
              <div className="contact-information">
                <h3 className="contact-subtitle">Reach out to me</h3>
                <span className="contact-description">
                <FontAwesomeIcon icon={faUserAstronaut}  className="contact-icon"/>
                  sh913738@dal.ca
                </span>
        {/* <FontAwesomeIcon icon={faGithub} className="icon" />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faFileAlt} /> */}

              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form padd-15">
            <div className="contact-inputs">
              <div className="form-group">
              <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="contact-input"
                />
                <label className="contact-label">Your Name</label>
                <span></span>

              </div>
            <div className="form-group">
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="contact-input"
              />
  
              <label className="contact-label">Your Email</label>
              <span></span>

            </div>
            <div className="form-group">

              <label className="contact-label">Your Message</label>
              <textarea
                cols={30}
                rows={10}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="contact-input"
              />
              <span></span>

            </div>
            <button type="submit" className="btn btn-default">
              {loading ? "Sending..." : "Send Message"}
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
