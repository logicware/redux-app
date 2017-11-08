import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateCurrentAction, saveTodo} from "../reducers/todo";

class TodoForm extends Component {

  handleInputChange = (event) => {
    const val = event.target.value;
    this.props.updateCurrentAction(val);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveTodo(this.props.currentTodo);
  };

  render() {
   const {currentTodo} = this.props;

   return (
     <form onSubmit={this.handleSubmit}>
       <input type="text"
              value={currentTodo}
              onChange={this.handleInputChange}
       />
     </form>
   );
 }
}

const mapStateToProps = (state) => ({ currentTodo: state.currentTodo });
const mapDispatchToProps = {updateCurrentAction, saveTodo};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
