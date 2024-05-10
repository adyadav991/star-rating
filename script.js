let filled = 0;
var container = document.getElementById("star-container");
let star = document.querySelectorAll(".star");
let button = document.getElementById("clear-button");

updateRatingCount(filled);

function updateRatingCount(filled) {
    const ratingCountElement = document.getElementById("ratingCount");
    ratingCountElement.textContent = filled;
}

// We are just getting current clicked index, removing class from all stars and adding class till clicked index !! That's It
container.addEventListener("click", function (event) {
    let filled = event.target.dataset.index;

    console.log(filled);

    for(let i=0; i<5; i++) {
        star[i].classList.remove("star-filled"); // star[i] as querySelectorAll return Node List of all stars
    }

    for(let i=0; i<filled; i++) {
        star[i].classList.add("star-filled")
    }

    updateRatingCount(filled);

});

button.addEventListener("click", function() {
    filled = 0;
    for(let i=0; i<5; i++) {
        star[i].classList.remove("star-filled")
    };
    updateRatingCount(filled);
});
