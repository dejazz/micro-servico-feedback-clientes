import { MailAdapter, SendMailData } from "./mail-adapter";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "51cb41b2239c92",
      pass: "5471108161aba0",
    },
  })

export class NodemailerMailAdapter implements MailAdapter{
async sendMail({subject, body}: SendMailData){

    await transport.sendMail({
        from: "Equipe feedget <oi@feedget.com>",
        to: "Gabriel <gabrielmunizsch@gmail.com>",
        subject,
        html: body,
      });
}
}