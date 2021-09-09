import { useState } from "react";
import dayjs from "dayjs";

const FormTK1 = () => {
  const [data, setData] = useState({
    nama: "",
    alamat: "",
    birthdate: dayjs().format("YYYY-MM-DD"),
    gender: "",
    avatar: null,
    sertifikat: null,
    resume: null,
  });

  return (
    <div className="container mx-auto flex justify-center items-center mt-12 font-sans">
      <div className="block mx-auto w-11/12  md:w-10/12 lg:w-2/3 xl:w-2/3 2xl:w-2/3">
        <h1 className="mb-2 text-left font-bold text-3xl antialiased tracking-wider font-display">
          INPUT DATA DIRI
        </h1>
        <p className="mb-8 text-left font-light antialiased tracking-wider">
          Masukkan informasi data diri pada form yang disediakan
        </p>
        <form className="w-full">
          <div className="form-control mr-4 mb-2 min-w-max block">
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
          <div className="form-control mr-4 min-w-max block">
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
          <div className="form-control mr-4 min-w-max inline-block">
            <label className="label">
              <span className="label-text">Tanggal Lahir</span>
            </label>
            <input
              type="date"
              className="input input-bordered w-full"
              value={data.birthdate}
              onChange={(e) => setData({ ...data, birthdate: e.target.value })}
              required
            />
          </div>
          <div className="form-control mr-4 mb-8 min-w-max inline-block">
            <label className="label">
              <span className="label-text">Jenis Kelamin</span>
            </label>
            <div className="flex justify-center w-40">
              <label className="cursor-pointer label flex-none mr-4">
                <input
                  type="radio"
                  name="opt"
                  className="radio mr-2"
                  value="pria"
                  onChange={(e) => setData({ ...data, gender: e.target.value })}
                  required
                />
                <span className="label-text">Pria</span>
              </label>
              <div className="flex-grow"></div>
              <label className="cursor-pointer label flex-none">
                <input
                  type="radio"
                  name="opt"
                  className="radio mr-2"
                  value="wanita"
                  onChange={(e) => setData({ ...data, gender: e.target.value })}
                  required
                />
                <span className="label-text">Wanita</span>
              </label>
            </div>
          </div>
          <div className="form-control mr-4 min-w-min block">
            <label className="label">
              <span className="label-text">Upload File Pendukung</span>
            </label>
            <div className="inline">
              <div className="inline-block relative mr-16 mb-4">
                <input type="file" id="file" hidden />
                <input
                  type="text"
                  placeholder="Resume"
                  className="pr-16 input input-primary input-bordered"
                  disabled
                />
                <label
                  htmlFor="file"
                  class="absolute rounded-l-none btn btn-primary -ml-2"
                >
                  Up
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTK1;
