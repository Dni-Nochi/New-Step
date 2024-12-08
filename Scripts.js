const text = document.getElementById('add_text');
console.log(text)

const listener = document.getElementById('list_anime_movie')
console.log(listener)

let checkCliker = 0;
listener.addEventListener('click', ()=> {
    checkCliker++
})

console.log(checkCliker)


const home = document.getElementById('home');
console.log(home);

let clicked = 0
home.addEventListener('click', () => {
    clicked++
    console.log(clicked)
})
