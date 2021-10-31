const FormTable = ({ tableData }) => {
  return (
    <div className="w-2/3 sm:w-full md:w-full lg:w-1/2 mb-8">
      <h1 className="mb-2 text-left font-bold text-3xl antialiased tracking-wider font-display">
        TABEL DATA
      </h1>
      <p className="mb-8 text-left antialiased tracking-wider">
        Daftar data mahasiswa yang sudah di input
      </p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th style={{ position: "relative !important" }}>Nama/NIM</th>
              <th>Gender</th>
              <th>Alamat</th>
              <th>Komentar</th>
              <th>Hobi</th>
              <th>Lokasi</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr key={data.id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img src="https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nrmuq2krdm9b/b/bucket-20211017-1905/o/default.jpg" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data.nama}</div>
                      <div className="text-sm opacity-50">{data.nim}</div>
                    </div>
                  </div>
                </td>
                <td>{data.gender}</td>
                <td>{data.alamat}</td>
                <td>{data.komentar}</td>
                <td>
                  {data.hobi.map((el, id) => (
                    <p
                      key={id}
                      className="badge badge-outline font-bold text-xs mr-2"
                    >
                      {el}
                    </p>
                  ))}
                </td>
                <td>
                  <a
                    className="link link-hover link-accent"
                    target="_blank"
                    href={
                      "https://www.google.com/maps/place/" +
                      data.lokasi.join(",")
                    }
                  >
                    GMaps
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormTable;
