import Navbar from './Navbar';
import Home from './Home';
import CreateChallenge from './CreateChallenge/CreateChallenge';
import { HackathonProvider } from '../contexts/HackathonContext';
import HackathonPage from './Hackathon/HackathonPage';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'


const AppLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};


const App = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/create-challenge",
                    element: <CreateChallenge />
                },
                {
                    path: "/create-challenge/:hackathonId",
                    element: <CreateChallenge />
                },
                {
                    path: "/hackathon/:hackathonId",
                    element: <HackathonPage />
                },
                {
                    // Fallback Route -> Always redirects to root route
                    path: "*",
                    element: <Navigate to={"/"} />
                }
            ]
        },
    ]);

    return (
        <HackathonProvider>
            <RouterProvider router={appRouter} />
        </HackathonProvider>
    );
}

export default App;