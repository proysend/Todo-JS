//import
import { Todo } from '../clases';
import { todoList } from '../index';

//referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo'); //nos permitira agregar una nueva tarea en la lista
const btnBorrar = document.querySelector('.clear-completed'); //nos permite poder borrar los completados, es decir es un componente de la programación respectiva
const ulFiltros = document.querySelector('.filters'); //nos permote poder seleccionar filtros en el todo
const anchorFiltros = document.querySelectorAll('.filtro'); //nos permite seleccionar los filtros de forma detallada los anchorTags del HTML

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${(todo.completado)?'completed' : ''}" data-id="${todo.id}">
                    <div class="view">
                        <input class="toggle" type="checkbox" ${(todo.completado)?'checked':''}>
                        <label>${todo.tarea}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div'); //crea div que contredra el list
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild; //se utiliza la extension .firstElementChild para asegurar que retorne el <li>

}

//Eventos  <<keyup>> nos indica cuando el usuario suelta la tecla

txtInput.addEventListener('keyup', (event) => {

    //console.log(event);
    if (event.keyCode === 13 && txtInput.value.length > 0) {

        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        console.log(todoList);

        crearTodoHtml(nuevoTodo);
        txtInput.value = '';

    }

});

divTodoList.addEventListener('click', (event) => {

    //console.log('click');
    //console.log(event.target.localName); // label, input, button son los posibles valores, dentro del label que se quiere ver a que se le hace click

    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    //console.log(nombreElemento); //verifica a que estamos haciendo click
    //console.log(todoElemento); //verifica que el valor de la variable constante
    //console.log(todoId); //verifica que el valor de la variable constante

    if (nombreElemento.includes('input')) { //si el nombre del elemento es input, quiere decir que se hizo click en el checbox del todo list

        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {

        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }

    //console.log(todoList);
});

btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {

        const elemento = divTodoList.children[i];
        //console.log(elemento);

        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }

    }
});

ulFiltros.addEventListener('click', () => {

    //console.log(event.target.text); //nos permite asegurar, que se refleje el valor del texto del filtro
    const filtro = event.target.text;
    if (!filtro) {
        return;
    }

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    //console.log(event.target); //muestra referencia al li correspondiente en el HTML
    event.target.classList.add('selected');


    for (const elemento of divTodoList.children) {
        //console.log(elemento); //comprobar si hay elementos con 'completed'
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;

            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }
    }

});