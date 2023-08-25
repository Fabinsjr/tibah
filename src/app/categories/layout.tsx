import Image from "next/image";
import Link from "next/link";
import { baseUrl } from "../url";
import Search from "../../components/Search";
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
    <Link href={`/categories/${encodeURIComponent(url)}`}>
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
  const categories = await (await fetch(`${baseUrl}product/category-list/view/`)).json()
  return (
    <section className="flex flex-col gap-10 w-full mx-auto py-24 px-8 bg-pattern" id="categories">
      <h2 className="text-slate-950 font-bold text-4xl md:text-5xl text-balance text-center">
        Our categories
      </h2>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((product:any) => (
          <FeatureCard
            key={product.category_id}
            image={`${baseUrl}product/category-list/image/${product.category_id}`}
            name={product.category_name}
            url={product.category_id}
          />
        ))}
      </div>
    </section>
  );
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center">
      {children}
      <Products />
      <Search />
    </main>
  );
}
