let darkmode = localStorage.getItem("darkmode");
const themeToggle = document.querySelector("theme-toggle");

const enableDarkMode = () => {
	html.style.setProperty("color-scheme", "dark");
	localStorage.setItem("darkmode", "enabled");
};

const disableDarkMode = () => {
	html.style.setProperty("color-scheme", "light");
	localStorage.setItem("darkmode", "disabled");
};

if (darkmode === "enabled") {
	enableDarkMode();
}

themeToggle.addEventListener("click", () => {
	darkmode = localStorage.getItem("darkmode");
	darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});
