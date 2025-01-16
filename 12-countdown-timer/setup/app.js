const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
 
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const item = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2025,4,24,11,30,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()] ;
const day = weekdays[futureDate.getDay()]
console.log(futureDate.getDay());
giveaway.textContent = `giveaway ends on ${year} ${month} ${day} ${hours}:${minutes}am`

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
 const today = new Date().getTime();
 const t = futureDate-today;

 const oneDay = 24*60*60*1000;
 const oneHour = 60*60*1000;
 const oneMinute = 60*1000;

 let days = t/oneDay
 days = Math.floor(days);
 let hours = Math.floor((t % oneDay ) / oneHour) ;
 let minutes = Math.floor((t % oneHour ) / oneMinute);
 let seconds = Math.floor((t % oneMinute ) / 1000);

//set values array
const values = [
   days,
   hours,
   minutes,
   seconds,
];
 item.forEach((item,index)=>{
    item.innerHTML = values[index];
 });

};
setInterval(getRemainingTime,1000)
/* getRemainingTime(); */