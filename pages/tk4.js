import supabase from "../components/helpers/supabase";
import { useState, useEffect } from "react";
import FormInput from "../components/TK4/FormInput";
import FormTable from "../components/TK4/FormTable";

const FormTK1 = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async () => {
      await supabase
        .from("tk4")
        .select("*")
        .then(({ data }) => setTableData(data));
    })();
  }, []);

  function updated(data) {
    setTableData([...tableData, data]);
  }

  return (
    <div className="page-wrap mx-auto container flex mt-8 font-sans">
      <div className="flex mx-auto w-11/12 sm:w-11/12 sm:block md:block">
        <FormInput onUpdate={updated} />
        <div className="divider divider-vertical" />
        <div className="divider" />
        <FormTable tableData={tableData} />
      </div>
    </div>
  );
};

export default FormTK1;
