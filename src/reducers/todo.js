import {getTodos, createTodo, updateTodo, destroyTodo} from "../lib/todoServices";

import {showMessageAction} from "./messages";

const initState = {
  todos: [],
  currentTodo: ''
};

export const TODO_ADD     = 'TODO_ADD';
export const TODOS_LOAD   = 'TODOS_LOAD';
export const TODO_REPLACE = 'TODO_REPLACE';
export const TODO_REMOVE  = 'TODO_REMOVE';
const CURRENT_UPDATE      = 'CURRENT_UPDATE';


export const updateCurrentAction = (val)    => ({ type: CURRENT_UPDATE, payload: val });
export const loadTodosAction     = (todos)  => ({ type: TODOS_LOAD,     payload: todos });
export const addTodoAction       = (todo)   => ({ type: TODO_ADD,       payload: todo });
export const replaceTodoAction   = (todo)   => ({ type: TODO_REPLACE,   payload: todo });
export const removeTodoAction    = (id)     => ({ type: TODO_REMOVE,    payload: id });

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(showMessageAction('Loading...'));
    getTodos().then((todos) => {
      dispatch(loadTodosAction(todos));
    });
  }
};

export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessageAction('Saving...'));
    createTodo(name).then((todo) => {
      dispatch(addTodoAction(todo));
    });
  }
};


export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(showMessageAction('Updating...'));

    const {todos} = getState().todo;
    const todo = todos.find(t => t.id === id);
    const toggled = {...todo, isComplete: !todo.isComplete};

    updateTodo(toggled).then((updated) => {
      dispatch(replaceTodoAction(updated));
    });
  }
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(showMessageAction('Deleting...'));

    destroyTodo(id).then(() => {
      dispatch(removeTodoAction(id));
    });
  }
};

export const getVisibleTodos = (todos, filter) => {

  switch (filter) {
    case 'active':
      return todos.filter(t => !t.isComplete);
    case 'completed':
      return todos.filter(t => t.isComplete);
    default:
      return todos;
  }
};


export default (state = initState, action) => {

  switch (action.type) {
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    case TODO_ADD:
      //console.debug("Adding Todo:", action.payload.name);
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)};
    case TODO_REPLACE:
      return {...state, todos: state.todos.map(t => t.id === action.payload.id ? action.payload : t)};
    case TODO_REMOVE:
      return {...state, todos: state.todos.filter(t => t.id !== action.payload)};
    case TODOS_LOAD:
      return {...state, todos: action.payload};
    default:
      return state;
  }

}
