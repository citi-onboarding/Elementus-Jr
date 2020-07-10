const keystone = require("keystone");
const Types = keystone.Field.Types;

const Banner = new keystone.List("Banner", {
    map: {name: "banner"},
    nocreate: true,
    nodelete: true 
  });

Banner.add({
    titulo: { type: Types.Text, required: true, index: true, initial: true },
    descricao: { type: Types.Text, required: true, index: true, initial: true },
    imagem: { type: Types.CloudinaryImages, required: true, index: true, initial: true },
});

Banner.register();