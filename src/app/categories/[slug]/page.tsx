import { baseUrl } from "@/app/url";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ category }: { category: any }) => {
  return (
    <section className="pt-28 h-full min-h-[800px] flex flex-col justify-center gap-10 w-full text-white bg-slate-800 px-6 bg-productPattern">
      <p className="w-full max-w-7xl mx-auto text-xl font-light">Categories</p>
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row  justify-between">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className=" text-5xl md:text-7xl font-bold text-balance capitalize">
            {category.category_name}
          </h1>
          <p className="max-w-prose mt-12">{category.category_description}</p>
        </div>
        <Image
          src={`${baseUrl}product/category-list/image/${category.category_id}`}
          alt="Image"
          className="mt-5 outline-[0.5rem] outline-primary outline rounded-md bg-primary"
          width={420}
          height={420}
        />
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
const Products = async ({ slug, name }: { slug: string; name: string }) => {
  const products = await (
    await fetch(`${baseUrl}product/product-list/category/${slug}/`)
  ).json();
  return (
    <section className="flex flex-col gap-10 w-full mx-auto py-24 px-8 bg-pattern">
      <h2 className="text-slate-950 font-bold text-4xl md:text-5xl text-balance text-center">
        Our products for {name}
      </h2>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product: any) => (
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
export default async function Home({ params }: { params: { slug: string } }) {
  const category = await (
    await fetch(`${baseUrl}product/category-list/view-single/${params.slug}/`)
  ).json();
  return (
    <>
      <Hero category={category} />
      <Products name={category.category_name} slug={params.slug} />
    </>
  );
}
export async function generateStaticParams() {
  const categories = await (
    await fetch(`${baseUrl}product/category-list/view/`)
  ).json();
  const posts = categories.map((category: any) => ({
    slug: category.category_id,
  }));

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
