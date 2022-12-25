import Dialog from '@/components/Dialog/Dialog';
import { Button, Input } from '@/components/ui';
import { toastContext } from '@/context/toast/toastContext';
import { useTodo } from '@/hooks/useTodo';
import columnSelectors from '@/store/selectors/columns';
import { setTodos } from '@/store/slices/todos';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { supabase } from '@/supabaseClient';
import { FunctionComponent, useContext, useState } from 'react';

type CreateTodoModalProps = { closeModal: () => void; columnId: string };

export const CreateTodoModal: FunctionComponent<CreateTodoModalProps> = ({
    closeModal,
    columnId,
}) => {
    const [label, setLabel] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { handleSubmit } = useTodo();

    const state = useAppSelector((state) => state);

    const columns = columnSelectors.selectColumns(state);

    const { notify } = useContext(toastContext);

    const dispatch = useAppDispatch();

    const _handleSubmit = async (e) => {
        e.preventDefault();
        const { count } = await supabase
            .from('todo')
            .select('*', { count: 'exact' });

        await handleSubmit(e, {
            label,
            title,
            description,
            columnId,
            count,
        });

        const { data: t, error } = await supabase.from('todo').select();

        dispatch(setTodos(t));

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
                onSubmit={_handleSubmit}
                autoComplete="off"
            >
                <div className="flex flex-col gap-4 grow">
                    <Input
                        name="label"
                        label="Label"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />

                    <Input
                        label="Title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <Input
                        label="Description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
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
