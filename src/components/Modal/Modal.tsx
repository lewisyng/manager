import { FunctionComponent } from 'react';
import { useModal } from '../../hooks/useModal';
import ModalContent from './ModalContent';

type ModalProps = {
    openerClassNames?: string;
    children: React.ReactNode;
    opener: React.ReactNode;
}

const Modal: FunctionComponent<ModalProps> = ({
    openerClassNames,
    children,
    opener,
}) => {
    const { modalIsOpen, openModal, closeModal } = useModal();

    return (
        <>
            <button className={openerClassNames} onClick={openModal}>
                {opener}
            </button>

            {modalIsOpen && (
                <ModalContent closeModal={closeModal}>{children}</ModalContent>
            )}
        </>
    );
};

export default Modal;
