import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Favorites from '../Pages/Favorites/Favorites';
import Login from '../Pages/Login/Login';

const myCreatedRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('phones.json'),
			},
			{
				path: '/favorites',
				element: <Favorites />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
]);

export default myCreatedRouter;