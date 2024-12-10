/// <reference path='./subjects/Java.ts' />

const cpp:Subjects.Cpp = new Subjects.Cpp();
const java:Subjects.Java = new Subjects.Java();
const react:Subjects.React = new Subjects.React();

const cTeacher: Subjects.Teacher = {
    firstName: 'Peter',
    lastName: 'Obi',
    experienceTeachingC: 10,
}

// for Cpp Subject
console.log('c++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// for Java Subject
console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// for React Subject
console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

export {cpp, java, react};
