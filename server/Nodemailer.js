const nodemailer = require("nodemailer");

const createMailTransporter = () => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_ADRESS,
      pass: process.env.EMAI_PASSWORD,
    },
  });
  return transporter;
};

const sendEmail = (contactForm) => {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: "godabrelidze@hotmail.com",
    to: "godabreli@gmail.com",
    subject: "Kunden Anfrage",
    replyTo: contactForm.email,
    html: `<h4>Eine Anfrage von: ${contactForm.name}</h4>
           <h4>E-Mail: ${contactForm.email}</h4>
           <b>${contactForm.message}</b>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent");
    }
  });
};

module.exports = { sendEmail };
