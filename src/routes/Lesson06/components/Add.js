import React, { Component } from 'react';
import '../../TodoList.css'

class Add extends Component {
  render() {
    return (
      <p className="add">
        <input value={this.props.inputValue} onChange={this.props.handleInputChange}/>
        <button onClick={this.props.handleAddTodo}>添加</button>
      </p>
    );
  }
}

export default Add;