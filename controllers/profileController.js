import { Profile } from "../models/profile.js";

// Create or Update Profile
export const upsertProfile = async (req, res) => {
  try {
    const { studentId } = req.params; // from route
    const profileData = req.body;

    const profile = await Profile.findOneAndUpdate(
      { student: studentId },
      { ...profileData, student: studentId },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({ message: "Profile saved successfully", profile });
  } catch (err) {
    console.error("Profile save error:", err);
    res.status(500).json({ message: "Error saving profile" });
  }
};

// Get Profile by student ID
export const getProfileByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const profile = await Profile.findOne({ student: studentId });

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(profile);
  } catch (err) {
    console.error("Profile fetch error:", err);
    res.status(500).json({ message: "Error fetching profile" });
  }
};

// Delete Profile
export const deleteProfile = async (req, res) => {
  try {
    const { studentId } = req.params;

    const deleted = await Profile.findOneAndDelete({ student: studentId });
    if (!deleted) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Error deleting profile" });
  }
};
