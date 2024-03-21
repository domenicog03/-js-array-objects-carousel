const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let activeItem = 0;


const imagesContainer = document.querySelector('.images-container');
const thumbnailsContainer = document.querySelector('.thumbnails-container');
images.forEach((images) =>{
     const thisPath = images.image;
     const thisTitle= images.title;
     const thisText= images.text;

    const newImage = `
    <div class="image">
        <img src="${thisPath}">
        <h2>${thisTitle}</h2>
        <h3>${thisText}</h3>
    </div>
    `;

    imagesContainer.innerHTML += newImage;


    const newThumbnail = `
    <div class="thumbnail">
        <img src="${thisPath}">
    </div>
    `;

    thumbnailsContainer.innerHTML += newThumbnail;

    const allImages = document.querySelectorAll('.image');
    allImages[activeItem].classList.add('active');
    const allThumbnails = document.querySelectorAll('.thumbnail');
    allThumbnails[activeItem].classList.add('active');



    const nextArrow = document.querySelector('.arrow.next');
    nextArrow.addEventListener('click', function() {

    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.thumbnail.active').classList.remove('active');

    if(activeItem < allImages.length - 1) {
        activeItem++;
    } else {
        activeItem = 0;
    }

    allImages[activeItem].classList.add('active');
    allThumbnails[activeItem].classList.add('active');  
    });

const previousArrow = document.querySelector('.arrow.previous');
previousArrow.addEventListener('click', function() {

    document.querySelector('.image.active').classList.remove('active');
    document.querySelector('.thumbnail.active').classList.remove('active');

    if(activeItem > 0) {
        activeItem--;
    } else {
        activeItem = allImages.length - 1;
    }

    allImages[activeItem].classList.add('active');
    allThumbnails[activeItem].classList.add('active');
    });


    });


    // MILESTONE 1 E 2

    