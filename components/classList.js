import React from "react";

const classList = ({ classes }) => {
  return (
    <div className="col-span-3">
      <h2 className="border border-blue-300 rounded-md text-primary p-[10px]">
        Daftar Kelas
      </h2>

      <ul>
        <li className="grid grid-cols-12 gap-4">
          <div className="mt-[10px] col-span-3 p-2 bg-blue-700 text-white rounded-md">
            Nama Kelas
          </div>
          <div className="mt-[10px] col-span-2 p-2 bg-blue-700 text-white rounded-md">
            Nama Guru
          </div>
          <div className="mt-[10px] col-span-2 p-2 bg-blue-700 text-white rounded-md">
            Mata Pelajaran
          </div>
          <div className="mt-[10px] col-span-3 p-2 bg-blue-700 text-white rounded-md">
            Tanggal
          </div>
          <div className="mt-[10px] col-span-2 p-2 bg-blue-700 text-white rounded-md">
            Durasi
          </div>
        </li>
      </ul>
      <ul>
        {classes.map((classes) => (
          <li key={classes.id} className="grid grid-cols-12 gap-4">
            <div className="mt-[10px] col-span-3 p-2 bg-blue-100 rounded-md">
              {classes.className}
            </div>
            <div className="mt-[10px] col-span-2 p-2 bg-blue-100 rounded-md">
              {classes.teacher}
            </div>
            <div className="mt-[10px] col-span-2 p-2 bg-blue-100 rounded-md">
              {classes.study}
            </div>
            <div className="mt-[10px] col-span-3 p-2 bg-blue-100 rounded-md">
              {classes.date}
            </div>
            <div className="mt-[10px] col-span-2 p-2 bg-blue-100 rounded-md">
              {classes.durationClass}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default classList;
