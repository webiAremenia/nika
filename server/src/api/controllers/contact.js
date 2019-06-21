const nodeMailer = require('nodemailer');
import smtpTransport from  'nodemailer-smtp-transport';


module.exports = {
    sendMail: async (req, res, next) => {
        let transporter = nodeMailer.createTransport(smtpTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: 'nika.contact.mail@gmail.com',
                pass: 'Nikalabs12'
            }
        }));
        let content = `Event ${req.body.eventName} date ${req.body.date}`;
        let html = '';
        let mailOptions = {
            from: `${req.body.fullName} ${req.body.email}`,
            to: 'hayrapet2013@gmail.com',
            subject: 'NIKA contact form',

            html: `${content}<br><br><b>${req.body.text}</b>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).json({success: false});
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.status(200).json({success: true});
        });
    }
};