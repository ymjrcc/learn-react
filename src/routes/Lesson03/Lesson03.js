import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <p>
          Lesson03: 更新待办项（完成、删除）
          <Link to="/" className="back-btn">返回</Link>
        </p>
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
          <button>全部</button>
          <button>已完成</button>
          <button>未完成</button>
        </p>
      </div>
    );
  }
}
