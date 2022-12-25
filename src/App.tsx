import './index.css';
import Auth from './components/Auth/Auth';
import Account from './components/Account/Account';
import { useSession } from './hooks/useSession';

export default function App() {
    const { session } = useSession();

    return !session ? <Auth /> : <Account />;
}
