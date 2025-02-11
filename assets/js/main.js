import { dictionary } from "./components/dictionary.js";
import { getApiGithub } from "./components/getApiGithub.js";
import { scrollSmooth } from "./components/scrollSmooth.js";
import { updatePosition } from "./components/stalker.js";
import { theme } from "./components/theme.js";
import { validForm } from "./components/validForm.js";

// Sistema de Animaçoes
const obsOptions = { rootMargin: "-60px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(`animate-${entry.target.dataset.animate}`);
      if (entry.target.classList.contains("footer")) {
        elAnimations.forEach((el) => {
          el.classList.remove("animate-right");
          el.classList.remove("animate-left");
          el.classList.remove("animate-top");
          el.classList.remove("animate-bottom");
        });
      }
    }
  });
}, obsOptions);

const elAnimations = document.querySelectorAll("[data-animate]");
elAnimations.forEach((el) => observer.observe(el));

// Chamada do Stalker
document.addEventListener("mousemove", (e) => updatePosition(e));

// Lida com a linguagem da Pagina
let language = 0;
const elements = document.querySelectorAll("[translate]");

const translate = () => {
  elements.forEach(
    (word) =>
      (word.innerText = dictionary.translate(
        word.getAttribute("translate"),
        language
      ))
  );
};

const selectLenguage = document.querySelector("#select-language");
selectLenguage.addEventListener("input", (e) => {
  const newLanguage = parseInt(e.target.value);
  if (newLanguage == language) return;
  language = newLanguage;
  translate();
});


// Inicialização
translate();
theme.init();
getApiGithub();
validForm();
scrollSmooth.init();