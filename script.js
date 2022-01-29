var sipky = document.getElementsByClassName("sipka");
var napisy = document.getElementsByClassName("napis");
var telo = document.getElementById("telo");

function PrvniPohyb() {
  Skryj(sipky[0]);
  napisy[0].style.transform = "rotate(90deg)";
  napisy[0].style.color = "orange";
  setTimeout(function () {
    Skryj(napisy[0]);
    telo.style.transition = "background-color 1s";
    telo.style.backgroundColor = "white";
    Ukaz(napisy[1]);
    napisy[1].style.transform = "scaleX(0)";
    setTimeout(function () {
      napisy[1].style.color = "orange";
      napisy[1].style.transform = "scaleX(1)";
      Ukaz(sipky[1]);
      sipky[1].style.transform = "scaleY(0)";
      setTimeout(function () {
        sipky[1].style.transform = "scaleY(1)";
      }, 2000)
    }, 1000)
  }, 2000)
}

function DruhyPohyb() {
  Skryj(sipky[1]);
  napisy[1].style.transform = "scale(0,0)";
  setTimeout(function () {
    Skryj(napisy[1]);
    telo.style.backgroundColor = "orange";
    Ukaz(napisy[2]);
    setTimeout(function () {
      Ukaz(napisy[3]);
      location.href = "#ctvrtyNapis";
      setTimeout(function () {
        Ukaz(napisy[4]);
        location.href = "#patyNapis";
        setTimeout(function () {
          Ukaz(napisy[5]);
          Ukaz(sipky[2]);
          location.href = "#sestyNapis";
        }, 1000)
      }, 1000)
    }, 1000)
  }, 2000)
}

function TretiPohyb() {
  var skryj = [sipky[2], napisy[2], napisy[3], napisy[4], napisy[5]]
  for (i = 0; i < skryj.length; i++) {
    Skryj(skryj[i]);
  }
  telo.style.backgroundColor = "white";
  napisy[6].style.color = "orange";
  Ukaz(napisy[6]);
  Ukaz(sipky[3]);
}

function Ukaz(prvek) {
  prvek.style.display = "inline-block";
}
function Skryj(prvek) {
  prvek.style.display = "none";
}
