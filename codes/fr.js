// contenus textuels en français

const texte = {
    menu1 : "Déco d'intérieur", 
    menu2 : "Contact",
    menu3 : "Toutes les séries", 
    bio : "Né un matin au pied du grand chêne du village de Plougarnel, \
Loïc Le Guével a grandi auprès des mages de bretagne et du monde. Ce qu'il a vu, \
ce qui l'a enchanté, il vous le retranscrit dans ses œuvres intemporelles et énigmatiques.\
 Il nous transporte de la profondeur de la forêt à la majesté du désert, en passant \
par le jeu des poissons dans la mer d'Iroise.",
    dist1: "L'art de se méler des choses ...",
    deco: "Décorer les intérieurs ..."
}

document.getElementById("menu1").innerHTML = texte.menu1;
document.getElementById("menu2").innerHTML = texte.menu2;
document.getElementById("menu3").innerHTML = texte.menu3;

