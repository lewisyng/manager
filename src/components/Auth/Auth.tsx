import Login from './Login/Login';
import Signup from './Signup/Signup';

export default function Auth() {
    return (
        <div className="relative top-20">
            <Login />
            <Signup />
        </div>
    );
}
