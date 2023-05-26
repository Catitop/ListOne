let Customer = {
    Code: 51102873845,
    Name: "Caio",
    Birthday: "14/10/2003"
}

let array = Customer.Birthday.split('/')
let day = Number(array[0])
let month = Number(array[1])
let year = Number(array[2])

let transformAge = function (year, month, day) {
    const currentTime = new Date()
    const currentYear = currentTime.getFullYear() // 2022
    const currentMonth = currentTime.getMonth() + 1 // 9
    const currentDay = currentTime.getDay() // 21

    const daysInMonth = (currentMonth * 30) - (30 - currentDay) // quantidade de dias até o mês atual
    const daysInYear = currentYear * 365 - (365 - daysInMonth) // quandidade de dias até o ano atual 

    const customerDaysInMoth = (month * 30) - (30 - day) 
    const customerDaysInYear = year * 365 - (365 - customerDaysInMoth) // quantidade de dias até 14/10/2003

    console.log(daysInYear - customerDaysInYear)
    return (daysInYear - customerDaysInYear)
}

transformAge(year, month, day)