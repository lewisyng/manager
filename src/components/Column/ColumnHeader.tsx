import api from '@/api';
import { ModalWrapper } from '@/components/Modal/ModalWrapper';
import { Button, Icon, Typography } from '@/components/ui';
import { setColumns } from '@/store/slices/columns';
import { setTodos } from '@/store/slices/todos';
import { useAppDispatch } from '@/store/store';
import { supabase } from '@/supabaseClient';
import { FunctionComponent } from 'react';

type ColumnHeaderProps = {
    title: string;
    columnId: string;
};

export const ColumnHeader: FunctionComponent<ColumnHeaderProps> = ({
    title,
    columnId,
}) => {
    const dispatch = useAppDispatch();

    
    const deleteColumn = async () => {
        const { error: columnError } = await supabase
            .from('columns')
            .delete()
            .eq('id', columnId);

        if (columnError) throw columnError;

        const { error: todoError } = await supabase
            .from('todo')
            .delete()
            .eq('column', columnId);

        if (todoError) throw todoError;

        const todos = await api.fetchAllTodos();
        const columns = await api.fetchAllColumns();

        dispatch(setTodos(todos));
        dispatch(setColumns(columns));
    };

    return (
        <div className="p-2 bg-slate-100 flex items-center gap-4">
            <Typography content={title} className="grow" />

            <ModalWrapper
                type="createTodo"
                opener={<Icon iconName="add" />}
                columnId={columnId}
            />

            <Button icon="trash" variant="tertiary" onClick={deleteColumn} />
        </div>
    );
};
