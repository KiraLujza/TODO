//szülő elem
//példányosítás


import { TODOLIST } from "./todoList.js";
import ToDo from "./Todo.js";
import ToDos from "./Todos.js";

//elemek megfogása (divek)
const pElem = document.querySelector(".todos")
const ipElem = document.querySelector(".todoinput")

//példánysítás
new ToDos(pElem,ipElem,TODOLIST)