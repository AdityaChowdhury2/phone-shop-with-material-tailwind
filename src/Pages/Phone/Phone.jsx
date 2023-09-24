import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import PhoneCard from '../../components/Phones/PhoneCard';
import { Oval } from 'react-loader-spinner';

const Phone = () => {
	const [phone, setPhone] = useState(null);
	const { id } = useParams();
	const phones = useLoaderData();
	// console.log(phones);
	// console.log(params);
	useEffect(() => {
		setPhone(phones.find(phone => id == phone.id));
	}, [id, phones]);

	return (
		<div className="flex items-center justify-center h-[calc(100vh-80px)]">
			{phone ? <PhoneCard phone={phone} /> : <Oval />}
		</div>
	);
};

export default Phone;
