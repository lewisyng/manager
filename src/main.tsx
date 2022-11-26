import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import SessionContextProvider from './context/session/SessionContextProvider';
import Router from './Router/Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <SessionContextProvider>
            <Router />
        </SessionContextProvider>
    </React.StrictMode>
);
