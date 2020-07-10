const keystone = require('keystone');

const { Types } = keystone.Field;

const Depoiment = new keystone.List('Depoiments',{
  map: {name: "ClientName"}
});

Depoiment.add({
  ClientName: { type: Types.Text, initial: true, required: true, index: true },
  CompanyFunction: { type: Types.Text, initial: true, required: true, index: true },
  Depoiment: { type: Types.Textarea, initial: true, required: true, index: true },
  Facebook: { type: Types.Url, initial: true, required: true, index: true },
  Linkedin: { type: Types.Url, initial: true, required: true, index: true },
  Instagram: { type: Types.Url, initial: true, required: true, index: true },
  image: { type: Types.CloudinaryImages, require: true, initial: true, },

});

Depoiment.register(); 