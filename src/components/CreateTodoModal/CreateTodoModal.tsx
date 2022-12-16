import { AnimatePresence, motion } from 'framer-motion';
import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import Dialog from '../../Dialog/Dialog';
import { useModal } from '../../hooks/useModal';
import { useTodo } from '../../hooks/useTodo';
import columnSelectors from '../../store/selectors/columns';
import { setTodos } from '../../store/slices/todos';
import { useAppSelector } from '../../store/store';
import { supabase } from '../../supabaseClient';
import Modal from '../Modal/Modal';
import { Icon, Input } from '../ui';

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

    const dispatch = useDispatch();

    const _handleSubmit = async (e) => {
        await handleSubmit(e, { label, title, description, columnId });

        const { data: t, error } = await supabase.from('todo').select();

        dispatch(setTodos(t));

        // closeModal();
    };

    return (
        <Modal
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
                    <p className="text-2xl font-bold uppercase">Add todo</p>
                </div>

                <form className="grow flex flex-col" onSubmit={_handleSubmit}>
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

                        <label>
                            Columns
                            <select
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
                                        <option
                                            key={column.id}
                                            value={column.id}
                                        >
                                            {column.title}
                                        </option>
                                    ))}
                            </select>
                        </label>
                    </div>

                    <div className="mt-6">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </Dialog>
        </Modal>
    );
};

export default CreateTodoModal;
