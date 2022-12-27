import { Modal } from '@/components/Modal';
import { Button, Input } from '@/components/ui';
import Dialog from '@/components/Dialog/Dialog';
import { FunctionComponent, useContext, useRef, useState } from 'react';
import api from '@/api';
import { useAppDispatch } from '@/store/store';
import { setColumns } from '@/store/slices/columns';
import { toastContext } from '@/context/toast/toastContext';
import { ModalProps } from '@/components/Modal/types';

type CreateColumnModalProps = ModalProps & {};

export const CreateColumnModal: FunctionComponent<CreateColumnModalProps> = ({
    closeModal,
}) => {
    const modalRef = useRef(null);
    const [title, setTitle] = useState<string>('');

    const { notify } = useContext(toastContext);

    const dispatch = useAppDispatch();

    const handleSubmit = async (e: Event) => {
        e.preventDefault();

        api.createColumn(title);

        closeModal();

        notify('Column was created');

        const columns = await api.fetchAllColumns();

        dispatch(setColumns(columns));
    };

    return (
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
    );
};
