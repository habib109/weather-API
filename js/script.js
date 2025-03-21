const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const apiKey = "923d9c04141b660378c0f94202f7c91f";
const city = "dhaka";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=bn&appid=${apiKey}`;

async function weather() {
  try {
    let data = await fetch(apiUrl);
    let reps = await data.json();

    let loca = document.querySelector(".loca");
    let clc = document.querySelector(".clc");
    let wind = document.querySelector(".wind");
    let hum = document.querySelector(".hum");
    let airpres = document.querySelector(".airpres");
    let sunyycold = document.querySelector(".sunyycold");

    let temperature = `${reps.main.temp}°C`;
    let loc = reps.name;
    let winds = reps.wind.speed;
    let humidity = reps.main.humidity;
    let air = reps.main.pressure;

    loca.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${loc}`;
    clc.innerHTML = temperature;
    wind.innerHTML = `Wind Speed: ${winds} m/s`;
    hum.innerHTML = `Humidity: ${humidity}%`;
    airpres.innerHTML = `Pressure: ${air} hPa`;

    if (parseFloat(reps.main.temp) <= 20) {
      sunyycold.innerHTML = "Cold";
    } else {
      sunyycold.innerHTML = "Sunny";
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

let daynm = document.querySelector(".daynm");
let dateHtml = document.querySelector(".date");
let monthHtml = document.querySelector(".month");
let yearHtml = document.querySelector(".year");
let hr = document.querySelector(".hr");

function timeDate() {
  let now = new Date();
  let day = now.getDay();
  let dy = days[day];
  let date = now.getDate();
  let month = now.getMonth();
  let mt = months[month];
  let year = now.getFullYear();

  let hour = now.getHours();
  let mint = now.getMinutes();
  let ampm = hour >= 12 ? "PM" : "AM";

  // 12-hour format conversion
  hour = hour % 12;
  if (hour === 0) hour = 12; // 12 AM বা 12 PM ঠিক করার জন্য

  let time = `${hour.toString().padStart(2, "0")} : ${mint.toString().padStart(2, "0")} ${ampm}`;

  hr.innerHTML = time;
  daynm.innerHTML = dy;
  dateHtml.innerHTML = date;
  monthHtml.innerHTML = mt;
  yearHtml.innerHTML = year;
}

setInterval(timeDate, 1000);
weather();

// ✅ Longest Common Prefix Function ✅
function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
