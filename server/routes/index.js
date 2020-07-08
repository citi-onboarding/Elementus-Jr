const path = require('path');
const keystone = require('keystone');
const cors = require('cors');
const key = require('keystone/fields/types/key/KeyType');

const Service = keystone.list('Services');
const Depoiment = keystone.list('Depoiments');
const Conteudo = keystone.list("Conteudo")
const Trilha = keystone.list("Trilha")

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

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

};