import clsx from 'clsx';
import { FunctionComponent } from 'react';
import Label from '../Label/Label';
import styles from "./Input.module.scss"

type InputProps = {
    type?: string;
    name: string;
    value: string;
    label?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FunctionComponent<InputProps> = ({
    type = 'text',
    name,
    value,
    label,
    onChange,
}) => {
    return (
        <Label label={label || ''}>
            <input
                className={clsx(styles["input"], 'outline rounded text-slate-900 outline-[1px] text-sm py-1 px-2 bg-white outline-none border-none')}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </Label>
    );
};

export default Input;
