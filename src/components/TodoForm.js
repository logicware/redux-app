import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateCurrentAction, saveTodo} from "../reducers/todo";
import TextBox from './TextBox';

class TodoForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.currentTodo) {
      this.props.saveTodo(this.props.currentTodo);
    }
  };

  render() {
   const {currentTodo} = this.props;

   return (
     <form onSubmit={this.handleSubmit}>
       <TextBox
              value={currentTodo}
              updateText={this.props.updateCurrentAction}
       />
     </form>
   );
 }
}

const mapStateToProps = (state) => ({ currentTodo: state.todo.currentTodo });
const mapDispatchToProps = {updateCurrentAction, saveTodo};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
