import './styles.css';

import { Todo, TodoList } from './clases'; //usando solo ./clases de forma automatica buscara el archivo index.js
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList(); //usando export al inicio de la sentencia, aseguramos la importacion
const tarea = new Todo('Aprender JavaScript');
//const tarea2 = new Todo('Comprar un Unicornio');

//todoList.nuevoTodo(tarea);
//todoList.nuevoTodo(tarea2);

//tarea.completado = true;

//console.log(todoList);

//crearTodoHtml(tarea);

//localStorage.setItem('mi-key', 'ABC1234'); //permite corroborar lo que sucede en el local storage
//sessionStorage.setItem('mi-key', 'ABC1234');//permite corroborar lo que sucede en el session storage

todoList.todos.forEach(todo => crearTodoHtml(todo)); //opcionalmente puede ser (crearTodoHtml)

//const newTodo = new Todo('Aprender JavaScript');

//todoList.todos[0].imprimirClase();

console.log('todos', todoList.todos);