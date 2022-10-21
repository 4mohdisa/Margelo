import Image from "next/image";
import React from "react";

type Props = {};

const ContactUs: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center pt-10 min-h-screen">
      <div className="pb-10">
        <Image src="/assets/logo.svg" width={30} height={30} alt="logo" />
      </div>
      <h2 className="text-4xl font-bold">Contact Us</h2>
      <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          maxLength={128}
          placeholder="Company name"
          className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          value=""
        />
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={128}
          placeholder="Your E-mail"
          className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          value=""
        />
        <textarea
          id="message"
          name="message"
          required
          maxLength={1048576}
          placeholder="Additional information"
          className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
        ></textarea>
        <div className="text-center mt-10">
          <button
            type="submit"
            className="bg-white text-black rounded-3xl px-8 py-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
