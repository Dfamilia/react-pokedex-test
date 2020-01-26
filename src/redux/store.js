import { createStore, combineReducers } from 'redux';
import service from './reducers/service';
import results from './reducers/results';

const reducer = combineReducers({
    service,
    results
})
const store = createStore(reducer)

export default store;