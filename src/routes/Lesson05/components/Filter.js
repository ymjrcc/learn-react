import React, { Component } from 'react';
import '../../TodoList.css'

class Filter extends Component {
  render() {
    return (
      <p className="filter">
          <button 
          disabled={this.props.filterType===0} 
          onClick={() => this.props.handleChangeFilter(0)}
        >全部</button>
        <button 
          disabled={this.props.filterType===1} 
          onClick={() => this.props.handleChangeFilter(1)}
        >已完成</button>
        <button 
          disabled={this.props.filterType===-1} 
          onClick={() => this.props.handleChangeFilter(-1)}
        >未完成</button>
      </p>
    );
  }
}

export default Filter;