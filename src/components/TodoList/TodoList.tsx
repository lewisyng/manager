import { useEffect, useState } from 'react';
import Card from '../../Card/Card';

const TodoList = ({ todos }) => {
    const [_todos, setTodos] = useState<any[]>([]);

    useEffect(() => {
        if (!todos) return;

        setTodos(todos);
    }, [todos]);

    if (_todos) {
        return (
            <div className="py-6 flex flex-col gap-4">
                {_todos.map((todo, idx) => (
                    <div key={idx}>
                        <Card
                            label={
                                <div>
                                    <p>{todo.label}</p>
                                </div>
                            }
                            header={
                                <div>
                                    <p>{todo.title}</p>
                                </div>
                            }
                            body={
                                <div>
                                    <p>{todo.description}</p>
                                </div>
                            }
                        />
                    </div>
                ))}
            </div>
        );
    }

    return null;
};

export default TodoList;
