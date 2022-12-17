import clsx from 'clsx';
import { FunctionComponent } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'tertiary';
    invert?: boolean;
    className?: string;
};

const Button: FunctionComponent<ButtonProps> = ({
    children,
    type = 'button',
    variant = 'primary',
    invert,
    className,
}) => {
    return (
        <button
            className={clsx(
                styles['button'],
                styles[`button--${variant}`],
                invert && styles['invert'],
                className
            )}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
