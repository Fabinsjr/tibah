import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-14 h-[60vh] min-h-[600px] flex flex-col justify-center gap-10 w-full text-white bg-slate-900 bg-bg3 px-6">
      <p className="w-full max-w-7xl mx-auto text-xl font-light">Contact Us</p>
      <div className="max-w-7xl w-full mx-auto">
        <div className="w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-start capitalize">
            Get in touch <span className="text-primary">with us</span>
          </h1>
          <p className="max-w-prose mt-6">
            Feel free to reach out to us at any time. Whether you have
            questions, feedback, or inquiries, we're here to listen and assist.
          </p>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="flex flex-col xl:flex-row w-full">
      <div className="flex-1 bg-[#0A132E]">
        <div className="w-full text-center bg-gray-500 text-bold text-xl py-3">
          Branch Hours
        </div>
        <div className="w-[80%] text-center text-bold text-white text-xl grid grid-cols-2 m-4">
          <p className="text-base text-start">Monday</p>
          <p className="text-base text-end">8:00 AM - 5:00 PM</p>
          <p className="text-base text-start">Tuesday</p>
          <p className="text-base text-end">8:00 AM - 5:00 PM</p>
          <p className="text-base text-start">Wednesday</p>
          <p className="text-base text-end">8:00 AM - 5:00 PM</p>
          <p className="text-base text-start">Thursday</p>
          <p className="text-base text-end">8:00 AM - 5:00 PM</p>
          <p className="text-base text-start">Friday</p>
          <p className="text-base text-end">8:00 AM - 5:00 PM</p>
          <p className="text-base text-start">Saturday/Sunday</p>
          <p className="text-base text-end">Closed</p>
        </div>
        <hr />
        <div className="w-full px-5 text-white text-bold text-xl py-3">
          Branch Address
          <p className="text-base ">
            #4- 1440 Grahams Lane, Burglington, ON L7S 1W3
          </p>
        </div>
        <div className="w-full px-5 text-white text-bold text-xl py-3">
          Contact Information
          <p className="text-base">(289) 266-3082</p>
        </div>
        <div className="w-full px-5 text-white text-bold text-xl py-3">
          Email
          <p className="text-base">info@tibah.ca</p>
        </div>
      </div>
      <div className="flex-[2]">
        <div className="w-full text-center text-bold text-xl py-3">
          <h2 className="text-2xl font-bold">Reach out to us</h2>
          <p className="text-base text-center">
            Use the contact form below to send us a message, and we'll get back
            to you as soon as possible
          </p>
        </div>
        <form className="w-[80%] mx-14">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full text-slate-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-700"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p className="text-gray-600 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full text-slate-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-slate-700 focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full text-slate-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-700 focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder=""
              />
              <p className="text-gray-600 text-xs italic">
                Please fill out this field.
              </p>

              <label
                className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full text-slate-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-700 focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder=""
              />
              <p className="text-gray-600 text-xs italic">
                Please fill out this field.
              </p>

              <label
                className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full text-slate-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-700 focus:border-gray-500"
                id="grid-password"
                placeholder=""
              />
              <p className="text-gray-600 text-xs italic">
                Please fill out this field.
              </p>
              <div className="flex justify-center">
                <button className="bg-primary hover:bg-blue-700 text-slate-700 font-bold py-2 px-4 rounded">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Contact />
    </main>
  );
}
