import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export const useProfile = (session) => {
    const [username, setUsername] = useState<string | null>(null);
    const [website, setWebsite] = useState<string | null>(null);
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    useEffect(() => {
        getProfile();
    }, [session]);

    const getUser = async () => {
        return await supabase.auth.getUser();
    };

    const getProfile = async () => {
        const {
            data: { user },
        } = await getUser();

        if (!user) return;

        console.log('user', user);
        try {
            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', user.id)
                .single();

            if (error && status !== 406) {
                throw error;
            }

            if (data) {
                setUsername(data.username);
                setWebsite(data.website);
                setAvatarUrl(data.avatar_url);
            }
        } catch (error) {
            console.log('ERROR', error);
        }
    };

    const updateProfile = async (e) => {
        e.preventDefault();

        try {
            const { user } = session;

            const updates = {
                id: user.id,
                username,
                website,
                avatar_url: avatarUrl,
                updated_at: new Date(),
            };

            let { error } = await supabase.from('profiles').upsert(updates);

            if (error) {
                throw error;
            }
        } catch (error) {
            console.log('ERRPR', error);
        }
    };

    const signOut = () => {
        supabase.auth.signOut();
    };

    return {
        username,
        website,
        avatarUrl,
        getProfile,
        setUsername,
        setWebsite,
        setAvatarUrl,
        signOut,
        updateProfile,
    };
};
