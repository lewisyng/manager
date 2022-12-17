import { FunctionComponent } from 'react';

type LabelProps = {
    children?: React.ReactNode;
    label: string;
};

const Label: FunctionComponent<LabelProps> = ({ children, label }) => {
    return (
        <label className="text-sm mb-1 text-slate-100 flex flex-col">
            <p className="pb-1">{label}</p>
            {children}
        </label>
    );
};

export default Label;
