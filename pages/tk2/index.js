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
    <div className="page-wrap container mx-auto flex justify-center items-center font-sans mt-8">
      <div className="block mx-auto 2/3 sm:w-11/12  md:w-10/12">
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
