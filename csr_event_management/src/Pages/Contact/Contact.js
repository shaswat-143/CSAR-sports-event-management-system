import React from "react";
import Img from "../../assets/cutm.jpg";
import Iframe from 'react-iframe';

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <Iframe
            className="border-0"
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.9952465822394!2d85.70367367589508!3d20.175923416522007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19aec948fe62ef%3A0xb6c968c7957b6b4f!2sCenturion%20University%20of%20Technology%20%26%20Management%2C%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1688245922771!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowfullscreen=""
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-center">
            <img src={Img} alt="Logo" className="img-fluid" style={{ maxHeight: "200px" }} />
          </div>
          <div className="mt-4">
            <h2 className="mb-4">Contact Us</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
