const keystone = require("keystone");
const Types = keystone.Field.Types;

const Trilha = new keystone.List("Trilha", {
    nocreate: true,
    nodelete: true 
});

Trilha.add({
    imagem1: { type: Types.CloudinaryImage, required: true, index: true, initial: true },
    imagem2: { type: Types.CloudinaryImage, required: true, index: true, initial: true }
});

Trilha.register();