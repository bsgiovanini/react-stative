# React Todo List Stative Example

This project was created as an example of using [stative](https://www.npmjs.com/package/stative), a simple reactive state in React

For further information, access [stative repo](https://github.com/alandecastros/stative)

index.js - set the initial state

```
import state from 'stative';

state.set({
    currentItem: {text:'', key:''},
    items: [
      {text:'Simple state management', key: '1'},
      {text:'Reactive state', key: '2' },
      {text:'RxJS', key: '3' }
    ],
  });
```

TodoList.js - set state adding new item

```
import state from 'stative';

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
```

TodoItems.js - see state change reflecting on items list

```
import state from 'stative';

constructor() {
    super();
    this.state = { items: state.get("items") };
    state.subscribe("items", items => {
      this.setState({ items });
    });
  }

  deleteItem = key => {
    const stateItems = state.get("items");

    const filteredItems = stateItems.filter(item => {
      return item.key !== key;
    });
    state.set("items", filteredItems);
  };
```
