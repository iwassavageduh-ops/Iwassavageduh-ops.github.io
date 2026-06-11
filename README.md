<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<title>For My Baby ❤️</title>

<style>

/* RESET */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

/* BASE BACKGROUND */
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
}

/* HIDE PAGES */
.page{
    display:none;
    width:100%;
    justify-content:center;
    align-items:center;
}

.active{
    display:flex;
}

/* CARD STYLE (PAGE 1) */
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

.bear{
    display:block;
    width:220px;
    max-width:100%;
    margin:0 auto 25px auto;
    filter:drop-shadow(0 10px 15px rgba(0,0,0,.25));
}

button{
    width:100%;
    padding:15px;
    border:none;
    border-radius:999px;
    background:#ffd4e3;
    font-size:13px;
    font-weight:600;
    cursor:pointer;
    transition:.2s;
}

button:disabled{
    opacity:.7;
    cursor:not-allowed;
}

/* GAME UI (PAGE 2 & 3) */
.gameCard{
    width:85%;
    max-width:360px;
    background:rgba(255,255,255,0.08);
    backdrop-filter:blur(12px);
    border:1px solid rgba(255,255,255,0.15);
    border-radius:20px;
    padding:25px;
    text-align:center;
    box-shadow:0 0 25px rgba(0,0,0,0.6);
    animation:pop .3s ease;
}

@keyframes pop{
    from{transform:scale(0.8);opacity:0;}
    to{transform:scale(1);opacity:1;}
}

.gameCard h2{
    font-size:18px;
    margin-bottom:20px;
    color:#fff;
}

.row{
    display:flex;
    justify-content:center;
    gap:12px;
}

.gameBtn{
    padding:12px 22px;
    border:none;
    border-radius:12px;
    cursor:pointer;
    font-size:14px;
    min-width:100px;
    transition:.2s;
}

.gameBtn:hover{
    transform:scale(1.05);
}

.yes{
    background:#4CAF50;
    color:white;
}

.no{
    background:#f44336;
    color:white;
}

</style>
</head>

<body>

<!-- PAGE 1 -->
<div id="page1" class="page active">
    <div class="card">

        <h1 class="title">Hi my baby :33</h1>

        <img src="IceBear.jpg" class="bear">

        <button id="nextBtn" disabled>
            next :3 (5)
        </button>

    </div>
</div>

<!-- PAGE 2 -->
<div id="page2" class="page">
    <div class="gameCard">
        <h2>I have a surprise for you, wanna see it?</h2>

        <div class="row">
            <button class="gameBtn yes" onclick="goPage3()">Yes</button>
            <button id="noBtn1" class="gameBtn no" onclick="removeNoButton()">
                No
            </button>
        </div>
    </div>
</div>

<!-- PAGE 3 -->
<div id="page3" class="page">
    <div class="gameCard">
        <h2>Awww, my baby is not nagtatampo na ^^
            did you miss me??</h2>

        <div class="row">
            <button class="gameBtn yes" onclick="goPage5()">
                Yes
            </button>

            <button class="gameBtn no" onclick="goSecretEnding()">
                No
            </button>
        </div>
    </div>
</div>

<!-- PAGE 4 SECRET ENDING -->
<div id="page4" class="page">
    <div class="gameCard">
        <h2>You really dont miss me po? :((</h2></h2>

        <p style="color:white;margin-bottom:20px;">
            Aww, you found the secret ending.
        </p>

        <div class="row">
            <button class="gameBtn yes" onclick="goPage5()">
                Continue
            </button>
        </div>
    </div>
</div>

!-- PAGE 5 -->
<div id="page5" class="page">
    <div class="gameCard">
        <h2>Aww, Im glad that you do.
        i missed you, my baby. do u wanna see my letter na?</h2>

        <div class="row">
            <button class="gameBtn yes" onclick="goPage6()">Yes</button>
            <button id="noBtn1" class="gameBtn no" onclick="removeNoButton()">
                No
            </button>
        </div>
    </div>
</div>

<!-- PAGE 6 CUSTOM PAGE -->
<div id="page6" class="page">
    <div class="gameCard">
        <h2>Letter lagay q</h2>

        <p style="color:white;margin-bottom:20px;">
            Replace this text with anything you want.
        </p>

        <div class="row">
            <button class="gameBtn yes">
                Your Button
            </button>
        </div>
    </div>
</div>

<script>

    let noClicks = 0;

function removeNoButton(){

    const btn = document.getElementById("noBtn1");

    noClicks++;

    btn.style.transform = `scale(${1 - noClicks * 0.2})`;

    if(noClicks >= 4){
        btn.remove();
    }
}
function goSecretEnding(){

    document.getElementById("page3").classList.remove("active");
    document.getElementById("page4").classList.add("active");
}

function goPage5(){

    document.getElementById("page3").classList.remove("active");
    document.getElementById("page4").classList.remove("active");

    document.getElementById("page5").classList.add("active");
}

    
/* PAGE 1 COUNTDOWN */
let seconds = 5;
const btn = document.getElementById("nextBtn");

const countdown = setInterval(() => {

    seconds--;

    if(seconds > 0){
        btn.innerHTML = `next :3 (${seconds})`;
    }else{
        clearInterval(countdown);
        btn.disabled = false;
        btn.innerHTML = "next :3";

        btn.onclick = () => {
            document.getElementById("page1").classList.remove("active");
            document.getElementById("page2").classList.add("active");
        };
    }

},1000);


/* PAGE NAV */
function goPage3(){
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.add("active");
}

</script>

</body>
</html>
