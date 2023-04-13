/*
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

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


//selezione prev e next 
let path = `./assets/`
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let index = 0;
let item = document.getElementById('slider');


next.addEventListener('click',()=>{
    item.innerHTML = `
    <div class="item">
        <img src=${path+images[index].image} alt="" id="main">
            <div class="details">
                <h2>${images[index].title}</h2>
                <p>${images[index].text}</p>
            </div> 
    </div>    
    `
    document.querySelector('.thumb.active').classList.remove('active');
    document.querySelectorAll('.thumb')[index].classList.add('active');

    index++;

    if(index >= images.length){
        index = 0;
    }
});

prev.addEventListener('click',()=>{
    item.innerHTML = `
    <div class="item">
        <img src=${path+images[index].image} alt="" id="main">
            <div class="details">
                <h2>${images[index].title}</h2>
                <p>${images[index].text}</p>
            </div> 
    </div>    
    `
    document.querySelector('.thumb.active').classList.remove('active');
    document.querySelectorAll('.thumb')[index].classList.add('active');

    index--;

    if(index <= -1){
        index = images.length - 1;
    }
});


document.getElementById('auto').addEventListener('click', ()=>{
    const auto = setInterval(autoScroll, 2000);
    function autoScroll(){
        
        if( index == images.length - 1){
            index = 0;
        } else{
            index++;
        }
        
        main.src = path + images[index].image;
        item.innerHTML = `
        <div class="item">
            <img src=${path+images[index].image} alt="" id="main">
                <div class="details">
                    <h2>${images[index].title}</h2>
                    <p>${images[index].text}</p>
                </div> 
        </div>    
        `
        document.querySelector('.thumb.active').classList.remove('active');
        document.querySelectorAll('.thumb')[index].classList.add('active');
    }

    document.getElementById('stop').addEventListener('click', ()=>{
        clearInterval(auto);
    });
})

document.getElementById('autoBack').addEventListener('click', ()=>{
    const autoBack = setInterval(backScroll, 2000);
    function backScroll(){
        
        if( index == 0){
            index = images.length - 1;
        } else{
            index--;
        }
        
        main.src = path + images[index].image;
        item.innerHTML = `
        <div class="item">
            <img src=${path+images[index].image} alt="" id="main">
                <div class="details">
                    <h2>${images[index].title}</h2>
                    <p>${images[index].text}</p>
                </div> 
        </div>    
        `
        document.querySelector('.thumb.active').classList.remove('active');
        document.querySelectorAll('.thumb')[index].classList.add('active');
    }

    document.getElementById('stop').addEventListener('click', ()=>{
        clearInterval(autoBack);
    });
});