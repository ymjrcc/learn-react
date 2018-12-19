import React, { Component } from 'react';
import '../../TodoList.css'

class Todos extends Component {
  render() {
    return (
      <ul className="list">
        {this.props.todos
          .filter(i => {
            if(this.props.filterType===0)return true;
            else if(this.props.filterType===1) return i.completed;
            else if(this.props.filterType===-1) return !i.completed;
          })
          .map((item,index) => (
          <li key={index} className={item.completed?'completed':''} style={{display: item.deleted?'none':'block'}}>
            <span className="todo-text" onClick={() => this.props.handleStatusChange(index)}>{item.text}</span>
            <button onClick={() => this.props.handleDelete(index)}>x</button>
          </li>
        ))}
      </ul> 
    );
  }
}

export default Todos;