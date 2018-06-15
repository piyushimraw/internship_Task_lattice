const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'chu4zcyqqc2jyldl@ethereal.email',
        pass: 'WNvJrjTSH57km9E71B'
    }
});

module.exports = transporter;
