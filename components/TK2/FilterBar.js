import categories from "../../exampleData/CategoryExample";
import { capFirstLetter } from "../helpers";

const FilterBar = ({ onStringChange, onCategoryChange, onSortChange }) => {
  return (
    <div className="w-full flex flex-row sm:flex-col flex-wrap mb-2">
      <input
        type="text"
        placeholder="Ketik nama film"
        className="input input-bordered sm:w-full flex-1 mr-2 min-h-12 mb-2"
        onChange={(e) => onStringChange("filterString", e.target.value)}
      />
      <select
        className="select select-bordered flex-1 sm:max-w-full max-w-max mb-2 mr-2"
        onChange={(e) => onCategoryChange("filterCategory", e.target.value)}
      >
        <option value="all">Semua kategori</option>
        {categories.map((category) => (
          <option value={category}>{capFirstLetter(category)}</option>
        ))}
      </select>
      <select
        className="select select-bordered flex-1 sm:max-w-full max-w-max mb-2"
        onChange={(e) => onSortChange("sortBy", e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="des">Descending</option>
      </select>
    </div>
  );
};

export default FilterBar;
