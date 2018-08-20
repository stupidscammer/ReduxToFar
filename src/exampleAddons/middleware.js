// import {createStore} from 'redux'
// const anotherExampleMiddleware = storeAPI => next => action => {
//     // Do something in here, when each action is dispatched
  
//     return next(action)
// }
// const loggerMiddleware = storeAPI => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', storeAPI.getState())
//     return result
// }
// const alwaysReturnHelloMiddleware = storeAPI => next => action =>{
//     const originalResult = next(action);
//     // Ignore the original result, return something else
//     return 'Hello!'
// }

// // const middlewareEnhancer = applyMiddleware(alwaysReturnHelloMiddleware)
// const store = createStore(rootReducer)

// const dispatchResult = store.dispatch({type: 'some/action'})
// console.log(dispatchResult)
// const delayedMessageMiddleware = storeAPI => next => action => {
//     if (action.type === 'todos/todoAdded') {
//         setTimeout(() => {
//         console.log('Added a new todo: ', action.payload)
//         }, 1000)
//     }

//     return next(action)
// }