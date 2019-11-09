$(document).ready(function () {
	var toolDiv = $("#hdtb-msb > div:nth-child(2)")

	var enElement = document.createElement('a')
	enElement.setAttribute('class', 'hdtb-tl')
	enElement.setAttribute('href', document.URL + '&lr=lang_en')
	enElement.textContent = "EN"
	toolDiv.after(enElement)

	var jpElement = document.createElement('a')
	jpElement.setAttribute('class', 'hdtb-tl')
	jpElement.setAttribute('href', document.URL + '&lr=lang_ja')
	jpElement.textContent = "JP"
	toolDiv.after(jpElement)
});
