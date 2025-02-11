export const theme = {
  btn: document.querySelector(".btn-change-theme"),
  root: document.documentElement,
  currentTheme: "light", // Sempre começa com o modo claro

  darkClassBtn: "bi-moon",
  lightClassBtn: "bi-brightness-high",

  darkClassRoot: "dark",
  lightClassRoot: "light",

  init() {
    if (!theme.btn || !theme.root) return;

    theme.applyTheme();

    theme.btn.addEventListener("click", () => theme.toggleTheme());
  },

  applyTheme() {
    theme.btn.classList.remove(theme.darkClassBtn, theme.lightClassBtn);
    theme.root.classList.remove(theme.darkClassRoot, theme.lightClassRoot);

    if (theme.currentTheme === "dark") {
      theme.btn.classList.add(theme.darkClassBtn);
      theme.root.classList.add(theme.darkClassRoot);
    }

    if (theme.currentTheme === "light") {
      theme.btn.classList.add(theme.lightClassBtn);
      theme.root.classList.add(theme.lightClassRoot);
    }
  },

  toggleTheme() {
    if (theme.currentTheme === "dark") {
      theme.currentTheme = "light";
    } else {
      theme.currentTheme = "dark";
    }
    theme.applyTheme();
  },
};
