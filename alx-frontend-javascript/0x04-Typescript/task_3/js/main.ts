/// <reference path="crud.d.ts" />

import { RowElement, RowID } from "./interface";
import * as CRUD from "./crud";

const row:RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
}
const newROwID:RowID = CRUD.insertRow(row);
const updatedRow:RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
}

CRUD.updateRow(newROwID, updatedRow);
CRUD.deleteRow(newROwID);

export const cpp: Subjects.Cpp;
export const java: Subjects.Java;
export const react: Subjects.React;

export const cTeacher: Subjects.Teacher ={
    firstName: row.firstName,
    lastName: row.lastName,
    experienceTeachingC: 10,
}
