import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from 'store';

import Home from 'pages/Home';

const App = () => (
  <Provider store={store}>
    <ToastContainer />
    <Home />
  </Provider>
);

export default App;
