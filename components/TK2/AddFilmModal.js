import { useState } from "react";
import { capFirstLetter } from "../helpers";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import categorySample from "../../exampleData/CategoryExample";

const AddFilmModal = ({ newFilm }) => {
  const defaultData = {
    name: "",
    synopsis: "",
    category: [],
    coverImage: "",
    videoLink: "",
  };
  const [data, setData] = useState(defaultData);
  const [isModalOpen, setModal] = useState(false);

  const categories = () => {
    const data = [];
    categorySample.forEach((el) => {
      data.push({ value: el, label: capFirstLetter(el) });
    });
    return data;
  };
  function setCategories(val) {
    const selected = val.map((el) => el.value);
    setData({ ...data, category: [...selected] });
  }

  function submitData(event) {
    try {
      event.preventDefault();
      if(!data.category.length) throw "Harap masukkan genre!";
      newFilm(data);
      setData(defaultData);
      setModal(!isModalOpen);
      toast.success("Submit Berhasil!");
    } catch (err) {
      toast.error("Submit gagal. " + err);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center mt-4 mb-2">
        <label
          onClick={() => setModal(!isModalOpen)}
          className="btn btn-primary w-40 self-center modal-button"
        >
          Tambah Baru
        </label>
      </div>
      <input
        type="checkbox"
        checked={isModalOpen}
        className="modal-toggle"
        readOnly
      />
      <div className="modal">
        <form className="modal-box" onSubmit={(e) => submitData(e)}>
          <h1 className="mb-4 text-left font-bold text-2xl antialiased tracking-wider font-display">
            TAMBAH FILM BARU
          </h1>
          <div className="flex flex-col">
            <input
              placeholder="Masukkan Nama Film"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="input input-bordered flex-auto mb-2"
              required
            />
            <Select
              isMulti
              placeholder="Pilih genre..."
              onChange={(val) => setCategories(val)}
              name="colors"
              inputId="genre-select"
              options={categories()}
              className="select-container bg-base-300 mb-2"
              classNamePrefix="select"
            />
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
            <label
              onClick={() => setModal(!isModalOpen)}
              className="btn modal-button"
            >
              Close
            </label>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <ToastContainer theme="colored" />
    </>
  );
};

export default AddFilmModal;
