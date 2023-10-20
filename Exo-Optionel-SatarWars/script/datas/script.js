// function moviesList() {
//     fetch('https://swapi.dev/api/films/')
//         .then(req => req.json())
//         .then(data => {
//             const {results} = data
//             console.log(results)
//             results.forEach(ele => {
//                 const {characters} = ele 
//                 console.log(ele.title);
//                 console.log(characters);
//             });
//         })
//         .catch(err => console.log(err))
// }


// function dataFetch(url, error){
//     fetch(url)
//         .then(req => req.json())
//         .then(data => data)
//         .catch(err => console.log(err+": "+error))
// }