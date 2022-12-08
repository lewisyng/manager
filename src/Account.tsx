import { useFetchInitialData } from './hooks/useFetchInitialData';
import Dashboard from './components/Dashboard/Dashboard';

const Account = () => {
  useFetchInitialData();

  return <Dashboard />;
};

export default Account;
