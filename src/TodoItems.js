import React, { Component } from 'react'
import state from 'stative';

class TodoItems extends Component {

    constructor() {
        super();
        this.state = {items: state.get('items')};
        state.subscribe('items', (items) => {
            this.setState({ items})
        });
    }

    createTasks = item => {
        return (
            <li key={item.key} onClick={() => this.deleteItem(item.key)}>
                {item.text}
            </li>
        )
    }

    deleteItem = key => {
        const stateItems = state.get('items');
        
        const filteredItems = stateItems.filter(item => {
          return item.key !== key
        })
        state.set('items', filteredItems);
      }

    render() {
        const todoEntries = this.state.items;
        const listItems = todoEntries.map(this.createTasks) 
        return <ul className="theList">{listItems}</ul>
    }
}
export default TodoItems