# Beyond Redux

- state is like the provider component of **context api**
- components are like **consumer**
- connect between _components_ and _store_ is called **subscription**

[Show Figure](./assets/screenshots/1.png)

# Dispatch

- **Dispatch** actually dispatches an action from **component** to _store_. Though it was sent to the store but it meets the **reducer** first.

# Reducer

- **Reducer** is named as reducer. Bcoz it works as same as `useReducer` or `Array.reduce()`. As it concatenate the previous state with the new state i.e it reduces the state actually.
- It receives the `old state` and `new action`. The same as `useReducer` or `Array.reduce()` receives two arguments.
