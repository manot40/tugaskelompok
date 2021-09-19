import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const ProductModal = ({ submitProduct, isModify, toBeModified, unMount }) => {
  const defaultData = {
    name: "",
    productImage: "",
    description: "",
    buyPrice: "",
    sellPrice: "",
  };
  const [data, setData] = useState(!isModify ? defaultData : toBeModified);
  const [upload, setUpload] = useState(!isModify ? "" : "Unchanged");
  const [isModalOpen, setModal] = useState(!isModify ? false : true);

  function handleUploadFoto(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      setData({
        ...data,
        productImage: reader.result,
      });
      setUpload(file.name);
    };
    reader.readAsDataURL(file);
    e.target.value = null;
  }

  function submitData(event) {
    try {
      event.preventDefault();
      submitProduct(data);
      if (isModify) unMount();
      setData({ ...defaultData });
      setUpload("");
      setModal(!isModalOpen);
      toast.success("Submit Berhasil!");
    } catch (err) {
      console.log(err);
      toast.error("Submit gagal. " + err);
    }
  }

  function closeModal() {
    if (isModify) {
      unMount();
    } else {
      setModal(!isModalOpen);
    }
  }

  return (
    <>
      {!isModify ? (
        <label
          onClick={() => setModal(!isModalOpen)}
          className="btn btn-sm btn-primary self-center modal-button"
        >
          Tambah Baru
        </label>
      ) : null}
      <input
        type="checkbox"
        checked={isModalOpen}
        className="modal-toggle"
        readOnly
      />
      <div className="modal">
        <form className="modal-box" onSubmit={(e) => submitData(e)}>
          <h1 className="mb-5 text-left font-bold text-2xl antialiased tracking-wider font-display">
            {!isModify ? "TAMBAH PRODUK BARU" : "EDIT DATA PRODUK"}
          </h1>
          <div className="flex flex-col">
            <div className="flex flex-row mb-2">
              <input
                placeholder="Masukkan Nama Produk"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="input input-bordered flex-auto mr-2"
                required
              />
              <input
                type="text"
                placeholder="Foto Produk"
                value={upload}
                className="pr-8 w-36 input input-primary input-bordered"
                disabled
              />
              <label
                htmlFor="foto"
                className="rounded-l-none btn btn-primary -ml-2"
              >
                <ion-icon name="folder-open"></ion-icon>
              </label>
              <input
                type="file"
                accept="image/*"
                id="foto"
                className="upload"
                onChange={(e) => handleUploadFoto(e)}
                hidden
              />
            </div>
            <div className="flex flex-row mb-2">
              <input
                placeholder="Harga Beli"
                type="number"
                value={data.buyPrice}
                onChange={(e) =>
                  setData({ ...data, buyPrice: parseInt(e.target.value) })
                }
                className="input input-bordered flex-auto mr-2"
                required
              />
              <input
                placeholder="Harga Jual"
                type="number"
                value={data.sellPrice}
                onChange={(e) =>
                  setData({ ...data, sellPrice: parseInt(e.target.value) })
                }
                className="input input-bordered flex-auto"
                required
              />
            </div>
            <textarea
              placeholder="Masukkan Deskripsi"
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
              className="textarea textarea-bordered min-h-[6rem]"
              required
            />
          </div>
          <div className="modal-action">
            <label onClick={() => closeModal()} className="btn modal-button">
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

export default ProductModal;
