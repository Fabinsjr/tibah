"use client";
const Hero = () => {
  return (
    <section className="pt-8 h-[40vh] min-h-[600px] flex flex-col justify-center gap-10 w-full text-white bg-slate-800 px-6">
      <p className="w-full max-w-7xl mx-auto text-xl font-light">Admin</p>
      <h1 className=" text-6xl md:text-7xl font-bold text-balance max-w-7xl mx-auto capitalize">
        Manage Quotes and Add <span className="text-primary">New Products</span>{" "}
        with Ease
      </h1>
    </section>
  );
};
const Company = () => {
  return (
    <div className="w-full bg-pattern">
      <div className="flex w-full max-w-7xl mx-auto mb-5 px-5">
        <h2 className="font-bold text-xl px-5 py-3 -translate-x-5 bg-primary text-white flex items-center">
          Company Details
        </h2>
        <div className="">
          <h2 className="font-bold text-xl px-5 pt-3">JohnDoe</h2>
          <p className="px-5 ">johndoe@gmail.com</p>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full max-w-7xl mx-auto pb-8 px-5">
        <div>
          <h3 className="font-bold text-lg my-2">Address</h3>
          <address>
            1234 Main Street
            <br />
            Anytown, USA 12345
          </address>
        </div>
        <div>
          <h3 className="font-bold text-lg my-2 ">License type</h3>
          <p>Business License</p>
        </div>
        <div>
          <h3 className="font-bold text-lg my-2 ">Contact number</h3>
          <p>123-456-7890</p>
        </div>
        <div>
          <h3 className="font-bold text-lg my-2 ">License number</h3>
          <p>123-456-7890</p>
        </div>
        <button
          className="bg-primary px-4 py-2 text-white rounded w-fit mt-8"
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
const Quote = () => {
  return (
    <div className="w-full pt-5 pl-5 bg-slate-50 rounded-xl overflow-hidden">
      <h4 className="text-lg font-bold">Quote for metal sheet</h4>
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <p>
          Submit date: <time dateTime="2021-12-12">12/12/2021</time>
        </p>
        <p>Status: Pending</p>
        <button className="bg-primary px-4 py-2 -ml-5 text-white sm:rounded-tl-xl hover:bg-blue-500">
          View Details
        </button>
      </div>
    </div>
  );
};
const Quotes = () => {
  return (
    <div className="w-full bg-[#0A132E] ">
      <div className="w-full max-w-7xl mx-auto px-5 pb-12">
        <h2 className="font-bold text-xl px-5 py-3 w-fit bg-primary text-white flex items-center mb-8">
          Quote History
        </h2>
        <div className="flex flex-col gap-8">
          <Quote />
          <Quote />
          <Quote />
          <Quote />
          <Quote />
          <Quote />
        </div>
      </div>
    </div>
  );
};
export default function Admin() {
  return (
    <>
      <Hero />
      <main className="flex flex-col items-center">
        <Company />
        <Quotes />
      </main>
    </>
  );
}
