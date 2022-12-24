import { toastContext } from './toastContext';
import toast, { Toaster } from 'react-hot-toast';
import ReactDOM from 'react-dom';
import { FunctionComponent, ReactNode } from 'react';

type ToastContextProviderProps = {
    children: ReactNode;
}

const ToastContextProvider: FunctionComponent<ToastContextProviderProps> = ({ children }) => {
    const notify = (content: string) => {
        toast(content);
    };

    return (
        <toastContext.Provider value={{ notify }}>
            {children}

            {ReactDOM.createPortal(<Toaster />, document.body)}
        </toastContext.Provider>
    );
};

export default ToastContextProvider;
