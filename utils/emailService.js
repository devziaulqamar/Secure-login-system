import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ Email Transporter Error:", error);
  } else {
    console.log("✅ Email Server is ready to send messages");
  }
});

// Main email sending function
export const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: `"Shahabz" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: subject,
      html: html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully to:", to);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    return { success: false, error: error.message };
  }
};
