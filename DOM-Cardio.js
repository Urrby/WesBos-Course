// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = document.createElement("ul");
// add three list items with the words "one, two three" in them
let lists = `
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
`;
ul.innerHTML = lists;
// put that list into the above wrapper
div.insertAdjacentElement("afterbegin", ul);
// create an image
const img = document.createElement("img");
// set the source to an image
img.src = "https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg";
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "Cute Puppy"
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
const html = `
    <div>
        <p>First p</p>
        <p>Second p</p>
    </div>
`;
// put this div before the unordered list from above
ul.insertAdjacentHTML("beforebegin", html);
// add a class to the second paragraph called warning
let p = document.querySelectorAll("p");
p[1].classList.add("warning");
// remove the first paragraph
p[0].remove();
// create a function called generatePlayerCard that takes in three 
//arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    return `
    <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
    </div>
`;
}
// make a new div with a class of cards
const cardsWraper = document.createElement("div");
cardsWraper.classList.add("cards");
// Have that function make 4 cards
cardsWraper.insertAdjacentHTML("afterbegin", generatePlayerCard("Urban", 23, 176));
cardsWraper.insertAdjacentHTML("afterbegin", generatePlayerCard("Leja", 21, 160));
cardsWraper.insertAdjacentHTML("afterbegin", generatePlayerCard("Tončka", 2, 70));
cardsWraper.insertAdjacentHTML("afterbegin", generatePlayerCard("Sloth", 5, 100));
// append those cards to the div

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", cardsWraper);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
let cards = cardsWraper.querySelectorAll(".playerCard");
cards.forEach((card, index) => {
    const button = document.createElement("button");
    button.innerText = "Close";
    button.classList.add(`btn${index + 1}`);
    button.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    })
    card.appendChild(button)    
});



// select all the buttons!
// make out delete function
// loop over them and attach a listener
