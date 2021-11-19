import React, { useEffect, useState } from 'react';

const Clock = ({ deadline }) => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const leading0 = (num) => {
		return num < 10 ? '0' + num : num;
	};

	const getTimeUntil = (deadline) => {
		const time = Date.parse(deadline) - Date.parse(new Date());
		if (time < 0) {
			setDays(0);
			setHours(0);
			setMinutes(0);
			setSeconds(0);
		} else {
			setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
			setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
			setMinutes(Math.floor((time / 1000 / 60) % 60));
			setSeconds(Math.floor((time / 1000) % 60));
		}
	};

	useEffect(() => {
		setInterval(() => getTimeUntil(deadline), 1000);

		return () => getTimeUntil(deadline);
	}, [deadline]);

	return (
		<>
			<div className="me-4 clock-days">
				<span>{leading0(days)}</span>
				<p>DIAS</p>
			</div>
			<div className="me-4 clock-hours">
				<span>{leading0(hours)}</span>
				<p>HORAS</p>
			</div>
			<div className="me-4 clock-minutes">
				<span>{leading0(minutes)}</span>
				<p>MINUTOS</p>
			</div>
			<div className="clock-seconds">
				<span>{leading0(seconds)}</span>
				<p>SEGUNDOS</p>
			</div>
		</>
	);
};

export default Clock;
