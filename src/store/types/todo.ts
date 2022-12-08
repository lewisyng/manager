export type Todo = {
  id: string;
  created_at: string;
  label: string;
  user_id: string;
  title: string;
  description: string;
  column: number;
};

export type Todos = Todo[];

export type TodoSlice = {
    todos: Todos
}