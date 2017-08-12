function Czas() {
    var data = new Date();
    var sekunda = data.getSeconds();
    var minuta = data.getMinutes();
    var godzina = data.getHours();

    var s = sekunda * 6;
    var m = minuta * 6;
    var Hm = minuta * 0.5;

    var h;

    if (godzina > 12)
        h = (godzina - 12) * 30;
    else
        h = godzina * 30;

    var divS = document.getElementById("sekunda");
    divS.style.webkitTransform = "rotate(" + s + "deg)";
    divS.style.MozTransform = "rotate(" + s + "deg)";
    divS.style.OTransform = "rotate(" + s + "deg)";
    divS.style.msTransform = "rotate(" + s + "deg)";
    var divM = document.getElementById("minuta");
    divM.style.webkitTransform = "rotate(" + m + "deg)";
    divM.style.MozTransform = "rotate(" + m + "deg)";
    divM.style.OTransform = "rotate(" + m + "deg)";
    divM.style.msTransform = "rotate(" + m + "deg)";
    var divH = document.getElementById("godzina");
    divH.style.webkitTransform = "rotate(" + (h + Hm) + "deg)";
    divH.style.MozTransform = "rotate(" + (h + Hm) + "deg)";
    divH.style.OTransform = "rotate(" + (h + Hm) + "deg)";
    divH.style.msTransform = "rotate(" + (h + Hm) + "deg)";

    setTimeout(Czas, 1000);
}

function CzasLA() {
    var data = new Date();
    var sekunda = data.getSeconds();
    var minuta = data.getMinutes();
    var godzina = data.getHours() - 9;

    var s = sekunda * 6;
    var m = minuta * 6;
    var Hm = minuta * 0.5;

    var h;

    if (godzina > 12)
        h = (godzina - 12) * 30;
    else
        h = godzina * 30;

    var divS = document.getElementById("sekundaLA");
    divS.style.webkitTransform = "rotate(" + s + "deg)";
    divS.style.MozTransform = "rotate(" + s + "deg)";
    divS.style.OTransform = "rotate(" + s + "deg)";
    divS.style.msTransform = "rotate(" + s + "deg)";
    var divM = document.getElementById("minutaLA");
    divM.style.webkitTransform = "rotate(" + m + "deg)";
    divM.style.MozTransform = "rotate(" + m + "deg)";
    divM.style.OTransform = "rotate(" + m + "deg)";
    divM.style.msTransform = "rotate(" + m + "deg)";
    var divH = document.getElementById("godzinaLA");
    divH.style.webkitTransform = "rotate(" + (h + Hm) + "deg)";
    divH.style.MozTransform = "rotate(" + (h + Hm) + "deg)";
    divH.style.OTransform = "rotate(" + (h + Hm) + "deg)";
    divH.style.msTransform = "rotate(" + (h + Hm) + "deg)";

    setTimeout(CzasLA, 1000);
}

function CzasTokio() {
    var data = new Date();
    var sekunda = data.getSeconds();
    var minuta = data.getMinutes();
    var godzina = data.getHours() + 6;

    var s = sekunda * 6;
    var m = minuta * 6;
    var Hm = minuta * 0.5;

    if (godzina > 12)
        h = (godzina - 12) * 30;
    else
        h = godzina * 30;

    var divS = document.getElementById("sekundaTokio");
    divS.style.webkitTransform = "rotate(" + s + "deg)";
    divS.style.MozTransform = "rotate(" + s + "deg)";
    divS.style.OTransform = "rotate(" + s + "deg)";
    divS.style.msTransform = "rotate(" + s + "deg)";
    var divM = document.getElementById("minutaTokio");
    divM.style.webkitTransform = "rotate(" + m + "deg)";
    divM.style.MozTransform = "rotate(" + m + "deg)";
    divM.style.OTransform = "rotate(" + m + "deg)";
    divM.style.msTransform = "rotate(" + m + "deg)";
    var divH = document.getElementById("godzinaTokio");
    divH.style.webkitTransform = "rotate(" + (h + Hm) + "deg)";
    divH.style.MozTransform = "rotate(" + (h + Hm) + "deg)";
    divH.style.OTransform = "rotate(" + (h + Hm) + "deg)";
    divH.style.msTransform = "rotate(" + (h + Hm) + "deg)";

    setTimeout(CzasTokio, 1000);
}
window.addEventListener("load", function () {

    console.log("test");
    Czas();
    CzasLA();
    CzasTokio();
});
