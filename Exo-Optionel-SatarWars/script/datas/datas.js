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


// // DATAS MOVIES OF CHARACTERS
// const reqMoviesCharactersDatas = async (character, url) => {
//     return await createLocalStorage(character, url)
// }


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



// IMAGES MOVIES
let tab_img_movies = [
    {nameTitle: "A New Hope", urlImg: "https://images6.alphacoders.com/613/thumb-1920-613328.jpg"},
    {nameTitle: "The Empire Strikes Back", urlImg: "https://images8.alphacoders.com/107/1079738.jpg"},
    {nameTitle: "Return of the Jedi", urlImg: "https://lumiere-a.akamaihd.net/v1/images/052423-hero_3c660922.jpeg?region=0,0,990,743&width=960"},
    {nameTitle: "The Phantom Menace", urlImg: "https://wallpapers.com/images/featured/the-phantom-menace-gj905516peb1f6h7.jpg"},
    {nameTitle: "Attack of the Clones", urlImg: "https://wallpapers.com/images/hd/2560x1600-star-wars-518vy07iwleqen4l.jpg"},
    {nameTitle: "Revenge of the Sith", urlImg: "https://images.alphacoders.com/131/1319774.jpeg"},
]


// IMAGES STARSHIPS
let tab_img_starships = [
    {nameTitle: "CR90 corvette", urlImg: "https://i.pinimg.com/originals/ec/43/6d/ec436d7a4551d7e70b0fbab66612576b.jpg"},
    {nameTitle: "Star Destroyer", urlImg: "https://wi.wallpapertip.com/wsimgs/164-1644284_star-wars-destroyer-hd.jpg"},
    {nameTitle: "Sentinel-class landing craft", urlImg: "https://fractalsponge.net/wp/wp-content/uploads/2022/02/sentinel6-1920x1080.jpg"},
    {nameTitle: "Death Star", urlImg: "https://wallpapers.com/images/hd/death-star-background-2mci7z3c5q04djt5.jpg"},
    {nameTitle: "Millennium Falcon", urlImg: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701809521.jpg"},
    {nameTitle: "Y-wing", urlImg: "https://wallpapercave.com/wp/wp6781881.jpg"},
    {nameTitle: "X-wing", urlImg: "https://images3.alphacoders.com/275/275075.jpg"},
    {nameTitle: "TIE Advanced x1", urlImg: "https://i.pinimg.com/1200x/d2/d5/fc/d2d5fc391b23085eba867874ee05c973.jpg"},
    {nameTitle: "Executor", urlImg: "https://wallpapercave.com/wp/wp9171797.jpg"},
    {nameTitle: "Rebel transport", urlImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a50fed6-5f37-42b3-aba5-b48c99a0aa08/d78zzb2-a7e4b4e1-3d65-41a0-862e-acda27b76f17.jpg/v1/fill/w_1069,h_748,q_70,strp/rebel_transport_box_art_by_wraithdt_d78zzb2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk2IiwicGF0aCI6IlwvZlwvMmE1MGZlZDYtNWYzNy00MmIzLWFiYTUtYjQ4Yzk5YTBhYTA4XC9kNzh6emIyLWE3ZTRiNGUxLTNkNjUtNDFhMC04NjJlLWFjZGEyN2I3NmYxNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HrKwz2Xj-1H9dZRa33s6t_76S6q1XDZZy5rMtjKbrRw"},
]


// IMAGES PLANETS
let tab_img_planets = [
    {nameTitle: "Tatooine", urlImg: "https://wallpapers.com/images/hd/star-wars-landscape-1920-x-1080-et6iygoitkqu8vmy.jpg"},
    {nameTitle: "Alderaan", urlImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95e9c68e-b0cd-42ed-8a66-0bac7a4eb178/dbgqwu0-f8a237a2-0a74-4b11-bddd-4df145dd99ef.jpg/v1/fill/w_700,h_315,q_70,strp/alderaan_by_menyhei_dbgqwu0-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDYyIiwicGF0aCI6IlwvZlwvOTVlOWM2OGUtYjBjZC00MmVkLThhNjYtMGJhYzdhNGViMTc4XC9kYmdxd3UwLWY4YTIzN2EyLTBhNzQtNGIxMS1iZGRkLTRkZjE0NWRkOTllZi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wMP-djFWV4VcgNxmM4vjmxQd0Nep_vDbh28kgoB54wU"},
    {nameTitle: "Yavin IV", urlImg: "https://wallpapercave.com/wp/wp8343576.jpg"},
    {nameTitle: "Hoth", urlImg: "https://wallpapers.com/images/hd/battle-of-hoth-1920-x-1080-wallpaper-13pudgn3romlk43s.jpg"},
    {nameTitle: "Dagobah", urlImg: "https://cache.desktopnexus.com/thumbseg/28/28980-bigthumbnail.jpg"},
    {nameTitle: "Bespin", urlImg: "https://images6.alphacoders.com/883/thumb-1920-883129.jpg"},
    {nameTitle: "Endor", urlImg: "https://c4.wallpaperflare.com/wallpaper/415/637/260/2560x1080-px-atat-battle-of-endor-speeder-bike-wallpaper-preview.jpg"},
    {nameTitle: "Naboo", urlImg: "https://pbs.twimg.com/media/FEATPh_XoAY5WP-?format=jpg&name=large"},
    {nameTitle: "Coruscant", urlImg: "https://wallpapercave.com/wp/Rb3PcHp.jpg"},
    {nameTitle: "Kamino", urlImg: "https://cache.desktopnexus.com/thumbseg/2604/2604235-bigthumbnail.jpg"},
]


// IMAGES CHARACTERS
let tab_img_characters = [
    {nameTitle: "Luke Skywalker", urlImg: "https://www.nme.com/wp-content/uploads/2016/09/2014StarWars_Press_LukeSkywalker_041214-2-696x464.jpg"},
    {nameTitle: "C-3PO", urlImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4Y0Zu1QyBelK5aQHz5uNtpjz8KQsUUTRZw&usqp=CAU"},
    {nameTitle: "R2-D2", urlImg: "https://wallpapers.com/images/featured/r2d2-gkkjwxcvzp44h5v6.jpg"},
    {nameTitle: "Darth Vader", urlImg: "https://www.enwallpaper.com/wp-content/uploads/2022/07/7406972b03e068d5bc1b2de1b1a97d11.jpg"},
    {nameTitle: "Leia Organa", urlImg: "https://media.gettyimages.com/id/607402204/fr/photo/american-actress-carrie-fisher-on-the-set-of-star-wars-episode-iv-a-new-hope-written-directed.jpg?s=612x612&w=0&k=20&c=DwX4iNreedO7RslQ2POXFrlkHI8svYHd1mFg0DiCMik="},
    {nameTitle: "Owen Lars", urlImg: "https://images7.alphacoders.com/675/675815.jpg"},
    {nameTitle: "Beru Whitesun lars", urlImg: "https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=640%2C0%2C480%2C480"},
    {nameTitle: "R5-D4", urlImg: "https://i.pinimg.com/originals/81/91/16/819116f3e225df0736075b6a688575a4.jpg"},
    {nameTitle: "Biggs Darklighter", urlImg: "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878"},
    {nameTitle: "Obi-Wan Kenobi", urlImg: "https://images7.alphacoders.com/131/1316348.jpeg"},
]


// MODAL BACKGROUND 
let tab_img_modal = [
    {nameModal: "movies", urlImg: "https://movietalkexpress.files.wordpress.com/2015/04/star-wars-artwork-wallpaper.jpg"},
    {nameModal: "starships", urlImg: "https://cdn.wallpapersafari.com/40/3/xdgAKb.jpg"},
    {nameModal: "planets", urlImg: "https://www.pixelstalk.net/wp-content/uploads/images6/Star-Wars-Space-Desktop-Background.jpg"},
    {nameModal: "characters", urlImg: "https://i.pinimg.com/originals/88/b6/d7/88b6d75cd2ea3dd486b9e4218db26ea8.jpg"},
    // {nameModal: "", urlImg: "https://wallpapers.com/images/hd/2560x1600-star-wars-518vy07iwleqen4l.jpg"},
    // {nameModal: "", urlImg: "https://images.alphacoders.com/131/1319774.jpeg"},
]