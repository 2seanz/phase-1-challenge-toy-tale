 let addToy = false;
// const toyURL = "http://localhost:3000/toys/"
// //adjURL = "http://localhost:3000/toys/:id"
// // fetchToy()
// //renderToyCard()
// //formSubmit()
// //incrementLikes()
// getToys()
// addNewToy()

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


// //function fetchToy() {
// fetch(toyURL)
// .then(res => res.json())
// //.then(console.log)
// .then(data => data.forEach((toy) => {
//   renderToyCard(toy)
// }))
// //}

// function renderToyCard(toy) {
//   const toyCard = document.createElement('div')
//     toyCard.className = 'card'
  
//   const toyName = document.createElement('h2')
//   const toyImg = document.createElement('img')
//     toyImg.className = "toy-avatar"
//   const toyLikes = document.createElement('p')
//   const toyBtn = document.createElement('button')
//     toyBtn.className = "like-btn"
  
  
//   toyName.innerText = toy.name
//   toyImg.src = toy.image
//   toyLikes.innerText = toy.likes
//   toyBtn.innerText = 'Like'
  
  
//   toyCard.appendChild(toyName)
//   toyCard.appendChild(toyImg)
//   toyCard.appendChild(toyLikes);
//   toyCard.appendChild(toyBtn)
  
//   document.querySelector('#toy-collection').appendChild(toyCard)
  
//   function incrementLikes() {
//     toyBtn.addEventListener('click', (event) => {
//       const toyId = event.target.id
//       //let currentLikes = toyLikes.innerText
//       let currentLikes = toyLikes.innerText
//       let newLikes = {
//         likes: currentLikes + 1
//       }
//       const reqObj = {
//         headers: {"Content-Type": "application/json",
//         Accept: "application/json"
//       },
//         method: "PATCH",
//         body: JSON.stringify({newLikes}),
//     }

//     fetch(toyURL+toyId, reqObj)
//         .then(res => res.json())
//         .then(updateLikes => {
//           toyLikes.innerText = updateLikes.likes
//         })
// })
// }
// incrementLikes()
// }

    
 

// function formSubmit() {
//   document.querySelector(".add-toy-form").addEventListener("submit", (event) => {
//       event.preventDefault()

//       const createNewToy = {
//           name: event.target['name'].value,
//           image: event.target['image'].value,
//           likes: "0",
//       }

//       const reqObj = {
//           headers: {"Content-Type": "application/json"},
//           method: "POST",
//           body: JSON.stringify(createNewToy),
//       }

//       fetch(toyURL, reqObj)
//           .then(res => res.json())
//           .then(renderToyCard)

//       event.target.reset()
//   })
// }

//ADAMS WAY
// const BASE_URL = "http://localhost:3000/toys/"

// getToys()
// addNewToy()


// function getToys() {
//   fetch(BASE_URL)
//     .then(r => r.json())
//     .then(toysArray => toysArray.forEach(renderToy))
// }

// function renderToy(toyObj){
//   const toyCard = document.createElement("div")
//   toyCard.className = "card"

//   const name = document.createElement("h2")
//   name.innerText = toyObj.name
  

//   const toyImg = document.createElement("img")
//   toyImg.src = toyObj.image
//   toyImg.classList.add("toy-avatar")

//   const likes = document.createElement("p")
//   likes.innerText = `Likes: ${toyObj.likes}`
//   likes.className = toyObj.id
//   console.log(likes)

//   const button = document.createElement("button") 
//   button.innerText = "<3 like meee"
//   button.id = toyObj.id


//   button.addEventListener('click', (e) => {
//     // The id of the thing we need to update
//     console.log(e.target.id)
//     // We have to derrive a new value to send the server 
//     toyObj.likes += 1

//     const newLikes = { likes: toyObj.likes + 1 }

//     const reqObj = {
//       headers: {"Content-Type": "application/json"},
//       method: "PATCH",
//       body: JSON.stringify(newLikes)
//     }

//     fetch(BASE_URL+e.target.id, reqObj)
//       .then(r => r.json())
//       .then((updatedToy) => 
//         document.getElementsByClassName(updatedToy.id)[0].innerText = `Likes: ${updatedToy.likes}`)


//   })

//   toyCard.append(name, toyImg, likes, button)

//   document.querySelector("#toy-collection").appendChild(toyCard)

// }

// function addNewToy(){
//   document.querySelector(".add-toy-form").addEventListener("submit", function(event){
//     event.preventDefault()

//     //Grab toy and name values from the input
//     //Make a newToy object to send to the server

//     const newToy = {
//       name: event.target[0].value,
//       image: event.target[1].value,
//       likes: 0
//     }

  

//     const reqObj = {
//       headers: {"Content-Type": "application/json"},
//       method: "POST",
//       body: JSON.stringify(newToy)
//     }
//     //Make our fetch "POST"

//     fetch(BASE_URL, reqObj)
//       .then(r => r.json())
//       .then(renderToy)
//     // Render the new toy
//   })
// }



// // document.querySelector("#toy-collection").innerHTML +=` <div class="card">
// //   <h2>${toyObj.name}</h2>
// //   <img src=${toyObj.image} class="toy-avatar" />
// //   <p>${toyObj.likes} Likes </p>
// //   <button class="like-btn" id="[toy_id]">Like <3</button>
// // </div>`


// new attempt
const BASE_URL = 'http://localhost:3000/toys/'

getToys()

function getToys() {
  fetch(BASE_URL)
  .then(res => res.json())
  .then(data => data.forEach(renderToy))
}

function renderToy(toy) {
  const toyCard = document.createElement('div')
  toyCard.className = 'card'
  
  const toyName = document.createElement('h2')
  toyName.innerText = toy.name
  
  const toyImg = document.createElement('img')
  toyImg.src = toy.image
  toyImg.classList.add('toy-avatar')
  
  const toyLikes = document.createElement('p')
  toyLikes.innerText = `Likes ${toy.likes}`
  toyLikes.className = toy.id
  
  
  const toyBtn = document.createElement('button')
  toyBtn.className = 'like-btn'
  toyBtn.innerText = '<3 like meeee'
  toyBtn.id = toy.id
  
  toyBtn.addEventListener('click', (e) => {
    console.log(e.target.id)
    toy.likes += 1
    
    const newLikes = { likes: toy.likes + 1}
    
    const reqObj = {
      headers: {"Content-Type": "application/json"},
      method: "PATCH",
      body: JSON.stringify(newLikes)
    }
    
    fetch(BASE_URL+e.target.id, reqObj)
    .then(res => res.json())
    .then((updatedToy) => 
      document.getElementsByClassName(updatedToy.id)[0].innerText = `Likes: ${updatedToy.toyLikes}`)
    
  })
  toyCard.append(toyName, toyImg, toyLikes, toyBtn)
  document.querySelector('#toy-collection').appendChild(toyCard)
  
}

function addNewToy() {
  document.querySelector('.add-toy-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const newToy = {
      name: e.target[0].value,
      image: e.target[1].value,
      likes: 0
    }

    const reqObj = {
      headers: {'Content-Type': "application/json"},
      method: "POST",
      body: JSON.stringify(newToy)
    }
    fetch(BASE_URL, reqObj)
    .then(res => res.json())
    .then(renderToy)

  })
}
