import { Modal } from '@/components/Modal';
import { Button, Input } from '@/components/ui';
import Dialog from '@/Dialog/Dialog';
import { useContext, useRef, useState } from 'react';
import columnApi from '../../api/column';
import { toastContext } from '../../context/toast/toastContext';

export const CreateColumnModal = () => {
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
                <Button variant="tertiary">
                    New column
                </Button>
            }
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
