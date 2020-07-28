function retornarSalario() {

    const mensalSalario = document.getElementById("salarioMensal").value
    const categoriaSalario = document.getElementById("salarioCategoria").value
   
    
    if((mensalSalario.value / 12) >= (categoriaSalario.value)) {
        alert("Seu salário está acima do piso salarial. R$: "+mensalSalario.value / 12")
    } else {
        alert("Seu salário não está acima do piso salarial. R$: "+mensalSalario.value / 12")
    }
}
