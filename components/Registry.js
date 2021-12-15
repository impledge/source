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
    const res = await fetch("https://usesource.app/api/submit-form", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    // Success if status code is 201
    if (res.status === 201) {
      toast("Thank you for contacting us!", { type: "success" });
    } else {
      toast("Please re-check your inputs.", { type: "error" });
    }
  };

  return (
    <>
      <div className="relative bg-green-400">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80"
            alt=""
          />
          <div
            className="absolute inset-0 bg-blue-500 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            If you're looking to build better security around your patient,
            financial, or business data we're here to help. For developers
            looking to contribute to open-source projects please don't hesitate
            to reach out as well. We look forward to building a community with
            you!
          </p>
        </div>
      </div>
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
    </>
  );
}
