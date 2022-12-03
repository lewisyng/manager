import { useEffect, useState } from 'react';
import { useColumns } from '../hooks/useColumns';
import Input from '../ui/Input';

const Columns = () => {
    const [columns, setColumns] = useState<any[]>([]);
    const [column, setColumn] = useState<string>('');

    const { createColumn, getColumns } = useColumns();

    useEffect(() => {
        const getter = async () => {
            const columns = (await getColumns()) || [];
            setColumns(columns);
        };

        getter();
    }, []);

    return (
        <>
            <form onSubmit={(e) => createColumn(e, column)}>
                <div className="flex items-center gap-4">
                    <Input
                        type="text"
                        name="todo"
                        value={column}
                        onChange={(e) => setColumn(e.target.value)}
                    />

                    <button type="submit">Submit</button>
                </div>
            </form>

            <div className="py-4 flex items-center gap-8">
                {columns.map((column) => {
                    return <div key={column.id}>{column.title}</div>;
                })}
            </div>
        </>
    );
};

export default Columns;