// write your code here

// Renderer Functions
function renderAllRamens(ramen){
    //declare appendee element
    let container = document.querySelector("#ramen-menu");
    //create our menu items
    let card = document.createElement("img")
    card.src = `${ramen.image}`
    //event listener on menu items
    card.addEventListener("click", (e)=>{
        let image = document.querySelector(".detail-image");
        image.src = `${ramen.image}`
        let name = document.querySelector(".name")
        name.textContent = `${ramen.name}`
        let restaurant = document.querySelector(".restaurant")
        restaurant.textContent = `${ramen.restaurant}`
        let rating = document.querySelector("#rating-display")
        rating.textContent = `${ramen.rating}`
        let comment = document.querySelector("#comment-display")
        comment.textContent = `${ramen.comment}`
    })
    //append our menuitems
    container.appendChild(card)
};

// Real go GET-er Function
function fetchAllRamens(){
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenData => ramenData.forEach(ramen => renderAllRamens(ramen)))
    .catch(error => console.log("HEY LISTEN", error)
)} 
// // Event Handlers
// function handleSubmission(e){
//     e.preventDefault()
//     let menuObj = {
//         name: e.target.name.value,
//         restaurant: e.target.restaurant.value,
//         imageURL: e.target.image.value,
//         rating: e.target.rating.value,
//         comment: e.target.comment.value
// }
// renderAllRamens(menuObj)
// }
// //Post function
// let makeMenu = fetch("http://localhost:3000/ramens", {
//     method: "POST",
//     headers: {
//         "Content-Type" : "application/json",
//         Accept : "application/json"
//     },
//     body : JSON.stringify(menuObj)
//     .then(response => response.json())
//     .then(menuItem => console.log(menuItem))
// })

//Startup
function init(){
    fetchAllRamens()
}
init();