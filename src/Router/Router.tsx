import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Signup from '../components/Auth/Signup/Signup';
import Layout from '../Layout/Layout';
import Login from '../components/Auth/Login/Login';
import { ProfileSettings } from '../components/ProfileSettings/ProfileSettings';
import loaders from '../loaders/loader';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/store';
import { loadPage } from '../store/slices/general';

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

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadPage({}));
    }, []);

    return <RouterProvider router={router} />;
};

export default Router;
