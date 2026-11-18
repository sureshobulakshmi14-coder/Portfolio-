// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((l) =>
  l.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Typing effect
const roles = ["Full Stack Developer", "CSE Student", "Hackathon Builder", "Problem Solver"];
const typed = document.getElementById("typed");
let r = 0, c = 0, deleting = false;
function type() {
  const word = roles[r];
  typed.textContent = word.slice(0, c);
  if (!deleting && c < word.length) { c++; setTimeout(type, 90); }
  else if (!deleting) { deleting = true; setTimeout(type, 1300); }
  else if (c > 0) { c--; setTimeout(type, 45); }
  else { deleting = false; r = (r + 1) % roles.length; setTimeout(type, 300); }
}
type();

// Reveal sections on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Contact form (no backend)
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  formMsg.textContent = "Thank you, " + name + "! Your message is noted.";
  form.reset();
});
