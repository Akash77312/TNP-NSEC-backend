import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
  adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // or "Student" depending on your setup
      required: true,
    },
  companyName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Open", "Closed"],
    default: "Open",
  },
  lastDateToApply: {
    type: Date,
    required: true,
  },
  totalOpenings: {
    type: Number,
    required: true,
  },
  eligibility: {
    cgpa: Number,
    backlogsAllowed: Boolean,
    branchesAllowed: [String]
  },
  link: {
    type: String,
    required: true,
  },
  education: {
    tenth: String,
    twelfth: String,
    graduation: String,
  },
  location: String,
  ctc: String,
  skillsRequired: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);
