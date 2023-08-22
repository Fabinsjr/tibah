import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-28 h-[80vh] min-h-[800px] flex flex-col justify-center gap-10 w-full text-white bg-slate-900 bg-bg2 px-6">
      <p className="w-full max-w-7xl mx-auto text-xl font-light">Categories</p>
      <h1 className=" text-5xl md:text-7xl font-bold text-balance max-w-7xl mx-auto capitalize">
        Explore our <span className="text-primary">diverse range</span> of
        categories for cutting-edge products
      </h1>
      <div className="w-full max-w-7xl mx-auto">
        <p className="max-w-prose">
          We take pride in crafting top-of-the-line HVAC solutions that set new
          industry standards. Our product range encompasses an array of
          meticulously engineered duct systems, ventilation components, and HVAC
          units designed to deliver optimal performance, energy efficiency, and
          unmatched reliability.
        </p>
      </div>
      <div className="flex w-full max-w-7xl mx-auto gap-8 mt-8">
        <a href="#categories" className="px-6 py-3 text-black font-bold bg-white rounded-md">
          View Categories
        </a>
        <Link
          href="/categories"
          className="px-6 py-3 text-white border rounded-md"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default function Home() {
  return <Hero />;
}
