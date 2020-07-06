const keystone = require("keystone");
const Types = keystone.Field.Types;

const Banner = new keystone.List("Banner");

Banner.add({
    titulo: { type: Types.Text, required: true, index: true, initial: true },
    descricao: { type: Types.Text },
    imagem: { type: Types.CloudinaryImage },
});

Banner.register();