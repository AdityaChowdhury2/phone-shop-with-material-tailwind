import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Icon } from '@iconify/react';
import { Rating } from '@material-tailwind/react';

const PhoneCard = ({ phone }) => {
	return (
		<>
			<div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
				<div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
					<img
						src={phone?.image}
						className="h-full w-full object-cover"
						alt={`image of ${phone?.phone_name}`}
					/>
				</div>
				<div className="p-6">
					<div className="flex items-center justify-between">
						<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
							{phone?.phone_name}
						</p>
						<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
							${phone?.price}
						</p>
					</div>
					<p className="text-xs mt-0 mb-2 ">{phone?.brand_name}</p>

					<Rating value={Math.floor(phone.rating)} readonly />
				</div>
				<div className="p-6 pt-0">
					<Link to={`/phone/${phone?.id}`}>
						<button
							className="flex items-center justify-center gap-2 w-full  select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							type="button"
						>
							{/* <Icon icon="mdi:favourite" /> */}
							See Details
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

PhoneCard.propTypes = {
	phone: PropTypes.object.isRequired,
};

export default PhoneCard;
