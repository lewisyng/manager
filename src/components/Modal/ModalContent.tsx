import styles from './ModalContent.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { FunctionComponent, useEffect } from 'react';
import { Portal } from 'react-portal';
import clsx from 'clsx';

type ModalContentProps = {
    children: React.ReactNode;
    closeModal: () => void;
};

export const ModalContent: FunctionComponent<ModalContentProps> = ({
    children,
    closeModal,
}) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <Portal>
            <div className={styles.modal}>
                <AnimatePresence>
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0.8 }}
                        transition={{ duration: 0.25 }}
                        className={clsx(
                            'fixed top-[50%] left-[50%] !translate-x-[-50%] !translate-y-[-50%]'
                        )}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        </Portal>
    );
};
