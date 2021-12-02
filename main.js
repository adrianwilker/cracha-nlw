const linksSocialMedia = {
  github: 'adrianwilker',
  instagram: 'adrian.wilker',
  youtube: 'c/adrian47885',
  facebook: 'adrian.wilker',
  twitter: '#'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  // fetch pega o que a URL tem
  // .then() é uma promess que vai pegar a resposta que ta no fetch
  // arrow function é uma forma contraída de função. função anonima (sem nome): (argumento)=>{}
  fetch(url)
    .then(response => response.json()) // o que foi recebido é transformado em JSON
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    }) // data armazena a resposta só que em JSON
}
getGitHubProfileInfos()
