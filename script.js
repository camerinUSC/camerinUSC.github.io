// Dark mode toggle
const toggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

toggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Collapsible sections
document.querySelectorAll(".collapsible").forEach(section => {
  section.classList.add("closed");
  const header = section.querySelector(".section-header");
  header.addEventListener("click", () => {
    section.classList.toggle("closed");
  });
});
