const {combineReducers, createStore} = require('redux');
import listReducer from './listReducer';

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.log('saveToLocalStorage error: ', e);
  }
};

const loadFromLocalStorage = () => {
  try {
    if (localStorage.getItem('state') === null) {
      return undefined;
    }
    return JSON.parse(localStorage.getItem('state'));
  } catch (e) {
    console.log('loadFromLocalStorage error: ', e);
    return undefined;
  }
};

const rootReducer = combineReducers({
  listReducer,
});

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
