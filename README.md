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
- it returns a `function`

### Middleware

- _middleware_ form in a _curry function_

```js
const middleware = (state) => (next) => (action){
  ...
  return next(); // this is must for execution
}
```

## Redux toolkit

- new way of redux
- opinionated set of utilities
- `react-redux` requires for wrapping or binding in react application

```js
npm install react-redux
```

- else `@reduxjs/toolkit` is ok

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

## Redux Reducers

- `Redux` allows only one reducer
- so we need to use `combineReducers`

```js
const rootReducer = combineReducers({
  name: reducerOne,
  anotherName: reducerTwo,
});
// then root reducer will be used to createStore
```

or use directly as

```js
const store = createStore({
  name: reducerOne,
  anotherName: reducerTwo,
});
```

and add it

```js
<Provider store={store}>...</Provider>
```

# React Toolkit Kickstart

- Start with ` yarn add @reduxjs/toolkit react-redux`
- configure a store

```js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: {} });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
```

- use the redux wrapper from `react-redux`

```js
<Provider store={store}>
    <App />
  </Provider>,
```

- create a _slice_ where a slice is a piece of the state tree in a Redux store that is managed by a specific piece of logic.

```js
// /features/counter/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: { count: 0 },
  name: "counter",
  reducers: {
    // action types
  },
});
```

- a slice contains the `state` and the `reducer` logic.
- the _reducer_ contains different logic for different `action`
- next to add the slice to the store

```js
export default counterSlice.reducer;
// yes only the reducer from the slice
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  // as we adding it to the store reducer
});
```
