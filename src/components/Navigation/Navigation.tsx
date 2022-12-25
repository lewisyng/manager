import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';
import { useSession } from '../../hooks/useSession';
import { useProfile } from '../../hooks/useProfile';
import clsx from 'clsx';

const Navigation = () => {
    const { session } = useSession();
    const { signOut } = useProfile(session);

    return (
        <div
            className={clsx(
                styles.navigation,
                'bg-slate-100 fixed top-[0] z-10 w-full'
            )}
        >
            <Link to="profile-settings">Profile Settings</Link>

            {session ? (
                <button
                    type="button"
                    className="button block"
                    onClick={signOut}
                >
                    Sign Out
                </button>
            ) : (
                <div>Sign In</div>
            )}
        </div>
    );
};

export default Navigation;
