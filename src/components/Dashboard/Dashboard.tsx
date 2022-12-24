import Columns from '../../Columns/Columns';
import DashboardBar from './DashboardBar/DashboardBar';

const Dashboard = () => {
    return (
        <div className="font-bold">
            <DashboardBar />

            <div className="overflow-scroll w-full mt-8 h-screen px-8 relative top-20">
                <Columns />
            </div>
        </div>
    );
};

export default Dashboard;
