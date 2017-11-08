import {getTodos} from "../lib/todoServices";

const initState = {
  todos: [],
  currentTodo: ''
};

const TODO_ADD        = 'TODO_ADD';
const CURRENT_UPDATE  = 'CURRENT_UPDATE';
const TODOS_LOAD      = 'TODOS_LOAD';


export const updateCurrentAction = (payload) => ({ type: CURRENT_UPDATE, payload: payload });
export const loadTodosAction     = (payload) => ({ type: TODOS_LOAD, payload: payload });


export const fetchTodos = () => {
  return (dispatch) => {
    getTodos().then((todos) => {
      dispatch(loadTodosAction(todos));
    });
  }
};

export default (state = initState, action) => {

  switch (action.type) {
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    case TODO_ADD:
      //console.debug("Adding Todo:", action.payload.name);
      return {...state, todos: state.todos.concat(action.payload)};
    case TODOS_LOAD:
      return {...state, todos: action.payload};
    default:
      return state;
  }

}
