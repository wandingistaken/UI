import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'src/store';
import {Navigation} from 'src/navigation';
import AuthenticationHandler from 'src/screens/Authentication/AuthenticationHandler';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthenticationHandler store={store}>
          <Navigation />
        </AuthenticationHandler>
      </PersistGate>
    </Provider>
  );
}
