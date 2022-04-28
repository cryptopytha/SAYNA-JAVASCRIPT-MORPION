(function() {

    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');
    // condition pour remporter une partie
    let items2= ['item1','item2','item3','item4','item5','item6','item7','item8','item9']
    let result= 'vous avez gagner';
    let gagnerUnePartie = [
        //ligne
        [0,1,2],
        [3,4,5],
        [6,7,8],
        //colonne
        [0,3,6],
        [1,4,7],
        [2,5,8],
        //diagonale
        [0,4,8],
        [2,4,6]
    ]

    // choix de l'user

   let symbole;

    choose1=function(choix) {
        choix.parentNode.style.display='none'
        symbole = '0';
    }

    choose2=function(choix) {
        choix.parentNode.style.display='none'
        symbole = 'x';
    }

    choiseCase= function (id) {
        document.getElementById(id).textContent=symbole;
        verifier();    
    }

    verifier= function () {
            for (let j=0; j<items.length+1; j++) {
                
                if (items[0].textContent===symbole && items[1].textContent===items[0].textContent && items[2].textContent===items[1].textContent) {
                    
                } 
            }
    }
    
    // Vide le contenu de toute les cases
    function rest() {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
        }
    }

})();