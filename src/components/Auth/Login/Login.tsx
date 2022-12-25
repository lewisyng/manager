import { useAuth } from '../../../hooks/useAuth';
import { useSession } from '../../../hooks/useSession';
import { redirect } from 'react-router-dom';

const Login = () => {
    const { email, password, setEmail, setPassword, handleLogin } = useAuth();
    const { isLoggedIn } = useSession();

    console.log('isLoggedIn', isLoggedIn);

    if (isLoggedIn) {
        redirect('/');
    }

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input
                        id="email"
                        className="inputField"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
