



// -------------------creation des carte ------------------------
function newCard(name,image,){
    return` <li class="profil-card">
    <img src="${image}" alt="image du personage " class="profil-image">
    <div class="profil-info">
    <p class="profil-name">${name}</p>
    </div>
    </li>`
}


document.getElementById("gallery").innerHTML=newCard(`Astrologue`,`media/images/elden-ring-character-astrologer-full.webp`);
document.getElementById("gallery").innerHTML+=newCard(`Bandit `,`media/images/elden-ring-character-bandit-full.webp`);
document.getElementById("gallery").innerHTML+=newCard(`Confesseur`,`media/images/elden-ring-character-confessor-full.webp`);
document.getElementById("gallery").innerHTML+=newCard(`Hero`,`media/images/elden-ring-character-hero-full-new.webp`);
document.getElementById("gallery").innerHTML+=newCard(`Prisonnier`,`media/images/elden-ring-character-prisoner-full.webp`);
document.getElementById("gallery").innerHTML+=newCard(`Prophète`,`media/images/elden-ring-character-prophet-full.webp`);
document.getElementById("gallery").innerHTML+=newCard(`Samourai`,`media/images/elden-ring-character-samourai-full.webp`);
document.getElementById("gallery").innerHTML+=newCard(`vagabond`,`media/images/elden-ring-character-vagabond-full.webp`);
document.getElementById("gallery").innerHTML+=newCard(`guerrier`,`media/images/elden-ring-character-warrior-full-new.webp`);
document.getElementById("gallery").innerHTML+=newCard(`Mendiant`,`media/images/elden-ring-character-wretch-full.webp`);


// const cardActive = document.querySelector(".profil-card");

// cardActive.addEventListener("click",active);

// function active(){
//     cardActive.classList.toggle("active");
// }



