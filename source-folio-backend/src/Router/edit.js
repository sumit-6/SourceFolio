import Portfolio from "../schema.js";
import express from "express";
import multer from 'multer';
import cl from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import convertJSON from "../utilityMethod.js";
import dotenv from "dotenv"
import portfolioSchema from "../../JoiSchemas.js";
import ExpressError from "../../ExpressError.js"
if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
const editRouter = express.Router();

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

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'SourceFolio',
        allowedFormats: ['jpeg', 'jpg', 'png']
    }
})

const upload = multer({storage});

editRouter.route('/profilePicture/:id').post(upload.single('profilePicture'), async(req, res) => {
    try {
        const id = req.params.id;
        const data = await Portfolio.findById(id);
        if(req.user && data.user_id === req.user.user_id) {
            if(data.profilePicture && data.profilePicture.filename) await cloudinary.uploader.destroy(data.profilePicture.filename)
            const file = req.file;
            const obj = {profilePicture: {url: file !== undefined ? file.path : "https://res.cloudinary.com/dk26fyzkl/image/upload/v1707765680/SourceFolio/no-user-image_no8zkv.gif",
                                         filename: file !== undefined ? file.filename : "no-user-image_no8zkvcs" }};
            await Portfolio.findByIdAndUpdate(id, obj);
            res.status(200).send(`Success`);
        }
        else {
            await cloudinary.uploader.destroy(req.file.filename);
            res.status(400).send("Failure");
        }
    } catch(err) {
        console.log(err);
    }
})

editRouter.route('/portfolio/:id').post(async(req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const data = await Portfolio.findById(id);

    if(req.user && data.user_id === req.user.user_id) {
        const resultantObj = convertJSON(updatedData);
        resultantObj.user_id = req.user.user_id;
        validatePortfolio(resultantObj);
        await Portfolio.findByIdAndUpdate(id, resultantObj, {new: true});
        res.status(200).send(`Success`);
    } else {
        res.status(400).send("Failure");
    }
})

export default editRouter;

