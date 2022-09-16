// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require("@sendgrid/mail");
//API Key
mail.setApiKey(process.env.SENDGRID_API_KEY);

//Attempted to create the send email functionality using sendgrid
export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;
  //email data
  const data = {
    to: "mach.mukuru@gmail.com",
    from: "lindamachivenyika@gmail.com",
    subject: "New web form message!",
    text: message,
    html:message.replace(/\r\n/g, <br></br>)
  };
  mail.send(data);
  res.status(200).json({ status: 'Ok' })
}

/*Sources used include Hyperiondev notes, previous tasks, Geeksforgeeks, W3Schools, Twilio SendGrid, Alvarotrigo.com, You Tube, Google.com*/