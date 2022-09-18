import {createStore} from 'redux';
import { main_Reducer } from './reducer';


const store = createStore(main_Reducer);

export default store;

