import { createStore, combineReducers } from 'redux';
import service from './reducers/service';
import results from './reducers/results';
import currentItem from './reducers/currentItem';

const reducer = combineReducers({
    service,
    results,
    currentItem,
})
const store = createStore(reducer)

export default store;