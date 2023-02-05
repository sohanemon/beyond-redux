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
- It contains the **business** logic.

## Redux thunk

- old way of redux
- is a `middleware` of redux
- used to handle _async_ operation

## Redux toolkit

- new way of redux
- opinionated set of utilities

# Similarities of Redux, useReducer, Array.reduce()

### Array.reduce()

```js
array.reduce((previous, current)=> {}, initialValue)
// or
function reducerFunction(previous, current){
   ...
// this reducer function returns the new value that becomes previous value
}
array.reduce(reducerFunction, initialValue)
```

### useReducer

```js
const [state, dispatch] = useReducer((prevState, action)=>{}, initialValue)
// or
function reducerFunction(prevState, action){
   ...
// this reducer function returns the new state
}
const [state, dispatch] = useReducer(reducerFunction, initialValue)
// where action is an object like
/**
    {
        type: '', payload: {}
    }
*/
```

> every `reducer` doing nothing but combining old state or value with new state or values

- `state` represents the actual state, which is the first parameter of `reducer` function
- `dispatch()` is a function that receives the `action`
- `action` could be anything but usually an object like,

```js
{
    type: '',
    payload: {}
}
```

- what the `dispatch` functions receives that passed to the `reducer` function to **reduce** or **concatenate** with the old state.

### React-Redux Wrapper

- `useSelector` takes a callback with a parameter called `state`
- `useReducer` takes a callback with two parameters `state` and `action`
