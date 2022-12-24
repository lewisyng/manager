import { ModalContent } from '@/components/Modal/ModalContent';
import { forwardRef, FunctionComponent, useImperativeHandle } from 'react';
import { useModal } from '../../hooks/useModal';

type ModalProps = {
    openerClassNames?: string;
    children: React.ReactNode;
    opener: React.ReactNode;
};

export const Modal = forwardRef<any, ModalProps>(
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
