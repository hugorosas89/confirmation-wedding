import React from 'react';
import Clock from './Clock';

import Col from 'react-bootstrap/Col';

const Count = () => {
	let deadline = 'January, 14, 2022';

	return (
		<Col md={12} lg={12} xs={12}>
			<div className="my-4 count">
				<Clock deadline={deadline} />
			</div>
		</Col>
	);
};

export default Count;
