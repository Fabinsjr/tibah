"use client";

import { useState } from "react";
import  {useRouter} from "next/navigation";

const Search = () => {
    const [query,setQuery] = useState("");
    const {push} = useRouter();
    return (
      <div className="flex flex-col justify-center gap-6 text-white w-full mx-auto bg-slate-900 py-12">
        <h3 className="text-center text-5xl text-balance font-bold">
          Find Your Metal Fabrication Solutions
        </h3>
        <div className="flex justify-center gap-1 w-full max-w-2xl mx-auto px-4">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 border w-full text-black"
          />
          <button className="px-6 py-3 text-white bg-primary rounded" onClick={() => push(`/search?query=${query}`)}>
            Search
          </button>
        </div>
      </div>
    );
  };

export default Search;