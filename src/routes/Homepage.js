import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <h2>Learn React</h2>
        <p>——用 React 实现一个 Todo List</p>
        <ul>
          <li><Link to='/lesson01'>Lesson01: 搭个骨架</Link></li>
          <li><Link to='/lesson02'>Lesson02: 添加待办项</Link></li>
          <li><Link to='/lesson03'>Lesson03: 更新待办项（完成、删除）</Link></li>
          <li><Link to='/lesson04'>Lesson04: 过滤状态</Link></li>
          <li><Link to='/lesson05'>Lesson05: 组件化</Link></li>
          <li><Link to='/lesson06'>Lesson06: 数据持久化</Link></li>
          <li><Link to='/lesson07'>Lesson07: 与服务端交互</Link></li>
        </ul>
      </div>
    );
  }
}

export default Homepage;