import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Header/Banner/Banner';
import Phones from '../../components/Phones/Phones';

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Phone Hub | Home</title>
			</Helmet>
			<Banner />
			<Phones />
		</div>
	);
};

export default Home;
