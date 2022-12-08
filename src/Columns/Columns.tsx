import { useState } from 'react';
import { useColumns } from '../hooks/useColumns';
import Input from '../ui/Input';
import Column from '../Column/Column';

const Columns = () => {
    return (
        <>
            {/* <form onSubmit={(e) => createColumn(e, column)}>
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
                {columns && columns.columns.map((column) => {
                    return <Column key={column.id} column={column} />;
                })}
            </div> */}
        </>
    );
};

export default Columns;
