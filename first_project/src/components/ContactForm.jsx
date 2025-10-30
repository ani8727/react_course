// src/components/ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    // For practice app: open mail client with prefilled subject
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(form.message + `\n\nFrom: ${form.email}`);
    window.location.href = `mailto:aniketgupta.8727@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="contact-form-wrap">
      {!sent ? (
        <form className="contact-form" onSubmit={submit}>
          <input name="name" placeholder="Your name" value={form.name} onChange={update} required />
          <input name="email" type="email" placeholder="Your email" value={form.email} onChange={update} required />
          <textarea name="message" placeholder="Message" value={form.message} onChange={update} rows="5" required />
          <button className="btn primary" type="submit">Send</button>
        </form>
      ) : (
        <div className="sent-msg">
          <p>Thanks — your message client opened. You can edit & send from your email app.</p>
          <button className="btn outline" onClick={() => setSent(false)}>Send another</button>
        </div>
      )}
    </div>
  );
}
