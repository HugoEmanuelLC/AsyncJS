

// let tabColors = [
//   'red', 'green', 'blue', 'pink'
// ] 


// function generateBG(color, delay) {
//   return new Promise((res, rej) =>{
//     setTimeout(() => {
//       let test = tabColors.filter(ele => ele == color)
//       if (test.length > 0) {
//         document.querySelector('body').style.backgroundColor = color
//           res()
//       } else {
//         document.querySelector('body').style.backgroundColor = 'black'
//           rej()
//       }
//     }, delay);
//   })
// }



// const asyAweit = async () => {
//   await generateBG('red', 1000)
//   await generateBG('green', 1000)
//   await generateBG('blue', 1000)
//   await generateBG('rrrr', 1000)
// }

// asyAweit()








// function generateBG(color) {
//   return new Promise((res, rej) =>{
//     const delay = Math.random().toFixed(1);
//     setTimeout(() => {
//       if (delay <=  0.5) {
//         console.log(`${delay} = ${color}`);
//         document.querySelector('body').style.backgroundColor = color
//         res(`ok, is good ${color}`)
//       } else {
//         document.querySelector('body').style.backgroundColor = 'black'
//         rej(`oh no! an error, so big ${delay} = ${color} !!`)
//       }
//     }, 2000);
//   })
// }



// const asyAweit = async () => {
//   try {
//     let reponse;
//     reponse = await generateBG('red')
//     console.log(reponse);
//     reponse = await generateBG('green')
//     console.log(reponse);
//     reponse = await generateBG('blue')
//     console.log(reponse);
    
//   } catch (error) {
//     console.log(error);
//   } 
// }


// asyAweit()







const rdm = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let x = Math.random().toFixed(2)
      console.log(x);
      if (x >= 0.5) {
        res(`ok ${x}`) 
      } else {
        rej('error')
      }
    }, 2000);
  })
}





async function final (){
const x = await rdm()
}

final()
.then((data) => console.log(data))
.catch((data) => console.log(data))