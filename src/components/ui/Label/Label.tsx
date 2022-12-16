import { FunctionComponent } from 'react';

type LabelProps = {
    children?: React.ReactNode;
    label: string;
};

const Label: FunctionComponent<LabelProps> = ({ children, label }) => {
    return (
        <label className="text-xs mb-1 text-slate-900">
            {label}
            {children}
        </label>
    );
};

export default Label;
