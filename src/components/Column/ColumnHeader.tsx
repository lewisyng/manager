import { ModalWrapper } from '@/components/Modal/ModalWrapper';
import { Icon, Typography } from '@/components/ui';
import { FunctionComponent } from 'react';

type ColumnHeaderProps = {
    title: string;
    columnId: string;
};

export const ColumnHeader: FunctionComponent<ColumnHeaderProps> = ({
    title,
    columnId
}) => {
    return (
        <div className="p-2 bg-slate-100 flex items-center gap-4">
            <Typography content={title} className="grow" />

            <ModalWrapper
                type="createTodo"
                opener={<Icon iconName="add" />}
                columnId={columnId}
            />
        </div>
    );
};
