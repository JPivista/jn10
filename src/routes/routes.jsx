import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound';
import Service from '../pages/ServicePage/Service';
import Portfolio from '../pages/Portfolio/Portfolio'


function AppRoutes() {
    let routes = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/services", element: <Service /> },
                { path: "/portfolio", element: <Portfolio /> },
                // Catch-all route for non-existing paths
                { path: "*", element: <NotFound /> }
            ]
        }
    ]);

    return routes;
}

export default AppRoutes;
