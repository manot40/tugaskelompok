import ProductTable from "../../components/TK3/ProductTable";
import Router from "next/router";
import { useEffect } from "react";
import Dexie from "dexie";

const db = new Dexie("tk3");
if (!db.productDb) {
  db.version(1).stores({
    productDb: "++id,name,productImage,description,buyPrice,sellPrice",
  });
}

const CRUDFormTK3 = () => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) Router.push("/tk3/login?redirected=true");
    if (isLoggedIn === "false") Router.push("/tk3/login?redirected=true");
  }, []);

  function logout() {
    localStorage.setItem("isLoggedIn", "false");
    Router.push("/tk3/login");
  }

  return (
    <div className="page-wrap mx-auto container flex justify-center font-sans mt-8">
      <div className="block mx-auto min-w-[66.66%] sm:min-w-[83.33%]  md:min-w-[83.33%]">
        <div className="flex flex-row justify-between">
          <h1 className="mb-6 text-left font-bold text-3xl antialiased tracking-wider font-display">
            LIST PRODUK
          </h1>
          <button className="btn btn-sm btn-error" onClick={(e) => logout()}>
            LOGOUT
          </button>
        </div>
        <div className="max-w-[90vw]">
          <ProductTable db={db} />
        </div>
      </div>
    </div>
  );
};

export default CRUDFormTK3;
