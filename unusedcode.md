//     const destination = document.querySelector("#ramen-menu")
//     //Ramen Builder
//     let card = document.createElement("div").id("container");
//     card.className = "card"
//     card.innerHTML =  `
//         <img class="detail-image" src="${ramen.imageURL}">
//         <h2 class="name">${ramen.name}</h2>
//         <h3 class="restaurant">${ramen.restaurant}</h3>
//         </div>
//         <h3>Rating:</h3>
//         <p>
//             <span id='rating-display'>${ramen.rating}</span> / 10
//         </p>
//         <h3>Comment:</h3>
//             <p id='comment-display'>${ramen.comment}</p>
//       `
//       container.append(card)


// function renderOneRamen(ramen){
//     const imgDestination = document.querySelector(".detail-image");
//     const nameDestination = document.querySelector(".name");
//     const restaurantDestination = document.querySelector(".restaurant");
// };

// function handleSubmission(e){
//     e.preventDefault()
//     let menuObj = {
//         name: e.target.name.value,
//         restaurant: e.target.restaurant.value,
//         imageURL: e.target.image.value,
//         rating: e.target.rating.value,
//         comment: e.target.comment.value
//     renderOneRamen(menuObj);
// }


// document.querySelector("#new-ramen").addEventListener("submit", handleSubmission)
