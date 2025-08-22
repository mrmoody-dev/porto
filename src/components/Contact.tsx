// src/components/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Hubungi Kami</h2>
        <p className="contact-intro">
          Jangan ragu untuk menghubungi kami melalui formulir di bawah ini. Kami
          akan dengan senang hati membantu mewujudkan ide proyek Anda.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit">Kirim Pesan</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
