const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
            <h3>Email enviado desde Confirmación page</h3>
            <ul>
                <li>Nombre(s): ${req.body.data.firstName}</li>
                <li>Apellidos: ${req.body.data.lastName}</li>
                <li>Asistencia: ${req.body.data.attendance}</li>
            </ul>
        `;
		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			auth: {
				user: 'hugorosas88@gmail.com',
				pass: 'hugorosas01121989',
			},
		});

		let mailOptions = {
			from: 'hugorosas88@gmail.com',
			to: 'hugorosas88@gmail.com',
			subject: 'Confirmación de asistencia',
			text: 'prueba',
			html: htmlEmail,
		};

		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				return console.log(err);
			}
			console.log('mensaje enviado: ', info.accepted);
		});
	});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Servidor a la escucha en el puerto ${PORT}`);
});
