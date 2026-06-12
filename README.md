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

.letter{
    display:none;

    margin-top:25px;

    padding:20px;

    border-radius:20px;

    background:rgba(255,255,255,.7);

    text-align:left;

    color:#444;

    animation:fadeIn .5s ease;
}

@keyframes fadeIn{

    from{
        opacity:0;
        transform:translateY(10px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }
}

.letter h3{
    color:#ff7ca5;
    margin-bottom:10px;
}

</style>
</head>

<body>

<div class="card">

    <h1 class="title">
        For my Euanne.
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

    <div id="letter" class="letter">

        <h3>May I Court youm</h3>

        <p>

            test

            <br><br>

            test

            <br><br>

            test

            <br><br>

            Love,
            <br>
            Your Baby ❤️

        </p>

    </div>

</div>

<script>

let taps = 0;

function tapFlower(){

    taps++;

    document.getElementById("tapText").innerHTML =
        `Touch the flower 🌸 (${taps}/3)`;

    const flower = document.getElementById("flower");

    flower.style.transform = "scale(0.95)";

    setTimeout(() => {
        flower.style.transform = "scale(1)";
    }, 120);

    if(taps >= 3){

        document.getElementById("tapText").innerHTML =
            "Take your time to read, my baby";

        document.getElementById("letter").style.display =
            "block";
    }
}

</script>

</body>
</html>
