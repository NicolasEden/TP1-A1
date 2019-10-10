var d = new Date();
var yb = new Array(11);
  yb[0] = "Janvier";
  yb[1] = "Février";
  yb[2] = "Mars";
  yb[3] = "Avril";
  yb[4] = "Mai";
  yb[5] = "Juin";
  yb[6] = "Juillet";
  yb[7] = "Aout";
  yb[8] = "Septempbre";
  yb[9] = "Octobre";
  yb[10] = "Novembre";
  yb[11] = "Decembre";
var y = yb[d.getMonth()];

var day = new Array(7);
  day[0] = "Lundi";
  day[1] = "Mardi";
  day[2] = "Mercredi";
  day[3] = "Jeudi";
  day[4] = "Vendredi";
  day[5] = "Samedi";
  day[6] = "Dimanche";

var a = day[d.getDay()];

document.getElementById("daye").innerHTML = a + y + d.getDate() + , + d.getFullYear();
document.getElementById("month").innerHTML = y;
document.getElementById("day").innerHTML = d.getDate() + ,;
document.getElementById("years").innerHTML = d.getFullYear();;
