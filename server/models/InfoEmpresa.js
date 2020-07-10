const keystone = require("keystone");
const Types = keystone.Field.Types;

const InfoEmpresa = new keystone.List("InfoEmpresa");

InfoEmpresa.add({
    linkFacebook: {type: Types.Url, required: true, index: true, initial: true },
    linkLinkedin: {type: Types.Url, required: true, index: true, initial: true },
    linkInstagram: {type: Types.Url, required: true, index: true, initial: true },
    endereco: {type: Types.Text, required: true, index: true, initial: true },
    telefone: {type: Types.Number, required: true, index: true, initial: true },
    linkNewsletter: {type: Types.Url, required: true, index: true, initial: true },
});

InfoEmpresa.register();