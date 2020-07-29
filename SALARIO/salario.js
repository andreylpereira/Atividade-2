let salarioAnual = window.prompt ("Digite o seu salário anual:")
let pisoMensal = window.prompt ("Digite o piso mensal da sua categoria:")

let salarioMensal = salarioAnual / 12

    if (salarioMensal < pisoMensal) {
        
        window.alert('O seu salário é de R$ ${salarioMensal}. \n Você recebe abaixo do piso salarial')
    
    } else {

        window.alert('O seu salário é de R$ $$$$$${salarioMensal}. \n Você recebe acima do piso salarial')
    
    }