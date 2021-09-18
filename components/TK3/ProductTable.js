import { useState, useEffect } from "react";
import sampleData from "../../exampleData/ProductExample";
import ProductModal from "./ProductModal";

const ProductTable = ({ dbConnect }) => {
  const [dataList, setDataList] = useState([]);
  const [dataChange, dataChanged] = useState(0);
  const [editProductModal, setEditProductModal] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await dbConnect.productDb.toArray();
      setDataList(data);
    })();
  }, [dataChange]);

  function loadDefaultData() {
    dbConnect.productDb.bulkPut(sampleData);
    dataChanged(dataChange + 1);
  }

  function addData(data) {
    dbConnect.productDb.put(data);
    dataChanged(dataChange + 1);
  }

  function openEditModal(e) {
    const id = parseInt(
      e.target.localName === "ion-icon"
        ? e.target.parentElement.id
        : e.target.id
    );
    (async () => {
      await dbConnect.productDb.where("id").equals(id).toArray()
        .then(data => {
          setEditProductModal(
            <ProductModal
              submitProduct={editData}
              isModify={true}
              toBeModified={data[0]}
              unMount={unmountModal}
            />
          );
        });
    })();
  }
  async function editData(data) {
    await dbConnect.productDb.where("id").equals(data.id).modify({...data})
      .then(() => {
        dataChanged(dataChange + 1)
      })
      .catch(e => console.log(e));
  }
  function unmountModal() {
    setEditProductModal(false);
  }

  async function deleteData(e) {
    const id = parseInt(
      e.target.localName === "ion-icon"
        ? e.target.parentElement.id
        : e.target.id
    );
    await dbConnect.productDb.where("id").equals(id).delete();
    dataChanged(dataChange + 1);
  }

  function serveData() {
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
      {editProductModal}
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
        <tbody>{serveData()}</tbody>
      </table>
      {dataList.length ? null :
        <div className="flex flex-col items-center mt-4">
          <p>Tidak ada data</p>
          <a className="link" onClick={() => loadDefaultData()}>Muat sampel data?</a>
        </div>
      }
    </div>
  );
};

export default ProductTable;
