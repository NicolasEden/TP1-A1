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
day[1] = "Lundi";
day[2] = "Mardi";
day[3] = "Mercredi";
day[4] = "Jeudi";
day[5] = "Vendredi";
day[6] = "Samedi";
day[7] = "Dimanche";

var a = day[d.getDay()];

document.getElementById("date").innerHTML = a + ",     "+ y + "     " + d.getDate() + ",     " + d.getFullYear();
