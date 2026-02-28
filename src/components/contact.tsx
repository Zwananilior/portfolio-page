import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_2xmcxmz",
        "template_fvhx0jg",
        formRef.current,
        "QOKB072rcKwJSLoWH"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong.");
      });
  };

  return (
    <section
  id="contact"
  className="scroll-mt-24"
  style={styles.section}
>
      <div style={styles.container}>
        {/* LEFT COLUMN */}
        <div style={styles.left}>
          <h2 style={styles.heading}>Contact Me</h2>

          <h3 style={styles.subheading}>Let’s Connect</h3>

          <p style={styles.paragraph}>
            I’m currently available for freelance projects, collaborations,
            and exciting new opportunities. Feel free to reach out if you’d
            like to work together or just have a conversation.
          </p>

          <div style={styles.contactInfo}>
            <p>📧 zwananiluyanda@gmail.com</p>
            <p>📞 063 161 5555</p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={styles.right}>
          <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={styles.input}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={{ ...styles.input, ...styles.textarea }}
              required
            />

            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        © {new Date().getFullYear()} Luyanda Masinga. All Rights Reserved.
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    minHeight: "100vh",
    background: "#081b29", // your dark portfolio color
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "60px 10%",
    color: "white",
  },

  container: {
    display: "flex",
    gap: "60px",
    flexWrap: "wrap",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(20px)",
    borderRadius: "30px",
    padding: "50px",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  left: {
    flex: 1,
    minWidth: "280px",
  },

  right: {
    flex: 1,
    minWidth: "280px",
  },

  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#00f0ff", // portfolio accent
  },

  subheading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
  },

  paragraph: {
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "#cbd5e1",
  },

  contactInfo: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  input: {
    padding: "15px",
    borderRadius: "25px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    outline: "none",
  },

  textarea: {
    minHeight: "120px",
    resize: "vertical",
  },

  button: {
    padding: "15px",
    borderRadius: "25px",
    border: "none",
    background: "#00f0ff",
    color: "#081b29",
    fontWeight: 600,
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    marginTop: "40px",
    opacity: 0.7,
    fontSize: "0.9rem",
  },
};

export default Contact;