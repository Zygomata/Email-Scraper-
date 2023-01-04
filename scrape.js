const request = require("request");
const cheerio = require("cheerio");

const nodemailer = require('nodemailer');
var emailValidator = require('email-validator');


let aInitial = []
let aFinal = []

let bInitial = []
let bFinal = []

let c = []


let emailBegining = ['social', 'marketing','contact', 'support', 'info', 
 'sales', 'enquiries', 'help', 'business', 'service',
'career', 'community', 'opportunities','media','team']


const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'arjunigsh@outlook.com',
    pass: '*****' //not willing to show password
  }
});




// modern fellows website scraper
  /* request("https://www.modernfellows.com/mens-fashion-startup-brands/", (error, response, html) => {
  if(!error && response.statusCode === 200){
    
    
    const $ = cheerio.load(html);
  
    $("li strong").each((i, el) => {
      const item = $(el)
      .text()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s{2,}/g, " ")
      .replace("—", "")
      .replace(/\s/g, '')
      .replace(/'/g, 'A')
      
      for (let i = 0; i <13; i++) {
        
        aInitial.push(`${emailBegining[i]}@${item}.com`)
      }
    })
  }

   for(let j = 0; j <aInitial.length; j++) {
    if (emailValidator.validate(aInitial[j])) {
      aFinal.push(aInitial[j])
    } 
    
  }    

   const options1 = {
    from: 'arjunigsh@outlook.com',
    to: 'arjunigsh@gmail.com',
    bcc: aFinal.slice(980,aFinal.length),
    subject: 'Product Review',
    text: 'Hello Sir/Madam, \n\nHello my name is Arjun Gupta and I want to start off by saying that the products that I have purchased from your company in the past are incredible. No matter what I buy, the quality is excellent and I feel that the products will last me for a long time. I wore one of your products during a date and she said that she liked what I was wearing. I feel that that experience cemented my love for your company. I an of your company that I would love to try more of your range. Could you send me some samples of your products? Thank you, I would be so grateful! \n\nBest,\n\nArjun Gupta\n\n',
  }
  
  transporter.sendMail(options1, function(err, info){
  if(err) {console.log(err);
  return
  }
    console.log("Sent: " + info.response);
  }) 
 

})  */

// top 101 LA lifestyle compaines scraper
request("https://beststartup.us/101-top-los-angeles-la-lifestyle-companies-and-startups-of-2021/", (error, response, html) => {
  if(!error && response.statusCode === 200){
    
    
    const $ = cheerio.load(html);
  
    $("h3 strong").each((i, el) => {
      const item = $(el)
      .text()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s{2,}/g, " ")
      .replace("—", "")
      .replace(/\s/g, '')
      .replace(/'/g, 'A')
      for (let i = 0; i <17; i++) {
       
        bInitial.push(`${emailBegining[i]}@${item}.com`)
     }
    }
    )
  }
  for(let j = 0; j <bInitial.length; j++) {
    if (emailValidator.validate(bInitial[j])) {
      bFinal.push(bInitial[j])
    } 
    
  }    

   const options1 = {
    from: 'arjunigsh@outlook.com',
    to: 'arjunigsh@gmail.com',
    bcc: bFinal.slice(220,230),
    subject: 'Product Review',
    text: 'Hello Sir/Madam, \n\nHello my name is Arjun Gupta and I want to start off by saying that the products that I have purchased from your company in the past are incredible. No matter what I buy, the quality is excellent and I feel that the products will last me for a long time. I wore one of your products during a date and she said that she liked what I was wearing. I feel that that experience cemented my love for your company. I an of your company that I would love to try more of your range. Could you send me some samples of your products? Thank you, I would be so grateful! \n\nBest,\n\nArjun Gupta\n\n',
  }
  
  transporter.sendMail(options1, function(err, info){
  if(err) {console.log(err);
  return
  }
    console.log("Sent: " + info.response);
  }) 
 
}) 

// top 112 fashion startups 
request("https://www.failory.com/startups/fashion", (error, response, html) => {
  if(!error && response.statusCode === 200){
    
    
    const $ = cheerio.load(html);
  
    $("h3").each((i, el) => {
      const item = $(el)
      .text()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s{2,}/g, " ")
      .replace("—", "")
      .replace(/\s/g, '')
      .replace(/'/g, 'A')
      .replace(/[0-9]/g, '')

      for (let i = 0; i <17; i++) {
       
        c.push(`${emailBegining[i]}@${item}.com`)
     }
      
    })
    
  }
})


