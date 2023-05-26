/*let trasformFarenheitToCelsius = function(fahrenheit){
  let celsius = -17223 + fahrenheit

  return `${fahrenheit}°F em Celsius é ${celsius}°C`
}

console.log(trasformFarenheitToCelsius(130))

ou Melhorando*/

let trasformFarenheitToCelsius = function(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9
        celsius = celsius.toFixed(2).replace(".",",")
  
    return `${fahrenheit}°F em Celsius é ${celsius}°C`
  }
  
  console.log(trasformFarenheitToCelsius(130))