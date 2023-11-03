import React, { useState } from "react";
import ClassList from "./classList";
import TeacherList from "./teacherList";
import StudyList from "./studyList";
import AddTeacher from "./addTeacher";
import AddStudy from "./addStudy";
import AddClass from "./addClass";

const Home = () => {
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);
  const [guruOptions, setGuruOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);
  
  const addTeacher = (teacher) => {
    setTeachers([...teachers, teacher]);
    setGuruOptions([...guruOptions, teacher.name]);
  };

  const addStudy = (study) => {
    setSubjects([...subjects, study]);
    setClassOptions([...classOptions, study.studyName]);
  };

  const addclass = (classData) => {
    setClasses([...classes, classData]);
    setClassOptions([...classOptions, classData.studyName]);
    setGuruOptions([...guruOptions, classData.name]);
  };

  return (
    <div className="grid grid-rows-6 grid-flow-col m-[20px]">
      <div className="grid grid-cols flex items-center justify-center w-full h-[90px] text-center bg-gray-100 rounded-xl">
        <h1 className="text-4xl py-4 font-semibold text-primary font-sans">
          Sistem Manajemen Kelas
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-8 justify-start w-full h-[90px] text-center mt-[10px]">
        <AddTeacher onAddTeacher={addTeacher} />
        <AddStudy onAddStudy={addStudy} />
        <AddClass
          onAddClass={addclass}
          guruOptions={guruOptions}
          classOptions={classOptions}
        />
        {teachers.length > 0 ? <TeacherList teachers={teachers} /> : ""}
        {subjects.length > 0 ? <StudyList subjects={subjects} /> : ""}
        {classes.length > 0 ? <ClassList classes={classes} /> : ""}
      </div>
    </div>
  );
};

export default Home;
