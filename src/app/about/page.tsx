import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-14 h-[60vh] min-h-[600px] flex flex-col justify-center gap-10 w-full text-white bg-slate-900 bg-bg3 px-6">
      <p className="w-full max-w-7xl mx-auto text-xl font-light">About us</p>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-balance capitalize">
          A Legacy of <span className="text-primary">Excellence</span> and
          innovation
        </h1>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-20 bg-[#0A132E]  px-6 gap-8 w-full justify-evenly">
      <div className=" flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-5">
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-white mb-4">Contact us</h2>
          <p className="text-slate-300 mb-2 max-w-prose">
            EMIRATES AC INDUSTRY is not just Duct manufacturer but technical
            support and advisor for HVAC Duct work From your first call, you
            will experience the reason why more HVAC Consultants & Contractors
            are turning to EMIRATES AC INDUSTRY. Specific project components
            including duct construction standards (maximize material
            utilization), project labeling and system identification (ease of
            installation through communication) and packaging methods (assembled
            duct work vs. CAD duct work) will all be discussed to provide our
            customers a value-added service experience. Our Products
            manufactured using latest technology and depend on Computerized CNC
            Machines from Germany, UK and USA.
          </p>
          <div className="grid grid-cols-2 mt-6 gap-5">
            <div>
              <h3 className="text-white mb-1 text-lg">Address</h3>
              <address className="text-slate-300">
                M-17, Near Al Jadeed Bakery <br /> Abu Dhabi <br /> United Arab
                Emirates
              </address>
            </div>
            <div>
              <p className="font-bold my-2 text-white">Email</p>
              <div className="flex flex-col">
                <a href="mailto:Info@emirateac.com" className="text-blue-400">
                  Info@emirateac.com
                </a>
                <a
                  href="mailto:m.ashraf@emirateac.com"
                  className="text-blue-400"
                >
                  m.ashraf@emirateac.com
                </a>
                <a href="mailto:sales@emirateac.com" className="text-blue-400">
                  Sales@emirateac.com
                </a>
              </div>
            </div>
            <div>
              <p className="font-bold my-2 text-white">Phone</p>
              <a href="tel:12892663082" className="text-slate-300">
                +1 289 266 3082
              </a>
            </div>
            <div>
              <p className="text-white mt-5 flex flex-col">
                <span className="font-bold">Hours </span>
                <span className="text-slate-300">
                  Monday - Friday: 9AM - 5PM
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4322.205365097321!2d54.48293480195361!3d24.362964051612465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e40fc278e2a3b%3A0x355ff0f55c08d8c4!2sEmirates%20Air%20Conditioning%20Accessories%20Industry!5e0!3m2!1sen!2sin!4v1690558396972!5m2!1sen!2sin"
          className="border-0 rounded-xl w-full h-full min-h-[400px]"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
