let taps = 0;

function tapFlower(){

    playClick();

    taps++;

    const flower = document.getElementById("flower");

    flower.style.transform = "scale(.95)";

    setTimeout(()=>{
        flower.style.transform = "scale(1)";
    },100);

    if(taps >= 3){

        flower.classList.add("flowerZoom");

        setTimeout(()=>{

            document.getElementById("page1").style.display = "none";

            const page2 = document.getElementById("page2");

            page2.style.display = "block";
            page2.classList.add("pageFade");

        },1000);
    }
}

const clickSound = document.getElementById("clickSound");
const kissSound = document.getElementById("kissSound");

function playClick(){
    clickSound.currentTime = 0;
    clickSound.play();
}

function showKiss(callback){

    const overlay = document.getElementById("kissOverlay");
    const img = document.getElementById("kissImage");

    overlay.style.display = "flex";

    img.classList.remove("kissAnim");
    void img.offsetWidth;
    img.classList.add("kissAnim");

    kissSound.currentTime = 0;
    kissSound.play();

    setTimeout(()=>{

        overlay.style.display = "none";

        if(callback){
            callback();
        }

    },800);
}

playClick();

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

    playClick();

    showKiss(()=>{

        document.getElementById("page2").style.display = "none";

        const page3 = document.getElementById("page3");

        page3.style.display = "block";
        page3.classList.add("pageFade");

    });
}

function goPage4(){

    playClick();

    showKiss(()=>{

        document.getElementById("page3").style.display = "none";

        const page4 = document.getElementById("page4");

        page4.style.display = "block";
        page4.classList.add("pageFade");

    });
}

let noClicks2 = 0;

const messages2 = [
    "Awww, you dont want me to pursue you po?",
    "Please baby, give me a chance to prove myself to you",
    "I'll prove with my actions that you're worthy of everything, that you're worthy of being loved.",
    "I love you, my baby. Please let yourself be loved this time. Let yourself be loved by me. :((",
    "Please, my Euanne. Let me court you.  Its time for us to take our relationship to a step higher, for us to be a little more closer into getting married. I love you, I love your heart, personality, eyes, lips, everything. I love you for being you, Euanne. I want to show you how serious I am to you, and prove that you're for being pursued and loved unconditionally."
];

playClick();

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

function typeTitle(id,text){

    const el = document.getElementById(id);

    el.innerHTML = "";

    let i = 0;

    const interval = setInterval(()=>{

        el.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){
            clearInterval(interval);
        }

    },60);
}

window.onload = ()=>{

    typeTitle("title1","For my Euanne.");
};

typeTitle("title2","May I ask something?");
typeTitle("title3","May I court you?");
typeTitle("title4","Yayyy. Please read this, baby ❤️");
