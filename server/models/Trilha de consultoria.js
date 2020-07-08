const keystone = require("keystone");
const Types = keystone.Field.Types;

const Trilha = new keystone.List("Trilha", {
    map: {name: "trilha"},  
    nocreate: true,
    nodelete: true 
});

Trilha.add({
    imagem: { type: Types.CloudinaryImage, required: true, index: true, initial: true },
});

Trilha.register();