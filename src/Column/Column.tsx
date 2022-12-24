import { FunctionComponent } from 'react';
import Todos from '../components/Todos/Todos';
import ColumnHeader from '../Columns/ColumnHeader';

type ColumnProps = {
    column: any;
};

const Column: FunctionComponent<ColumnProps> = ({ column }) => {
    return (
        <div className="grid gap-4">
            <ColumnHeader title={column.title} />
            <Todos columnId={column.id} />
        </div>
    );
};

export default Column;
