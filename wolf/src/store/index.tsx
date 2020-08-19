//  reducers
import navigationSystem from './navigation-system/reducer';

//  sagas

//  redux
import {persistStore, persistCombineReducers} from 'redux-persist';
// import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import shoppingCart from './shopping-cart/reducer';
import {RootStoreState} from 'src/models/RootStoreState';

export const sharedReducers = {
  navigationSystem,
  //   navigationSystem,
  //   navigationSystem,
  //   navigationSystem,
  //   navigationSystem,
  //   navigationSystem,
};

export const sharedSagas = [
  //   navigationSystem,
  //   navigationSystem,
  //   navigationSystem,
  //   navigationSystem,
];

const storage = createSensitiveStorage({
  keychainService: 'WolfKeychain',
  sharedPreferencesName: 'WolfSharedPrefs',
});

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['navigationSystem', 'toterList'],
};

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = persistCombineReducers(persistConfig, reducers);

function configureStore() {
  // ...
  let store = createStore(reducer);
  let persistor = persistStore(store);

  return {persistor, store};
}
