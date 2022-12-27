import { ModalContent } from '@/components/Modal/ModalContent';
import clsx from 'clsx';
import { forwardRef, ReactNode, useImperativeHandle } from 'react';
import { useModal } from '../../hooks/useModal';

type ModalProps = {
    openerClassNames?: string;
    children: ReactNode;
    opener: ReactNode;
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
                <button
                    className={clsx('text-left', openerClassNames)}
                    onClick={openModal}
                    type="button"
                >
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
