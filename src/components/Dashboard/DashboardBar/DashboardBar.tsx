import { ModalWrapper } from '@/components/Modal/ModalWrapper';
import { Button } from '@/components/ui';

export const DashboardBar = () => {
    return (
        <div className="fixed top-10 w-full z-10 px-8 bg-slate-300">
            <div className="flex items-center gap-2">
                <ModalWrapper
                    opener={<Button variant="tertiary">New column</Button>}
                    type="createColumn"
                />
            </div>
        </div>
    );
};
