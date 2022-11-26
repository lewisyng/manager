import { useSession } from '../hooks/useSession';
import { redirect } from 'react-router-dom';

const loginLoader = async () => {
    const { isLoggedIn } = useSession();

    if (isLoggedIn) {
        return redirect('/');
    }
};

const loaders = {
    loginLoader,
};

export default loaders;
