import cl from "cloudinary";
import credentials from "./auth";
import multer from "multer";

const cloudinary_val = credentials["cloud_name"];
const cloudinary = cl.v2;
import { CloudinaryStorage } from 'multer-storage-cloudinary';
cloudinary.config({
    cloud_name: credentials["cloud_name"],
    api_key: credentials["api_key"],
    api_secret: credentials["api_secret"]
})
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'SourceFolio',
        allowedFormats: ['jpeg', 'jpg', 'png']
    }
})
const upload = multer({storage});
export default upload