const searchResultsEl = document.querySelector('#search-results')

const genereteHtml = (text) => `<li class="list-group-item">${text}</li>`

export const showResults = (results, searchOption) => {
    let html = ''

    if(results.length > 0) {
        if (searchOption === 'films') {
            html = results.map((result) => genereteHtml(`<b>Title: </b>${result.title} <b>Director: </b>${result.director}`))
        } else if (searchOption === 'people') {
            html = results.map((result) => genereteHtml(`<b>Name: </b>${result.name} <b>Birth year: </b>${result.birth_year}`))
        }   
        
        searchResultsEl.innerHTML = html.join("");

    } else {
        html = genereteHtml('There are no matching results ;(')
        searchResultsEl.innerHTML = html
    }

}