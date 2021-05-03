//local reviews data
const reviews = [
  {
    id: 1, 
    name: "Isabel Santos",
    img: "./img/person-img.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2, 
    name: "Junior Castro",
    img: "./img/person1-img.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3, 
    name: "Laura Silva",
    img: "./img/person-img.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4, 
    name: "Isabela Nogueira",
    img: "./img/person-img.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
]

// select items 
const img = document.getElementById("person-img");
const name = document.getElementById("name-person");
const text = document.getElementById("text-review");

// buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const btnMeet = document.querySelector(".btn-meet");

//set starting item 
let currentItem = 0;

//load initial item data
window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  text.textContent = item.text;
}

//show next person 
nextBtn.addEventListener('click', function() {
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
});

// show previous person 
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0){
      currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person
btnMeet.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});