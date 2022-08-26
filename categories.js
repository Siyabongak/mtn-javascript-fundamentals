// This Method rolls a 13-Sided dice and predicts the winning category of the Mtn Business App of the year 
function rollDice () {
    let roll = Math.floor(Math.random()*13) + 1;
    
    // categories 
    if (roll == 1) {
        console.log("Best Consumer Solution");
    }else if (roll == 2) {
        console.log("Best Enterprise solution ");
    }else if (roll == 3) {
        console.log("Most innovative solution");
    }else if (roll == 4) {
        console.log("Best Gaming solution");
    }else if (roll == 5) {
        console.log("Best Health Solution");
    }else if (roll == 6) {
        console.log("Best Agricultural Solution");
    }else if (roll == 7) {
        console.log("Best Educational Solution");
    }else if (roll == 8) {
        console.log("Best Financial Solution");
    }else if (roll == 9) {
        console.log("Best Hackathon Solution");
    }else if (roll == 10) {
        console.log("Best South African Solution");
    }else if (roll == 11) {
        console.log("Best Campus cup Solution");
    }else if (roll == 12) {
        console.log("Best African Solution");
    }else {
        console.log("Huawei AppGallery category 15");
    }
}

rollDice();

