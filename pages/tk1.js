import { useState } from "react";
import TK1FormTable from "../components/TK1FormTable";

const FormTK1 = () => {
  const defaultForm = {
    nama: "",
    alamat: "",
    birthdate: "",
    gender: "",
    avatar: {
      fileName: "",
      fileLink: "",
    },
    sertifikat: "",
    resume: "",
  };

  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState(defaultForm);

  function handleFotoProfil(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      setData({
        ...data,
        avatar: {
          fileName: file.name,
          fileLink: reader.result,
        },
      });
    };
    reader.readAsDataURL(file);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const inputState = () => {
      if (
        !data.avatar.fileName ||
        !data.sertifikat ||
        !data.resume
      ) return false;
      return true;
    };
    if (!inputState()) {
      alert("File pendukung harus di upload!");
    } else {
      setIsSubmit(!isSubmit);
    }
  }
  function resetForm() {
    document.getElementsByName("gender").forEach((el) => {
      el.checked = false;
    });
    setData(defaultForm);
    setIsSubmit(false);
  }

  return (
    <div className="page-wrap container mx-auto flex justify-center items-center mt-12 font-sans">
      <div className="block mx-auto w-11/12  md:w-10/12 lg:w-2/3 xl:w-2/3 2xl:w-2/3">
        <h1 className="mb-2 text-left font-bold text-3xl antialiased tracking-wider font-display">
          INPUT DATA DIRI
        </h1>
        <p className="mb-8 text-left font-light antialiased tracking-wider">
          Masukkan informasi data diri pada form yang disediakan
        </p>
        <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-control mr-4 mb-2 min-w-max block">
            <label className="label">
              <span className="label-text">Nama Lengkap</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={data.nama}
              onChange={e => setData({ ...data, nama: e.target.value })}
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
              onChange={e => setData({ ...data, alamat: e.target.value })}
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
              onChange={e => setData({ ...data, birthdate: e.target.value })}
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
                  className="radio mr-2"
                  value="Pria"
                  name="gender"
                  onChange={e => setData({ ...data, gender: e.target.value })}
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
                  onChange={e => setData({ ...data, gender: e.target.value })}
                  required
                />
                <span className="label-text">Wanita</span>
              </label>
            </div>
          </div>
          <div className="form-control mr-4 mb-8 min-w-min block">
            <label className="label">
              <span className="label-text">Upload File Pendukung</span>
            </label>
            <div className="inline">
              <div className="inline-block relative mr-16 mb-4">
                <input
                  type="file"
                  accept=".jpeg,.jpg,.png"
                  id="avatar"
                  className="upload"
                  onChange={e => handleFotoProfil(e)}
                  hidden
                />
                <input
                  type="text"
                  placeholder="Foto Profil"
                  value={data.avatar.fileName}
                  className="pr-16 w-44 input input-primary input-bordered"
                  disabled
                />
                <label
                  htmlFor="avatar"
                  className="absolute rounded-l-none btn btn-primary -ml-2"
                >
                  <ion-icon name="folder-open"></ion-icon>
                </label>
              </div>
            </div>
            <div className="inline">
              <div className="inline-block relative mr-16 mb-4">
                <input
                  type="file"
                  accept=".doc,.docx,.pdf"
                  id="resume"
                  className="upload"
                  onChange={(e) =>
                    setData({ ...data, resume: e.target.files[0].name })
                  }
                  hidden
                />
                <input
                  type="text"
                  placeholder="Resume"
                  value={data.resume}
                  className="pr-16 w-44 input input-primary input-bordered"
                  disabled
                />
                <label
                  htmlFor="resume"
                  className="absolute rounded-l-none btn btn-primary -ml-2"
                >
                  <ion-icon name="folder-open"></ion-icon>
                </label>
              </div>
            </div>
            <div className="inline">
              <div className="inline-block relative mr-16 mb-4">
                <input
                  type="file"
                  accept=".jpeg,.jpg,.png,.pdf"
                  id="sertifikat"
                  className="upload"
                  onChange={(e) =>
                    setData({ ...data, sertifikat: e.target.files[0].name })
                  }
                  hidden
                />
                <input
                  type="text"
                  placeholder="Sertifikat"
                  value={data.sertifikat}
                  className="pr-16 w-44 input input-primary input-bordered"
                  disabled
                />
                <label
                  htmlFor="sertifikat"
                  className="absolute rounded-l-none btn btn-primary -ml-2"
                >
                  <ion-icon name="folder-open"></ion-icon>
                </label>
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="btn btn-primary w-36 mr-2">Submit</button>
            <label className="btn btn w-18" onClick={e => resetForm()}>
              Reset
            </label>
          </div>
        </form>
        { isSubmit ? <TK1FormTable dataTabel={data} /> : null }
      </div>
    </div>
  );
};

export default FormTK1;
