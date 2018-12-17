import React, { Component } from 'react';
import '../TodoList.css';

export default class Lesson03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {text: '待办1', completed: false},
        {text: '待办2', completed: false},
        {text: '待办3', completed: true},
      ],
      inputValue: '',
    }
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleAddTodo = () => {
    if(!this.state.inputValue)return;
    this.setState({
      todos: [
        ...this.state.todos, 
        { text: this.state.inputValue, completed: false },
      ],
      inputValue: '',
    });
  }

  handleStatusChange = index => {
    const newTodos = [...this.state.todos];
    newTodos[index] = {
      ...newTodos[index],
      completed: !newTodos[index].completed,
    };
    this.setState({
      todos: newTodos,
    });
  }

  handleDelete = index => {
    const newTodos = [...this.state.todos];
    newTodos[index] = {
      ...newTodos[index],
      deleted: true,
    };
    this.setState({
      todos: newTodos,
    });
  }
  
  render() {
    return (
      <div className="app">
        <h2>React Todo List</h2>
        <p className="add">
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleAddTodo}>添加</button>
        </p>
        <ul className="list">
          {this.state.todos.map((item,index) => (
            <li key={index} className={item.completed?'completed':''} style={{display: item.deleted?'none':'block'}}>
              <span className="todo-text" onClick={() => this.handleStatusChange(index)}>{item.text}</span>
              <button onClick={() => this.handleDelete(index)}>x</button>
            </li>
          ))}
        </ul>
        <p className="filter">
          <a href="javascript:;">全部</a>
          <a href="javascript:;">已完成</a>
          <a  href="javascript:;">未完成</a>
        </p>
      </div>
    );
  }
}
