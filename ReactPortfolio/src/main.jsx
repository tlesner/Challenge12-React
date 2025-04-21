import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App';
import About from './pages/About';
import Porfolio from './pages/Portfolio';
// import Error from './pages/Error';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, //it will render the App component at that home page
        // errorElement: <Error />, //if an error, it will render the Error component, like a 404 page
        children: [
            //array of objects containing the diff routes
            {
                index: true,
                element: <About />,
            },
            {
                path: '/portfolio',
                element: <Porfolio />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/resume',
                element: <Resume />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);