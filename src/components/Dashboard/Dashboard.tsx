import { Columns } from "@/components/Columns";
import { DashboardBar } from "@/components/Dashboard/DashboardBar";

export const Dashboard = () => {
    return (
        <div className="font-bold">
            <DashboardBar />

            <div className="overflow-scroll w-full mt-8 h-screen px-8 relative top-20">
                <Columns />
            </div>
        </div>
    );
};
