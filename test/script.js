let body = document.querySelector('body')

body.style.backgroundColor = 'blue'

const bckgrd = (color) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 500;
    console.log(delay);
    setTimeout(() => {
      if (delay > 1000) {
        reject('white');
      } else {
        resolve(color);
      }
    }, delay);
  })
}


bckgrd('yellow')
.then((data) => {
  body.style.backgroundColor = data
  return bckgrd('red')
})
.then((data) => {
  body.style.backgroundColor = data
  return bckgrd('cyan')
})
.then((data) => {
  body.style.backgroundColor = data
  return bckgrd('violet')
})
.then((data) => {
  body.style.backgroundColor = data
  return bckgrd('green')
})
.then((data) => {
  body.style.backgroundColor = data
  return bckgrd('purple')
}).then((data) => {
  body.style.backgroundColor = data
})
.catch((error) => {
  body.style.backgroundColor = error
})