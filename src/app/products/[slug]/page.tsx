import { baseUrl } from "@/app/url";
import AddToCart from "@/components/AddToCart";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ product }: { product: any }) => {
  return (
    <section className="pt-28 h-full min-h-[800px] flex flex-col justify-center gap-10 w-full text-white bg-slate-800 px-6 bg-productPattern">
      <p className="w-full max-w-7xl mx-auto text-xl font-light">Products</p>
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row  justify-between">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className=" text-5xl md:text-7xl mr-4 font-bold text-balance capitalize">
            {product.product_name}
          </h1>
          <p className="max-w-prose mt-12">{product.product_description}</p>
          <AddToCart productID={product.product_id} />
        </div>
        <Image
          src={`${baseUrl}product/product-list/image/${product.product_id}`}
          alt="Image"
          className="mt-5 outline-[0.5rem] outline-primary outline rounded-md bg-primary"
          width={420}
          height={420}
        />
      </div>
    </section>
  );
};

export default async function Home({ params }: { params: { slug: string } }) {
  const product = await (
    await fetch(`${baseUrl}product/product-list/view-single/${params.slug}/`)
  ).json();
  console.log(params.slug);
  return (
    <>
      <Hero product={product} />
    </>
  );
}
export async function generateStaticParams() {
  const product = await (
    await fetch(`${baseUrl}product/product-list/view/`)
  ).json();
  const posts = product.map((product: any) => ({
    slug: product.product_id,
  }));

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
