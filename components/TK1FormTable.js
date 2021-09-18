import { useState, useEffect } from "react";
import dayjs from "dayjs";

const TK1FormTable = ({ dataTabel }) => {
  const [modalShow, setModalShow] = useState(true);
  useEffect(() => {
    setModalShow(false);
  }, [false]);

  return (
    <>
      <input
        type="checkbox"
        id="table-modal"
        className="modal-toggle"
        checked={modalShow ? "checked" : null}
        readOnly
      />
      <div className="modal">
        <div className="modal-box">
          <h1 className="mb-4 text-left font-bold text-2xl antialiased tracking-wider font-display">
            INPUT DATA BERHASIL
          </h1>
          <div className="overflow-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th />
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Tanggal Lahir</th>
                  <th>File Pendukung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                          {dataTabel.avatar.fileName ? (
                            <img src={dataTabel.avatar.fileLink} />
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{dataTabel.nama}</div>
                        <div className="text-sm opacity-50">
                          {dataTabel.gender}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{dataTabel.alamat}</td>
                  <td>{dayjs(dataTabel.birthdate).format("DD/MMM/YYYY")}</td>
                  <td>
                    <div className="flex flex-col">
                      <div className="text-sm font-display">
                        Sertifikat: {dataTabel.sertifikat}
                      </div>
                      <div className="text-sm font-display">
                        Resume: {dataTabel.resume}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-action">
            <label htmlFor="table-modal" className="btn">
              Tutup
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default TK1FormTable;
