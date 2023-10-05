import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import helmet from 'helmet';
import upload from './cloudinary.js';
import session from 'express-session';
import flash from 'connect-flash';
import MongoDBStorePackage from 'connect-mongodb-session';
import portfolioSchema from '../JoiSchemas.js';
import ExpressError from '../ExpressError.js';
import mongoSanitize from 'express-mongo-sanitize';
import convertJSON from './utilityMethod.js';
import Portfolio from './schema.js';
import admin from 'firebase-admin';

import { fileURLToPath } from 'url';
import { createDeflate } from 'zlib';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); 



app.use(helmet.crossOriginOpenerPolicy());
app.use(helmet.crossOriginResourcePolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.originAgentCluster());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://api.tiles.mapbox.com/",
    "https://api.mapbox.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net/",
];
const styleSrcUrls = [
    "https://kit-free.fontawesome.com/",
    "https://stackpath.bootstrapcdn.com/",
    "https://api.mapbox.com/",
    "https://api.tiles.mapbox.com/",
    "https://fonts.googleapis.com/",
    "https://use.fontawesome.com/",
    "https://cdn.jsdelivr.net/"
];
const connectSrcUrls = [
    "https://api.mapbox.com/",
    "https://a.tiles.mapbox.com/",
    "https://b.tiles.mapbox.com/",
    "https://events.mapbox.com/",
];
const fontSrcUrls = [];
const cloudinary_val = process.env.CLOUDINARY_CLOUD_NAME
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: [],
            connectSrc: ["'self'", ...connectSrcUrls],
            scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
            styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
            workerSrc: ["'self'", "blob:"],
            objectSrc: [],
            imgSrc: [
                "'self'",
                "blob:",
                "data:",
                `https://res.cloudinary.com/${cloudinary_val}/`, //SHOULD MATCH YOUR CLOUDINARY ACCOUNT! 
                "https://images.unsplash.com/",
            ],
            fontSrc: ["'self'", ...fontSrcUrls],
        }
    })
);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authtoken, file");
    next();
  });

const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connection open");
});

const validatePortfolio = (doc) => {    
    const {error} = portfolioSchema.validate(doc);

    if(error) {
        const msg = error.details.map(ele => ele.message).join(',')
        throw new ExpressError(msg, 400);
    }
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(async (req, res, next) => {
    const { authtoken, file } = req.headers;
    if(file) {
        req.file = file;
    }
    if(authtoken) {
        try {
            req.user = await admin.auth().verifyIdToken(authtoken);
        }
        catch (e) {
            return res.sendStatus(400);
        }
    }
    req.user = req.user || {};
    
    next();
});
app.use(mongoSanitize());
const secret = process.env.SECRET;
const MongoDBStore = MongoDBStorePackage(session);
const store = new MongoDBStore({
    uri : dbUrl,
    secret: secret,
    touchAfter: 24 * 60 * 60
});

store.on('error', function(error) {
    console.log("Session Store Error", error);
})
app.use(session({
    store,
    name: 'session',
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        //secure: true,
        expires: Date.now() + 1000 * 60 * 60,
        maxAge: 1000 * 60 * 60
    }
}));

app.use(flash());
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.get("/",  (req, res) => {
    res.send("Hello, Welcome to My backend!!");
})

app.get('/api/getID/:id', async (req, res) => {
    if(req.user && (req.user.user_id === req.params.id)) {
        const id = req.params.id;
        const data = await Portfolio.findOne({"user_id": id});
        if(data) res.status(200).send(data._id);
        else res.status(400).send("Failure");
    } else {
        res.status(400).send("Failure");
    }
})

app.get('/api/portfolio/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const data = await Portfolio.findById(id);
        res.json(data);
    }
    catch(e) {
        res.status(404).send("error");
    }
});

app.post('/edit/profilePicture/:id', upload.single('profilePicture'), async(req, res) => {
    try {
        const id = req.params.id;
        const data = await Portfolio.findById(id);
        if(req.user && data.user_id === req.user.user_id) {
            await cloudinary.uploader.destroy(data.profilePicture.filename)
            const file = req.file;
            const obj = {profilePicture: {url: file.path, filename: file.filename }};
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
});

app.post('/portfolio/edit/:id', async(req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const data = await Portfolio.findById(id);

    if(req.user && data.user_id === req.user.user_id) {
        const resultantObj = convertJSON(updatedData);
        resultantObj.user_id = req.user.user_id;
        validatePortfolio(resultantObj);
        await Portfolio.findByIdAndUpdate(id, resultantObj, {new: true});
        req.flash('success', 'Successfully Updated!');
        res.status(200).send(`Success`);
    } else {
        res.status(400).send("Failure");
    }
})

app.post('/portfolio/delete/:id', async(req, res) => {
    const id = req.params.id;
    const data = await Portfolio.findById(id);
    
    if(req.user && (data.user_id === req.user.user_id)) {
        await cloudinary.uploader.destroy(data.profilePicture.filename)
        await Portfolio.findByIdAndDelete(id);
        res.status(200).send("Success")
    } else {
        res.status(400).send("Failure");
    }
})

app.post('/portfolio/insert', upload.single('profilePicture'), async (req, res) => {
    console.log("getting request")
    if(req.user) {
        console.log("getting request")
        const obj = req.body;
        obj.profilePicture = req.file;
      
        const resultantObj = convertJSON(obj);
       
        resultantObj.user_id = req.user.user_id;
       
        validatePortfolio(resultantObj);
        const mongooseObj = new Portfolio(resultantObj);
        await mongooseObj.save();
        res.status(200).send("Success");
    } else {
        console.log("rejecting portfolio creation")
        await cloudinary.uploader.destroy(req.file.filename);
        res.status(400).send("Failure");
    }
});
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('server is listening on http://localhost:8000');
});


export default app;