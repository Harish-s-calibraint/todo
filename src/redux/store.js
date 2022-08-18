import {createStore, } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunkMiddleware  from "redux-thunk"
import reducers from "./reducers"

// const middleware=[thunk];
const initialState={};


 const store= createStore(
       reducers,
       initialState,
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        // composeWithDevTools(applyMiddleware(thunkMiddleware)),
        );

 export default store;