const keystone = require('keystone');

const { Types } = keystone.Field;

const Depoiment = new keystone.List('Depoiments',{
  map: {name: "title"}
});

Depoiment.add({
  ClientName: { type: Types.Text, initial: true, required: true, index: true },
  CompanyFunction: { type: Types.Text, initial: true, required: true, index: true },
  Depoiment: { type: Types.Textarea, initial: true, required: true, index: true },
  Facebook: { type: Types.Text, initial: true, required: true, index: true },
  Linkedin: { type: Types.Text, initial: true, required: true, index: true },
  Instagram: { type: Types.Text, initial: true, required: true, index: true },
  image: { type: Types.CloudinaryImages, require: true, initial: true, },

});

Depoiment.register(); 