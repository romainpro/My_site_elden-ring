const hamburgerButton = document.querySelector(".toggle-nav");
const navigation = document.querySelector("nav");





hamburgerButton.addEventListener("click",toggleNav);

function toggleNav(){
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
    
}



function navbarre(){
    return`<a href="index.html">Home</a>
    <a href="media.html">Vidéo</a>
    <a href="gallery.html">Gallery</a>
    <a href="localisation.html">Location</a>
    <a href="#">Contact</a>`
}

function btn(){
    return`
    <span class="line l1"></span>
    <span class="line l2"></span>
    <span class="line l3"></span>`
}
document.getElementById('navbarre').innerHTML=navbarre();
document.getElementById(`btn`).innerHTML=btn();



