import * as SMTPTransport from "nodemailer/lib/smtp-transport";
import {createTransport} from "nodemailer";
import * as dotenv from "dotenv"
dotenv.config()

const transport:SMTPTransport.Options = {
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    }
}

const transporter = createTransport(transport)

const sendActivationMailService = async (to: string, link: string) => {
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: to,
        subject: `Activation account on ${process.env.API_URL}`,
        text: "",
        html: `
            <div>
                <h1>To activation click to link</h1>
                <a href="${link}">${link}</a>
            </div>
        `
    })
}

export {sendActivationMailService}