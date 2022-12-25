import { useProfile } from '../../hooks/useProfile';
import { useContext } from 'react';
import SessionContext from '../../context/session/sessionContext';

export const ProfileSettings = () => {
    const { session } = useContext(SessionContext);
    const {
        username,
        website,
        avatarUrl,
        getProfile,
        setAvatarUrl,
        setUsername,
        setWebsite,
        updateProfile,
        signOut,
    } = useProfile(session);

    return (
        <div>
            <form onSubmit={updateProfile} className="form-widget">
                <div>Email: {session && session.user.email}</div>
                <div>
                    <label htmlFor="username">Name</label>
                    <input
                        id="username"
                        type="text"
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="website">Website</label>
                    <input
                        id="website"
                        type="url"
                        value={website || ''}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div>
                    <button>Update profile</button>
                </div>
            </form>
        </div>
    );
};
