import Select from "react-select";
import { useState, useEffect } from "react";

export const defaultForm = {
  nim: "",
  nama: "",
  alamat: "",
  gender: "",
  hobi: [],
  komentar: "",
  lokasi: [],
};
export const defaultHobby = [
  { value: 0, label: "Membaca Buku" },
  { value: 1, label: "Menonton Film" },
  { value: 2, label: "Coding" },
  { value: 3, label: "Bermain Game" },
];

const FormInput = ({ onCreated, isLoading = false }) => {
  const [form, setForm] = useState(defaultForm);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const lokasi = [coords.latitude, coords.longitude];
        setForm({ ...form, lokasi });
      });
    } else {
      setForm({ ...form, lokasi: [0, 0] });
    }
  }, []);

  function setHobi(arr) {
    const hobi = arr.map((item) => item.label);
    setForm({ ...form, hobi });
  }
  function submitForm(e) {
    e.preventDefault();
    onCreated("ADD", form);
  }
  function resetForm() {
    document.getElementsByName("gender").forEach((el) => {
      el.checked = false;
    });
    setForm(defaultForm);
  }

  return (
    <form className="w-full" onSubmit={(e) => submitForm(e)}>
      <h1 className="mb-2 text-left font-bold text-3xl antialiased tracking-wider font-display">
        INPUT DATA DIRI
      </h1>
      <p className="mb-8 text-left antialiased tracking-wider">
        Masukkan informasi data diri pada form yang disediakan
      </p>
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
      <div className="flex justify-end">
        <button
          className={`btn btn-primary w-36 mr-2 ${isLoading && "loading"}`}
          disabled={isLoading}
        >
          Submit
        </button>
        <label className="btn btn w-18" onClick={() => resetForm()}>
          Reset
        </label>
      </div>
    </form>
  );
};

export default FormInput;
