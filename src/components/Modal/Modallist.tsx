import { CreateTodoModal } from '@/components/CreateTodoModal';
import { FunctionComponent } from 'react';

type ModalListKey = 'createTodo';

export const Modallist: Record<ModalListKey, FunctionComponent<any>> = {
    createTodo: CreateTodoModal,
};
