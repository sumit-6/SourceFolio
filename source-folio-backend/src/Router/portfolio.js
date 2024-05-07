import Portfolio from "../Model/schema.js";
import multer from 'multer';
import express from "express";
import convertJSON from "../Utils/utilityMethod.js";
import cl from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import portfolioSchema from "../../JoiSchemas.js";
import dotenv from "dotenv";
import ExpressError from "../../ExpressError.js"
if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
const validatePortfolio = (doc) => {    
    const {error} = portfolioSchema.validate(doc);

    if(error) {
        const msg = error.details.map(ele => ele.message).join(',')
        throw new ExpressError(msg, 400);
    }
}
const cloudinary = cl.v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

const portfolioRouter = express.Router();

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'SourceFolio',
        allowedFormats: ['jpeg', 'jpg', 'png']
    }
})

const upload = multer({storage});


portfolioRouter.route('/delete/:id').post(async(req, res) => {
    const id = req.params.id;
    const data = await Portfolio.findById(id);
    
    if(req.user && (data.user_id === req.user.user_id)) {
        if(data.profilePicture && data.profilePicture.filename) await cloudinary.uploader.destroy(data.profilePicture.filename)
        await Portfolio.findByIdAndDelete(id);
        res.status(200).send("Success")
    } else {
        res.status(400).send("Failure");
    }
});

portfolioRouter.route('/insert').post(upload.single('profilePicture'), async (req, res) => {
    if(req.user) {
        const obj = req.body;
        obj.profilePicture = req.file;
      
        const resultantObj = convertJSON(obj);
       
        resultantObj.user_id = req.user.user_id;
       
        validatePortfolio(resultantObj);
        const mongooseObj = new Portfolio(resultantObj);
        await mongooseObj.save();
        res.status(200).send("Success");
    } else {
        await cloudinary.uploader.destroy(req.file.filename);
        res.status(400).send("Failure");
    }
});

export default portfolioRouter;