import { spinner } from "./spinner.js";

export const validForm = () => {
  const form = document.querySelector("#formulario");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const txtNome = document.querySelector("#txtNome");
  const txtEmail = document.querySelector("#txtEmail");
  const txtAssunto = document.querySelector("#txtAssunto");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.nome.value.length < 3) {
      txtNome.innerHTML = "O nome deve ter no minimo 3 caracteres";
      form.nome.focus();
      return;
    } else txtNome.innerHTML = "";

    if (!form.email.value.match(emailRegex)) {
      txtEmail.innerHTML = "Digite um e-mail válido.";
      form.email.focus();
      return;
    } else txtEmail.innerHTML = "";

    if (form.assunto.value.length < 5) {
      txtAssunto.innerHTML = "O Assunto deve ter no minimo 5 caracteres.";
      form.assunto.focus();
      return;
    } else txtAssunto.innerHTML = "";

    form.submit();
    spinner.start()
  });
};
