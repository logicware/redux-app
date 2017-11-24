import React, {Component} from 'react';

class TextBox extends Component {
  handleInputChange = (event) => {
    const val = event.target.value;
    this.props.updateText(val);
  };

  render() {
    return (
      <div>
        <input type="text"
               value={this.props.value}
               onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default TextBox;