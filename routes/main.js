var express = require("express");
var router = express.Router();
var Customer = require("../models/customer");
var nodemailer = require("nodemailer");

/* GET home page. */
router.post("/contacto", function (req, res, next) {
  const { nombre, apellido, email, telefono, razon, web } = req.body.data;
  const info = req.body.info;
  const mensaje = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    telefono: telefono,
    razon: razon,
    web: web,
    Info: info,
  };
  if (req.body != null && req.body != undefined) {
    var cliente = Customer.create({
      name: nombre,
      lastname: apellido,
      email: email,
      phone: telefono,
      company: razon,
      web: web,
      info: info,
    });

    var auth = { user: "Hello@flobellamedia.site", pass: "9eh94jv5k82m" };
    var transporter = nodemailer.createTransport({
      port: 465,
      host: "smtpout.secureserver.net",
      auth: auth,
    });

    var mailOptions = {
      from: email,
      to: "juanmaseijas@hotmail.com",
      subject: `Contacto de ${email}`,
      text: JSON.stringify(mensaje),
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.json({ enviado: false });
      } else {
        console.log("enviado correctamente");
        res.json({ enviado: true });
      }
    });
  }
});
module.exports = router;
