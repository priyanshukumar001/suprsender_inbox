
import './App.css';
import Nav from './components/Nav.js'
import Home from './components/Home.js';
import { useIdentity } from '../utils/globalVariables.js';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Error from './components/Error.js';
import InboxMain from './components/Inbox_main.js';
import { useEffect } from 'react';


function App() {
    const [id, setId] = useIdentity();
    useEffect(() => {

        const existingValue = localStorage.getItem('id');

        if (existingValue !== null) {
            setId(existingValue);
            // console.log('Existing value:', existingValue);
        } else {
            localStorage.setItem('id', '');
        }
    }, [])

    return (
        <>

            <div className="App">

                <Nav></Nav>
                <Outlet />

            </div>


        </>
    );
}


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/inbox',
                element: <InboxMain />

            }
        ],
        errorElement: <Error />
    }
])
export default appRouter;
