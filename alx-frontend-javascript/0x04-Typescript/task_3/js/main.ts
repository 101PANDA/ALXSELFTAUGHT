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

