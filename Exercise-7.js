let calculateDiference = function(Year1,Year2,Year3,Year4,Year5)
{
  let result1 = Year1 - 2012
    if(result1 < 0){
      result1 = result1 * -1
    }
  let result2 = Year2 - 2012
    if(result2 < 0){
      result2 = result2 * -1
    }
  let result3 = Year3 - 2012
    if(result3 < 0){
      result3 = result3 * -1
    }
  let result4 = Year4 - 2012
    if(result4 < 0){
      result4 = result4 * -1
    }
  let result5 = Year5 - 2012
    if(result5 < 0){
      result5 = result5 * -1
    }

  return `A difereça de anos de ${Year1},${Year2},${Year3},${Year4},${Year5} para 2012 é respectivamente ${result1}, ${result2}, ${result3}, ${result4}, ${result5} ano(s)`
}

console.log(calculateDiference(2013,2017,1999,1765,200))