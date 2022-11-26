import { useState } from 'react';
import { supabase } from '../supabaseClient';

export const useAuth = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dataIsValid = () => {
        return !!email && !!password;
    };

    const handleLogin = async function signInWithEmail(e) {
        e.preventDefault();

        if (!dataIsValid) return;

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!email || !password) return;

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        console.log('data', data);
        console.log('error', error);

        // try {
        //     setLoading(true);
        //     const { error } = await supabase.auth.signInWithOtp({ email });
        //     if (error) throw error;
        //     alert('Check your email for the login link!');
        // } catch (error) {
        //     alert(error.error_description || error.message);
        // } finally {
        //     setLoading(false);
        // }
    };

    return {
        email,
        password,
        handleLogin,
        handleSignup,
        setEmail,
        setPassword,
    };
};
