let dolarActualPrice = 5.32

let convertCurrency = function(Value){
    let result = Value * dolarActualPrice

    return `O valor de US$${Value} em Reais é de R$${result}`
}
    console.log(convertCurrency(10))