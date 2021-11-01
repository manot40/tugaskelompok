import Select from "react-select";
import supabase from "../helpers/supabase";
import { defaultHobby } from "./FormInput";
import { useState, useEffect } from "react";

const EditModal = ({ toBeModified, editDone }) => {
  const [objId, setObjId] = useState(0);
  const [form, setForm] = useState({});
  useEffect(() => {
    setObjId(toBeModified.id);
    setForm(toBeModified);
  }, [toBeModified])

  function submitForm(e) {
    e.preventDefault();
    supabase.from("tk4")
      .update(form)
      .eq('id', objId)
      .then(() => {
        editDone();
        window.history.back();
      });
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
          <div className="flex flex-row sm:flex-col-reverse md:flex-col-reverse w-full mb-2">
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
                    onChange={(e) => setForm({ ...form, gender: e.target.value })}
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
                    onChange={(e) => setForm({ ...form, gender: e.target.value })}
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
              <button className="btn btn-primary w-36 mr-2">
                Submit
              </button>
              <label className="btn w-18" onClick={() => resetForm()}>
                Reset
              </label>
            </div>
            <label
              className="btn btn-error justify-end w-18"
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
