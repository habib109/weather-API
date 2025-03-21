const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const apikay = "923d9c04141b660378c0f94202f7c91f";
const city = "dhaka"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=bn&appid=${apikay}`


async function weather() {
  try {

    let data = await fetch(apiUrl)
    let reps = await data.json()

    let loca = document.querySelector(".loca")
    let clc = document.querySelector(".clc")
    let wind = document.querySelector(".wind")
    let hum = document.querySelector(".hum")
    let airpres = document.querySelector(".airpres")
    let sunyycold = document.querySelector(".sunyycold")
    


    let temparutr = ` ${reps.main.temp}C°`
    let loc = reps.name
    let winds = reps.wind.speed
    let hums = reps.main.humidity
    let air = reps.main.pressure
    
    loca.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${loc}`
    clc.innerHTML = temparutr
    wind.innerHTML =`Speed: ${winds}`
    hum.innerHTML = `humanity: ${hums}`
    airpres.innerHTML =`Speed :${air}`


    if(temparutr <= "20C°"){
      sunyycold.innerHTML = "sunny"

    }else{
      sunyycold.innerHTML = "Cold"

    }








  } catch {

  }

}

let daynm = document.querySelector(".daynm")
let dateHtml = document.querySelector(".date")
let monthHtml = document.querySelector(".month")
let yearHtml = document.querySelector(".year")

let hr = document.querySelector(".hr")
let mnt = document.querySelector(".mnt")







function timeDate() {


  let now = new Date()
  let day = now.getDay()
  let dy = days[day]
  let date = now.getDate()
  let month = now.getMonth()
  let mt = months[month]
  let year = now.getFullYear()

  let hour = now.getHours()
  let mint = now.getMinutes()
  let ampm = hour >= 12 ? "AM" : "PM"

  hour = hour % 12
  hour = hour ? hour : 12


  let time = `${hour.toString().padStart(2, "0")} : ${mint.toString().padStart(2, "0")} ${ampm}`

  hr.innerHTML = time

  daynm.innerHTML = dy
  dateHtml.innerHTML = date
  monthHtml.innerHTML = mt
  yearHtml.innerHTML = year




}



setInterval(() => {
  timeDate()
}, 1000)


weather()

 strs = ["flowr", "flor", "flight"]
var longerCommonPrifix = function(strs){
  
}