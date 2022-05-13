// CLASE PARA CREAR LAS TAREAS

// Se exporta la clase Todo ya que sera utilizado en otro archivo
export class Todo {

    static fromJson({ id, tarea, completado, creado  }){
        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor( tarea ){

        this.tarea = tarea;

        // Crear el id de la tarea mediante getTime ya que se generará como un tipo de ID
        this.id    = new Date().getTime();

        this.completado = false;
        this.creado = new Date();

    }
}