let hamburgerbtn = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");
let closebtn = document.querySelector(".close");
hamburgerbtn.addEventListener("click", () => {
  nav_list.classList.add("active");
});
closebtn.addEventListener("click", () => {
  nav_list.classList.remove("active");
});

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
const countToDate = new Date().setHours(new Date().getHours() + 24);
let previousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}


// Counter section logic
$(document).ready(function () {
  $(".count").counterUp({
    delay: 10,
    time: 1200,
  });
});
// Get the login button and form elements
const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');

// Add an event listener to the login button for the 'click' event
loginButton.addEventListener('click', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Perform your login logic here
  // For example, validate the user's credentials

  // If login is successful, redirect to another page or change the UI accordingly
  // window.location.href = 'user-dashboard.html'; // Redirect to dashboard
  // Or update the UI to show the user is logged in
});

// Make the login button responsive to the Enter key in the form fields
loginForm.addEventListener('keypress', function(event) {
  // Check if the Enter key was pressed
  if (event.key === 'Enter') {
    // Trigger the click event on the login button
    loginButton.click();
  }
});


