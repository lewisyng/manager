import { useContext, useMemo } from 'react';
import SessionContext from '../context/session/sessionContext';

export const useSession = () => {
    const { session } = useContext(SessionContext);

    const isLoggedIn = useMemo(() => {
        return !!session;
    }, [session]);

    return { session, isLoggedIn };
};
