// let main_container = document.querySelector('main .container')
// let btn_submit = document.querySelector('form button')
// let text_datas = document.getElementById('text_datas')
// // let btn_text_datas_close_i = 'bx bx-window-close'
// let btn_text_datas_close_i = 'i_close'


// SIBLES
let intro = document.querySelector('.intro')
let page_bckgrd = document.querySelector('#page')
let starship_1 = document.querySelector('.starship_1')
let starship_2 = document.querySelector('.starship_2')
let bloc_starship_1 = document.querySelector('.bloc_starship_1')
let death_star = document.querySelector('.death_star')
let mustafar_planet = document.querySelector('.mustafar_planet')
let multi_meteors = document.querySelector('.multi_meteors')
let meteor_fire = document.querySelector('.meteor_fire')
// TEMPLATE
let template_loading = document.querySelector('.template_loading')

// MODAL
let modal = document.getElementById('modal')
let modal_bloc_items = modal.querySelector('.bloc_items')
let modal_btn_modal_close = modal.querySelector('.btn_modal_close')


// MODAL
function modalOpenClose() {
    modal.classList == 'modal_close' ?
    modal.classList = 'modal_open' :
    modal.classList = 'modal_close'
}


// IMAGES MOVIES
let tab_img_movies = [
    {movie: "A New Hope", urlImg: "https://images6.alphacoders.com/613/thumb-1920-613328.jpg"},
    {movie: "The Empire Strikes Back", urlImg: "https://images8.alphacoders.com/107/1079738.jpg"},
    {movie: "Return of the Jedi", urlImg: "https://lumiere-a.akamaihd.net/v1/images/052423-hero_3c660922.jpeg?region=0,0,990,743&width=960"},
    {movie: "The Phantom Menace", urlImg: "https://wallpapers.com/images/featured/the-phantom-menace-gj905516peb1f6h7.jpg"},
    {movie: "Attack of the Clones", urlImg: "https://wallpapers.com/images/hd/2560x1600-star-wars-518vy07iwleqen4l.jpg"},
    {movie: "Revenge of the Sith", urlImg: "https://images.alphacoders.com/131/1319774.jpeg"},
]


// MODAL BACKGROUND 
let tab_img_modal = [
    {nameModal: "movies", urlImg: "https://movietalkexpress.files.wordpress.com/2015/04/star-wars-artwork-wallpaper.jpg"},
    {nameModal: "starships", urlImg: ""},
    {nameModal: "planets", urlImg: ""},
    {nameModal: "characters", urlImg: "https://i.pinimg.com/originals/88/b6/d7/88b6d75cd2ea3dd486b9e4218db26ea8.jpg"},
    // {nameModal: "", urlImg: "https://wallpapers.com/images/hd/2560x1600-star-wars-518vy07iwleqen4l.jpg"},
    // {nameModal: "", urlImg: "https://images.alphacoders.com/131/1319774.jpeg"},
]


// document.addEventListener('submit', (e)=> e.preventDefault())
document.addEventListener('click', (e)=>  {
    e.stopPropagation()
});


// EFFET PARALLAX
let starship_1_taille = starship_1.width
let starship_2_taille = starship_2.width
document.addEventListener('scroll', (e)=>{
    // intro
    intro.style.transform = `rotateX(${window.scrollY*0.1}deg)`
    
    // background page
    page_bckgrd.style.backgroundPositionY = `-${window.scrollY/10}px`
    page_bckgrd.style.backgroundPositionX = `-${window.scrollY/10}px`
    
    //starship_1 
    starship_1.style.top = `${-300+window.scrollY*0.5}px`
    starship_1.style.left = `${-500+window.scrollY}px`
    starship_1.style.width = `${starship_1_taille-window.scrollY/10}px`

    //starship_2 
    starship_2.style.top = `${-300+window.scrollY*0.5}px`
    starship_2.style.left = `${-700+window.scrollY}px`
    starship_2.style.width = `${starship_2_taille-window.scrollY/8}px`

    // death_star
    death_star.style.bottom = `${window.scrollY*0.5}px`
    death_star.style.right = `${-400+window.scrollY*0.6}px`

    // multi_meteors
    // multi_meteors.style.top = `${window.scrollY*0.2}px`
    // multi_meteors.style.right = `${-2500+window.scrollY*0.8}px`

    // meteor_fire
    meteor_fire.style.top = `${-1500+window.scrollY*0.6}px`
    meteor_fire.style.right = `${-2000+window.scrollY*0.9}px`

})


// async function dataFetch(url, error){
//     return await fetch(url)
//         .then(req => req.json())
//         .then(data => data)
//         .catch(err => console.log(err+": "+error))
// }


// const movies = async () => {
//     tab_img_modal.filter(f => {f.nameModal == 'movies' ? modal.style.backgroundImage = `url('${f.urlImg}')` : ''})
//     modal_bloc_items.innerHTML = template_loading.innerHTML
//     const {results} = await dataFetch('https://swapi.dev/api/films/', 'probleme de réseau')
//     modal_bloc_items.innerText = ""
//     results.forEach(ele => {
//         // console.log(ele.title);
//         let item = document.createElement('div')
//         let img = document.createElement('img')
//         let h3 = document.createElement('h3')

//         item.classList.add('item')
//         img.classList.add('photo_movie')
//         tab_img_movies.filter(f => {f.movie == ele.title ? img.src = f.urlImg : ''})
        
//         h3.innerText = ele.title
        
//         item.append(h3, img)
//         modal_bloc_items.appendChild(item)
//     });
// }
// movies()


const movies = async () => {
    tab_img_modal.filter(f => {f.nameModal == 'movies' ? modal.style.backgroundImage = `url('${f.urlImg}')` : ''})
    modal_bloc_items.innerHTML = template_loading.innerHTML
    let tamponTab;
    tamponTab = await reqMoviesDatas();
    tamponTab = JSON.parse(tamponTab)
    console.log(tamponTab);
    
    modal_bloc_items.innerText = ""
    tamponTab.forEach(ele => {
        // console.log(ele.title);
        let item = document.createElement('div')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')

        item.classList.add('item')
        img.classList.add('photo_movie')
        tab_img_movies.filter(f => {f.movie == ele.title ? img.src = f.urlImg : ''})
        
        h3.innerText = ele.title
        
        item.append(h3, img)
        modal_bloc_items.appendChild(item)
    });
}

const starship = async () => {
    tab_img_modal.filter(f => {f.nameModal == 'starships' ? modal.style.backgroundImage = `url('${f.urlImg}')` : ''})
    modal_bloc_items.innerHTML = template_loading.innerHTML
    let tamponTab;
    tamponTab = await reqStarshipDatas();
    tamponTab = JSON.parse(tamponTab)
    console.log(tamponTab);
    
    modal_bloc_items.innerText = ""
    tamponTab.forEach(ele => {
        // console.log(ele.title);
        let item = document.createElement('div')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')

        item.classList.add('item')
        img.classList.add('photo_movie')
        tab_img_movies.filter(f => {f.movie == ele.name ? img.src = f.urlImg : ''})
        
        h3.innerText = ele.name
        
        item.append(h3, img)
        modal_bloc_items.appendChild(item)
    });
}


// MODAL
// "Show the dialog" button opens the dialog modally
starship_1.addEventListener("click", () => {
    console.log('starship_1');
    modalOpenClose();
    starship()
});
death_star.addEventListener("click", () => {
    console.log('death_star');
    modalOpenClose();
    movies()
});
mustafar_planet.addEventListener("click", () => {
    console.log('mustafar_planet');
    modalOpenClose();
});

// "Close" button closes the dialog
modal_btn_modal_close.addEventListener("click", () => {
    modalOpenClose()
});








