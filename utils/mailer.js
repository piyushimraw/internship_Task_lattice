var mail = require('./mailConfig');

let mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "", // list of receivers
    subject: 'Get Yourself Survey Filled ✔', // Subject line
    text: 'Please get your survey filled it is important to keep you healthy', // plain text body
    html: '<h3> Get ur Survey filled  </h3> < br/> <a href=#> Survey Form </a>' // html body
};

const sendMails = function(fromAdd, toAdd) {
    mailOptions.from= fromAdd;
    mailOptions.to = toAdd;

    console.log(mailOptions);

    mail.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
}


module.exports = sendMails;
