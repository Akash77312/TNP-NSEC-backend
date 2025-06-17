import { JobApplication } from "../models/JobApplication.js";
import { User } from "../models/userModel.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'vishalkumar26dbg@gmail.com', // your Gmail address
    pass: 'fjex enut fqfo zfdo'  // app password
  }
});

export const sendEmailToAllUsers = async (job) => {
  const users = await User.find({}, "email"); // Only get email field

  const emailPromises = users.map((user) => {
    return transporter.sendMail({
      from: `"TNP Cell" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: `New Job Posted: ${job.companyName}`,
      html: `
        <h2>${job.companyName} is Hiring!</h2>
        <p><strong>Description:</strong> ${job.description}</p>
        <p><strong>Location:</strong> ${job.location || "N/A"}</p>
        <p><strong>Last Date to Apply:</strong> ${new Date(job.lastDateToApply).toLocaleDateString()}</p>
        <p><strong>CTC:</strong> ${job.ctc || "N/A"}</p>
        <p>Check the placement portal for more details.</p>
      `
    });
  });

  await Promise.all(emailPromises);
};
