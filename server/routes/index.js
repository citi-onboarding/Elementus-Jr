const path = require('path');
const keystone = require('keystone');
const cors = require('cors');
const key = require('keystone/fields/types/key/KeyType');
const nodemailer = require("nodemailer");

const Service = keystone.list('Services');
const Banner = keystone.list("Banner");
const Depoiment = keystone.list('Depoiments');
const Conteudo = keystone.list("Conteudo");
const Trilha = keystone.list("Trilha");
const InfoEmpresa = keystone.list("InfoEmpresa");

module.exports = (app) => {
  app.use(cors());

  app.get('/api/services', (req, res) => {
    Service.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });  

  app.get('/api/depoiments', (req, res) => {
    Depoiment.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });  

  app.get('/api/conteudo', (req, res) => {
    Conteudo.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });


  app.get('/api/trilha', (req, res) => {
    Trilha.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });  

  app.get('/api/informacoes', (req, res) => {
    InfoEmpresa.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });

  app.get('/api/banner', (req, res) => {
    Banner.model.find((err, items) => {
      if (err) return res.apiError('database error', err);
      res.send(items);
    });
  });

  app.post('/api/contato', (req, res) => {

    const nome = req.body.nome
    const nomeEmpresa = req.body.nomeEmpresa
		const email = req.body.email
		const telefone = req.body.telefone
		const mensagem = req.body.mensagem
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: false,
      auth: {
        user: "contatoElementusJr@gmail.com",
        pass: "?WL9!7RrfHP+H&$"
      },
      tls: { rejectUnauthorized: false }
    })

    const mailOptions = {
			from: `"${nome}" <${email}>`,
			to: "contatoelementusjr@gmail.com",
			subject: nomeEmpresa,
			text: `${"Nome: ", nome} \n <${"Email: ", email}> \n <${"Telefone: ", telefone}>\n\n${mensagem}`
		}
    
    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        console.log(error)
        res.status(500).send(error)
      } else {
        console.log('Email enviado');
        res.send('Enviado')
      }
    })
  })
};