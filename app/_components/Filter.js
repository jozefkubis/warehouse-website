"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Filter() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("discount") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("discount", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    params.set("discount", searchTerm);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex">
      <div className="border border-primary-800 flex">
        <Button
          filter="all"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          All products
        </Button>
        <Button
          filter="with-discount"
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          With discount
        </Button>
      </div>
      <div >
        <form onSubmit={handleSubmit} className="" >
          <input
            className="px-5 py-2 bg-primary-700 text-primary-50 ml-6 border border-primary-800 outline-none"
            placeholder="Search..."
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            filter={searchTerm}
          />
        </form>
      </div>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
        }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
