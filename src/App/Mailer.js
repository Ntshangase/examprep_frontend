const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtp.etheral.email",
	port: 587,
	secure: false,
	auth: {
		user: "",
		pass: "",
	},
});

function sendmessage(reciever,password) {
	transporter.sendMail({
		from: "Fly By Night Team",
		to: `${reciever}`,
		subject: "Certified-Pro Login Credentials",
		html: `<div>Please use the login credentials below to login into you account <h2>"${reciever}" </h2> <br></br> password: <h2>"${password}" </h2> </div> `,
	});
}

sendmessage();