import 'dotenv/config';
import nodemailer from 'nodemailer';

async function sendMailTest(receivers, subject: string, html: string) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MAIL_PASSWORD,
        },
    });
    const receiversEmail = receivers.join(', ');

    const mailOptions = {
        from: process.env.MAIL_ID,
        to: receiversEmail,
        subject,
        html,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
}
export { sendMailTest };
