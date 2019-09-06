const nodeMailer = require('nodemailer');
import smtpTransport from 'nodemailer-smtp-transport';


module.exports = {
    sendMail: async (req, res, next) => {
        try {

            let transporter = nodeMailer.createTransport(smtpTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                auth: {
                    user: 'nika.contact.mail@gmail.com',
                    pass: 'Nikalabs12'
                }
            }));

            let subject;
            let content;
            let html;
            if (req.body.type === 'newBusiness') {
                subject = `NIKA contact form New business`;
                content = `Company name : ${req.body.companyName},  phone number : ${req.body.phone}`;
                html = `${content}<br><br><b>${req.body.text}</b>`;
            } else if (req.body.type === 'opportunity') {
                subject = `NIKA contact form Speaking Opportunity`;
                content = `Company name : ${req.body.companyName},  phone number : ${req.body.phone}`;
                html = `${content}<br><br><b>${req.body.text}</b>`;
            } else if (req.body.type === 'careers') {
                subject = `NIKA contact form Careers`;
                content = `Message from careers form`;
                html = `${content}<br><br><b>${req.body.text}</b>`;
            } else {
                return res.status(200).json({success: false, message: 'Type required !!!'});
            }
            let mailOptions = {
                from: `${req.body.fullName} ${req.body.email}`,
                to: 'hayrapet2013@gmail.com',
                subject: subject,
                html: html
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({success: false});
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
                res.status(200).json({success: true});
            });
        } catch (e) {
            res.status(200).json(e);
        }
    }
};
