const nodemailer = require("nodemailer");

module.exports = function SendEmail(body, emailAddress) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {

            user: process.env.EMAIL,
            pass: process.env.PASS,
        }
    });

    const options = {
        from: process.env.EMAIL,
        to: emailAddress,
        subject: "Account Status",
        html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
          </div>
          
          <p>${body}</p>
          <p style="font-size:0.9em;">Regards,<br />IQAPEX LABS</p>
          <p style="font-size:0.9em;">Regards,<br />Copyright 2022-IQAPEX LABS-All rights reserved.</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
       
          </div>
        </div>
      </div>`
    };

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Sent: " + info.response);
    })
}