import { createContext } from 'react';

type toastContextType = {
    notify: (content: string) => void;
};

export const toastContext = createContext<toastContextType>({
    notify: () => {},
});
