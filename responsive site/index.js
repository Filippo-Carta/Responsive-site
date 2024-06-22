var frase = "Hi, I'm FilippoCcane, Welcome to my website!";
var index = 0;
var interval = setInterval(function() {
    document.getElementById("frase").innerHTML += frase[index];
    index++;
    if (index >= frase.length) {
        clearInterval(interval);
        setTimeout(function() {
            var frase2 = "am a front-end developer, and I'm ready to assist you!";
            var svuoto = "I ";
            document.getElementById("frase").innerHTML = svuoto;
            var index2 = 0;
            var interval2 = setInterval(function() { 
                document.getElementById("frase").innerHTML += frase2[index2]; 
                index2++; 
                if (index2 >= frase2.length) { 
                    clearInterval(interval2); 
                } 
            }, 50); 
        }, 5000); 
    } 
}, 50);
var par = "hiuWVRRW4TBRT";
var index3 = 0;
var interval2 = setInterval(function() {
    if (index3 < par.length) {
        document.getElementById("text").innerHTML += par[index3];
        index3++;
    } else {
        clearInterval(interval2);
    }
}, 50);
