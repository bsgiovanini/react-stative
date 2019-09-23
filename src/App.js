import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'


class App extends Component {
 
  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
        />
        <TodoItems deleteItem={this.deleteItem}/>
      </div>
    )
  }
}
export default App