import React, { Component } from "react";
import state from "stative";

class TodoList extends Component {
  constructor() {
    super();
    this.inputElement = React.createRef();
  }

  componentDidUpdate() {
    this.inputElement.current.focus();
  }

  addItem = e => {
    e.preventDefault();
    const newItem = { text: this.inputElement.current.value, key: Date.now() };
    if (newItem.text !== "") {
      const stateItems = state.get("items");
      const items = [...stateItems, newItem];
      state.set("items", items);
      state.set("currentItem", { text: "", key: "" });
    }
  };

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="Task" ref={this.inputElement} />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    );
  }
}
export default TodoList;
