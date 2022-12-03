import { supabase } from '../supabaseClient';

export const useColumns = () => {
    const getColumns = async () => {
        const { data, error: err } = await supabase.from('columns').select();

        if (!err) {
            return data;
        }
    };

    const createColumn = async (e: Event, title: string) => {
        e.preventDefault();
        
        const { error } = await supabase.from('columns').insert({ title });
    };

    return {
        createColumn,
        getColumns,
    };
};
