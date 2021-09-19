import { useReducer, useEffect } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import {
  objKeysToArray,
  trimString,
  filterArray,
  sortArray,
} from "../helpers/index";
import AddFilmModal from "./AddFilmModal";
import sampleFilm from "../../exampleData/FilmExample";
import { toast } from "react-toastify";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "MUTATE":
      return {
        ...payload,
      };
    default:
      return {
        ...state,
      };
  }
};

const ListItem = ({ filterString, filterCategory, sortBy }) => {
  const [listFilm, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    const getLocalItems = localStorage.getItem("listFilm");
    const payload = JSON.parse(getLocalItems);
    dispatch({ type: "MUTATE", payload });
  }, []);

  function setLocalStorage(data) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("listFilm", JSON.stringify({ ...data }));
    }
  }

  function loadDefault() {
    dispatch({ type: "MUTATE", payload: { ...sampleFilm } });
    setLocalStorage({ ...sampleFilm });
  }

  function addFilm(data) {
    const parse = {
      [uuid()]: data,
    };
    const payload = { ...listFilm, ...parse };
    dispatch({ type: "MUTATE", payload });
    setLocalStorage(payload);
  }

  function deleteFilm(e) {
    const payload = { ...listFilm };
    const id = (
      e.target.localName === "ion-icon"
        ? e.target.parentElement.id
        : e.target.id
    ).toString();
    delete payload[id];
    dispatch({ type: "MUTATE", payload });
    setLocalStorage(payload);
    toast.success("Hapus film berhasil!");
  }

  function showList() {
    const filtered = () => {
      const list = objKeysToArray(listFilm);
      sortArray(list, "name", sortBy);
      return filterArray(list, filterString, filterCategory);
    };
    return filtered().map((film) => (
      <div className="mb-2 font-sans" key={film.id}>
        <div className="flex items-start relative w-full mb-2 min-w-[8.99rem] max-w-[8.99rem] h-[13.5rem]">
          <Link href={"/tk2/" + film.id}>
            <img
              className="cursor-pointer rounded shadow-md w-full max-h-full h-full"
              src={film.coverImage}
            />
          </Link>
          <button
            id={film.id}
            className="absolute btn btn-error p-2 btn-sm right-1 bottom-1 z-10"
            onClick={(e) => deleteFilm(e)}
          >
            <ion-icon className="text-xl font-bold" name="trash-outline" />
          </button>
        </div>
        <Link href={"/tk2/" + film.id}>
          <div className="min-h-[2.5rem]">
            <h6 className="text-sm max-w-[8rem] line-clamp-2">
              {trimString(film.name)}
            </h6>
          </div>
        </Link>
      </div>
    ));
  }

  return (
    <div className="bg-base-200 rounded-box p-6 font-display">
      {!showList().length && (
        <h2 className="text-center mb-2">Film tidak ditemukan :(</h2>
      )}
      {Object.keys(listFilm).length === 0 && (
        <div className="flex justify-center">
          <a onClick={() => loadDefault()} className="link text-sm mb-2">
            Load sample data?
          </a>
        </div>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 place-items-center gap-4">
        {showList()}
      </div>
      <AddFilmModal newFilm={addFilm} />
    </div>
  );
};

export default ListItem;
