const keystone = require("keystone");
const Types = keystone.Field.Types;

const Banner = new keystone.List("titulo");

Banner.add({
    titulo: { type: Types.Text, required: true, index: true, initial: true },
    descricao: { type: Types.Text, required: true, index: true, initial: true },
    imagem: { type: Types.CloudinaryImage, required: true, index: true, initial: true },
});

Banner.register();