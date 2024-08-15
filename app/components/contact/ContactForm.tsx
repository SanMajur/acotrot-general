"use client";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const ref = useRef<any | null>();

  const reset = () => {
    ref.current.value = "";
  };
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1a1902d9-9084-4aa7-a4f6-9bfa66f91f99");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your Message has been sent!",
        icon: "success",
      });
    }
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-4" method="POST">
      <div className="">
        <label htmlFor="" className="text-sm">
          Your name
        </label>
        <input
          type="text"
          name="name"
          ref={ref}
          placeholder="Your name"
          className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          required
        />
      </div>
      <div className="">
        <label htmlFor="" className="text-sm">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          ref={ref}
          placeholder="Your email"
          className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          required
        />
      </div>
      {/* <div className="">
        <label htmlFor="" className="text-sm">
          Mobile
        </label>

        <input
          type="number"
          name="mobile"
          placeholder="Your Mobile Number"
          className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          ref={ref}
          required
        />
      </div> */}
      <div className="">
        <label htmlFor="" className="text-sm">
          Message
        </label>

        <textarea
          placeholder="Message"
          className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          name="message"
          rows={4}
        ></textarea>
      </div>
      <button
        className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
        type="submit"
        onClick={reset}
      >
        Send Message
      </button>
    </form>
  );
}
// service_s6h1uqm
