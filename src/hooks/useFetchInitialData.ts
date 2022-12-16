import { useGetAllColumnsQuery } from "../store/api/columnsApi";
import { useGetAllTodosOfUserQuery } from "../store/api/todosApi";
import { useGetUserQuery } from "../store/api/userApi";
import { setColumns } from "../store/slices/columns";
import { setTodos } from "../store/slices/todos";
import { setUser } from "../store/slices/user";
import { useAppDispatch } from "../store/store";

export const useFetchInitialData = () => {
    const { data: columns } = useGetAllColumnsQuery(undefined, {
        refetchOnMountOrArgChange: true
    });

    const { data: todos } = useGetAllTodosOfUserQuery(undefined, {
        refetchOnMountOrArgChange: true
    })

    const {data: user} = useGetUserQuery(undefined, {
        refetchOnMountOrArgChange: true
    })

    const dispatch = useAppDispatch();

    dispatch(setColumns(columns))
    console.log("ada")
    dispatch(setTodos(todos))
    console.log("ada")
    dispatch(setUser(user?.data.user))
}