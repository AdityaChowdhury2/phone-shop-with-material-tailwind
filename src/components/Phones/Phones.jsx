import { useLoaderData } from 'react-router-dom';

const Phones = () => {
	const phones = useLoaderData();
	console.log(phones.length);
	return (
		<div>
			<h1 className="text-2xl font-semibold text-center mt-12 ">
				Our Phones Collection
			</h1>
		</div>
	);
};

export default Phones;
