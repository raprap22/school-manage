import React from "react";

const studyList = ({ subjects }) => {
  return (
    <div>
      <h2 className="border border-blue-300 rounded-md text-primary p-[10px]">
        Daftar Mata Pelajaran
      </h2>
      <ul>
        {subjects.map((subject) => (
          <li className="mt-[10px] p-2 bg-blue-100 rounded-md" key={subject.id}>
            {subject.studyName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default studyList;
