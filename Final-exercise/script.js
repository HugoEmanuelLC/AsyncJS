let search_input = document.getElementById('search')
let btn_submit = document.querySelector('form button')
let text_datas = document.getElementById('text_datas')
let modal = document.getElementById('modal')
let modal_item = modal.querySelector('.item')
let modal_btn_modal_close = modal.querySelector('.btn_modal_close')
// let btn_text_datas_close_i = 'bx bx-window-close'
let btn_text_datas_close_i = 'i_close'

// MODAL
const dialog = document.querySelector("dialog");
const dialog_bloc = document.querySelector("dialog .bloc");
// const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");



function searchDatas(word) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
        .then(datas => datas.json())
        .then(data => {
            console.log(data);
            text_datas.innerText = ''
            let button = document.createElement('button')
            let i_close = document.createElement('i')
            button.classList = 'btn_text_datas_close'
            i_close.classList = btn_text_datas_close_i
            i_close.innerText = 'X'
            button.append(i_close)
            text_datas.append(button)
            data.meals.forEach(ele => {
                let h4 = document.createElement('h4')
                let img = document.createElement('img')
                let bloc_item = document.createElement('div')
                let i = document.createElement('i')

                h4.innerText = ele.strMeal
                h4.setAttribute('accessKey', ele.idMeal)
                img.setAttribute('src', ele.strMealThumb)
                img.setAttribute('accesskey', ele.idMeal)
                bloc_item.classList = 'bloc_item'
                i.classList = 'bx bx-search-alt'
                i.setAttribute('accesskey', ele.idMeal)

                
                bloc_item.append(img, h4, i)
                text_datas.append(bloc_item)
            });
            
        })
        .catch(e => console.error(e))
}
function itemId(id) {
    let titre_ingredient = document.createElement('h4')
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(datas => datas.json())
        .then(data => {
            console.log(data);
            // text_datas.innerText = ''
            modal_item.innerText = ''
            data.meals.forEach(ele => {
                let bloc_item = document.createElement('div')
                let img = document.createElement('img')
                let h4 = document.createElement('h4')
                let p_description = document.createElement('p')

                let id_strIngredient_strMeasure = 1
                let id_strIngredient_strMeasure_boolean = true
                let id_ingredient;
                let id_measure;

                img.setAttribute('src', ele.strMealThumb)
                h4.innerText = ele.strMeal
                p_description.innerText = ele.strInstructions
                titre_ingredient.innerText = 'Ingredient:'
                titre_ingredient.style.marginTop = '40px'

                bloc_item.append(h4, p_description, titre_ingredient)
                
                while (id_strIngredient_strMeasure_boolean == true) {

                        id_measure = ele['strMeasure'+id_strIngredient_strMeasure]
                        id_ingredient = ele['strIngredient'+id_strIngredient_strMeasure]

                    if (id_measure !== '' && id_measure !== null && 
                        id_ingredient !== '' && id_ingredient !== null) {

                        let p_ingredient = document.createElement('p')
                        console.log(`${id_ingredient} => ${id_measure}`);

                        p_ingredient.innerText = `- ${id_ingredient}, ${id_measure}`;
                        bloc_item.appendChild(p_ingredient);
                        
                    } else {
                        id_strIngredient_strMeasure_boolean = false
                        console.log('je suis dans le else ');
                    }

                    id_strIngredient_strMeasure++
                }
                modal_item.append(img, bloc_item)
                // dialog.showModal();
                modalOpenClose()
            });
            
        })
        .catch(e => console.error(e))
}
function modalOpenClose() {
    modal.classList == 'modal_close' ?
    modal.classList = 'modal_open' :
    modal.classList = 'modal_close'
}



document.addEventListener('click', (e)=> {
    e.stopPropagation(); 
    // console.log(e.target);
    e.target.classList == btn_text_datas_close_i ?
    text_datas.innerText = ' ' : null
})
document.addEventListener('submit', (e)=> e.preventDefault())



search_input.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 2) {
        let rep = async ()=>{
            return await searchDatas(e.target.value)
        }
        rep()
    }else{}
})


btn_submit.addEventListener('click', (e) => {
    console.log(search_input.value);
    if (search_input.value.length > 2) {
        let rep = async ()=>{
            return await searchDatas(search_input.value)
        }
        rep()
    }
})


text_datas.addEventListener('click',(e)=>{
    console.log(e.target.accessKey);
    if (e.target.accessKey) {
        let rep = async ()=>{
            return await itemId(e.target.accessKey)
        }
        rep() 
    } else {}
})





// MODAL
// "Show the dialog" button opens the dialog modally
// showButton.addEventListener("click", () => {
//   dialog.showModal();
// });
// "Close" button closes the dialog
modal_btn_modal_close.addEventListener("click", () => {
    modalOpenClose()
});