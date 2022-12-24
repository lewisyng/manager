import { forwardRef, FunctionComponent, useImperativeHandle } from 'react';
import { useModal } from '../../hooks/useModal';
import ModalContent from './ModalContent';

type ModalProps = {
    openerClassNames?: string;
    children: React.ReactNode;
    opener: React.ReactNode;
};

const Modal = forwardRef<any, ModalProps>(
    ({ openerClassNames, children, opener }, ref) => {
        const { modalIsOpen, openModal, closeModal } = useModal();

        useImperativeHandle(ref, () => ({
            handleCloseModal() {
                closeModal();
            },
        }));

        return (
            <>
                <button className={openerClassNames} onClick={openModal}>
                    {opener}
                </button>

                {modalIsOpen && (
                    <ModalContent closeModal={closeModal}>
                        {children}
                    </ModalContent>
                )}
            </>
        );
    }
);

export default Modal;
