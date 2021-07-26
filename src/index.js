import React from 'react';
import Router from './navigations';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './services/Redux/reducers';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Login'],
};
const persistedReducers = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducers, applyMiddleware(createLogger()));
const persistedStore = persistStore(store);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
