import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './App.css';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FaRegSmileWink, FaRegTired } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import Count from './components/Count';

const defaultValues = {
	firstName: '',
	lastName: '',
	attendance: '',
};

const ShowErrors = (props) => {
	return <span className="invalid">{props.message}</span>;
};

const App = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		control,
	} = useForm({ defaultValues });

	const onSubmit = async (data) => {
		reset();
		const form = await axios.post('/api/form', { data });
	};

	return (
		<Fragment>
			<Container fluid>
				<Row>
					<div className="py-5 img">
						<h1>Nos casamos</h1>
						<h4>HUGO & YULI</h4>
					</div>
				</Row>
				<Row className="justify-content-md-center">
					<Count />
				</Row>
				<Row className="justify-content-md-center">
					<Col lg={6} xs={12} className="text-header">
						<p>
							Nos encantaría que formes parte del día más importante de nuestras
							vidas
						</p>
						<p>Apóyanos confirmando tu asistencia</p>
					</Col>
				</Row>
				<Row className="justify-content-md-center">
					<Col lg={6} xs={12}>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<Row className="mb-3 justify-content-md-center">
								<Form.Group as={Col} md="8">
									<Form.Label>Nombre(s)</Form.Label>
									<Form.Control
										type="text"
										placeholder="Ingrese aquí su nombre"
										name="name"
										className="form-control mb-2"
										{...register('firstName', { required: true })}
									/>
									{errors.firstName?.type === 'required' && (
										<ShowErrors message="El nombre es requerido" />
									)}
								</Form.Group>
							</Row>
							<Row className="mb-3 justify-content-md-center">
								<Form.Group as={Col} md="8">
									<Form.Label>Apellidos</Form.Label>
									<Form.Control
										type="text"
										placeholder="Ingrese aquí sus apellidos"
										name="lastname"
										className="form-control mb-2"
										{...register('lastName', { required: true })}
									/>
									{errors.lastName?.type === 'required' && (
										<ShowErrors message="El apellido es requerido" />
									)}
								</Form.Group>
							</Row>
							<Row className="mb-3 justify-content-md-center">
								<Form.Group as={Col} md="8">
									<Controller
										name="attendance"
										control={control}
										rules={{ required: true }}
										render={({ field }) => (
											<RadioGroup aria-label="gender" {...field}>
												<Row className="mb-3 justify-content-md-center">
													<Col md={6}>
														<FormControlLabel
															value="si"
															control={<Radio />}
															label={
																<IconContext.Provider
																	value={{
																		color: 'green',
																		size: '24px',
																	}}>
																	<div>
																		Si asistiré
																		<FaRegSmileWink />
																	</div>
																</IconContext.Provider>
															}
														/>
													</Col>
													<Col md={6}>
														<FormControlLabel
															value="no"
															control={<Radio />}
															label={
																<IconContext.Provider
																	value={{
																		color: 'red',
																		size: '24px',
																	}}>
																	<div>
																		No asistiré
																		<FaRegTired />
																	</div>
																</IconContext.Provider>
															}
														/>
													</Col>
												</Row>
												{errors.attendance?.type === 'required' && (
													<ShowErrors message="La confirmación es requerida" />
												)}
											</RadioGroup>
										)}
									/>
								</Form.Group>
							</Row>
							<Row className="mb-3 justify-content-md-center">
								<Form.Group as={Col} md="8">
									<Button type="submit">CONFIRMAR</Button>
								</Form.Group>
							</Row>
						</Form>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default App;
