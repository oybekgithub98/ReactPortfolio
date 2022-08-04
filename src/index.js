import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import './lang/i18n'
import 'i18next';
import Loader from './components/loader/Loader';

ReactDOM.render(
  <React.StrictMode>
    <Suspense   fallback={<Loader /> } >
      <StateProvider reducer={reducer} initialState={initialState}>
        <App />
      </StateProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();