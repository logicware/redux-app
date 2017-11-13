import {getTodos, createTodo} from "../lib/todoServices";

import {showMessageAction} from "./messages";

const initState = {
  todos: [],
  currentTodo: ''
};

export const TODO_ADD   = 'TODO_ADD';
export const TODOS_LOAD = 'TODOS_LOAD';
const CURRENT_UPDATE    = 'CURRENT_UPDATE';

export const updateCurrentAction = (payload) => ({ type: CURRENT_UPDATE, payload: payload });
export const loadTodosAction     = (payload) => ({ type: TODOS_LOAD, payload: payload });
export const addTodoAction       = (payload) => ({ type: TODO_ADD, payload: payload });


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

export default (state = initState, action) => {

  switch (action.type) {
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    case TODO_ADD:
      //console.debug("Adding Todo:", action.payload.name);
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)};
    case TODOS_LOAD:
      return {...state, todos: action.payload};
    default:
      return state;
  }

}
