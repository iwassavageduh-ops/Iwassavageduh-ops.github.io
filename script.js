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
    "Bawal pa rin po? :((",
    "Please give me a chance po",
    "I beg you baby, please :((",
    "Sorry baby, please hear me out. Ill kiss you in exchange of removing the no button po :pp"
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
    "You dont want me to court you po? :((",
    "Please give me a chance, baby :((",
    "I promise, Ill treat you the best po",
    "Is that final po? :((",
    "Please, baby? Let me court you, I want to court you whether you allow me to court you or not. I want to show you na you're someone worth being pursued."
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
