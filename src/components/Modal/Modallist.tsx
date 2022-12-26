import { CreateTodoModal } from '@/components/CreateTodoModal';
import { EditTodoModal } from '@/components/Modal/EditTodo';
import { FunctionComponent } from 'react';

type ModalListKey = 'createTodo' | 'editTodo';

export const Modallist: Record<ModalListKey, FunctionComponent<any>> = {
    createTodo: CreateTodoModal,
    editTodo: EditTodoModal,
};
