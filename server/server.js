const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'itexigent@gmail.com',
    pass: 'odhzlfydvwdsnqfy',
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;
  const email = req.body.email;
  const country = req.body.country;
  const aliyah = req.body.aliyah;
  const ami = req.body.ami;
  const tep = req.body.tep;
  const pad = req.body.pad;
  const ac = req.body.ac;
  const hp = req.body.hp;
  const mg = req.body.mg;
  const ins = req.body.ins;
  const pm = req.body.pm;
  const pb = req.body.pb;

  const message = req.body.message;
  const mail = {
    from: `Exigtent Capital Finance`,
    to: `${email}`,
    subject: 'Contact Form Message',
    html: `<p>First Name: ${firstName}</p><p>Last Name: ${lastName}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Country: ${country}</p><p>Target Aliyah Date: ${aliyah}</p><p>Asset Management: <span style="font-weight: bold">${ami}</span></p><p>Tax and Estate Planning: <span style="font-weight: bold">${tep}</span></p><p>Philanthropic Advicsory and Due Diligence: <span style="font-weight: bold">${pad}</span></p><p>Aliyah Concierge: <span style="font-weight: bold">${ac}</span></p><p>Home purchase : <span style="font-weight: bold">${hp}</span></p><p>Mortgage : <span style="font-weight: bold">${mg}</span></p><p>Insurance : <span style="font-weight: bold">${ins}</span></p><p>Property Management : <span style="font-weight: bold">${pm}</span></p><p>Private Banking : <span style="font-weight: bold">${pb}</span></p>`
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'Message Sent' });
    }
  });
});
