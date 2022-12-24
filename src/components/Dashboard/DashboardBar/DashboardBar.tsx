import CreateColumnModal from "../../CreateColumnModal/CreateColumnModal"
import CreateTodoModal from "../../CreateTodoModal/CreateTodoModal"

const DashboardBar = () => {
    return (
        <div className="fixed top-10 w-full z-10 px-8 bg-slate-300">
            <div className="flex items-center gap-2">
                <CreateColumnModal />
                <CreateTodoModal />
            </div>
        </div>
    )
}

export default DashboardBar