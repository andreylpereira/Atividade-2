function submeterPorcentagem() {
    
    const inputEleitores = document.getElementById("Neleitores").value
    const inputValidos = document.getElementById("Vvalidos").value
    const inputBrancos = document.getElementById("Vbrancos").value
    const inputNulos = document.getElementById("Vnulos").value

    const per_Vvalidos = Math.round(inputValidos/inputEleitores * 100)
    const per_Vbrancos = Math.round(inputBrancos/inputEleitores * 100)
    const per_Vnulos = Math.round(inputNulos/inputEleitores * 100)

    document.getElementById("Vvalidos").value = "${inputValidos} são ${per_Vvalidos} % do total"
    document.getElementById("Vbrancos").value = "${inputBrancos} são ${per_Vbrancos} % do total"
    document.getElementById("Vnulos").value = "${inputNulos} são ${per_Vnulos} % do total"

}