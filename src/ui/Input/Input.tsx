import clsx from 'clsx';
import { FunctionComponent } from 'react';

type InputProps = {
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FunctionComponent<InputProps> = ({
    type = 'text',
    name,
    value,
    onChange,
}) => {
    return (
        <input
            className={clsx('outline outline-[1px] text-sm py-1 px-2')}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
