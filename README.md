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
        Put Your Question Here
    </h1>

    <div class="buttonRow">

        <button
            class="yesBtn">
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

function goPage3(){

    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";

}

/* PAGE 3 */

let noClicks2 = 0;

const messages2 = [

    "First custom message",

    "Second custom message",

    "Third custom message",

    "Fourth custom message",

    "Fifth custom message"

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
