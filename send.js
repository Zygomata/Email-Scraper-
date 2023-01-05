const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'arjunigsh@outlook.com',
    pass: '*****'
  }
})

const options = {
  from: 'arjunigsh@outlook.com',
  to: '',
  subject: '',
  text: '',
}

tranporter.sendMail(options, function(err, info){
if(err) {console.log(err);
return
}
  console.log("Sent: " + info.response);
}) 