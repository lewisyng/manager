import api from '@/api';
import Dialog from '@/components/Dialog/Dialog';
import { Button, Input } from '@/components/ui';
import { toastContext } from '@/context/toast/toastContext';
import columnSelectors from '@/store/selectors/columns';
import userSelectors from '@/store/selectors/user';
import { setTodos } from '@/store/slices/todos';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { supabase } from '@/supabaseClient';
import { FunctionComponent, useContext } from 'react';
import { useForm } from 'react-hook-form';

type CreateTodoModalProps = { closeModal: () => void; columnId: string };

export const CreateTodoModal: FunctionComponent<CreateTodoModalProps> = ({
    closeModal,
    columnId,
}) => {
    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            label: '',
            title: '',
            description: '',
        },
    });

    const state = useAppSelector((state) => state);

    const columns = columnSelectors.selectColumns(state);

    const { notify } = useContext(toastContext);

    const dispatch = useAppDispatch();

    const _handleSubmit = async (data, e) => {
        e.preventDefault();

        const { count } = await supabase
            .from('todo')
            .select('*', { count: 'exact' });

        const user = userSelectors.selectUser(state);

        await api.createTodo({
            ...data,
            user_id: user?.id,
            column: columnId,
            position: count,
        });

        const todos = await api.fetchAllTodos();

        dispatch(setTodos(todos))

        notify('Todo was created');

        closeModal();
    };

    const selectOptions = columns?.map((column) => ({
        value: column.id,
        label: column.title,
    }));

    return (
        <Dialog containerClassNames="bg-white">
            <div className="mb-6">
                <p className="text-2xl font-bold uppercase text-gray-100">
                    Add todo
                </p>
            </div>

            <form
                className="grow flex flex-col"
                onSubmit={handleSubmit(_handleSubmit)}
                autoComplete="off"
            >
                <div className="flex flex-col gap-4 grow">
                    <Input label="Label" {...register('label')} />

                    <Input label="Title" {...register('title')} />

                    <Input label="Description" {...register('description')} />
                </div>

                <div className="mt-6">
                    <Button type="submit" className="w-full" invert>
                        Submit
                    </Button>
                </div>
            </form>
        </Dialog>
    );
};
