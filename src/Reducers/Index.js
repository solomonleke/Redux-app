import counterReducer from "./counter";
import loggedReducer from "./IsLogged";

import { combineReducers } from "redux";
import { todoReducers } from "./todo";


const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    myTodo: todoReducers
})

export default allReducers;


