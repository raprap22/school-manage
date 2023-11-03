import React, { useState } from "react";

const addStudy = ({ onAddStudy }) => {
  const [studyName, setStudyName] = useState("");
  // tambahkan state dan validasi lainnya sesuai kebutuhan

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi input di sini
    if (studyName.trim() === "") {
      // Tampilkan pesan error
    } else {
      onAddStudy({ studyName });
      setStudyName("");
    }
  };

  return (
    <div>
      <h2 className="rounded-xl bg-blue-300 py-4 text-primary font-sans font-medium">
        Tambah Mata Pelajaran
      </h2>
      <form onSubmit={handleSubmit} className="pt-[20px]">
        <input
          className="border-[1px] rounded-lg p-[5px] w-full"
          type="text"
          placeholder="Nama Mata Pelajaran"
          value={studyName}
          onChange={(e) => setStudyName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white w-full mt-[10px] px-[20px] py-[7px] text-sm rounded-lg hover:bg-blue-700"
          type="submit"
        >
          Tambah
        </button>
      </form>
    </div>
  );
};

export default addStudy;
