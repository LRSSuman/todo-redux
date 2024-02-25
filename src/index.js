import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// connect redux in top of the component (index.js)

// import store from store.js
import { store } from './store';

// import Provider
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* wrap your component using provider and pass the store as an attribute*/}
        <Provider store={store}>
            <App />
        </Provider>
    </>
);
