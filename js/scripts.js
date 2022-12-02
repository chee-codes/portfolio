const html = document.documentElement;
const body = document.querySelector("body");
const menu = document.getElementById("mobile-menu");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const themeBtn = document.querySelector(".theme-select");
const navLinks = document.querySelectorAll(".nav-links");

const mode = localStorage.getItem("theme") || null;

// Page Scroll
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const section = document.querySelector(target).offsetTop;

    console.log(section);

    window.scrollTo({
      left: 0,
      top: section - 60,
    });
  });
});

// Mobile Menu Functions
function openMenu() {
  menu.style.width = "100%";
  body.style.overflowY = "hidden";
}

function closeMenu() {
  menu.style.width = "0";
  body.style.overflowY = "";
}

// Theme Functions
function darkMode() {
  html.classList.add("dark");
  themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  localStorage.setItem("theme", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem("theme", "light");
}

function toggleMode() {
  !html.classList.contains("dark") ? darkMode() : lightMode();
}

function getMode() {
  mode === "dark" ? darkMode() : lightMode();
}

// Even listeners
window.addEventListener("DOMContentLoaded", async () => {
  getMode();
  loadData();
});
openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
themeBtn.addEventListener("click", toggleMode);

/* 





*/

// Dynamically load cards and data into html
function loadData() {
  for (let i = 0; i < projects.length; i++) {
    document.querySelector(".cards").innerHTML += `
        <div class="card">
          <div class="card-image">
            <img src=${projects[i].img} alt="project image">
          </div>
          <div class="card-body">
            <div class="card-content">
              <h4 class="title">${projects[i].title}</h4>
              <p class="desc">${projects[i].desc}</p>
            </div>
            <div class="card-links">
              <a href=${projects[i].links.repo} target="_blank" >Repository</a>
              <a href=${projects[i].links.deployed} target="_blank" >Live Link</a>
            </div>
          </div>
        </div>
        `;
  }
}
