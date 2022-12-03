import { createStore } from "redux";
import rootReudcer from '../reducers';


const store = createStore(rootReudcer);

export default store;
