import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userSelectors from '../store/selectors/user';
import { setTodos } from '../store/slices/todos';
import { useAppSelector } from '../store/store';
import { supabase } from '../supabaseClient';

export const useTodo = () => {
  const state = useAppSelector((state) => state);
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const user = userSelectors.selectUser(state);

  const handleSubmit = async (e, todo) => {
    e.preventDefault();

    const { label, title, description, columnId } = todo;

    const { data, error } = await supabase
      .from('todo')
      .insert({
        label,
        title,
        description,
        user_id: user?.id,
        column: columnId,
      })
      .select();

    dispatch(setTodos(data));

    if (error) throw error;
  };

  // const deleteTodo = async (todo) => {
  //     try {
  //         const { error } = await supabase
  //             .from('todo')
  //             .delete()
  //             .eq('id', todo.id);

  //         if (error) {
  //             throw error;
  //         }
  //     } catch (err) {
  //         console.log('error', err);
  //     }

  //     const { data, error: err } = await supabase.from('todo').select();

  //     if (err) return err;

  //     setTodos(data);
  // };

  return {
    todo,
    handleSubmit,
    setTodo,
  };
};
