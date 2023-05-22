function affiche(elementImg) {
    var textalt = elementImg.alt;
    var texttitle = elementImg.title;
    var src = elementImg.src;
    var srcBigImg = src.substring(src.lastIndexOf('/') + 1);
    document.getElementById("grandeImg").src = "img/" + srcBigImg;
    document.getElementById("titleImg").innerHTML = texttitle;
    document.getElementById("textImg").innerHTML = textalt;
}


function active(elementLi) {
    var lis = document.querySelectorAll("nav ul li");
    for (let i = 0; i < lis.length; i++) {
        lis.item(i).className = '';
    }
    elementLi.className = "active";
}
