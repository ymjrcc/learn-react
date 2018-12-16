import React, { Component } from 'react';
import '../TodoList.css';

class Lesson01 extends Component {
  render() {
    return (
      <div className="app">
        <h2>React Todo List</h2>
        <p className="add">
          <input />
          <button>添加</button>
        </p>
        <ul className="list">
          <li>待办1 <button>x</button></li>
          <li>待办2 <button>x</button></li>
          <li className="completed">待办3 <button>x</button></li>
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

export default Lesson01;

// React 组件的写法（套路）
// class -> className