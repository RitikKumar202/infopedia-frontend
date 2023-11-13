import React from "react";
import Layout from "../../components/Layout";
import Contact from "../../assets/contact-us.jpg";

const ContactPage = () => {
  return (
    <Layout>
      <section className="container w-full mx-auto flex flex-col lg:flex-row py-10 px-5">
        <div className="lg:w-2/5">
          <img src={Contact} alt="contact-us" className="rounded-lg" />
        </div>
        <div className="lg:w-[60%] flex flex-col justify-center items-center">
          <h2 className="font-Poppins text-2xl mt-5 lg:mt-0 lg:text-3xl font-medium">
            Let's have a talk
          </h2>
          <div className="flex flex-wrap m-2 lg:p-5">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none rounded text-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
