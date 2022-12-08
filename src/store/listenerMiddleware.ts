import { loadPage } from './slices/general';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { useGetAllTodosOfUserQuery } from './api/todosApi';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: loadPage,
    effect: async () => {
        console.log('load');

        // const data = useGetAllTodosOfUserQuery();

        // console.log("data", data)
    },
});

export default listenerMiddleware;
