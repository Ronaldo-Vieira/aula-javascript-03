var sistemaOperacional = "linux"
switch(sistemaOperacional) {
    case "linux":
        console.log("O Linux é um sistema operacional de código aberto")
        break
    case "windows":
        console.log("O Windows é um sistema operacional da empresa Microsoft.")
        break
    case "macOs":
        console.log("O macOS é um sistema operacional da empresa Apple.")
        break    
    case "Chrome Os":
        console.log("O Chrome OS é um sistema operacional da empresa Google.")
        break
    default:
        console.log("Há a possibilidade de você estar utilizando um sistema mobile.")
}