import { Todo } from ".";

export class TodoList {

    constructor() {
        //this.todos = []; //la funcion cargarLocalStorage reemplaza la creacion del arreglo de this.todos = []
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id); //se debe estar atento en diferenciar el 'todos' con 'todo'
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {



        for (const todo of this.todos) {

            //console.log(id, todo.id); //con este console, se puede verificar que los Id correspondientes sean los mismos

            if (todo.id == id) { // usando el doble "=", nos aseguramos que los valores sean iguales, con el triple "=", de que sean iguales y del mismo tipo
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado); // usando el '!' la logica dice traer o filtrar los que no esten completados
        this.guardarLocalStorage();
    }

    guardarLocalStorage() { //para no tener problemas, deberia de ser creado dentro de las primeras funciones en el todo-list-class
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    cargarLocalStorage() {
        //if (localStorage.getItem('todo')) {
        //    this.todos = JSON.parse(localStorage.getItem('todo')); //utilizando el JSON.parse se puede convertir al valor que deberia de tener originalmente el arreglo, el cual es un objeto
        //    console.log('cargarLocal', this.todos);
        //    console.log(typeof this.todos);
        //} else {
        //    this.todos = [];
        //}

        //pasar sentencia anterior a operador ternario
        this.todos = (localStorage.getItem('todo')) ?
            JSON.parse(localStorage.getItem('todo')) : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj)); //se escribe el Todo con 'T' mayuscula, debido a que se ahce refertencia a la clase todo.class.js 
        //this.todos = this.todos.map(Todo.fromJson); //estapuede ser una sintaxis opcional


    }


}