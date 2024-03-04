import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import helmet from 'helmet';
import dotenv from 'dotenv';
import session from 'express-session';
import MongoDBStorePackage from 'connect-mongodb-session';
import mongoSanitize from 'express-mongo-sanitize';
import apiRouter from './Router/api.js';
import admin from 'firebase-admin';
import { fileURLToPath } from 'url';
import editRouter from './Router/edit.js';
import portfolioRouter from './Router/portfolio.js';

const credentials = {};

if(process.env.NODE_ENV !== 'production') {
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

admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

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
                `https://res.cloudinary.com/${cloudinary_val}/`,
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
        expires: Date.now() + 1000 * 60 * 60,
        maxAge: 1000 * 60 * 60
    }
}));

app.get("/",  (req, res) => {
    res.send("Hello, Welcome to My backend!!");
})

app.use('/api', apiRouter);
app.use('/edit', editRouter);
app.use('/portfolio', portfolioRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('server is listening on https://source-folio-woad.vercel.app');
});

export default app;