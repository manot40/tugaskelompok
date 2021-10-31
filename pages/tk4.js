import { useState, useEffect } from "react";
import FormInput from "../components/TK4/FormInput";
import FormTable from "../components/TK4/FormTable";
import supabase from "../components/helpers/supabase";

const FormTK1 = () => {
  const [tableData, setTableData] = useState([]);
  const [_changed, changed] = useState(0);

  useEffect(() => {
    (async () => {
      await supabase
        .from("tk4")
        .select("*")
        .order("created_at", { ascending: false })
        .then(({ data }) => setTableData(data));
    })();
  }, [_changed]);

  function created(data) {
    setTableData([data, ...tableData]);
  }
  function dispatch(action, data) {
    switch (action) {
      case "DELETE":
        supabase
          .from("tk4")
          .delete()
          .eq("id", data.id)
          .then(() => {
            changed(_changed + 1);
          });
      case "EDIT":
        console.warn("Not yet implemented");
    }
  }

  return (
    <div className="page-wrap mx-auto container flex mt-8 font-sans">
      <div className="flex mx-auto w-11/12 sm:w-11/12 sm:block md:block">
        <FormInput onCreated={created} />
        <div className="divider divider-vertical" />
        <div className="divider" />
        <FormTable tableData={tableData} onModify={dispatch} />
      </div>
    </div>
  );
};

export default FormTK1;
