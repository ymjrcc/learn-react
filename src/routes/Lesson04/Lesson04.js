import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../TodoList.css';

export default class Lesson04 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {text: '待办1', completed: false},
        {text: '待办2', completed: false},
        {text: '待办3', completed: true},
      ],
      inputValue: '',
      filterType: 0, //0: 全部; 1: 已完成; -1: 未完成;
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

  handleChangeFilter = filterType => {
    this.setState({ filterType });
  }
  
  render() {
    return (
      <div className="app">
        <p>
          Lesson04: 过滤状态
          <Link to="/" class="back-btn">返回</Link>
        </p>
        <h2>React Todo List</h2>
        <p className="add">
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleAddTodo}>添加</button>
        </p>
        <ul className="list">
          {this.state.todos
            .filter(i => {
              if(this.state.filterType===1) return i.completed;
              else if(this.state.filterType===-1) return !i.completed;
              else return true;
            })
            .map((item,index) => (
            <li key={index} className={item.completed?'completed':''} style={{display: item.deleted?'none':'block'}}>
              <span className="todo-text" onClick={() => this.handleStatusChange(index)}>{item.text}</span>
              <button onClick={() => this.handleDelete(index)}>x</button>
            </li>
          ))}
        </ul> 
        <p className="filter">
          <button 
            disabled={this.state.filterType===0} 
            onClick={() => this.handleChangeFilter(0)}
          >全部</button>
          <button 
            disabled={this.state.filterType===1} 
            onClick={() => this.handleChangeFilter(1)}
          >已完成</button>
          <button 
            disabled={this.state.filterType===-1} 
            onClick={() => this.handleChangeFilter(-1)}
          >未完成</button>
          {/* {
            this.state.filterType===0?
            <button disabled={this.state.filterType===0} onClick={() => this.handleChangeFilter(0)}>全部</button>:
            <a href="javascript:;" onClick={() => this.handleChangeFilter(0)}>全部</a>
          }
          {
            this.state.filterType===1?
            <span>已完成</span>:
            <a href="javascript:;" onClick={() => this.handleChangeFilter(1)}>已完成</a>
          }
          {
            this.state.filterType===-1?
            <span>未完成</span>:
            <a href="javascript:;" onClick={() => this.handleChangeFilter(-1)}>未完成</a>
          } */}
        </p>
      </div>
    );
  }
}
