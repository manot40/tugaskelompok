import { useReducer, useEffect } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { objKeysToArray, trimString, filterArray, sortArray } from "../helpers/index";
import AddFilmModal from "./AddFilmModal";
import sampleFilm from "../../exampleData/FilmExample";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return {
        ...state,
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
};

const ListItem = ({ filterString, filterCategory, sortBy }) => {
  const [listFilm, dispatch] = useReducer(reducer, { ...sampleFilm });

  useEffect(() => {
    if (!localStorage.getItem("listFilm"))
      localStorage.setItem("listFilm", JSON.stringify(sampleFilm));
    const payload = JSON.parse(localStorage.getItem("listFilm"));
    dispatch({ type: "ADD", payload: payload });
  }, [sampleFilm]);

  function setLocalStorage(data) {
    if (typeof window !== "undefined") {
      const oldData = JSON.parse(localStorage.getItem("listFilm"));
      const newData = { ...oldData, ...data };
      window.localStorage.setItem("listFilm", JSON.stringify(newData));
    }
  }

  function dispatchNewFilm(data) {
    const payload = {
      [uuid()]: data,
    };
    dispatch({ type: "ADD", payload: payload });
    setLocalStorage(payload);
  }

  const filtered = (string, category) => {
    const list = objKeysToArray(listFilm);
    sortArray(list, 'name', sortBy);
    console.log(filterCategory, filterString);
    return filterArray(list, string, category);    
  };

  return (
    <div className="bg-base-200 rounded-box p-6 font-display">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {filtered(filterString, filterCategory).map((film) => (
            <div className="mb-2" key={film.id}>
              <Link href={"/tk2/" + film.id}>
                <a
                className="flex items-start relative w-full mb-2 min-w-[8.99rem] max-w-[8.99rem] h-[13.5rem]"
                >
                  <img
                    className="rounded shadow-md w-full max-h-full h-full"
                    src={film.coverImage}
                  ></img>
                </a>
              </Link>
              <Link href={"/tk2/" + film.id}>
                <a>
                  <h6 className="text-sm line-clamp-2">
                    {trimString(film.name)}
                  </h6>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <AddFilmModal newFilm={dispatchNewFilm} />
    </div>
  );
};

export default ListItem;
