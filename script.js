// criar day object e criar uma variavel date 
const date = new Date();

const renderCalendar = () => {
    date.setDate(1);
//nova variavel (const month) que é igual ao  date.getmonth :  const month = date.getMonth();

const monthDays = document.querySelector('.days')

const lastDay = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();


const prevLastDay = new Date(
    date.getFullYear(), date.getMonth(),0).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

//novo array dos meses
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

// vai automatizar o h1 e o p usando o query e o innerHTML

document.querySelector('.date h1').innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = new Date().toDateString();

//mostrar os dias primeiro as variaveis

let days = "";

for (let x = firstDayIndex; x > 0; x--) {
    //x+=10 x= x+10 
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    
}
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

//para as setas
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();