const keystone = require('keystone');

const { Types } = keystone.Field;

const Service = new keystone.List('Services',{
  map: {name: "Title"}
});

Service.add({
  Title: { type: Types.Text, initial: true, required: true, index: true },
  Description: { type: Types.Textarea, initial: true, required: true, index: true },
  image: { type: Types.CloudinaryImages, require: true, initial: true, },
  Link: { type: Types.Text, initial: true, required: true, index: true },
});

Service.register();