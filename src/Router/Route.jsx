import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Favorites from '../Pages/Favorites/Favorites';
import Login from '../Pages/Login/Login';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Phone from '../Pages/Phone/Phone';

const myCreatedRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('/phones.json'),
			},
			{
				path: '/favorites',
				element: <Favorites />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/phone/:id',
				element: <Phone />,
				loader: () => fetch('/phones.json'),
			},
		],
	},
]);

export default myCreatedRouter;
