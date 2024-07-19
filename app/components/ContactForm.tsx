import React, { useState } from "react";

export default function ContactForm() {
  return (
    <form action={""} className="flex flex-col space-y-4" method="POST">
      <div className="">
        <label htmlFor="" className="text-sm">
          Your name
        </label>
        <input
          type="text"
          name="name"
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
          placeholder="Your email"
          className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          required
        />
      </div>
      <div className="">
        <label htmlFor="" className="text-sm">
          Mobile
        </label>

        <input
          type="number"
          name="mobile"
          placeholder="Your Mobile Number"
          className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          required
        />
      </div>
      <div className="">
        <label htmlFor="" className="text-sm">
          Message
        </label>

        <textarea
          placeholder="Message"
          className="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          rows={4}
        ></textarea>
      </div>
      <button
        className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}
// service_s6h1uqm
