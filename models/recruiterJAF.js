import mongoose from "mongoose";

const jobAnnouncementSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  recruiterName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    required: true,
  },
  eligibilityCriteria: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  percentage: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export const JobAnnouncement = mongoose.model("JobAnnouncement", jobAnnouncementSchema);
