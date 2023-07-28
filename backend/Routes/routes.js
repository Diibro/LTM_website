const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

const multer = require('multer');
const uuidv4 = require('uuid/v4');
const mongoose = require('mongoose');

const transporter1 = nodemailer.createTransport({
     host: "mail.privateemail.com",
     port:465,
     secure: true,
     auth: {
          user: "info@levytradingmotors.co.uk",
          pass: "Info.Levytrading20"
     }
});

const DIR = './Assets/Cars/';


const storage = multer.diskStorage({
     destination:(req, file, cb) => {
          cb(null, DIR);
     },
     filename: (req, file, cb) => {
          const filename = file.originalname.toLowerCase().split(' ').join('-');
          cb(null, uuidv4() + '-' + filename);
     }
});

var upload = multer({
     storage: storage,
     fileFilter: (req, file, cb) => {
          cb(null, true);
     } 
});

let Car = require('../Schemas/Car') ;

router.post('/add-car', upload.single('carImage'), (req, res, next) => {
     const url = req.protocol + '://' + req.get('host');
     const car = new Car({
          name: req.body.name,
          price: req.body.price,
          carImage: url + '/Assets/Cars' + req.file.filename,
          description: req.body.description,
          year: req.body.year
     });

     car.save().then(() => {
          res.status(201).json({
               message: "Car has been added Successfully"
          });
     }).catch(err => {
          console.log(err);
          res.status(500).json({
               error: err
          })
     })
});

router.get('/get-cars', (req, res) => {
     Car.find().then(data => {
          if(data != null ){
               res.status(200).json({
                    message: "Displaying all cars in stock",
                    cars: data
               });
          }else{
               res.status(200).json({
                    message: "No cars found!"
               });
          }
     });
});

let Client = require('../Schemas/Client');

router.post("/add-client-message", (req, res) => {
     const client = new Client({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          message: req.body.message
     });

     const htmlBody = `
          <html>
               <head>
               <style>
               /* Define any custom styles here */
               </style>
               </head>
               <body>
               <h1>New message from Client</h1>
               <p>You have received the following message:</p>
               <blockquote>${req.body.message}</blockquote>
               <b>Client Information:</b>
               <p>Phone: <a href="tel:${req.body.phone}">${req.body.phone}</a></p>
               <p>Email: <a href="mailto:${req.body.email}">${req.body.email}</a></p>

               </body>
          </html>
          `;

          const htmlBody2 = `
          <h1>Levy Trading Motors Ltd</h1>
          <p>Hello ${req.body.name},</p>
          <p>Thank you for contacting us.</p>
          `

     const mailOptions_1 = {
          from: "info@levytradingmotors.co.uk",
          to: "info@levytradingmotors.co.uk",
          subject: `New Message From ${req.body.name}`,
          html: htmlBody
     }

     const mailOptions_2 = {
          from: "info@levytradingmotors.co.uk",
          to: req.body.email,
          subject: "Message received",
          html: htmlBody2
     }

     client.save().then(() => {
               res.status(200).json({
                    message: "Message sent successfully"
               });
               transporter1.sendMail(mailOptions_1, (error, info) =>{
                    if(error){
                         console.log("Error sending email: ", error);
                         res.status(500).json({message: 'Server error'});
                    }else{
                         console.log("Email sent", info.response);
                    }
               });

               transporter1.sendMail(mailOptions_2, (error, info) =>{
                    if(error){
                         console.log("Error sending email: ", error);
                         res.status(500).json({message: 'Server error'});
                    }else{
                         console.log("Email sent", info.response);
                    }
               });

          }).catch(error => {
               res.status(500).json({
                    message: "Error Sending the message. Please try Again."
               })
          });
     
})

module.exports = router;
