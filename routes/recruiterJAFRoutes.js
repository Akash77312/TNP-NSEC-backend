import express from 'express';
import  {createJobAnnouncement,getAllJobAnnouncements} from "../controllers/recruiterJAFController.js";


const router = express.Router();

router.post("/job-announcement", createJobAnnouncement);
router.get("/all-recruiter-jaf", getAllJobAnnouncements);

export default  router;
