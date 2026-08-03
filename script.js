let taps = 0;

function tapFlower(){

    taps++;

    document.getElementById("tapText").innerHTML =
        `Tap Nailong 3 times`;

    const flower = document.getElementById("flower");

    flower.style.transform = "scale(.95)";

    setTimeout(()=>{
        flower.style.transform = "scale(1)";
    },100);

    if(taps >= 3){

        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";

    }
}

let noClicks = 0;

const messages = [
    "Aww, my Elyse doesnt want me to ask :(",
    "Still ayaw bebe? :((",
    "Arent you curious about my question po bebe?",
    "I promise you, bebe. It will be worthy of your time.",
    "Sorry baby, but please listen po. Ill kiss you kapalit ng pag remove sa no button po :pp"
];

function pressNo(){

    const noBtn = document.getElementById("noBtn");
    const text = document.getElementById("sadText");

    text.innerHTML = messages[noClicks];

    noClicks++;

    let scale = 1 - (noClicks * 0.18);

    noBtn.style.transform = `scale(${scale})`;

    if(noClicks >= 5){
        noBtn.remove();
    }
}

function goPage3(){

    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";

}

function goPage4(){

    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "block";

}

let noClicks2 = 0;

const messages2 = [
    "Awww, sure na po yan baby?",
    "Please baby, let me prove that im capable enough to love you",
    "I'll show with my actions that you're worthy, you're worthy of being loved, heard, seen, and known.",
    "I love you, my Elyse. I am sure sayo, I always have been. Let yourself be loved by me, my baby.",
    "Please, mi amor. Let me court you.  Its time for us to take our relationship to a step higher, for us to be a little more closer into getting married. I love you, I love your heart, personality, eyes, lips, everything. I love you for being you, Elyse. I want to show you how serious I am to you, and prove that you're for being pursued and loved unconditionally."
];

function pressNo2(){

    const noBtn = document.getElementById("noBtn2");
    const text = document.getElementById("sadText2");

    text.innerHTML = messages2[noClicks2];

    noClicks2++;

    let scale = 1 - (noClicks2 * 0.18);

    noBtn.style.transform = `scale(${scale})`;

    if(noClicks2 >= 5){
        noBtn.remove();
    }
}
