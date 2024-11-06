function loadContent () {
  var lang = getLang()
  Object.keys(window.langs[lang]).forEach(
    key => print(key, window.langs[lang][key])
  )
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