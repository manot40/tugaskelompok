import ProductTable from "../../components/TK3/ProductTable";

const CRUDFormTK3 = () => {
  return (
    <div className="page-wrap mx-auto container flex justify-center font-sans mt-8">
      <div className="block mx-auto min-w-[66.66%] sm:min-w-[83.33%]  md:min-w-[83.33%]">
        <h1 className="mb-6 text-left font-bold text-3xl antialiased tracking-wider font-display">
          LIST PRODUK
        </h1>
        <div className="max-w-[90vw]">
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default CRUDFormTK3;
