let store = [{
    storeName: "CBB - Computador bom e barato" [
      {
        clients: [ {
          name: "Luiza",
          code: 110
        },
        {
          name:"Ricardo",
          code: 077
        },
        {
          name: "Caio",
          code: 141
        },
        {
          name:"Yan",
          code:033
        }
        
        ],
        products: [ {
          name: "Computador Gamer",
          price: 6500
        },
        {
          name: "Computador de Trabalho",
          price: 3000
        },
        {
          name: "Computador usual",
          price: 1500
        }
  
        ]
      }
    ]
  }]
  
  let sellersComission = function (Name,Code,Price,Quantity){
    for(let i = 0; i < store.storeName.clients.length - 1; i++){}
  }
  
  console.log(store.storeName.clients.length)