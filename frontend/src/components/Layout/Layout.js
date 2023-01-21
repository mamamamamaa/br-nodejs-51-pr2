import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
    return (
        <div>
            <ToastContainer />
            <AppBar />
            <div>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};