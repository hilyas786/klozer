// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body);
  const message = `
  FirstName: ${body.firstName}\r\n
  LastName: ${body.LastName}\r\n
  Email: ${body.email}\r\n
  Phone: ${body.phone}\r\n
  Subject: ${body.subject}\r\n
  Message: ${body.message}\r\n

  Company Incorporation: ${body.incorp}\r\n
  Visa: ${body.visa}\r\n


  `;

  await mail.send({
    to: 'haider@ilyasinc.com',
    from: 'haider@ilyasinc.com',
    subject: 'Ilyas Tech Enquiry - Contact Us',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
};
