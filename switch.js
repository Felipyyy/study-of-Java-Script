let permissao = "diretor" // comum, gerente, diretor

switch (permissao) {
    case "comum":
        console.log("usuario comum!")
        break;

    case "gerente":
        console.log("usuario gerente!")
        break;
    
    case "diretor":
        console.log("usuario diretor!")
        break;

    default:
        break;
}