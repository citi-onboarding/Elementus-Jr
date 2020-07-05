const keystone = require("keystone");
const { CloudinaryImage } = require("keystone/lib/fieldTypes");
const Types = keystone.Field.Types;

const Conteudo = new keystone.List("Conteudo")

Conteudo.add({
    linkRedirecionamento: { type: Types.Url, required: true, index: true, initial: true },
    descricaoConteudo:{ type: Types.Text, required: true, index: true, initial: true },
    autor: {type: Types.Name, required: true, index: true, initial: true },
    data: {type: Types.Date, required: true, index: true, initial: true },
    imagem: {type:Types.CloudinaryImage, required: true, index: true, initial: true },
    tipoConteudo: {type: Types.Select, options: "Ebook, Artigo" , required: true, index: true, initial: true },
});

Conteudo.register();