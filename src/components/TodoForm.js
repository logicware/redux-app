import React from 'react';
import {connect} from 'react-redux';

import {updateCurrentAction} from "../reducers/todo";

const TodoForm = (props) => {
  const {currentTodo, updateCurrentAction} = props;

  const handleInputChange = (event) => {
    const val = event.target.value;
    updateCurrentAction(val);
  };

  return (
    <form>
      <input type="text"
             value={currentTodo}
             onChange={handleInputChange}
      />
    </form>
  );
};

const mapStateToProps = (state) => ({ currentTodo: state.currentTodo });
const mapDispatchToProps = {updateCurrentAction};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
