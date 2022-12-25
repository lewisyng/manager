import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';

const Layout = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    );
};

export default Layout;
