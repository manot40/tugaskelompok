import { useState, useEffect } from "react";
import FormInput from "../components/TK4/FormInput";
import FormTable from "../components/TK4/FormTable";
import EditModal from "../components/TK4/EditModal";
import supabase from "../components/helpers/supabase";
import { ToastContainer, toast } from "react-toastify";

const FormTK1 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [editData, setEditData] = useState({});
  const [_changed, changed] = useState(0);

  useEffect(() => {
    supabase
      .from("tk4")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => setTableData(data));
  }, [_changed]);

  function dispatch(action, data) {
    switch (action) {
      case "ADD":
        setIsLoading(true);
        supabase
          .from("tk4")
          .insert([data])
          .then(({ error }) => {
            changed(_changed + 1);
            error
              ? toast.error("Tambah Data Gagal")
              : toast.success("Tambah Data Berhasil!");
            setIsLoading(false);
          });
        break;
      case "EDIT":
        setEditData(data);
        document.getElementById('editBtn').click();
        break;
      case "DELETE":
        supabase
          .from("tk4")
          .delete()
          .eq("id", data.id)
          .then(({ error }) => {
            changed(_changed + 1);
            error
              ? toast.error("Hapus Data Gagal")
              : toast.success("Hapus Data Berhasil!");
          });
        break;
      default:
        changed(_changed + 1);
        toast.success("BERHASIL");
        break;
    }
  }

  return (
    <div className="page-wrap mx-auto container flex mt-8 font-sans">
      <div className="flex mx-auto w-11/12 sm:w-11/12 sm:block md:block">
        <FormInput onCreated={dispatch} isLoading={isLoading} />
        <div className="divider divider-vertical" />
        <div className="divider" />
        <FormTable tableData={tableData} onModify={dispatch} />
      </div>
      <EditModal toBeModified={editData} editDone={dispatch} />
      <ToastContainer theme="colored" />
    </div>
  );
};

export default FormTK1;
