import { Injectable } from "@nestjs/common";
import * as dotenv from "dotenv";
import * as SMTPTransport from "nodemailer/lib/smtp-transport";
import { createTransport, Transporter } from "nodemailer";
dotenv.config();

@Injectable()
export class MailService {
  protected transport: { port: number; auth: { pass: string; user: string }; host: string; secure: boolean };
  protected transporter: Transporter<SMTPTransport.SentMessageInfo>;
  constructor() {
   this.transport = {
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      }
    };
   this.transporter = createTransport(this.transport);
  }

  async sendActivationLink (to: string, link: string)  {
    await this.transporter.sendMail({
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
    });
  }
}