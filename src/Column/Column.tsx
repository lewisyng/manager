import { FunctionComponent, useState } from 'react';
import { useTodo } from '../hooks/useTodo';
import Modal from 'react-modal';
import Input from '../ui/Input';

type ColumnProps = {
    column: any;
};

const Column: FunctionComponent<ColumnProps> = ({ column }) => {
    const [todoModalOpen, setTodoModalOpen] = useState(false);

    console.log("column", column)

    const openTodoModal = () => {
        setTodoModalOpen(true);
    };

    const closeTodoModal = () => {
        setTodoModalOpen(false);
    };

    const [label, setLabel] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

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

    return (
        <div>
            <div>{column.title}</div>

            {}

            <button onClick={openTodoModal}>Add new</button>

            <Modal
                isOpen={todoModalOpen}
                style={modalStyle}
                shouldCloseOnEsc
                shouldCloseOnOverlayClick
                onRequestClose={closeTodoModal}
            >
                <div className="mb-6">
                    <p className="text-2xl font-bold uppercase">Add todo</p>
                </div>

                <form
                    className="grow flex flex-col"
                    onSubmit={(e) =>
                        handleSubmit(e, { label, title, description })
                    }
                >
                    <div className="flex flex-col gap-4 grow">
                        <label>
                            <p className="text-xs mb-1 text-slate-900">Label</p>
                            <Input
                                name="label"
                                value={label}
                                onChange={(e) => setLabel(e.target.value)}
                            />
                        </label>

                        <label>
                            <p className="text-xs mb-1 text-slate-900">Title</p>
                            <Input
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </label>

                        <label>
                            <p className="text-xs mb-1 text-slate-900">
                                Description
                            </p>
                            <Input
                                name="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>
                    </div>

                    <div className="mt-6">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Column;
