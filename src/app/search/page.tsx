"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { baseUrl } from "../url";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

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
        <div className="flex items-center justify-stretch h-full">
          <Image
            src={image || "https://picsum.photos/300"}
            alt="Image"
            width={300}
            height={300}
            className="w-[300px] h-[300px] object-cover"
          />
        </div>
        <h4 className="text-xl font-bold text-center text-black break-words">
          {name}
        </h4>
      </div>
    </Link>
  );
};

function SearchResults({ query }: { query: string }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(query);
    fetch(`${baseUrl}product/product-search/${query}/`)
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
      });
  }, [query]);
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.length > 0 ? (
        products.map((product: any) => (
          <FeatureCard
            key={product.product_id}
            image={`${baseUrl}product/product-list/image/${product.product_id}`}
            name={product.product_name}
            url={product.product_id}
          />
        ))
      ) : (
        <div className="text-center text-2xl">No results found</div>
      )}
    </div>
  );
}
export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [inputVal, setInputVal] = useState(query);
  const onChange = (e: any) => {
    setInputVal(e.target.value);
  };
  const debouncedOnChange = debounce(onChange, 500);

  return (
    <div className="flex flex-col justify-center gap-6 text-white w-full mx-auto bg-slate-900 py-12 pt-36">
      <h3 className="text-center text-5xl text-balance font-bold">
        Search for a specific product
      </h3>
      <div className="flex justify-center gap-1 w-full max-w-2xl mx-auto px-4">
        <input
          type="text"
          placeholder="Search"
          defaultValue={inputVal || ""}
          onChange={debouncedOnChange}
          className="px-4 py-2 border w-full text-black"
        />
        <button className="px-6 py-3 text-white bg-primary rounded">
          Search
        </button>
      </div>
      <SearchResults query={inputVal || "~"} />
    </div>
  );
}
