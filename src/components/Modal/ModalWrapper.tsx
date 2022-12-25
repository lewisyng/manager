import { Modal } from '@/components/Modal/Modal';
import { Modallist } from '@/components/Modal/Modallist';
import { FunctionComponent, ReactNode, useRef } from 'react';

type ModalWrapperProps = {
    type: keyof typeof Modallist;
    opener: ReactNode;
    [x: string]: any;
};

type ModalComponentProps = {
    closeModal: () => void;
};

export const ModalWrapper: FunctionComponent<ModalWrapperProps> = ({
    type,
    opener,
    ...rest
}) => {
    const ModalComponent: FunctionComponent<ModalComponentProps> =
        Modallist[type];

    const modalRef = useRef<any>(null);

    const closeModal = () => {
        if (!modalRef || !modalRef.current) return;

        modalRef.current.handleCloseModal();
    };

    return (
        <Modal ref={modalRef} opener={opener}>
            <ModalComponent closeModal={closeModal} {...rest} />
        </Modal>
    );
};
