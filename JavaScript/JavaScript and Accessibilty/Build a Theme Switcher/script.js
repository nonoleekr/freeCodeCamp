const button = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const liveRegion = document.querySelector('p[aria-live="polite"]');

const themes = [
  { name: "light", message: "This is light theme" },
  { name: "dark", message: "This is dark theme" }
];

// Open / close dropdown
button.addEventListener("click", () => {
  if (dropdown.hidden) {
    dropdown.removeAttribute("hidden");
    button.setAttribute("aria-expanded", "true");
  } else {
    dropdown.setAttribute("hidden", "");
    button.setAttribute("aria-expanded", "false");
  }  
});

// Theme selection
dropdown.addEventListener("click", (e) => {
  if (e.target.tagName !== "LI") return;

  const themeName = e.target.id.replace("theme-", "");

  // Remove previous theme-* classes
  document.body.className = document.body.className
    .split(" ")
    .filter(cls => !cls.startsWith("theme-"))
    .join(" ");

  // Add new theme class
  document.body.classList.add(`theme-${themeName}`);

  // Display message in aria-live element
  const themeObj = themes.find(t => t.name === themeName);
  if (themeObj) liveRegion.textContent = themeObj.message;

  // Close dropdown
  dropdown.hidden = true;
  button.setAttribute("aria-expanded", "false");
});
