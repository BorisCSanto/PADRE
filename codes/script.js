function passedroite() {
    let source = document.getElementById("grand").src;
    source = source.replace(".png","");
    num = parseInt(source.substr(source.length - 1))
    num > 5 ? num = 1 : num++;
    document.getElementById("grand").src = "images/"+num+".png"
}

function passegauche() {
    let source = document.getElementById("grand").src;
    source = source.replace(".png","");
    num = parseInt(source.substr(source.length - 1))
    num < 2 ? num = 6 : num--;
    document.getElementById("grand").src = "images/"+num+".png"
}

function change(e) {
    document.getElementById("grand").src = "images/"+e+".png";
}
const galerie = document.getElementById("galerie");
let insert = ''
for(i=1;i<7;i++) {
    insert += "<div class=\"galerie-miniatures-img\" onclick=\"change("+i+")\" ><img class=\"galerie-miniatures-img-mini\" src=\"images/"+i+".png\" /></div>";
}
for(i=1;i<7;i++) {
    insert += "<div class=\"galerie-miniatures-img\" onclick=\"change("+i+")\" ><img class=\"galerie-miniatures-img-mini\" src=\"images/"+i+".png\" /></div>";
}
galerie.innerHTML = insert;