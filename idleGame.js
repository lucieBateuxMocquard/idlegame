window.onload = function(){


    // BOUTON CLIQUEZ MOI
    var varClick = document.querySelector('#cliquePieceOr');
    console.log(varClick);


    or = 0;
    
    var nbreOr = document.querySelector('#nbreOr');
    nbreOr.innerText = or +' pièces d\'or';
   
    function maFonction(){
        or++;
        nbreOr.innerText = or +' pièces d\'or';
    }

    varClick.addEventListener("click", maFonction);



    // BOUTON AMELIORATION 1
   
    var amelioration1 = document.querySelector('#amelioration1');
    
    var orParSeconds = 0;

    var orParSecondsHtml = document.querySelector('#orParSeconds');
    orParSecondsHtml.innerText = orParSeconds +' or par sec';

    function cliqueAmelioration1(){
        
        if(or >= 10){
            or = or - 10;
            setInterval(timerAmelioration1, 1000);
            orParSeconds++;
        }
    }

    // augmente le nbre d'or par sec
    function timerAmelioration1(){
        or++;
        nbreOr.innerText = or +' pièces d\'or';
        orParSecondsHtml.innerText = orParSeconds +' or par sec';  
    }
    amelioration1.addEventListener("click", cliqueAmelioration1);
    


// BOUTON AMELIORATION 2
   
var amelioration2 = document.querySelector('#amelioration2');

function cliqueAmelioration2(){
    
    if(or >= 100){
        or = or - 100;
        setInterval(timerAmelioration2, 1000);
        orParSeconds = orParSeconds + 11;
    }
}

// augmente le nbre d'or par sec
function timerAmelioration2(){
    or = or + 11;
    nbreOr.innerText = or +' pièces d\'or';
    orParSecondsHtml.innerText = orParSeconds +' or par sec';  
}
amelioration2.addEventListener("click", cliqueAmelioration2);



// BOUTON AMELIORATION 3
   
var amelioration3 = document.querySelector('#amelioration3');

function cliqueAmelioration3(){
    
    if(or >= 1000){
        
        or = or - 1000;
        setInterval(timerAmelioration3, 1000);
        orParSeconds = orParSeconds + 130;

    }
}

// augmente le nbre d'or par sec
function timerAmelioration3(){
    or = or + 130;
    nbreOr.innerText = or +' pièces d\'or';
    orParSecondsHtml.innerText = orParSeconds +' or par sec';
    console.log('amelioration3');  
}
amelioration3.addEventListener("click", cliqueAmelioration3);













}