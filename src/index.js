document.addEventListener('DOMContentLoaded', () => {

 const pupBar = document.getElementById('dog-bar')
 const pupFilterBtn = document.getElementById('good-dog-filter')
 const dogInfo = document.getElementById('dog-info')

//  Create span
function renderName(pups){
    pups.forEach(pup => {
        const pupName = document.createElement('span')
        pupName.innerText = pup.name
        pupName.id = pup.id

        pupName.addEventListener('click', (getDogId))
        pupBar.appendChild(pupName)


    })
};


// GET request
function getAllDogs(){
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
    .then(renderName)
};
getAllDogs();

function getDogId(event){
    fetch(`http://localhost:3000/pups/${event.target.id}`)
    .then(resp => resp.json())
    .then(renderInfo)
}

function renderInfo(pup){
    dogInfo.innerHTML = ""
    const pupImg = document.createElement('img')
    const heading = document.createElement('h2')
    const btn = document.createElement('button')

    pupImg.src = pup.image
    heading.innerText = pup.name
    btn.innerText = pup.isGoodDog

    dogInfo.append(pupImg, heading, btn)
};

function toggle(button) {
    if (button.value === 'OFF') {
        button.value = 'ON'
    } else {
        button.value = 'OFF'
    }
}

pupFilterBtn.addEventListener('click', () => {
    if (pupFilterBtn.innerText === 'Filter good dogs: OFF') {
        pupFilterBtn.innerText = 'Filter good dogs: ON'
    } else {
        pupFilterBtn.innerText = 'Filter good dogs: OFF'
    }
})

// PATCH Request
function updateIsGoodDog(pups) {
    fetch(`http://localhost:3000/pups/:id`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pups)
    })
    .then(resp => resp.json())
    .then(pup => console.log(pup))
}
console.log(updateIsGoodDog)



























})