const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodeMailer = require('nodemailer')
// require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

// app.use( express.static( `${__dirname}/../build` ) );

app.post('/api/send-email', function (req, res) {
  console.log('hit!')

  console.log("req.body", req.body )
  let transporter = nodeMailer.createTransport({
      service: 'gmail',
      secure: false,
      port: 3535,
      auth: {
          user: 'ryan.stupey@gmail.com',
          pass: 'History2730'
      },
      tls: {
          rejectUnauthorized: false,

      }
  });

  let mailOptions = {
      from: req.body.from, // sender address
      to: 'ryan.stupey@gmail.com', // list of receivers
      subject: req.body.subject, // Subject line
      html: `<h2>from:${req.body.name}</h2><br/><h2> Email: ${req.body.from}</h2><b>${req.body.message}</b>` // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      });
  });



const port = 3535;

// const path = require('path')
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// })

app.listen(port, () => {console.log(`app is listening on port ${port}`)})