import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Footer from "../src/components/common/Footer"
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
      <Footer/>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
