const images = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");
const mainImage = document.querySelector(".image");
const list = document.querySelectorAll(".slider-img");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

let nImages = 5;
let counter = 1;
let arrCounter = 0;

btnDown.addEventListener("click", function() {
    mainImage.classList.remove(`img-${counter}`);
    list[counter - 1].innerHTML = `<div class="overlay"></div>`
    list[counter - 1].classList.remove("white-border");

    counter++;
    arrCounter++;

    mainImage.classList.add(`img-${counter}`);
    list[counter - 1].innerHTML = "";
    list[counter - 1].classList.add("white-border");
    title.innerHTML = images[arrCounter].title;
    subtitle.innerHTML = images[arrCounter].text;


    if (counter == nImages + 1) {
        mainImage.classList.remove(`img-${counter}`);
        counter = 1;
        mainImage.classList.add(`img-${counter}`);
    }
});

btnUp.addEventListener("click", function() {
    mainImage.classList.remove(`img-${counter}`);
    list[counter - 1].innerHTML = `<div class="overlay"></div>`
    list[counter - 1].classList.remove("white-border");

    counter--;
    arrCounter--;
    
    mainImage.classList.add(`img-${counter}`);
    list[counter - 1].innerHTML = "";
    list[counter - 1].classList.add("white-border");
    title.innerHTML = images[arrCounter].title;
    subtitle.innerHTML = images[arrCounter].text;
    
    if (counter == 0) {
        mainImage.classList.remove(`img-${counter}`);
        counter = nImages;
        mainImage.classList.add(`img-${counter}`);
    }
});