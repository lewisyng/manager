import { Session } from '@supabase/supabase-js';
import { FunctionComponent, useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import SessionContext from './sessionContext';

type SessionContextProviderType = {
    children: React.ReactNode;
};

const SessionContextProvider: FunctionComponent<SessionContextProviderType> = ({
    children,
}) => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <SessionContext.Provider value={{ session }}>
            {children}
        </SessionContext.Provider>
    );
};

export default SessionContextProvider;
