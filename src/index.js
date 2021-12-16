import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'carbon-components/css/carbon-components.min.css';
// import './cooltipz.css';
// import 'cooltipz-css';
import './index.css';
import App from './App';
import { store } from './store/store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <>
  <Provider store={store} >
    <App  />
  </Provider>
  </>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

