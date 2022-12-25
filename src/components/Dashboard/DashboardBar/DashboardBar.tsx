import { CreateColumnModal } from "@/components/CreateColumnModal"
import { CreateTodoModal } from "@/components/CreateTodoModal"

export const DashboardBar = () => {
    return (
        <div className="fixed top-10 w-full z-10 px-8 bg-slate-300">
            <div className="flex items-center gap-2">
                <CreateColumnModal />
            </div>
        </div>
    )
}
