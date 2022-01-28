var sipkaPrvni = document.getElementById("prvniSipka");
var sipkaDruha = document.getElementById("druhaSipka");
var sipkaTreti = document.getElementById("tretiSipka");
var sipkactvrta = document.getElementById("ctvrtaSipka");

var napisPrvni = document.getElementById("prvniNapis");
var napisDruhy = document.getElementById("druhyNapis");
var napisTreti = document.getElementById("tretiNapis");
var napisCtvrty = document.getElementById("ctvrtyNapis");
var napisPaty = document.getElementById("patyNapis");
var napisSesty = document.getElementById("sestyNapis");
var napisSedmy = document.getElementById("sedmyNapis");

var bodicko = document.getElementById("telo");
function PrvniPohyb() {
  sipkaPrvni.style.display = "none";
  napisPrvni.style.transform = "rotate(90deg)";
  napisPrvni.style.color = "orange";
  setTimeout(function () {
    napisPrvni.style.display = "none";
    telo.style.transition = "background-color 1s";
    telo.style.backgroundColor = "white";
    napisDruhy.style.display = "inline-block";
    napisDruhy.style.transform = "scaleX(0)";
    setTimeout(function () {
      napisDruhy.style.color = "orange";
      napisDruhy.style.transform = "scaleX(1)";
      sipkaDruha.style.display = "inline-block";
      sipkaDruha.style.transform = "scaleY(0)";
      setTimeout(function () {
        sipkaDruha.style.transform = "scaleY(1)";
      }, 2000)
    }, 1000)
  }, 2000)
}

function DruhyPohyb() {
  sipkaDruha.style.display = "none";
  napisDruhy.style.transform = "scale(0,0)";
  setTimeout(function () {
    napisDruhy.style.display = "none";
    telo.style.backgroundColor = "orange";
    napisTreti.style.display = "inline-block";
    setTimeout(function () {
      napisCtvrty.style.display = "inline-block";
      location.href = "#ctvrtyNapis";
      setTimeout(function () {
        napisPaty.style.display = "inline-block";
        location.href = "#patyNapis";
        setTimeout(function () {
          napisSesty.style.display = "inline-block";
          sipkaTreti.style.display = "inline-block";
          location.href = "#sestyNapis";
        }, 1000)
      }, 1000)
    }, 1000)
  }, 2000)
}

function TretiPohyb() {
  sipkaTreti.style.display = "none";
  telo.style.backgroundColor = "white";
  napisTreti.style.display = "none";
  napisCtvrty.style.display = "none";
  napisPaty.style.display = "none";
  napisSesty.style.display = "none";
  napisSedmy.style.color = "orange";
  napisSedmy.style.display = "inline-block";
  sipkactvrta.style.display = "inline-block";
}