import React, { useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const addClass = ({ onAddClass, guruOptions, classOptions }) => {
  const [className, setClassName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [study, setStudy] = useState("");
  const [dateClass, setDateClass] = useState("");
  const [durationClass, setDurationClass] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      className.trim() === "" ||
      teacher.trim() === "" ||
      study.trim() === "" ||
      date.trim() === "" ||
      durationClass.trim() === ""
    ) {
      // Tampilkan pesan error
    } else {
      onAddClass({ className, teacher, study, date, durationClass });
      setClassName("");
      setTeacher("");
      setStudy("");
      setDate("");
      setDurationClass("");
    }
  };

  const handleDate = (value) => {
    setDate(dayjs(value).format("YYYY-MM-DD"));
  };

  return (
    <div className="col-span-3">
      <h2 className="rounded-xl bg-blue-300 py-4 text-primary font-sans font-medium">
        Tambah Kelas
      </h2>
      <form onSubmit={handleSubmit} className="pt-[20px]">
        <div className="grid grid-cols-12 gap-4">
          <input
            className="border-[1px] col-span-3 rounded-lg p-[5px] w-full"
            type="text"
            placeholder="Nama Kelas"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <select
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="border-[1px] rounded-lg p-[7px] col-span-2"
          >
            <option value="" disabled>
              Pilih Guru
            </option>
            {guruOptions.map((guruOption, index) => (
              <option key={index} value={guruOption}>
                {guruOption}
              </option>
            ))}
          </select>
          <select
            value={study}
            onChange={(e) => setStudy(e.target.value)}
            className="border-[1px] rounded-lg p-[7px] col-span-2"
          >
            <option value="" disabled>
              Pilih study
            </option>
            {classOptions.map((classOption, index) => (
              <option key={index} value={classOption}>
                {classOption}
              </option>
            ))}
          </select>
          <DatePicker
            className="p-[5px] col-span-3 font-medium"
            format="YYYY-MM-DD"
            placeholder="Tanggal"
            onChange={(e) => handleDate(e)}
          />

          <input
            type="text"
            placeholder="Durasi"
            value={durationClass}
            className="border-[1px] rounded-lg p-[7px] col-span-2"
            onChange={(e) => setDurationClass(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full mt-[10px] px-[20px] py-[7px] text-sm rounded-lg hover:bg-blue-700"
        >
          Tambah
        </button>
      </form>
    </div>
  );
};

export default addClass;
