// For handling input states
import { useState } from "react";

// For display toasts
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import styles from "../styles/Home.module.css";

export default function Home() {
  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Form submit handler
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch("https://use-source-mauve.vercel.app/api/submit-form", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });
    // Success if status code is 201
    if (res.status === 201) {
      toast("Thank you for contacting us!", { type: "success" });
    } else {
      toast("Please re-check your inputs.", { type: "error" });
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <form className={styles.form} onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputs}>
          <div>
            <label htmlFor="email">E-Mail Address</label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.io"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Hi there!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
