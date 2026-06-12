<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<title>For My Baby ❤️</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

    background-image:url('Background.jpg');
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;

    font-family:'Poppins',sans-serif;

    padding:20px;
}

.card{
    width:90%;
    max-width:420px;

    background:rgba(255,255,255,.85);
    backdrop-filter:blur(10px);

    border-radius:30px;

    padding:30px;

    text-align:center;

    box-shadow:0 15px 40px rgba(0,0,0,.15);
}

.title{
    font-family:'Parisienne',cursive;
    color:#ff7ca5;
    font-size:3rem;
    margin-bottom:20px;
}

.flower{
    display:block;
    width:220px;
    max-width:100%;

    margin:0 auto 20px auto;

    cursor:pointer;

    transition:.2s;

    filter:drop-shadow(0 10px 15px rgba(0,0,0,.25));
}

.flower:hover{
    transform:scale(1.03);
}

.tapText{
    color:#ff7ca5;
    font-size:15px;
    font-weight:600;
}

.buttonRow{
    display:flex;
    justify-content:center;
    gap:12px;
    margin-top:20px;
}

button{
    width:120px;
    padding:12px;
    border:none;
    border-radius:999px;
    cursor:pointer;
    font-weight:600;
}

.yesBtn{
    background:#9ee493;
}

.noBtn{
    background:#ff8ba7;
    color:white;
}

.message{
    margin-top:20px;
    color:#ff7ca5;
    font-weight:600;
    min-height:60px;
}

</style>
</head>

<body>

<!-- PAGE 1 -->
<div id="page1" class="card">

    <h1 class="title">
        Hi my baby :33
    </h1>

    <img
        src="Flowers.jpg"
        id="flower"
        class="flower"
        onclick="tapFlower()"
        alt="Flower Bouquet"
    >

    <p id="tapText" class="tapText">
        Touch the flower 🌸 (0/3)
    </p>

</div>

<!-- PAGE 2 -->
<div id="page2" class="card" style="display:none;">

    <h1 class="title" style="font-size:2.2rem;">
        May I ask something?
    </h1>

    <div class="buttonRow">

        <button
            class="yesBtn"
            onclick="goPage3()">
            Yes
        </button>

        <button
            id="noBtn"
            class="noBtn"
            onclick="pressNo()">
            No
        </button>

    </div>

    <p id="sadText" class="message"></p>

</div>

<!-- PAGE 3 -->
<div id="page3" class="card" style="display:none;">

    <h1 class="title" style="font-size:2.2rem;">
        May I court you?
    </h1>

    <div class="buttonRow">

        <button
    class="yesBtn"
    onclick="goPage4()">
    Yes
    </button>

        <button
            id="noBtn2"
            class="noBtn"
            onclick="pressNo2()">
            No
        </button>

    </div>

    <p id="sadText2" class="message"></p>

<!-- PAGE 4 -->

<div id="page4" class="card" style="display:none;">

    <h1 class="title" style="font-size:2rem;">
        Yayyy. Please read this, baby ❤️
    </h1>

    <div style="
        text-align:left;
        line-height:1.8;
        color:#444;
        max-height:60vh;
        overflow-y:auto;
        padding-right:10px;
    ">

        <p>

    <p>

    Hi baby ^^ I want to say thank you, thank you for giving me a chance to be your suitor.

    <br><br>

    I will use this chance to prove myself to you, that I am worthy of your love and also prove that you're worthy of being pursued.

    <br><br>

    I won't waste any moment to make you feel loved, heard, and seen. I will love you the same way Tita does. I'll love every inch of you, no matter what version it is that you show to me.

    <br><br>

    I will listen to everything that you yap to me about, no matter how random or small you think it is.

    <br><br>

    You matter, baby.

    <br><br>

    I've heard everything you've told me—from your favorites, insecurities, dislikes, likes, traumas, and even the things that you thought didn't matter.

    <br><br>

    I still remember all of those, baby. Because remembering and understanding you more means keeping you closer into my heart and making you a part of me.

    <br><br>

    I'll never get tired of understanding you, may I be tired myself or drained. As understanding you means that I'm always understanding myself.

    <br><br>

    You are my baby, my wife, and someone that I would spend eternity with.

    <br><br>

    You've bewitched my body and soul, my baby. You took me as a whole, you took me like I was something that originally belonged to you.

    <br><br>

    And maybe that was true. Maybe we originally belonged to each other in our past lives. It only took us some time to find each other again because we wouldn't be able to love each other as a whole if we didn't get to know ourselves first.

    <br><br>

    I will never leave you, my baby.

    <br><br>

    No matter how tough things will be, you will never see me give up on us.

    <br><br>

    That is something that I would stake my life on.

    <br><br>

    That I will love you unconditionally and beyond.

    <br><br>

    I'm sorry if sometimes I was too much, that I kept asking you the same thing or kept trying to talk to you even if you didn't want to.

    <br><br>

    I don't want you to feel alone.

    <br><br>

    Please bear with me, baby.

    <br><br>

    I'm still trying to learn the best way to love you, to love you in a way that you'll feel the most.

    <br><br>

    I will never ever get tired of knowing you more.

    <br><br>

    You will always be my baby, and I will never let anyone get close to me again.

    <br><br>

    I will do everything with you, only you.

    <br><br>

    There wouldn't be a purpose in doing things I find fun with somebody else. I already have you.

    <br><br>

    I'll love you to the point that everyone who sees me will remember you, because I want you to be engraved in everyone's mind that you are my baby.

    <br><br>

    Lastly, I can promise you that no matter what happens, you will still be my baby at the end of the day.

    <br><br>
    I love you so much, my baby. Ill always be proud of you no matter what. Mwaa

    <br><br><br>

    <b>
    — Your Husband, Carlo ❤️
    </b>

    <p>

    </div>

</div>

</div>

<script>

/* FLOWER PAGE */

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

/* PAGE 2 */

let noClicks = 0;

const messages = [

    "Aww, are you nagtatampo po??",

    "Bawal pa rin po? :((",

    "Please give me a chance po",

    "I beg you baby, please :((",

    "Sorry baby, please let me ask. Ill kiss you in exchange of removing the no button :pp"

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

    function goPage4(){

    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "block";

    }
    
function goPage3(){

    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";

}

/* PAGE 3 */

let noClicks2 = 0;

const messages2 = [

    "You dont want me to court you po? :((",

    "Please give me a chance, baby :((",

    "I promise, Ill treat you the best po",

    "Is that final po? :((",

    "Im sure na baby, Ill court you whether you allow me to court you or not. I want to show you na you're someone worth being pursued."

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

</script>

</body>
</html>
