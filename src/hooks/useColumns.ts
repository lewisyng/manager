import { useGetAllColumnsQuery } from '../store/api/columnsApi';
import { supabase } from '../supabaseClient';

export const useColumns = () => {
    const { data: columns, isLoading } = useGetAllColumnsQuery();

    const createColumn = async (e: Event, title: string) => {
        e.preventDefault();

        const { error } = await supabase.from('columns').insert({ title });
    };

    return { columns, isLoading, createColumn };
};
