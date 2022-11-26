import './index.css';
import Auth from './Auth';
import Account from './Account';
import { useSession } from './hooks/useSession';

export default function App() {
    const { session } = useSession();

    return !session ? <Auth /> : <Account />;
}
