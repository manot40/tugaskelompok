import { useState } from "react";
import { capFirstLetter } from "../helpers";
import categories from "../../exampleData/CategoryExample";

const AddFilmModal = ({ newFilm }) => {
  const [data, setData] = useState({
    name: "",
    synopsis: "",
    category: "",
    coverImage: "",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  });

  return (
    <>
      <div className="flex flex-col justify-center mt-4 mb-2">
        <label
          htmlFor="addFilmModal"
          className="btn btn-primary w-40 self-center modal-button"
        >
          Tambah Baru
        </label>
      </div>
      <input type="checkbox" id="addFilmModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h1 className="mb-4 text-left font-bold text-2xl antialiased tracking-wider font-display">
            TAMBAH FILM BARU
          </h1>
          <div className="flex flex-col">
            <div className="flex">
              <input
                placeholder="Masukkan Nama Film"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="input input-bordered flex-auto mr-2"
              />
              <select
                className="select flex-auto select-bordered sm:max-w-full max-w-max mb-2 mr-2"
                onChange={(e) => setData({ ...data, category: e.target.value })}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {capFirstLetter(category)}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Masukkan Sinopsis"
              onChange={(e) => setData({ ...data, synopsis: e.target.value })}
              className="textarea textarea-bordered mb-2 min-h-16"
            />
            <input
              placeholder="Masukkan URL Gambar Cover"
              onChange={(e) => setData({ ...data, coverImage: e.target.value })}
              className="input input-bordered mb-2"
            />
            <input
              placeholder="Masukkan URL Video (YT Embed)"
              onChange={(e) => setData({ ...data, videoLink: e.target.value })}
              className="input input-bordered"
            />
          </div>
          <div className="modal-action">
            <label htmlFor="addFilmModal" className="btn modal-button">
              Close
            </label>
            <button className="btn btn-primary" onClick={(e) => newFilm(data)}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFilmModal;
