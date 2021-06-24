var x = document.getElementsByClassName('day-calendar');
var y = document.getElementsByClassName('week-calendar');
var z = document.getElementsByClassName('month-calendar');

function funday() {
    document.getElementById('day-show').classList.add('active');
    document.getElementById('week-show').classList.remove('active');
    document.getElementById('month-show').classList.remove('active');
    for(var i=0; i<x.length; i++){
        x[i].style.display="block";
    }
    for(var i=0; i<z.length; i++){
        z[i].style.display="none";
    }
    for(var i=0; i<y.length; i++){
        y[i].style.display="none";
    }
}
function funweek() {
    document.getElementById('day-show').classList.remove('active');
    document.getElementById('week-show').classList.add('active');
    document.getElementById('month-show').classList.remove('active');
    for(var i=0; i<x.length; i++){
        x[i].style.display="none";
    }
    for(var i=0; i<z.length; i++){
        z[i].style.display="none";
    }
    for(var i=0; i<y.length; i++){
        y[i].style.display="block";
    }
}
function funmonth() {
    document.getElementById('day-show').classList.remove('active');
    document.getElementById('week-show').classList.remove('active');
    document.getElementById('month-show').classList.add('active');
    for(var i=0; i<x.length; i++){
        x[i].style.display="none";
    }
    for(var i=0; i<z.length; i++){
        z[i].style.display="block";
    }
    for(var i=0; i<y.length; i++){
        y[i].style.display="none";
    }
}
function schedule(){
    let topic = prompt("Enter Topic:", );
    let time = prompt("Enter Time:",);
}