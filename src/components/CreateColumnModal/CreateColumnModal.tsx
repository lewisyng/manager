import { useContext, useRef, useState } from 'react';
import columnApi from '../../api/column';
import { toastContext } from '../../context/toast/toastContext';
import Dialog from '../../Dialog/Dialog';
import Modal from '../Modal/Modal';
import { Button, Icon, Input } from '../ui';

const CreateColumnModal = () => {
    const modalRef = useRef(null);
    const [title, setTitle] = useState<string>('');

    const { notify } = useContext(toastContext);

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        columnApi.createColumn(title);

        modalRef.current?.handleCloseModal();

        notify('Column was created');
    };

    return (
        <Modal
            ref={modalRef}
            opener={
                <>
                    <Icon />
                    <p>Create column</p>
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
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <div className="flex flex-col gap-4 grow">
                        <Input
                            name="title"
                            label="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
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

export default CreateColumnModal;
