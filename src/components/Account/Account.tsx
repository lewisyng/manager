import { Dashboard } from '@/components';
import { useFetchInitialData } from '../../hooks/useFetchInitialData';

const Account = () => {
    useFetchInitialData();

    return <Dashboard />;
};

export default Account;
