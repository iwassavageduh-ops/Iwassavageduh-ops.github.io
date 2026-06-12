let taps = 0;

function tapFlower(){

    taps++;

    document.getElementById("tapText").innerHTML =
        `Touch the flower 🌸 (${taps}/3)`;

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
    "Aww, are you nagtatampo po??",
    "Still not allowed to ask? :((",
    "Arent you curious about my question, baby?",
    "I promise you, baby. It will be worthy of your time.",
    "Sorry baby, but please hear me out. Ill kiss you in exchange of removing the no button po :pp"
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
    "Awww, you dont want me to pursue you po?",
    "Please baby, give me a chance to prove myself to you",
    "Ill prove with my actions that you're worthy of everything, that you're worthy of loved.",
    "I love you, my baby. Please let yourself be loved this time. Be loved by me. :((",
    "Please, my Euanne. Let me court you.  Its time for us to take our relationship to a step higher, for us to be a little more closer into getting married. I love you, I love your heart, personality, eyes, lips, everything. I love you for being you, Euanne. I want to show you how serious I am to you, and prove that you're for being pursued and loved unconditionally."
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
