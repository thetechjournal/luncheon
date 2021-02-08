let menuLinks = document.getElementsByClassName("menu-link");
let imageBanner = document.getElementById("img-banner-container");
let dishContainer = document.getElementById("dish-container");
let homeSection = document.querySelector('.home-section-1')

window.addEventListener('load', (event) => {
    imageBanner.style.display = "block";
    dishContainer.style.display = "block"
    getRandomDishes();
    homeSection.style.display = "block";
  });

for (let i=0; i<menuLinks.length; i++){
    
    menuLinks[i].addEventListener("click", function() {
        
        let menu = menuLinks[i].textContent;
        if(menu !== 'Home'){
            imageBanner.style.display = "none";
            homeSection.style.display = "none";
            dishContainer.style.display = "block";
            getDishes(menu);
        }
        else {
            imageBanner.style.display = "block";
            homeSection.style.display = "block";
            dishContainer.style.display = "block"
            getRandomDishes();
        }
    })
}

async function getRandomDishes() {
    let dishes = [];
    for (let i=0 ; i<=10; i++) {
        const url = `https://foodish-api.herokuapp.com/api/`;
    let response = await fetch(url)
    let data = await response.json()
    dishes.push(data.image);
    displayDishes(dishes);
    }
}

async function getDishes(menu) {
    let dishes = [];
    let dish = menu.toLowerCase();
    for (let i=1 ; i<=20; i++) {
        const url = `https://foodish-api.herokuapp.com/images/${dish}/${dish}${i}.jpg`;
    dishes.push(url);
    displayDishes(dishes);
    }
}

function displayDishes(dishes) {

    let dishHTML = dishes.map(result => {
     
            // let posterPath = result
            return (`
                <div class="dish-card">
                    <img class="dish-img" src="${result}" />
                </div>
                `)
       }
    ).join('')

    dishContainer.innerHTML = `<div class="dishes">${dishHTML}</div>`
}







