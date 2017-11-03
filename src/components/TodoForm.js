import React from 'react';

export default (props) => {
  const {currentTodo} = props;
  const handleInputChange = (event) => {
    const val = event.target.value;
    props.changeCurrent(val);
  };

  return (
    <form>
      <input type="text"
             value={currentTodo}
             onChange={handleInputChange}
      />
    </form>
  );
}
