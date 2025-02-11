export const getApiGithub = async () => {
  try {
    const dadosPerfil = await fetch(
      `https://api.github.com/users/Vinicius-Rodriguess`
    );

    const perfil = await dadosPerfil.json();

    const img = document.querySelector("#github-img");
    img.src = perfil.avatar_url;
    img.alt = `Foto do Perfil do Github - ${perfil.name}`;

    const link = document.querySelector("#github-url");
    link.href = perfil.html_url;

    const followers = document.querySelector("#github-followers");
    followers.innerText = perfil.followers;

    const repos = document.querySelector("#github-public_repos");
    repos.innerText = perfil.public_repos;
  } catch (error) {
    console.log(error);
  }
};
