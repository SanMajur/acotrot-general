import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  return (
    <div className="min-h-screen flex w-full justify-center items-center flex-col">
      <div className="flex flex-col md:flex-row md:space-x-6 md:justify-between md:space-y-0 space-y-6 bg-blue-400 w-full max-w-4xl p-8 md:p-12 lg:rounded-xl shadow-lg text-white overflow-hidden">
        <ContactInfo />
        <div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-20 -top-28"></div>
          <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-20 -bottom-16"></div>
          <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
