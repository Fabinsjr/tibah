import Link from "next/link";

const Li: React.FC<{
  className?: string;
  children: React.ReactNode;
  url: string;
}> = ({ children, className, url }) => {
  return (
    <li
      className={`text-gray-700 hover:text-primary cursor-pointer ${className}`}
    >
      <Link href={url}>{children}</Link>
    </li>
  );
};
export default function Footer() {
  return (
    <footer className="flex flex-col gap-10 w-full mx-auto pt-24 px-0 bg-slate-300">
      <div className=" lg:grid-cols-3 max-w-7xl mx-auto gap-8 px-8 hidden md:grid">
        <div className="flex flex-col gap-4 col-span-3 lg:col-span-1">
          <img
            src="/Logo-Tibah-HighRes-Logo.png"
            alt="Logo of Tibah"
            className="w-64 h-auto"
          />
          <p className=" text-gray-700 max-w-prose">
            Delivering Climate Control Excellence: Your Preferred Duct & HVAC
            Manufacturer
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 lg:justify-evenly items-center">
          <ul>
            <li className="text-lg text-balance mb-2 text-blue-950 hover:text-primary">
              <a href="/">Home</a>
            </li>
            <li className="text-lg text-balance mb-2 text-blue-950 hover:text-primary">
              <a href="/products">Products</a>
            </li>
            <li className="text-lg text-balance mb-2 text-blue-950 hover:text-primary">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 max-w-7xl w-full mx-auto items-end col-span-2 lg:col-span-1 lg:pr-11">
          <div>
            <h4 className="text-xl font-bold text-balance">Contact Us</h4>
            <div className="flex flex-col gap-2">
              <p className="text-gray-700">
                Phone:{" "}
                <br />
                <a href="tel:(289)266-3082" className="text-blue-800 text-lg">
                  (289) 266-3082
                </a>
              </p>
              <p className="text-gray-700"> Email:</p>
              <div className="flex flex-col text-lg">
                <a
                  href="mailto: info@tibah.ca"
                  className="text-blue-800 text-lg">
                info@tibah.ca
                </a>
                <p className="text-gray-700"> Location:</p>
              <div className="flex flex-col text-lg">
                <a>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.1128350753006!2d-79.81360112413768!3d43.33282787309321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9f625509a23d%3A0x387c6172b8c7268f!2sTIBAH%20TRADING%20INC.!5e0!3m2!1sen!2sin!4v1692723645282!5m2!1sen!2sin"
                 className="width=600 height=450 style=border:0;" 
                 allowFullScreen={false}
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"></iframe>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full col-span-3 text-center py-4 bg-slate-900 text-slate-100 text-sm">
        COPYRIGHT © {new Date().getFullYear()} Emirates AC. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
