const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const todayBtn = document.querySelector(".today-btn");

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

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

function updateCalendar() {
    monthEl.innerText = months[currentMonth] + " " + currentYear;
    fullDateEl.innerText = today.toDateString();

    const firstDay = new Date(currentYear, currentMonth, 1).getDay() - 1;
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

    let days = "";

    for (let i = firstDay; i > 0; i--) {
        days += `<div class="empty"></div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {
            days += `<div class="today">${i}</div>`;
        } else if (new Date(currentYear, currentMonth, i).getDay() === 0) {
            days += `<div class="holiday">${i}</div>`; // Sunday
        } else if (new Date(currentYear, currentMonth, i).getDay() === 6) {
            days += `<div class="holi">${i}</div>`; // Saturday
        } else {
            days += `<div>${i}</div>`;
        }
    }

    daysEl.innerHTML = days;
}

updateCalendar();

prevBtn.addEventListener("click", () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    updateCalendar();
});

nextBtn.addEventListener("click", () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    updateCalendar();
});

todayBtn.addEventListener("click", () => {
    today.setDate(new Date().getDate());
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    updateCalendar();
});
