import React from 'react';

function Contact() {
  return (
      <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <p className="text-center mb-4" >Wanna collab? Reach out!! </p>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea 
              className="form-control" 
              id="message" 
              name="message" 
              rows="5" 
              placeholder="Write your message here" 
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
