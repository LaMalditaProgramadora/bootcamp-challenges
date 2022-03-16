import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (to, password) => {
  const msg = {
    to: to,
    from: "lamalditaprogramadora@gmail.com",
    subject: "Recuperación de contraseña",
    text: "Recuperación de contraseña",
    html: `<strong>Tu nueva contraseña es ${password}</strong>`,
  };

  const result = sgMail
    .send(msg)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
  return result;
};
