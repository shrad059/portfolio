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
    <section className="contact section" id="contact" >
      <div className="container">
      <div className="title-container">
        <h2 className="section-title padd-10">React out to me:</h2>
        <svg 
          viewBox="0 0 220 12" 
          className="wiggle-line"
          style={{ 
            width: '245px',
            height: '12px',
            color: '#9f5366' // Matching your theme color
          }}
        >
          <path
            d="M 0 6 Q 5 0, 10 6 T 20 6 T 30 6 T 40 6 T 50 6 T 60 6 T 70 6 T 80 6 T 90 6 T 100 6 T 110 6 T 120 6 T 130 6 T 140 6 T 150 6 T 160 6 T 170 6 T 180 6 T 190 6 T 200 6 T 210 6 T 220 6 T 230 6 T 240 6 T  "
            fill="none"
            stroke="currentColor"
            strokeWidth="4" 
            strokeLinecap="round"
          />
        </svg>
      </div>

        <div className="row">
          <div className="contact-box padd-15">
            <div className="contact-data">





            <div className="contact-information">
  <span className="contact-description">
    <FontAwesomeIcon icon={faUserAstronaut} className="contact-icon" />
    sh913738@dal.ca
  </span>
{/* <span className="contact-github"> */}
<span className="contact-description">
        <FontAwesomeIcon icon={faGithub} className="contact-icon" />
        github.com/shrad059
      </span>
      <span className="contact-description">
        <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
        linkedin.com/in/shraddhasinggh
      </span>
{/* </span> */}


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
