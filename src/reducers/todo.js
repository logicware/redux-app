const initState = {
  todos: [
    {id: 1, name: 'Render static UI', isComplete: true},
    {id: 2, name: 'Create initial state', isComplete: true},
    {id: 3, name: 'Render based on state', isComplete: true}
  ],
  currentTodo: ''
};


export default (state = initState, action) => {

  switch (action.type) {
    case 'CURRENT_UPDATE':
      return { ...state, currentTodo: action.payload };
    case 'TODO_ADD':
      //console.debug("Adding Todo:", action.payload.name);
      return {...state, todos: state.todos.concat(action.payload)};
    default:
      return state;
  }

}
