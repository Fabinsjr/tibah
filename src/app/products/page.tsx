import Link from "next/link";
import Image from "next/image";
import { baseUrl } from "../url";

const Hero = () => {
  return (
    <section className="pt-28 h-[80vh] min-h-[800px] flex flex-col justify-center gap-10 w-full text-white bg-slate-900 bg-bg2 px-6">
      <p className="w-full max-w-7xl mx-auto text-xl font-light">Products</p>
      <h1 className=" text-5xl md:text-7xl font-bold text-balance max-w-7xl mx-auto capitalize"
      style={{color:"white"}}>
        Explore our <span className="text-primary"
        style={{color:"white"}}>diverse range</span> of
        cutting-edge products
      </h1>
      <div className="w-full max-w-7xl mx-auto">
        <p className="max-w-prose">
          We offer custom sheet metal products manufactured to meet your project needs.
          High quality HVAC Sheet Metal products made to exact specifications.
          <br />
          We provide parts and accessories from industry leading suppliers,like DCL,Imperial,
          Don Park,Noble,MetalWorks and more.
        </p>
      </div>
      <div className="flex w-full max-w-7xl mx-auto gap-8 mt-8">
        <a href="#products" className="px-6 py-3 text-black font-bold bg-white rounded-md">
          View Products
        </a>
        <Link
          href="/contact"
          className="px-6 py-3 text-black font-bold bg-white rounded-md"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

const FeatureCard = ({
  name,
  image,
  url,
}: {
  name: string;
  image?: string;
  url: string;
}) => {
  return (
    <Link href={`/products/${encodeURIComponent(url)}`}>
      <div className="flex flex-col gap-4 max-w-xs mx-auto shadow-xl p-4 rounded bg-white my-8">
        <div className="flex items-center">
          <Image
            src={image || "https://picsum.photos/300"}
            alt="Image"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
        </div>
        <h4 className="text-xl font-bold text-center">{name}</h4>
      </div>
    </Link>
  );
};
const Products = async () => {
  const products = await (await fetch(`${baseUrl}product/product-list/view/`)).json()
  return (
    <section className="flex flex-col gap-10 w-full mx-auto py-24 px-8 bg-pattern" id="products">
      <h2 className="text-slate-950 font-bold text-4xl md:text-5xl text-balance text-center">
        Our products
      </h2>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product:any) => (
          <FeatureCard
            key={product.product_id}
            image={`${baseUrl}product/product-list/image/${product.product_id}`}
            name={product.product_name}
            url={product.product_id}
          />
        ))}
      </div>
    </section>
  );
};
export default function Home() {
  return <><Hero /><Products/></>;
}
