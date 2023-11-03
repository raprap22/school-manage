import React from "react";

const teacherList = ({ teachers }) => {
  return (
    <div>
      <h2 className="border border-blue-300 rounded-md text-primary p-[10px]">Daftar Guru</h2>
      <ul>
        {teachers.map((teacher) => (
          <li className="mt-[10px] p-2 bg-blue-100 rounded-md" key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default teacherList;
