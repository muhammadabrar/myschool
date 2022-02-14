import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'carbon-components/css/carbon-components.min.css';
// import './cooltipz.css';
// import 'cooltipz-css';
import './styles/index.css'
import './styles/states.css'
import './styles/nav.css'
import './styles/admission.css'
import './styles/classess.css'
import './styles/staff.css'
import './styles/students.css'


import App from './App';
import { store } from './store/store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <div className='root'>
  <Provider store={store} >
    <App  />
  </Provider>
  </div>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

