
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
let faucon_millenium = document.querySelector('.faucon_millenium')
// TEMPLATE
let template_loading = document.querySelector('.template_loading')
let template_error = document.querySelector('.template_error')

// Audio
// let audio = document.querySelector('video')
// let btn_audio = document.querySelector('.btn_audio')

// MODAL
let modal = document.getElementById('modal')
let modal_bloc_items = modal.querySelector('.bloc_items')
let modal_btn_modal_close = modal.querySelector('.btn_modal_close')
// MODAL INFOS
let modal_infos = document.getElementById('modal_infos')
let modal_bloc_items_infos = modal_infos.querySelector('.bloc_items')
let modal_btn_modal_close_infos = modal_infos.querySelector('.btn_modal_close')


// MODAL
function modalOpenClose() {
    modal.classList == 'modal_close' ?
    modal.classList = 'modal_open' :
    modal.classList = 'modal_close'
}
// MODAL INFOS
function modalInfosOpenClose() {
    modal_infos.classList == 'modal_close' ?
    modal_infos.classList = 'modal_open' :
    modal_infos.classList = 'modal_close'
}



// DATAS INFOS
async function modalInfos(value){
    // modal_bloc_items_infos.innerHTML = template_loading.innerHTML

    const requetInfosDatas = async (background= null ,value, titre, fnc) => {
        let req = await fnc()
        req = JSON.parse(req)
        modal_bloc_items_infos.innerText = ""
        if (background == null) {
            // si null, c'est la list de films
            
            req.filter(ele => {
                if (ele.title == value) {
                    let item = document.createElement('div')
                    let h2 = document.createElement('h2')
                    let title_actor = document.createElement('h4')
                    let director = document.createElement('p')
                    let p = document.createElement('p')
                    let text='';

                    title_actor.innerText = "Characters present:"
                    item.classList.add('item')
                    h2.innerText = `${titre}: ${value}`
                    director.innerText = `Director: ${ele.director}`

                    item.append(h2, director, title_actor)
        
                    ele.characters.forEach(character => {
                        let data = async ()=>{
                            let name = await dataFetch(character, 'error de serveur')
                            text += `${name.name}, `
                            p.innerText = text
                        }
                        data()
                    })
                    
                    item.appendChild(p)
                    modal_bloc_items_infos.append(item)
                    setTimeout(() => {
                        tab_img_movies.filter(f => {
                            f.nameTitle == value ? modal_infos.style.backgroundImage = `url('${f.urlImg}')` : ''})
                    }, 300);
                }
            })

        } else {
            req.filter(ele => {
                if (ele.name == value) {
                    let item = document.createElement('div')
                    let h2 = document.createElement('h2')
                    let ul = document.createElement('ul')
        
                    let li_title = document.createElement('li')
                    li_title.innerText = "Present in these films:"
                    ul.appendChild(li_title)
        
                    ele.films.forEach(film => {
                        let data = async ()=>{
                            let li = document.createElement('li')
                            let title = await dataFetch(film, 'error de serveur')
        
                            li.innerText = title.title
                            ul.appendChild(li)
                        }
                        data()
                    })
        
                    item.classList.add('item')
                    h2.innerText = `${titre}: ${value}`
        
                    item.append(h2,ul)
                    modal_bloc_items_infos.append(item)
                    setTimeout(() => {
                        background.filter(f => {
                            f.nameTitle == value ? modal_infos.style.backgroundImage = `url('${f.urlImg}')` : ''})
                    }, 300);
                }
            })
        }
    }

    tab_img_movies.filter(a => {
        if (a.nameTitle == value) {
            console.log('movie');
            requetInfosDatas(null, value, 'Film', reqMoviesDatas)
        }
    })
    tab_img_starships.filter(a => {
        if (a.nameTitle == value) {
            console.log('starship');
            requetInfosDatas(tab_img_starships ,value, 'Starship', reqStarshipDatas)
        }
    })
    tab_img_planets.filter(a => {
        if (a.nameTitle == value) {
            console.log('planet');
            requetInfosDatas(tab_img_planets ,value, 'Planet', reqPlanetsDatas)
        }
    })
    tab_img_characters.filter(a => {
        if (a.nameTitle == value) {
            console.log('character');
            requetInfosDatas(tab_img_characters ,value, 'Character', reqCharactersDatas)
        }
    })
}



const listMovies = async () => {
    tab_img_modal.filter(f => {f.nameModal == 'movies' ? modal.style.backgroundImage = `url('${f.urlImg}')` : ''})
    modal_bloc_items.innerHTML = template_loading.innerHTML
    let tamponTab;
    tamponTab = await reqMoviesDatas();
    tamponTab = JSON.parse(tamponTab)
    console.log(tamponTab);
    
    modal_bloc_items.innerText = ""
    tamponTab.forEach(ele => {
        let item = document.createElement('div')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')

        item.classList.add('item')
        tab_img_movies.filter(f => {f.nameTitle == ele.title ? img.src = f.urlImg : ''})
        
        h3.innerText = ele.title
        
        item.append(h3, img)
        modal_bloc_items.appendChild(item)
    });
    modal_bloc_items.querySelectorAll('h3').forEach(el => {
        el.addEventListener('click', (elem) => {
            modalInfosOpenClose()
            modalInfos(elem.target.innerText)
        } )
    })
}

const listStarships = async () => {
    tab_img_modal.filter(f => {f.nameModal == 'starships' ? modal.style.backgroundImage = `url('${f.urlImg}')` : ''})
    modal_bloc_items.innerHTML = template_loading.innerHTML
    let tamponTab;
    tamponTab = await reqStarshipDatas();
    tamponTab = JSON.parse(tamponTab)
    console.log(tamponTab);
    
    modal_bloc_items.innerText = ""
    tamponTab.forEach(ele => {
        let item = document.createElement('div')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')

        item.classList.add('item')
        tab_img_starships.filter(f => {f.nameTitle == ele.name ? img.src = f.urlImg : ''})
        
        h3.innerText = ele.name
        
        item.append(h3, img)
        modal_bloc_items.appendChild(item)
    });
    modal_bloc_items.querySelectorAll('h3').forEach(el => {
        el.addEventListener('click', (elem) => {
            modalInfosOpenClose()
            modalInfos(elem.target.innerText)
        } )
    })
}

const listPlanets = async () => {
    tab_img_modal.filter(f => {f.nameModal == 'planets' ? modal.style.backgroundImage = `url('${f.urlImg}')` : ''})
    modal_bloc_items.innerHTML = template_loading.innerHTML
    let tamponTab;
    tamponTab = await reqPlanetsDatas();
    tamponTab = JSON.parse(tamponTab)
    console.log(tamponTab);
    
    modal_bloc_items.innerText = ""
    tamponTab.forEach(ele => {
        let item = document.createElement('div')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')

        item.classList.add('item')
        tab_img_planets.filter(f => {f.nameTitle == ele.name ? img.src = f.urlImg : ''})
        
        h3.innerText = ele.name
        
        item.append(h3, img)
        modal_bloc_items.appendChild(item)
    });
    modal_bloc_items.querySelectorAll('h3').forEach(el => {
        el.addEventListener('click', (elem) => {
            modalInfosOpenClose()
            modalInfos(elem.target.innerText)
        } )
    })
}

const listCharacters = async () => {
    tab_img_modal.filter(f => {f.nameModal == 'characters' ? modal.style.backgroundImage = `url('${f.urlImg}')` : ''})
    modal_bloc_items.innerHTML = template_loading.innerHTML
    let tamponTab;
    tamponTab = await reqCharactersDatas();
    tamponTab = JSON.parse(tamponTab)
    console.log(tamponTab);
    
    modal_bloc_items.innerText = ""
    tamponTab.forEach(ele => {
        let item = document.createElement('div')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')

        item.classList.add('item')
        img.classList.add('photo_movie')
        tab_img_characters.filter(f => {f.nameTitle == ele.name ? img.src = f.urlImg : ''})
        
        h3.innerText = ele.name
        
        item.append(h3, img)
        modal_bloc_items.appendChild(item)

    });
    modal_bloc_items.querySelectorAll('h3').forEach(el => {
        el.addEventListener('click', (elem) => {
            modalInfosOpenClose()
            modalInfos(elem.target.innerText)
        } )
    })
}


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


// MODAL
// "Show the dialog" button opens the dialog modally
starship_1.addEventListener("click", () => {
    console.log('starship_1');
    modalOpenClose();
    listStarships()
});
starship_2.addEventListener("click", () => {
    console.log('starship_2');
    modalOpenClose();
    listStarships()
});
death_star.addEventListener("click", () => {
    console.log('death_star');
    modalOpenClose();
    listMovies()
});
mustafar_planet.addEventListener("click", () => {
    console.log('mustafar_planet');
    modalOpenClose();
    listPlanets()
});
faucon_millenium.addEventListener("click", () => {
    console.log('faucon_millenium');
    modalOpenClose();
    listCharacters()
});

// "Close" button closes the dialog
modal_btn_modal_close.addEventListener("click", () => {
    modalOpenClose()
});
modal_btn_modal_close_infos.addEventListener("click", () => {
    modalInfosOpenClose()
    modal_infos.style.backgroundImage = `url('')`
});


// AUDIO
// btn_audio.addEventListener('click', ()=>{
//     console.log('btn_audio');
//     audio.classList.toggle('video_on') 
// } )





