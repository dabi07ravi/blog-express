const express = require('express');
const app = express();
const blogRouter = require('./route/blog.route');
const contactRouter = require('./route/contact.route');
const emailRouter = require('./route/email.route');
const docRouter = require('./route/doc.route');
const cors = require('cors');
require('dotenv').config();
const upload = require("express-fileupload");
const AWS = require("aws-sdk");
const multer = require('multer');


// database connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/nest');
const db = mongoose.connection;

db.on("err", (err) => {
    console.log("db is not connected");
})

db.on("connected", (connected) => {
    
    console.log("db is connected");
})



//middleware
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
  limit: "50mb"
}));
app.use(express.static('./test/'));
app.use(upload());
app.use(express.json());

// s3 config
const  AWS_END_POINT = new AWS.Endpoint(process.env.AWS_END_POINT);
const s3 = new AWS.S3({
    endpoint: AWS_END_POINT,
    AWS_ACCESS_KEY_ID : process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY : process.env.AWS_SECRET_ACCESS_KEY,
  });

// actual function for uploading file
async function uploadFile(file) {
    const params = {
        Bucket: process.env.AWS_BUCKET, // bucket you want to upload to
        Key: `test/scanskill-${Date.now()}-${file.name}`, // put all image to fileupload folder with name scanskill-${Date.now()}${file.name}`
        Body: file.data,
        ACL: "public-read",

    };
    const data = await s3.upload(params).promise();
    return data.Location; // returns the url location
}

app.post("/upload", async (req, res) => {

    const fileLocation = await uploadFile(req.files.file);


    return res.status(200).json({ location: fileLocation });
});







// api

app.use("/blog", blogRouter);
app.use("/contact", contactRouter);
app.use("/email", emailRouter);
app.use("/doc", docRouter);







// server
app.listen(4001, () => {
    console.log("server is running on 4001");
})