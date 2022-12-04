import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import SessionContextProvider from './context/session/SessionContextProvider';
import Router from './Router/Router';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <SessionContextProvider>
                <Router />
            </SessionContextProvider>
        </Provider>
    </React.StrictMode>
);
