import { useAuth } from '../../hooks/useAuth';

const Signup = () => {
    const { handleSignup, email, setEmail, password, setPassword } = useAuth();

    return (
        <div>
            <form onSubmit={handleSignup}>
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
                <button>Signup</button>
            </form>
        </div>
    );
};

export default Signup;
