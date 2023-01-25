let parentFile = $(".box");
let beginingElements = [];
let endingElements = [parentFile[15], parentFile[31], parentFile[47], parentFile[63], parentFile[79]];
let horseTracker = [0, 16, 32, 48, 64];
let userContinue = "Next";
let flagI = false;



const flipper = () => {
    return Math.round(Math.random());
}

let initialize = () => {

    beginingElements = [parentFile[0], parentFile[16], parentFile[32], parentFile[48], parentFile[64]]

    beginingElements.forEach(e => {

        e.classList.add("active");

    });

}

let horseAdvance = (currentHorse, index) =>{

    
    currentHorse = parentFile[currentHorse];
    horseTracker[index] = horseTracker[index] + 1;

    currentHorse.classList.remove("active");
    currentHorse = parentFile[horseTracker[index]];
    currentHorse.classList.add("active");

}

let moveNext = () =>{

    for (i=0; i<5; i++){

        const currentHorse = horseTracker[i];
        const madeIt = flipper();

        let horse = parentFile[currentHorse];

        if(madeIt){

            horseAdvance(currentHorse, i);

        }
    }
}

let checkForEnd = () => {

    endingElements.forEach(e => {
        if(e.classList.contains('active')){
            
            let getName = e.classList
            getName = getName[0]
            //console.log(e.classList);
            flagI = true;
            $('.next').unbind();
            $('.auto').unbind();
            $('.title>h2').html(getName + " is the Winner!!!!");
        }
    });
}

checkForUserContinue = () => {

    moveNext();
    checkForEnd();

}


let main = () => {

    initialize();
    

    if(userContinue == "Auto"){
        while(!flagI){
            moveNext();
            checkForEnd();
        }
    }
}

$('.next').on('click', () => {
    checkForUserContinue();
});

$('.auto').on('click', () => {
    userContinue = "Auto";
    main();
});

main();