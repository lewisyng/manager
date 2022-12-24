import { FunctionComponent, useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '../../Dialog/Dialog';
import { useTodo } from '../../hooks/useTodo';
import columnSelectors from '../../store/selectors/columns';
import { setTodos } from '../../store/slices/todos';
import { useAppSelector } from '../../store/store';
import { supabase } from '../../supabaseClient';
import Modal from '../Modal/Modal';
import { Button, Icon, Input } from '../ui';
import Select from 'react-select';
import { toastContext } from '../../context/toast/toastContext';

const CreateTodoModal: FunctionComponent = () => {
    const [label, setLabel] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [columnId, setColumnId] = useState('');

    const modalStyle = {
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.6)',
        },
        content: {
            width: '70%',
            height: '80vh',
            borderRadius: '10px',
            marginInline: 'auto',
            display: 'flex',
            flexFlow: 'column',
        },
    };

    const { hasRendered, todo, setTodo, todos, handleSubmit, deleteTodo } =
        useTodo();

    const state = useAppSelector((state) => state);

    const columns = columnSelectors.selectColumns(state);

    const modalRef = useRef(null);
    const { notify } = useContext(toastContext);

    const dispatch = useDispatch();

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

        modalRef.current?.handleCloseModal();

        notify('Todo was created');

        // closeModal();
    };

    const selectOptions = columns?.map((column) => ({
        value: column.id,
        label: column.title,
    }));

    return (
        <Modal
            ref={modalRef}
            opener={
                <>
                    <Icon />
                    <p>Create todo</p>
                </>
            }
            openerClassNames="flex items-center gap-4"
        >
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

                        {selectOptions && (
                            <Select
                                aria-label="Select a column"
                                options={[
                                    {
                                        value: '',
                                        label: 'Select a column',
                                    },
                                    ...selectOptions,
                                ]}
                                onChange={(e) => setColumnId(e.value)}
                            />
                        )}

                        {/* <select
                            name="column"
                            id="column"
                            value={columnId}
                            onChange={(e) => setColumnId(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Select a column
                            </option>
                            {columns &&
                                columns.map((column) => (
                                    <option key={column.id} value={column.id}>
                                        {column.title}
                                    </option>
                                ))}
                        </select> */}
                    </div>

                    <div className="mt-6">
                        <Button type="submit" className="w-full" invert>
                            Submit
                        </Button>
                    </div>
                </form>
            </Dialog>
        </Modal>
    );
};

export default CreateTodoModal;
