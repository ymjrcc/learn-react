import React, { Component } from 'react';
import '../TodoList.css';

class Lesson02 extends Component {
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
            <li key={index} className={item.completed?'completed':''}>
              {item.text} <button>x</button>
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

export default Lesson02;

// React 组件的写法（套路）
// class -> className，根据状态改变更新样式
// 列表渲染
// 表单项（受控组件）
// 事件