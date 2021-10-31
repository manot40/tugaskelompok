import Select from "react-select";
import supabase from "../helpers/supabase";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export const defaultForm = {
  nim: "",
  nama: "",
  alamat: "",
  gender: "",
  hobi: [],
  komentar: "",
  lokasi: [],
};
const defaultHobby = [
  { value: 0, label: "Membaca Buku" },
  { value: 1, label: "Menonton Film" },
  { value: 2, label: "Coding" },
  { value: 3, label: "Bermain Game" },
];

const FormInput = ({ onCreated }) => {
  const [data, setData] = useState(defaultForm);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const lokasi = [coords.latitude, coords.longitude];
        setData({ ...data, lokasi });
      });
    } else {
      setData({ ...data, lokasi: [0, 0] });
    }
  }, []);

  function setHobi(arr) {
    const hobi = arr.map((item) => item.label);
    setData({ ...data, hobi });
  }
  function submitForm(e) {
    e.preventDefault();
    setIsLoading(true);
    supabase
      .from("tk4")
      .insert([data])
      .then(({ data }) => {
        toast.success("Submit Data Berhasil!");
        onCreated(data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Submit Data Gagal!");
        console.error(err);
        setIsLoading(false);
      });
  }
  function resetForm() {
    document.getElementsByName("gender").forEach((el) => {
      el.checked = false;
    });
    setData(defaultForm);
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
            value={data.nama}
            onChange={(e) => setData({ ...data, nama: e.target.value })}
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
            value={data.nim}
            onChange={(e) => setData({ ...data, nim: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="form-control mr-4 w-full block">
        <label className="label">
          <span className="label-text">Alamat Lengkap</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full h-24"
          value={data.alamat}
          onChange={(e) => setData({ ...data, alamat: e.target.value })}
          required
        />
      </div>
      <div className="form-control mr-4 w-full block">
        <label className="label">
          <span className="label-text">Komentar</span>
        </label>
        <textarea
          className="textarea textarea-bordered w-full h-24"
          value={data.komentar}
          onChange={(e) => setData({ ...data, komentar: e.target.value })}
          required
        />
      </div>
      <div className="flex flex-row sm:flex-col-reverse md:flex-col-reverse w-full mb-8">
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
                onChange={(e) => setData({ ...data, gender: e.target.value })}
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
                onChange={(e) => setData({ ...data, gender: e.target.value })}
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
      <ToastContainer theme="colored" />
    </form>
  );
};

export default FormInput;
