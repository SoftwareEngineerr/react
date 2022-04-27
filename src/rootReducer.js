import AddItemReducer  from './Reducer';
import getcolor  from './color';
import { combineReducers , applyMiddleware  } from 'redux';
console.log(AddItemReducer);
const mydata = (store) => (next) => (action) => {
    console.log('hello world', action);
    next(action);
}
const rootReducer = combineReducers({
    AddItemReducer: AddItemReducer , 
    getcolor : getcolor}, {} , applyMiddleware(mydata));
export default rootReducer;