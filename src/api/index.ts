import columnApi from '@/api/column';
import todoApi from '@/api/todo';

const api = {
    ...columnApi,
    ...todoApi,
};

export default api;
