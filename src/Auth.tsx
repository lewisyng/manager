import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';

export default function Auth() {
    return (
        <div className="relative top-20">
            <Login />
            <Signup />
        </div>
    );
}
