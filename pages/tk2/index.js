import { useState } from "react";
import FilterBar from "../../components/TK2/FilterBar";
import ListItem from "../../components/TK2/ListItem";

const GaleriFilmTK2 = () => {
  const [filterString, setfilterString] = useState("");
  const [filterCategory, setfilterCategory] = useState("");
  const [sortBy, setSortBy] = useState("asc");

  function handleStateChange(stateName, newValue) {
    if (stateName === "filterString") setfilterString(newValue);
    if (stateName === "filterCategory") setfilterCategory(newValue);
    if (stateName === "sortBy") setSortBy(newValue);
  }

  return (
    <div className="page-wrap mx-auto container flex justify-center font-sans mt-8">
      <div className="block mx-auto min-w-[66.66%] sm:min-w-[83.33%]  md:min-w-[83.33%]">
        <h1 className="mb-4 text-left font-bold text-3xl antialiased tracking-wider font-display">
          GALERI FILM
        </h1>
        <FilterBar
          onStringChange={handleStateChange}
          onCategoryChange={handleStateChange}
          onSortChange={handleStateChange}
        />
        <div className="">
          <ListItem
            filterString={filterString}
            filterCategory={filterCategory}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
};

export default GaleriFilmTK2;
