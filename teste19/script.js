var hrs = document.getElementById('horas');
var mnts = document.getElementById('minutos');
var sec = document.getElementById('segundos');

var relogio = setInterval(
    function time(){
        var dateToday = new Date();
        var hr = dateToday.getHours();
        var min = dateToday.getMinutes();
        var s = dateToday.getSeconds();

        if (hr < 10){
            hr = '0' + hr;
        }

        if(min < 10){
            min = '0' + min;
        }

        if(s < 10){ 
            s = '0' + s;
        }

        hrs.innerHTML = hr;
        mnts.innerHTML = min;
        sec.innerHTML = s;
    }
)