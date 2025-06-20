"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzzgarwb");

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      {state.errors && (
        <div className="bg-red-600 text-white px-4 py-4 rounded-md text-center font-medium">
          ❌{" "}
          {state.errors.getFormErrors()?.[0].message ||
            "There was an error submitting the form. Please check your inputs!"}
        </div>
      )}
      {state.succeeded && (
        <div className="bg-green-600 text-white px-4 py-4 rounded-md text-center font-medium">
          ✅ Your message has been submitted successfully!
        </div>
      )}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded bg-[#1A1A1A] text-white"
        disabled={state.submitting || state.succeeded}
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full p-3 rounded bg-[#1A1A1A] text-white"
        disabled={state.submitting || state.succeeded}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        required
        rows={5}
        className="w-full p-3 rounded bg-[#1A1A1A] text-white"
        disabled={state.submitting || state.succeeded}
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        className="bg-blue-600 px-6 py-3 rounded-md text-white font-medium hover:bg-blue-700 transition"
        disabled={state.submitting || state.succeeded}
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
