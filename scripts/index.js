function loadContent () {
  var lang = getLang()
  Object.keys(window.langs[lang]).forEach(
    key => print(key, window.langs[lang][key])
  )
  renderNumbers()
}

function renderNumbers () {
  const numbersDiv = document.getElementById('numbers');
  const contentDiv = document.querySelector('.content');
  const lineHeight = 18;
  const numberOfLines = Math.floor(contentDiv.offsetHeight / lineHeight);
  
  let numbersHTML = '';
  for (let i = 1; i <= numberOfLines; i++) {
    numbersHTML += `${i}<br>`;
  }
  
  numbersDiv.innerHTML = numbersHTML;
}

function getLang () {
  var lang = window.location.search.split('=')[1]
  if (!lang || !['pt', 'en'].includes(lang)) return 'en'
  return lang
}

function print (name, content) {
  var elementByName = document.getElementsByName(name)
  elementByName.forEach( element => {
    if (element) {
      element.innerHTML = content
    }
  })
}

window.addEventListener('resize', renderNumbers);