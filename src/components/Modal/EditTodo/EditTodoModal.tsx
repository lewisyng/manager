import api from '@/api';
import Dialog from '@/components/Dialog/Dialog';
import { Button, Input } from '@/components/ui';
import { toastContext } from '@/context/toast/toastContext';
import { setTodos } from '@/store/slices/todos';
import { useAppDispatch } from '@/store/store';
import { Todo } from '@/store/types/todo';
import { supabase } from '@/supabaseClient';
import { FunctionComponent, useContext } from 'react';
import { useForm } from 'react-hook-form';

type EditTodoModalProps = {
    closeModal: () => void;
    todo: Todo;
};

export const EditTodoModal: FunctionComponent<EditTodoModalProps> = ({
    closeModal,
    todo,
}) => {
    const { label, title, description } = todo;

    const { register, handleSubmit } = useForm({
        defaultValues: {
            label,
            title,
            description,
        },
    });

    const { notify } = useContext(toastContext);

    const dispatch = useAppDispatch();

    const _handleSubmit = async (data, e) => {
        e.preventDefault();

        console.log('todo', todo);

        const { error } = await supabase
            .from('todo')
            .update({ ...todo, ...data })
            .eq('id', todo.id);

        if (error) throw error;

        const todos = await api.fetchAllTodos();

        dispatch(setTodos(todos));

        notify('Todo edited successfully');

        closeModal();
    };

    return (
        <Dialog containerClassNames="bg-white">
            <div className="mb-6">
                <p className="text-2xl font-bold uppercase text-gray-100">
                    Edit todo
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
