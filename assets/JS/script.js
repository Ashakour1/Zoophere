let allpath = document.querySelectorAll('path')

let selectedCountry = document.querySelector('.country')

let map = document.querySelector('.world')

let image_close = document.querySelector('.back-button')

let image_des = document.querySelector('body')

console.log(image_close , image_des)


allpath.forEach(path => {
    path.addEventListener('click' , () => {
        const name = path.getAttribute('id')

        map.style.display = "none"

        selectedCountry.innerHTML = `<div class="heading">
        <h1>The Selected Country is <span>${name}</span></h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          
    </div>

    <h3>So here is some Species from <span>${name}</span></h3>
<div class="images">
    <div class="image">
        <a href="./Pages/animalFact.html"><img src="./assets/images/photo-1456926631375-92c8ce872def.avif" width="320" alt="">
        <span>Leopord</span></a>
    </div>
    <div class="image">
        <a href="./Pages/animalFact.html"><img src="./assets/images/photo-1456926631375-92c8ce872def.avif" width="320" alt="">
        <span>Leopord</span></a>
    </div>
    <div class="image">
        <a href="./Pages/animalFact.html"><img src="./assets/images/photo-1456926631375-92c8ce872def.avif" width="320" alt="">
        <span>Leopord</span></a>
    </div>
    <div class="image">
        <a href="./Pages/animalFact.html"><img src="./assets/images/photo-1456926631375-92c8ce872def.avif" width="320" alt="">
        <span>Leopord</span></a>
    </div>
    <div class="image">
        <a href="./Pages/animalFact.html"><img src="./assets/images/photo-1456926631375-92c8ce872def.avif" width="320" alt="">
        <span>Leopord</span></a>
    </div>
    <div class="image">
        <a href="./Pages/animalFact.html"><img src="./assets/images/photo-1456926631375-92c8ce872def.avif" width="320" alt="">
        <span>Leopord</span></a>
    </div>`
    selectedCountry.style.display = "block"

    let close = selectedCountry.querySelector('.close')

    close.addEventListener('click' , ()=>{
        selectedCountry.style.display = "none"
        map.style.display = "block"
    })

    

        
    })
})

image_close.addEventListener('click' , () => {
    window.location.href = './../index.html';
})