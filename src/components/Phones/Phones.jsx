import { useLoaderData } from 'react-router-dom';
import PhoneCard from './PhoneCard';

const Phones = () => {
	const phones = useLoaderData();
	console.log(phones.length);
	return (
		<div>
			<h1 className="text-2xl font-semibold text-center mt-12 ">
				Our Phones Collection
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{phones?.map(phone => (
					<PhoneCard phone={phone} key={phone.id} />
				))}
			</div>
		</div>
	);
};

export default Phones;
