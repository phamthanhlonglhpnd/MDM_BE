import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';
import connectDB from './config/connectDB';
import cookieParser from 'cookie-parser';

let cors = require('cors');
const corsConfig = {
    credentials: true,
    origin: true,
};
require("dotenv").config();
let app = express();

app.use(cookieParser());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type', 'x-access-token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // set cookie
    res.setHeader('Set-Cookie', 'visited=true; Max-Age=3000; HttpOnly, Secure');

    // Pass to next layer of middleware
    next();
});
app.use(cors(corsConfig));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use("/v1/api", routes);
app.use((err, req, res, next) => {
    console.log("___________err", err);
    errorHandler(res, err);
});
connectDB();
let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log(port);
})
