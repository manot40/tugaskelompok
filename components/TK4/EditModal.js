import Select from "react-select";
import { defaultForm, defaultHobby } from "./FormInput";
import { useState, useEffect } from "react";

const EditModal = ({ toBeModified, editDone }) => {
  const [form, setForm] = useState(defaultForm);
  useEffect(() => {
    setForm(toBeModified);
  }, [toBeModified]);

  function setHobi(arr) {
    const hobi = arr.map((item) => item.label);
    setForm({ ...form, hobi });
  }
  function submitForm(e) {
    e.preventDefault();
    editDone("EDIT", form);
  }
  function resetForm() {
    document.getElementsByName("gender").forEach((el) => {
      el.checked = false;
    });
    setForm(defaultForm);
  }

  return (
    <>
      <a id="editBtn" href="#editModal" hidden />
      <div id="editModal" className="modal">
        <form className="modal-box" onSubmit={(e) => submitForm(e)}>
          <h1 className="mb-6 text-center font-bold text-2xl font-display">
            EDIT DATA MAHASISWA
          </h1>
          <div className="flex flex-row space-x-4">
            <div className="form-control mb-2 block w-full">
              <label className="label">
                <span className="label-text">Nama Lengkap</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
                required
              />
            </div>
            <div className="form-control mb-2 block w-2/3">
              <label className="label">
                <span className="label-text">NIM</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={form.nim}
                onChange={(e) => setForm({ ...form, nim: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="flex flex-row sm:flex-col md:flex-col w-full mb-2">
            <div className="form-control min-w-max inline-block mr-4">
              <label className="label">
                <span className="label-text">Jenis Kelamin</span>
              </label>
              <div className="flex justify-center w-40">
                <label className="cursor-pointer label flex-none mr-4">
                  <input
                    type="radio"
                    className="radio mr-2"
                    value="Pria"
                    name="gender"
                    onChange={(e) =>
                      setForm({ ...form, gender: e.target.value })
                    }
                    checked={form.gender === "Pria"}
                    required
                  />
                  <span className="label-text">Pria</span>
                </label>
                <div className="flex-grow"></div>
                <label className="cursor-pointer label flex-none">
                  <input
                    type="radio"
                    className="radio mr-2"
                    value="Wanita"
                    name="gender"
                    onChange={(e) =>
                      setForm({ ...form, gender: e.target.value })
                    }
                    checked={form.gender === "Wanita"}
                    required
                  />
                  <span className="label-text">Wanita</span>
                </label>
              </div>
            </div>
            <div className="form-control block w-full">
              <label className="label">
                <span className="label-text">Hobi</span>
              </label>
              <Select
                isMulti
                placeholder="Pilih hobi..."
                onChange={(hobi) => setHobi(hobi)}
                name="hobby"
                inputId="genre-select"
                options={defaultHobby}
                className="select-container w-full mb-2"
                classNamePrefix="select"
              />
            </div>
          </div>
          <div className="form-control mr-4 w-full block">
            <label className="label">
              <span className="label-text">Alamat Lengkap</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-24"
              value={form.alamat}
              onChange={(e) => setForm({ ...form, alamat: e.target.value })}
              required
            />
          </div>
          <div className="form-control mr-4 w-full block mb-8">
            <label className="label">
              <span className="label-text">Komentar</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-24"
              value={form.komentar}
              onChange={(e) => setForm({ ...form, komentar: e.target.value })}
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <button className="btn btn-primary w-36 mr-2">Submit</button>
              <label className="btn w-18" onClick={() => resetForm()}>
                Reset
              </label>
            </div>
            <label
              className="btn btn-error justify-end"
              onClick={() => window.history.back()}
            >
              Close
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditModal;
