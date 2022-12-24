import { FunctionComponent } from 'react';

type ColumnHeaderProps = {
    title: string;
};

const ColumnHeader: FunctionComponent<ColumnHeaderProps> = ({ title }) => {
    return <div className="p-2 bg-slate-100">{title}</div>;
};

export default ColumnHeader;
