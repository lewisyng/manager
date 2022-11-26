import { Session } from '@supabase/supabase-js';
import { createContext } from 'react';

type SessionContextType = {
    session: Session | null;
};

const SessionContext = createContext<SessionContextType>({
    session: null,
});

export default SessionContext;
