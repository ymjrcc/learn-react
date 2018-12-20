import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../TodoList.css';

class Lesson01 extends Component {
  render() {
    return (
      <div className="app">
        <p>
          Lesson01: 搭个骨架
          <Link to="/" className="back-btn">返回</Link>
        </p>
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
          <button>全部</button>
          <button>已完成</button>
          <button>未完成</button>
        </p>
      </div>
    );
  }
}

export default Lesson01;

// React 组件的写法（套路）
// class -> className