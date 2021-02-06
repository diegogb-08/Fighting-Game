
// Funcion Arena Game

const hit = () => {

    turn = Math.floor(Math.random() * 2);
    specialAttack = Math.floor(Math.random() * 10);
    infoPowerAttack = document.getElementById("infoBattle");
    healthP1 = document.getElementById("healthP1");
    healthP2 = document.getElementById("healthP2");
    

    if(turn == 0) {
        if(specialAttack > 3 && specialAttack < 7) {
            if(specialAttack == 5 || specialAttack == player2.luck){

                //GIF ATTACKS

                if(player2.name == fighter7.name && player1.life > 99) {
                    player2.strikeBack(player1);
                    infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifGoku();

                }else if(player2.name == fighter8.name && player1.life > 99){
                    player2.strikeBack(player1);
                    infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifPicolo();

                }else if(player2.name == fighter5.name && player1.life > 99) {
                    player2.strikeBack(player1);
                    infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifBurter();

                }else if(player2.name == fighter2.name && player1.life > 99){
                    player2.strikeBack(player1);
                    infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifBuu();

                }else if(player2.name == fighter9.name && player1.life > 99) {
                    player2.strikeBack(player1);
                    infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifTrunks();

                }else if(player2.name == fighter10.name && player1.life > 99){
                    player2.strikeBack(player1);
                    infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifVegeta();

                }else if(player2.name == fighter4.name && player1.life > 99){
                    player2.strikeBack(player1);
                    infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifFreeza();

                }else if(player2.name == fighter3.name && player1.life > 99){
                    player2.strikeBack(player1);
                    infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifCell();

                }else if(player2.name == fighter6.name && player1.life > 99){
                    player2.strikeBack(player1);
                    infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifKrillin();

                }else if(player2.name == fighter1.name && player1.life > 99){
                    player2.strikeBack(player1);
                    infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifC18();

                }else{
                    player2.strikeBack(player1);
                    infoPowerAttack.innerHTML = `${player1.name} SUPER attacks but ${player2.name} Strikes Back`;
                };
            }else{
                infoPowerAttack.innerHTML = `${player1.name} SUPER attack`;
                player1.powerAttack(player2);
            };
        }else {
            player1.attack(player2);
            infoPowerAttack.innerHTML = `${player1.name} attacks`;
        };  
    }else{
        if(specialAttack > 3 && specialAttack < 7) {
            if(specialAttack == 5 || specialAttack == player1.luck) {

                //GIF ATTACKS

                if(player1.name == fighter7.name && player2.life > 99) {
                    player1.strikeBack(player2);
                    infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifGoku();

                }else if(player1.name == fighter8.name && player2.life > 99) {
                    player1.strikeBack(player2);
                    infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifPicolo();
                    
                }else if(player1.name == fighter5.name && player2.life > 99) {
                    player1.strikeBack(player2);
                    infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifBurter();

                }else if(player1.name == fighter2.name && player2.life > 99) {
                    player1.strikeBack(player2);
                    infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifBuu();

                }else if(player1.name == fighter9.name && player2.life > 99) {
                    player1.strikeBack(player2);
                    infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifTrunks();

                }else if(player1.name == fighter10.name && player2.life > 99) {
                    player1.strikeBack(player2);
                    infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifVegeta();

                }else if(player1.name == fighter4.name && player2.life > 99) {
                    player1.strikeBack(player2);
                    infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifFreeza();

                }else if(player1.name == fighter3.name && player2.life > 99) {
                    player1.strikeBack(player2);
                    infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifCell();

                }else if(player1.name == fighter6.name && player2.life > 99) {
                    player1.strikeBack(player2);
                    infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifKrillin();

                }else if(player1.name == fighter1.name && player2.life > 99) {
                    player1.strikeBack(player2);
                    infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
                    console.log("Ouuh Mama!")
                    showGifC18();

                }else {
                player1.strikeBack(player2);
                infoPowerAttack.innerHTML = `${player2.name} SUPER attack but ${player1.name} Strikes Back`;
                }
            }else{
                infoPowerAttack.innerHTML = `${player2.name} SUPER attack`;
                player2.powerAttack(player1);
            };
        }else{
            player2.attack(player1);
            infoPowerAttack.innerHTML = `${player2.name} attacks`;
        }
    };


    // FIGHTERS LIFE COUNTING
    healthP1.value = `${player1.life}`;
    healthP2.value = `${player2.life}`;
    showWinnerGame();

};

