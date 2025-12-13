// Dark mode toggle
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

// Collapsible sections
document.querySelectorAll(".collapsible").forEach(section => {
  section.classList.add("closed");
  const header = section.querySelector(".section-header");
  header.addEventListener("click", () => {
    section.classList.toggle("closed");
  });
});
