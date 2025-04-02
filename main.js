//szülő elem
//példányosítás

import { TODOLIST } from "./todoList.js";
import ToDo from "./Todo.js";
import ToDos from "./Todos.js";

const pElem = document.querySelector(".todos")
const ipElem = document.querySelector(".todoinput")

new ToDos(pElem,ipElem,TODOLIST)