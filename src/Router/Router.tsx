import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Signup from '../Auth/Signup/Signup';
import Layout from '../Layout/Layout';
import Login from '../Auth/Login/Login';
import { ProfileSettings } from '../ProfileSettings/ProfileSettings';
import loaders from '../loaders/loader';

const Router = () => {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <App />,
                },
                {
                    path: 'signup',
                    element: <Signup />,
                },
                {
                    path: 'login',
                    element: <Login />,
                    loader: loaders.loginLoader,
                },
                {
                    path: 'profile-settings',
                    element: <ProfileSettings />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
