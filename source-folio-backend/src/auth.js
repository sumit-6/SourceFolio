import dotenv from "dotenv"
const credentials={};
if (process.env.NODE_ENV!=="production"){
    dotenv.config();
}
credentials['type'] = process.env.TYPE;
credentials['project_id'] = process.env.PROJECT_ID;
credentials['private_key_id'] = process.env.PRIVATE_KEY_ID;
credentials['private_key'] = process.env.PRIVATE_KEY;
credentials['client_email'] = process.env.CLIENT_EMAIL;
credentials['client_id'] = process.env.CLIENT_ID;
credentials['auth_uri'] = process.env.AUTH_URI;
credentials['token_uri'] = process.env.TOKEN_URI;
credentials['auth_provider_x509_cert_url'] = process.env.AUTH_PROVIDER_X509_CERT_URL;
credentials['client_x509_cert_url'] = process.env.CLIENT_X509_CERT_URL;




credentials["cloud_name"]= process.env.CLOUDINARY_CLOUD_NAME;
credentials["api_key"]= process.env.CLOUDINARY_KEY;
credentials["api_secret"]= process.env.CLOUDINARY_SECRET;

export default credentials