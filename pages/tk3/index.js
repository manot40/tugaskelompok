import ProductTable from "../../components/TK3/ProductTable";
import Dexie from "dexie";

const db = new Dexie("tk3");

const CRUDFormTK3 = () => {
  try {
    db.version(1).stores({
      productDb: "++id,name,productImage,description,buyPrice,sellPrice",
    });
  } catch {}

  return (
    <div className="page-wrap mx-auto container flex justify-center font-sans mt-8">
      <div className="block mx-auto min-w-[66.66%] sm:min-w-[83.33%]  md:min-w-[83.33%]">
        <h1 className="mb-6 text-left font-bold text-3xl antialiased tracking-wider font-display">
          LIST PRODUK
        </h1>
        <div className="max-w-[90vw]">
          <ProductTable dbConnect={db} />
        </div>
      </div>
    </div>
  );
};

export default CRUDFormTK3;
