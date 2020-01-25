import { createStore } from 'redux';
import service from './reducers/service';

const store = createStore(service)

export default store;