// fetch api
async function dataFetch(url, error){
    return await fetch(url)
        .then(req => req.json())
        .then(data => data)
        .catch(err => console.log(err+": "+error))
}


// verif localstorage
const createLocalStorage = async (name, url) =>{
    if (!localStorage.getItem(name)) {
        let tamponTab = [];
        const {results} = await dataFetch(url, `Probleme, not access ${name} Api !`)
        results.forEach(el => {
            tamponTab.push(el)
        });
        localStorage.setItem(name, JSON.stringify(tamponTab))
    } else {
        return localStorage.getItem(name)
    }
}


// DATAS MOVIES API
const reqMoviesDatas = async () => {
    return await createLocalStorage('Movies','https://swapi.dev/api/films/')
}


// DATAS STARSHIPS API
const reqStarshipDatas = async () => {
    return await createLocalStorage('Starship','https://swapi.dev/api/starships/')
}


// DATAS PLANETS API
const reqPlanetsDatas = async () => {
    return await createLocalStorage('Planets','https://swapi.dev/api/planets/')
}


// DATAS CHARECTERS API
const reqCharactersDatas = async () => {
    return await createLocalStorage('Characters','https://swapi.dev/api/people/')
}


// appel fnc
reqMoviesDatas();
reqStarshipDatas()
reqPlanetsDatas()
reqCharactersDatas()