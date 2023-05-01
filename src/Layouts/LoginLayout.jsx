import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Toaster />
        </div>
    );
};

export default LoginLayout;