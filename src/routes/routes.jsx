import React from 'react';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound';
import Service from '../pages/ServicePage/Service';
import AboutJ10 from '../pages/AboutJ10/AboutJ10'
import Careers from '../pages/Careers/Careers';
import JobDetails from '../LandingPage/JobDetails/JobDetails';
import Contactus from '../pages/Contactus/Contactus';
import BusinessManagement from '../pages/BusinessManagement/BusinessManagement';
import Portfolio from '../pages/Portfolio/Portfolio'


function AppRoutes() {
    let routes = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/service", element: <Service /> },
                { path: "/about-j10", element: <AboutJ10 /> },
                { path: "/business-management", element: <BusinessManagement /> },
                { path: "/careers", element: <Careers /> },
                { path: "/portfolio", element: <Portfolio /> },
                { path: "/job-details/:slug", element: <JobDetails /> },
                { path: "/contact-us", element: <Contactus /> },
                // Catch-all route for non-existing paths
                { path: "*", element: <NotFound /> }
            ]
        }
    ]);

    return routes;
}

export default AppRoutes;
