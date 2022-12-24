import Columns from '../../Columns/Columns';
import CreateColumnModal from '../CreateColumnModal/CreateColumnModal';
import CreateTodoModal from '../CreateTodoModal/CreateTodoModal';

const Dashboard = () => {
    return (
        <div className="px-10 font-bold">
            <div className="flex items-center gap-2">
                <CreateColumnModal />
                <CreateTodoModal />
            </div>

            <div className="overflow-auto w-full">
                <Columns />
            </div>
        </div>
    );
};

export default Dashboard;
