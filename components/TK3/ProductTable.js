import { useState, useEffect } from "react";
import sampleData from "../../exampleData/ProductExample";
import ProductModal from "./ProductModal";

const ProductTable = ({ db }) => {
  const [dataList, setDataList] = useState([]);
  const [dataChange, dataChanged] = useState(0);
  const [editModal, setEditModal] = useState(false);

  useEffect(() => {
    (async () => {
      await db.productDb
        .toArray()
        .then((data) => setDataList(data))
        .catch((err) => console.error(err));
    })();
  }, [dataChange]);

  function loadDefaultData() {
    db.productDb.bulkPut(sampleData);
    dataChanged(dataChange + 1);
  }

  function getItemId(e) {
    return parseInt(
      e.target.localName === "ion-icon"
        ? e.target.parentElement.id
        : e.target.id
    );
  }

  function addData(data) {
    db.productDb.put(data);
    dataChanged(dataChange + 1);
  }

  async function openEditModal(e) {
    await db.productDb
      .where("id")
      .equals(getItemId(e))
      .toArray()
      .then((data) => {
        setEditModal(
          <ProductModal
            submitProduct={editData}
            isModify={true}
            toBeModified={data[0]}
            unMount={closeModal}
          />
        );
      })
      .catch((err) => console.error(err));
  }
  async function editData(data) {
    await db.productDb
      .where("id")
      .equals(data.id)
      .modify(data)
      .then(dataChanged(dataChange + 1))
      .catch((e) => console.error(e));
  }

  async function deleteData(e) {
    await db.productDb
      .where("id")
      .equals(getItemId(e))
      .delete()
      .then(dataChanged(dataChange + 1));
  }

  function closeModal() {
    setEditModal(false);
  }

  function loadData() {
    return dataList.map((data) => (
      <tr key={data.id}>
        <td />
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-12 h-12 mask mask-squircle">
                <img src={data.productImage} />
              </div>
            </div>
            <div className="font-bold">{data.name}</div>
          </div>
        </td>
        <td>{data.description}</td>
        <td>{data.buyPrice}</td>
        <td>{data.sellPrice}</td>
        <td>
          <span
            id={data.id}
            className="btn btn-sm btn-info mr-2"
            onClick={(e) => openEditModal(e)}
          >
            <ion-icon style={{ fontSize: 16 + "px" }} name="create-outline" />
          </span>
          <span
            id={data.id}
            className="btn btn-sm btn-error"
            onClick={(e) => deleteData(e)}
          >
            <ion-icon style={{ fontSize: 16 + "px" }} name="trash-outline" />
          </span>
        </td>
      </tr>
    ));
  }

  return (
    <div className="overflow-x-auto">
      {editModal}
      <table className="table w-full">
        <thead>
          <tr>
            <th />
            <th>Produk</th>
            <th>Deskripsi</th>
            <th>Harga Beli</th>
            <th>Harga Jual</th>
            <th>
              <ProductModal submitProduct={addData} />
            </th>
          </tr>
        </thead>
        <tbody>{loadData()}</tbody>
      </table>
      {dataList.length ? null : (
        <div className="flex flex-col items-center mt-4">
          <p>Tidak ada data</p>
          <a className="link" onClick={() => loadDefaultData()}>
            Muat sampel data?
          </a>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
