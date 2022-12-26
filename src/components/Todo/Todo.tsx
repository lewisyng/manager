import { Button } from '@/components/ui';
import { FunctionComponent } from 'react';
import Card from '../Card/Card';
import { Todo as TodoType } from '../../store/types/todo';
import { ModalWrapper } from '@/components/Modal/ModalWrapper';

type TodoProps = {
    todo: TodoType;
    handleDelete: (id: string) => void;
};

export const Todo: FunctionComponent<TodoProps> = ({ todo, handleDelete }) => {
    return (
        <ModalWrapper
            type="editTodo"
            opener={
                <Card className="relative">
                    <div>{todo.title}</div>

                    <Button
                        variant="secondary"
                        icon="trash"
                        onClick={() => handleDelete(todo.id)}
                        className="absolute top-2 right-2"
                    />
                </Card>
            }
            todo={todo}
        />
    );
};
