import Placement from "../models/pGraphSchema.js";

// GET all data
export const getPGraph = async (req, res) => {
  try {
    const data = await Placement.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

// POST new data
export const createPGraph = async (req, res) => {
  try {
    const { year, postGraduate, underGraduate, total } = req.body;
    const newEntry = new Placement({ year, postGraduate, underGraduate, total });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ error: "Invalid Data" });
  }
};
