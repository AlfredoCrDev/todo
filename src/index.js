import './style.css';

// Se unificaron las clases en un index y se importaton en una sola linea
import { Todo, TodoList } from './clases';
// import { Todo } from './clases/todo.class';
// import { TodoList } from './clases/todo-list.class';
import { crearTodoHtml } from './js/componentes';

// Se hace la instancia de la clase creada e importada para listar las tareas
export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ));

// Se hace la instancia de la clase creada e importada para crear las tareas
// const tarea = new Todo('Aprender JS!');

// todoList.nuevoTodo( tarea );

// // tarea.completado = true;

// console.log( todoList );

// crearTodoHtml( tarea );


// localStorage.setItem('mi-key', 'ABC1234');

// setTimeout( ()=>{
//     localStorage.removeItem('mi-key');

// }, 1500);

