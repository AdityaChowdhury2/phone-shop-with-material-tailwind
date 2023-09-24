import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
	return (
		<div>
			<nav className="flex items-center justify-between shadow-xl py-5 px-5">
				<Logo />
				<ul className="flex gap-5">
					<li>
						<NavLink
							to={`/`}
							className={({ isActive, isPending }) =>
								isActive
									? 'text-green-400 underline'
									: isPending
									? 'pending'
									: ''
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={`/favorites`}
							className={({ isActive, isPending }) =>
								isActive
									? 'text-green-400 underline'
									: isPending
									? 'pending'
									: ''
							}
						>
							Favorites
						</NavLink>
					</li>
					<li>
						<NavLink
							to={`/login`}
							className={({ isActive, isPending }) =>
								isActive
									? 'text-green-400 underline'
									: isPending
									? 'pending'
									: ''
							}
						>
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
