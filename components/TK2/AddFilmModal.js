import { useState } from "react";
import { capFirstLetter } from "../helpers";
import { ToastContainer, toast } from 'react-toastify'
import categories from "../../exampleData/CategoryExample";

const AddFilmModal = ({ newFilm }) => {
  const defaultData = {
    name: "",
    synopsis: "",
    category: "",
    coverImage: "",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  }
  const [data, setData] = useState(defaultData);

  function submitData(event) {
    event.preventDefault();
    newFilm(data);
    setData(defaultData);
    toast.success("Submit Berhasil!");
  }

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
        <form className="modal-box" onSubmit={(e) => submitData(e)}>
          <h1 className="mb-4 text-left font-bold text-2xl antialiased tracking-wider font-display">
            TAMBAH FILM BARU
          </h1>
          <div className="flex flex-col">
            <div className="flex">
              <input
                placeholder="Masukkan Nama Film"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="input input-bordered flex-auto mr-2"
                required
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
              value={data.synopsis}
              onChange={(e) => setData({ ...data, synopsis: e.target.value })}
              className="textarea textarea-bordered mb-2 min-h-16"
              required
            />
            <input
              placeholder="Masukkan URL Gambar Cover"
              value={data.coverImage}
              onChange={(e) => setData({ ...data, coverImage: e.target.value })}
              className="input input-bordered mb-2"
              required
            />
            <input
              placeholder="Masukkan URL Video (YT Embed)"
              value={data.videoLink}
              onChange={(e) => setData({ ...data, videoLink: e.target.value })}
              className="input input-bordered"
              required
            />
          </div>
          <div className="modal-action">
            <label htmlFor="addFilmModal" className="btn modal-button">
              Close
            </label>
            <button className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer theme="colored"/>
    </>
  );
};

export default AddFilmModal;
