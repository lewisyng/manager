import clsx from 'clsx';
import { FunctionComponent } from 'react';
import Label from '../Label/Label';

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
        <Label label={label}>
            <input
                className={clsx('outline outline-[1px] text-sm py-1 px-2')}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </Label>
    );
};

export default Input;
