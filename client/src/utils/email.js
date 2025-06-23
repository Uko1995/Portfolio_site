import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendEmail = async (
  email = "",
  subject = "",
  message = "",
  name = ""
) => {
  //  Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: import.meta.env?.VITE_EMAIL,
      pass: import.meta.env?.VITE_PASSWORD,
    },
  });

  // verify transporter
  transporter.verify((error, info) => {
    if (error) {
      console.error("Error verifying email", error.message, error.stack);
    } else {
      console.log("Email service is ready", info);
    }
  });

  const mailOptions = {
    from: email,
    to: import.meta.env.VITE_EMAIL,
    subject: subject,
    text: message,
    html: (
      <>
        <p>${message}</p>
        <br></br>
        <p>From: ${name}</p>
      </>
    ),
  };

  // send email
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email", error.message, error.stack);
      info.status(500).json({ message: "Failed to send email" });
    } else {
      console.log("Email sent: " + info.response);
      info.json({ message: "Reset email sent" });
    }
  });
};

export default sendEmail;
