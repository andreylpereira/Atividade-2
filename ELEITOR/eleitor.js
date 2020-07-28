function submeterPorcentagem() {
    
    const inputEleitores = document.getElementById("Neleitores").value
    const inputValidos = document.getElementById("Vvalidos").value
    const inputBrancos = document.getElementById("Vbrancos").value
    const inputNulos = document.getElementById("Vnulos").value
    var porcentagem = (inputValidos + inputBrancos + inputNulos)

    If (porcentagem === inputEleitores) {
        alert (
        ("Eleitores: "+(inputValidos/100 + inputBrancos/100 + inputNulos/100)"%") + 
        ("Válidos: "+(inputValidos/100)"%") + 
        ("Brancos: "+(inputBrancos/100)"%") + 
        ("Nulos: "+(inputNulos/100)"%")
        )

    } else {
        alert ("Digite os dados corretamente");
    } 
};