const list = [ 
    {
      name: "Capô" ,
      price: 75
    },
    {
      name: "Motor" ,
      price: 100
    },
    {
      name: "Chassi" ,
      price: 3000
    },
    {
      name: "Rodas" ,
      price: 450
    },
    {
      name:"Rolamento" ,
      price: 300
    },
    {
      name: "Banco" ,
      price: 700
    },
    {
      name: "Transmissão" ,
      price: 1200
    },
    {
      name: "Abs" ,
      price: 2000
    },
    {
      name: "Suspensão" ,
      price: 600
    },
    {
      name: "Vidro" ,
      price: 950
    },
  ]
  
  let transformPrice = function (productName, percent){
      let product = {}
  
      for (let i = 0; i < list.length -1; i++) {
        if (productName === list[i].name) {
          product = list[i]
  
          break
        }
      }
  
      let result = product.price + (product.price * percent / 100)
  
      return `O preço de ${productName} acrescentado de ${percent}% é de ${result}`
  }
  
  console.log(transformPrice('Chassi', 10))