// let main_container = document.querySelector('main .container')
// let btn_submit = document.querySelector('form button')
// let text_datas = document.getElementById('text_datas')
// // let btn_text_datas_close_i = 'bx bx-window-close'
// let btn_text_datas_close_i = 'i_close'



// MODAL
let modal = document.getElementById('modal')
let modal_item = modal.querySelector('.item')
let modal_btn_modal_close = modal.querySelector('.btn_modal_close')



// MODAL
function modalOpenClose() {
    modal.classList == 'modal_close' ?
    modal.classList = 'modal_open' :
    modal.classList = 'modal_close'
}



// SIBLES
let intro = document.querySelector('.intro')
let page_bckgrd = document.querySelector('#page')
let starship_1 = document.querySelector('.starship_1')
let starship_2 = document.querySelector('.starship_2')
let bloc_starship_1 = document.querySelector('.bloc_starship_1')
let death_star = document.querySelector('.death_star')
let mustafar_planet = document.querySelector('.mustafar_planet')
// let multi_meteors = document.querySelector('.multi_meteors')
let meteor_fire = document.querySelector('.meteor_fire')



// document.addEventListener('submit', (e)=> e.preventDefault())
document.addEventListener('click', (e)=>  {
    e.stopPropagation()
});



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

async function dataFetch(url, error){
    return await fetch(url)
        .then(req => req.json())
        .then(data => data)
        .catch(err => console.log(err+": "+error))
}

const movies = async () => {
    const {results} = await dataFetch('https://swapi.dev/api/films/', 'probleme de réseau')
    // console.log(results);
    results.forEach(ele => {
        // console.log(ele.title);
        
    });
}


// MODAL
// "Show the dialog" button opens the dialog modally
starship_1.addEventListener("click", () => {
    console.log('clique');
    modalOpenClose();
});
death_star.addEventListener("click", () => {
    console.log('clique');
    modalOpenClose();
});
mustafar_planet.addEventListener("click", () => {
    console.log('clique');
    modalOpenClose();
    movies()
});

// "Close" button closes the dialog
modal_btn_modal_close.addEventListener("click", () => {
    modalOpenClose()
});








