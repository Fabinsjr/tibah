import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { WithContext, Organization } from "schema-dts";
const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Emirates AC Industry",
  url: "https://emirateac.com",
  logo: "https://emirateac.com/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/emirates-air-conditioning-industry",
    "https://2gis.ae/dubai/firm/70000001032908044",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+971 2 555 2005",
      contactType: "customer service",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mussafah Industrial Area",
    addressLocality: "Abu Dhabi",
    addressRegion: "Abu Dhabi",
    postalCode: "00000",
    addressCountry: "AE",
  },

  potentialAction: {
    "@type": "SearchAction",
    target: "https://emirateac.com/search?q={search_term_string}",
    "@id": "https://emirateac.com/search?q={search_term_string}",

    query: "required name=search_term_string",
  },

  description:
    "Emirates AC Industry is the leading HVAC ducting products manufacturer in the UAE. We specialize in manufacturing insulated ducts and other accessories.",
};

const Hero = () => {
  return (
    <section className="pt-28 h-[100vh] min-h-[600px] flex flex-col justify-center gap-10 w-full text-white bg-bg1 bg-slate-800">
      <p className="text-center text-xl font-light">
        Transforming Metal into Brilliance
      </p>
      <h2 className="text-center text-4xl md:text-5xl font-bold text-balance max-w-5xl mx-auto capitalize">
        Your One Stop<span className="text-primary"> Shop</span> For
        HVAC Equipments,Parts and Products.
      </h2>
      <div className="flex flex-col sm:flex-row text-center justify-center gap-8 mt-8 mx-5">
        <Link
          href="/products"
          className="px-6 py-3 text-black font-bold bg-white rounded-md"
        >
          View Products
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 text-white border rounded-md"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

const Content = () => {
  return (
    <section className="flex flex-col gap-10 w-full mx-auto bg-pattern py-24 px-8">
      <div className="max-w-7xl w-full mx-auto">
        <span className="text-primary font-semibold text-2xl">About Us</span>
        <h2 className="text-slate-950 font-bold text-5xl md:text-7l text-balance xl:w-2/3 ">
          Ask Us About Our Custom Sheet Metal Services for Ductwork
        </h2>
        {/* <div className="flex flex-col lg:flex-row mt-12 justify-between items-center gap-8">
          <Image
            src="/website 1.jpg"
            alt="Image"
            width={960}
            height={550}
            className="rounded-md aspect-[16/10] lg:max-w-2xl object-cover h-auto flex-1"
          /> */}
          
          <div className="flex flex-col gap-5 h-full lg:w-1/2">
            <p className="max-w-prose text-lg ">
              Tibah Trading is a family owned and operated Canadian Custom Sheet Metal Manufacturer
              specializing in custom spiral HVAC fabrication, bringing over 20 years of experience.
              Our success lies in the strength of our team. Our qualified professionals provide the technical
              support you need and our industry trained specialists are available to answer your questions. 
            </p>
            <p className="max-w-prose text-lg">
              We strive to keep current with ever advancing products and respond to the differing
              and constantly changing needs in the HVAC industry.
            </p>
            <p className="max-w-prose text-lg">
              We pride ourselves on our exemplary customer service. At Tibah, every customer receives
              our fullest attention.
            </p>
            <p className="max-w-prose text-lg">
              We are also a prod distributor of parts and accessories from industry-leading suppliers,
              like DCL,Imperial,Don Park, Tempco, MetalWorks and more. 
            </p>
            <h4 className="text-slate-850 font-bold text-xl md:text-4l text-balance xl:w-2/3 ">Our Mission & Vision</h4>
            <p>
              <strong>TIBAH</strong> is committed to the values of Integrity, Caring and Stewardship. We are committed to
              provide quality services to help HVAC contractors expand their profitability, enhance a rewarding
              environment for our employees, and encourage a sense of shared responsibility with our community.
            </p>
            
            <Link
              href="/contact"
              className="px-4 py-2 bg-primary hover:bg-blue-700 text-white border rounded max-w-max"
            >
              For Enquiries
            </Link>
          </div>
        </div>   
      {/* </div> */}
    </section>
  );
};

const FeatureCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) => {
  return (
    <div className="flex bg-white flex-col gap-4 max-w-xs mx-auto shadow-xl py-8 px-6 rounded">
      <div className="flex items-center justify-center">
        <Image
          src={image || "https://picsum.photos/96"}
          alt="Image"
          width={64}
          height={64}
          className="w-[64px] h-[64px] object-contain"
        />
      </div>
      <h4 className="text-xl font-bold text-balance text-center">{title}</h4>
      <p className="text-md text-center">{description}</p>
    </div>
  );
};
const Features = () => {
  return (
    <section className="flex flex-col gap-10 w-full mx-auto py-24 px-8 bg-bg1 bg-slate-700">
      <h2 className="text-slate-100 font-bold text-4xl md:text-5xl text-balance text-center">
        Why are we the better option?
      </h2>
      <div className="flex flex-wrap max-w-7xl mx-auto">
        <FeatureCard
          image="/expertise.svg"
          title="Unparalleled Expertise"
          description="Advanced check off and material handling, with all products labeled and strapped for easy identification"
        />
        <FeatureCard
          image="/savings.svg"
          title="Lean Manufacturing"
          description="Lean Manufacturing that saves you money, decreasing your cost by approximately 10% or more."
        />
        <FeatureCard
          image="/solutions.svg"
          title="Attention to Detail"
          description="Attention to detail that makes everything about your order, delivery, and installation easier"
        />
        <FeatureCard
          image="/time.svg"
          title="Quick Turnaround"
          description="Quotes turned around quickly, with estimates developed from blue prints or from your take-off"
        />
      </div>
    </section>
  );
};

const HighLight = () => {
  return (
    <section className="flex flex-col gap-10 w-full mx-auto bg-slate-800 bg-productPattern py-24 px-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row-reverse mt-12 justify-between gap-8 items-start">
          <Image
            src="/DCL.png"
            alt="Image"
            width={712}
            height={906}
            className="rounded-md aspect-[712/906] w-auto object-contain h-full max-h-[500px]"
            style={{alignSelf:"center"}}
          />
          <Image
            src="/donparklogo.svg"
            alt="Image"
            width={100}
            height={150}
            className="rounded-md aspect-[712/906] w-auto object-contain h-full max-h-[500px]"
            style={{alignSelf:"center"}}
          />
          <div className="flex flex-col md:flex-row-reverse mt-12 justify-between gap-8 items-start">
          <Image
            src="/Ductmate.png"
            alt="Image"
            width={712}
            height={906}
            className="rounded-md aspect-[712/906] w-auto object-contain h-full max-h-[500px]"
            style={{alignSelf:"center"}}
          />
          <Image
            src="/imperial2.png"
            alt="Image"
            width={712}
            height={906}
            className="rounded-md aspect-[712/906] w-auto object-contain h-full max-h-[500px]"
            style={{alignSelf:"center"}}
          />
          <Image
            src="/tempco.png"
            alt="Image"
            width={712}
            height={906}
            className="rounded-md aspect-[712/906] w-auto object-contain h-full max-h-[500px]"
            style={{alignSelf:"center"}}
          />
          </div>

          <div className="flex flex-col gap-8 h-full">
            <span className="text-slate-850 font-bold text-xl md:text-4l text-balance xl:w-2/3"
            style={{color:"white"}}>
              Proud Distributors of</span>
{/* 
            <h2 className="text-white font-bold text-4xl md:text-5xl text-balance xl:w-2/3">
              Crafting Custom Sheets to Fit Your Vision
            </h2> */}
            {/* <p className="max-w-prose text-lg text-slate-100">
              Our commitment to manufacturing excellence extends beyond mere
              product performance. We prioritize environmental responsibility
              and sustainability, incorporating eco-friendly materials and
              production techniques that minimize our carbon footprint. Our
              dedication to continuous improvement drives us to stay at the
              forefront of industry advancements, ensuring that our clients
              receive the most advanced, energy-efficient, and reliable HVAC
              solutions available.
            </p>
            <p className="max-w-prose text-lg text-slate-100">
              Choosing Emirates AC means embracing unparalleled comfort and
              peace of mind. From concept to delivery, we guarantee a seamless
              experience, backed by our exceptional customer support and
              after-sales service. Discover the difference that true
              manufacturing excellence can make for your indoor environment with
              Emirates AC. Together, we can create spaces that breathe, inspire,
              and endure for generations to come.
            </p> */}
            <Link
              href="/products"
              className="px-4 py-2 bg-white hover:bg-slate-200 text-black font-semibold border rounded max-w-max"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <Hero />
      <Content />
      <HighLight />
      {/* <Features /> */}
    </main>
  );
}
