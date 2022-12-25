import { FunctionComponent } from 'react';
import { ColumnHeader, Todos } from '@/components';

type ColumnProps = {
    column: any;
};

export const Column: FunctionComponent<ColumnProps> = ({ column }) => {
    return (
        <div className="grid gap-4">
            <ColumnHeader title={column.title} columnId={column.id} />
            <Todos columnId={column.id} />
        </div>
    );
};
