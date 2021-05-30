export class Todo {

    static fromJson({ tarea, id, completado, creado }) {

        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea) {

        this.tarea = tarea;

        this.id = new Date().getTime(); //esto permite crear un id con los valores que entrega el gettime() ej 987654321
        this.completado = false;
        this.creado = Date();
    }

    imprimirClase() {
        console.log(`${this.tarea}-${this.id}`);
    }

}