import { useState } from "react";
import items from "../../exampleData/FilmExample";
import FilterBar from "../../components/TK2/FilterBar";
import ListItem from "../../components/TK2/ListItem";

const GaleriFilmTK2 = () => {
  const [filterString, setfilterString] = useState("");
  const [filterCategory, setfilterCategory] = useState("all");
  const [sortBy, setSortBy] = useState("asc");

  function handleStateChange(stateName, newValue) {
    if (stateName === 'filterString') setfilterString(newValue);
    if (stateName === 'filterCategory') setfilterCategory(newValue);
    if (stateName === 'sortBy') setSortBy(newValue);
  }

  return (
    <div className="container mx-auto flex justify-center items-center mt-12 font-sans">
      <div className="block mx-auto w-11/12  md:w-10/12 lg:w-2/3 xl:w-2/3 2xl:w-2/3">
        <FilterBar
          onStringChange={handleStateChange}
          onCategoryChange={handleStateChange}
          onSortChange={handleStateChange}
        />
        <div className="">
          <ListItem
            listItem={items}
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
