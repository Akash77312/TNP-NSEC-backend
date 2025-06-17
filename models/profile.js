import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // or "Student" depending on your setup
    required: true,
    unique: true
  },

  universityRoll: {
    type: String,
    required: true,
    unique: true
  },

  collegeName: {
    type: String,
    required: true
  },

  branch: {
    type: String,
    required: true
  },

  course: {
    type: String,
    enum: ["B.Tech", "M.Tech", "MCA", "MBA"],
    required: true
  },

  graduationYear: {
    type: Number,
    required: true
  },

  dob: {
    type: Date
  },

  phone: {
    type: String,
    required: true
  },

  address: {
    type: String
  },

  skills: {
    type: [String],
    default: []
  },

  academic: {
    tenthPercentage: Number,
    twelfthPercentage: Number,
    diplomaPercentage: Number,
    cgpa: Number,
    backlogs: Number
  },

  resumeLink: {
    type: String
  },

  achievements: {
    type: [String],
    default: []
  },

  placementStatus: {
    type: String,
    enum: ["Not Applied", "Applied", "Placed"],
    default: "Not Applied"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Profile = mongoose.model("Profile", profileSchema);
