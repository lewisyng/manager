import './index.css';
import ReactDOM from 'react-dom/client';
import SessionContextProvider from './context/session/SessionContextProvider';
import Router from './Router/Router';
import { Provider } from 'react-redux';
import store from './store/store';
import ToastContextProvider from './context/toast/ToastContextProvider';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Provider store={store}>
            <SessionContextProvider>
                <ToastContextProvider>
                    <Router />
                </ToastContextProvider>
            </SessionContextProvider>
        </Provider>
    </StrictMode>
);
