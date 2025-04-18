import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { FaRegSmileWink, FaRegTired } from 'react-icons/fa';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
	EffectCube,
	Navigation,
	Pagination,
	Autoplay,
} from 'swiper';
import { IconContext } from 'react-icons';

import mainImage from './assets/Yuli-Hugo.jpg';
import image07 from './assets/img07.jpg';
import image08 from './assets/img08.jpg';
import image09 from './assets/img09.jpg';
import image10 from './assets/img10.jpg';
import image11 from './assets/img11.jpg';
import image12 from './assets/img12.jpg';

import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Count from './components/Count';
import swal from 'sweetalert';
import './App.css';

SwiperCore.use([EffectCube, Pagination, Navigation, Autoplay]);

const defaultValues = {
	firstName: '',
	numPerson: '',
	attendance: '',
};

const ShowErrors = (props) => {
	return <p className="invalid">{props.message}</p>;
};

const App = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		control,
	} = useForm({ defaultValues });

	const showSuccess = (data) => {
		const { attendance } = data;
		let isGoing = '';
		if (attendance === 'si') {
			isGoing = 'Gracias por acompañarnos y ser parte de esta nueva etapa.';
		} else {
			isGoing = 'Es una pena que no puedas acompañarnos, nos harás falta.';
		}
		swal({
			title: 'Recibimos tus datos',
			text: isGoing,
			icon: 'success',
			button: 'Aceptar',
		});
	};

	const showError = (error) => {
		if (error) {
			swal({
				title: 'Hubo un error al enviar los datos',
				text: 'Por favor intentelo de nuevo',
				icon: 'error',
				button: 'Aceptar',
			});
		}
	};

	const onSubmit = (data) => {
		reset();
		emailjs
			.send(
				'default_service',
				'template_f4ezpz8',
				data,
				'user_32QFsGYer0Y8UH835VGAE'
			)
			.then(
				(result) => {
					showSuccess(data);
					console.log('SUCCESS', result.status, result.text);
				},
				(error) => {
					showError(error);
					console.log('FAILED', error);
				}
			);
	};

	return (
		<Fragment>
			<Container fluid>
				<Row>
					<div className="main-container-img">
						<img
							src={mainImage}
							alt="Si no se visualiza la imagen, abrir en navegador Chrome"
						/>
						<div className="div-content-img">
							<h1>Nos casamos</h1>
							<h4>HUGO & YULI</h4>
						</div>
					</div>
				</Row>
				<Row className="mt-4">
					<Col lg={6} md={6} xs={12} className="invited">
						<h2>Estás invitado!</h2>
						{/* <h2>Estás invitado!</h2> */}
						<p>Queremos que seas parte de este momento tan especial</p>
					</Col>
					<Col lg={6} md={6} xs={12}>
						<Count />
					</Col>
					<Col lg={12} md={12} xs={12}>
						<div className="img02-background"></div>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col lg={6} md={6} xs={12} className="text-ceremony">
						<div className="ceremony"></div>
						<div className="my-1 title-ceremony">CEREMONIA</div>
						<span>Salón Boutique El Caracol</span>
						<p className="my-1 mb-4">La ceremonia será el</p>
						<Row className="justify-content-md-center">
							<Col className="pr-0" md={4} xs={6}>
								<h3>14 ENE</h3>
							</Col>
							<Col md={4} xs={6}>
								<h3>
									6:00 <span className="pm">P.M.</span>
								</h3>
							</Col>
						</Row>
						<p className="my-4 place-address">
							Av. Perif. Pte. Manuel Gómez Morin 2300, Granja, 45010 Zapopan,
							Jal.
						</p>
					</Col>
					<div className="mb-2 img03-background"></div>
					<Col lg={6} md={6} xs={12} className="text-reception">
						<div className="reception"></div>
						<div className="my-1 title-celebration">CELEBRACIÓN</div>
						<p className="my-1 mb-4">
							La celebración se llevará acabo en el mismo lugar
						</p>
						<Row className="justify-content-md-center">
							<Col className="pr-0" md={4} xs={6}>
								<h3>14 ENE</h3>
							</Col>
							<Col md={4} xs={6}>
								<h3>
									7:00 <span className="pm">P.M.</span>
								</h3>
							</Col>
						</Row>
					</Col>
					<div className="mt-3 img03-background"></div>
					<Col lg={6} md={6} xs={12} className="text-dresscode my-3">
						<div className="dresscode"></div>
						<div className="my-1 title-dresscode">CÓDIGO DE VESTIMENTA</div>
						<span>
							Formal<br></br> No verde, No blanco<br></br> En medida de lo
							posible: NO NIÑOS
						</span>
					</Col>
					<Col lg={6} md={6} xs={12} className="ubication-btn mt-3">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.google.com/maps/place/Sal%C3%B3n+de+Eventos+El+Caracol/@20.6769084,-103.4547653,15z/data=!4m5!3m4!1s0x0:0xd2380cb24e3820fa!8m2!3d20.6769084!4d-103.4547653">
							VER UBICACIÓN
						</a>
					</Col>
				</Row>
				<Row className="my-3 section-us justify-content-md-center">
					<Col lg={12} md={12} xs={12} className="text-us">
						<div className="my-3 mb-4 title-us">NOSOTROS</div>
						<Row className="justify-content-xs-center mb-3">
							<Col md={12} xs={12} className="mb-3">
								<Swiper
									effect={'cube'}
									grabCursor={true}
									cubeEffect={{
										shadow: true,
										slideShadows: true,
										shadowOffset: 20,
										shadowScale: 0.94,
										loop: true,
									}}
									autoplay={{
										delay: 2500,
										disableOnInteraction: false,
									}}
									pagination={{
										clickable: true,
									}}
									className="mySwiper">
									<SwiperSlide>
										<img src={image07} alt="us" />
									</SwiperSlide>
									<SwiperSlide>
										<img src={image08} alt="us" />
									</SwiperSlide>
									<SwiperSlide>
										<img src={image09} alt="us" />
									</SwiperSlide>
									<SwiperSlide>
										<img src={image10} alt="us" />
									</SwiperSlide>
									<SwiperSlide>
										<img src={image11} alt="us" />
									</SwiperSlide>
									<SwiperSlide>
										<img src={image12} alt="us" />
									</SwiperSlide>
								</Swiper>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className=" justify-content-md-center">
					<Col lg={6} md={6} xs={12} className="text-gift my-3">
						<div className="gift"></div>
						<div className="my-1 title-gift">REGALOS</div>
						<p className="my-1 mb-4">
							Sin ti esto no sería igual. <br></br>Gracias por acompañarnos en
							el inicio de esta nueva etapa en nuestras vidas. El regalo es
							opcional, la asistencia obligatoria. Pero si quieres tener un
							detalle con nosotros, suma kilometros a nuestro viaje.
						</p>
						<Col lg={12} md={12} xs={12} className="btn-gift mb-3">
							<Accordion>
								<Accordion.Item eventKey="0">
									<Accordion.Header>VER CUENTA BANCARIA</Accordion.Header>
									<Accordion.Body>
										<p>
											<span>Banco: </span>BBVA
										</p>
										<p>
											<span>Cuenta: </span>158 077 0854
										</p>
										<p>
											<span>Tarjeta: </span>4152 3136 3775 2143
										</p>
										<p>
											<span>Nombre: </span>Yuliana Casillas
										</p>
										<p>
											<span>Concepto: </span>Regalo de Bodas
										</p>
										<p className="mt-4">¡Muchas Gracias!</p>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>
						<p>
							En el salón encontrarás sobres y una urna por si prefieres
							hacernos un presente en efectivo.
						</p>
					</Col>
				</Row>
				<div className="img03-background"></div>
				<Row className="justify-content-md-center">
					<Col lg={6} xs={12} className="text-header">
						<h2>
							Nos encantaría que formes parte del día más importante de nuestras
							vidas.
						</h2>
						<span>
							Apóyanos confirmando tu asistencia, es de suma importancia
						</span>
					</Col>
				</Row>
				<Row className="justify-content-md-center mt-5">
					<Col lg={6} xs={12}>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<Row className="mb-3 justify-content-md-center">
								<Form.Group as={Col} md="8">
									<Form.Label>Nombre y apellidos:</Form.Label>
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
								<Col lg={8} md={8} xs={12}>
									<p>
										En caso de confirmar a nombre de tu familia, ingresa el
										número de personas por las que confirmas.
									</p>
								</Col>
								<Form.Group as={Col} md="8">
									<Form.Label>Número de personas:</Form.Label>
									<Form.Control
										type="number"
										name="numperson"
										placeholder="Escribe el número de personas aquí"
										min="0"
										max="5"
										className="form-control mb-2"
										{...register('numPerson', { required: true })}
									/>
									{errors.numPerson?.type === 'required' && (
										<ShowErrors message="El número es requerido" />
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
												<Row className="justify-content-md-center">
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
								<Form.Group as={Col} md="4">
									<Button type="submit">CONFIRMAR</Button>
								</Form.Group>
							</Row>
						</Form>
					</Col>
				</Row>
				<Row className="justify-content-md-center mt-4">
					<Col lg={6} xs={12} className="text-header">
						<h2>Te esperamos</h2>
						<h4>Hugo y Yuli</h4>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default App;
