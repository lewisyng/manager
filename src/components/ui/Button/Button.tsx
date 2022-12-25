import { Icon } from '@/components';
import clsx from 'clsx';
import { FunctionComponent } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'tertiary';
    invert?: boolean;
    className?: string;
    icon?: string;
    iconWidth?: number;
    iconHeight?: number;
    onClick?: () => void;
};

export const Button: FunctionComponent<ButtonProps> = ({
    children,
    type = 'button',
    variant = 'primary',
    invert,
    className,
    icon,
    iconWidth,
    iconHeight,
    onClick,
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
            onClick={onClick}
        >
            {icon && (
                <Icon iconName={icon} width={iconWidth} height={iconHeight} />
            )}
            {children}
        </button>
    );
};
