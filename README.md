<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>For You ❤️</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, sans-serif;
    background:linear-gradient(135deg,#ff7eb3,#ff758c);
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:white;
    padding:20px;
}

.container{
    width:100%;
    max-width:400px;
}

h1{
    margin-bottom:15px;
}

button{
    width:100%;
    padding:15px;
    border:none;
    border-radius:15px;
    margin-top:10px;
    font-size:16px;
    cursor:pointer;
    background:white;
    color:#ff4f81;
    font-weight:bold;
}

.card{
    display:none;
    background:rgba(255,255,255,.15);
    backdrop-filter:blur(10px);
    padding:20px;
    border-radius:20px;
    margin-top:15px;
}

#countdown{
    font-size:32px;
    font-weight:bold;
    margin-top:15px;
}
</style>
</head>
<body>

<div class="container">
    <h1>Hi Love ❤️</h1>
    <p>I made something just for you.</p>

    <button onclick="openLetter()">
        💌 Open Letter
    </button>

    <button onclick="startCountdown()">
        🎁 Reveal Surprise
    </button>

    <div class="card" id="letter">
        <h2>To My Love ❤️</h2>
        <br>
        <p>
            Thank you for being part of my life.
            You've made ordinary days feel special,
            and even when things aren't perfect,
            I still find comfort knowing you're here.
            <br><br>
            No matter where life takes us,
            you'll always hold a place in my heart.
            <br><br>
            I love you. ❤️
        </p>
    </div>

    <div class="card" id="surprise">
        <div id="countdown">10</div>
    </div>
</div>

<script>
function openLetter(){
    document.getElementById("letter").style.display="block";
}

function startCountdown(){

    const box = document.getElementById("surprise");
    const timer = document.getElementById("countdown");

    box.style.display="block";

    let count = 10;

    timer.innerHTML = count;

    const interval = setInterval(() => {

        count--;
        timer.innerHTML = count;

        if(count <= 0){
            clearInterval(interval);

            box.innerHTML = `
                <h2>🎉 Surprise! 🎉</h2>
                <br>
                <p>
                    Out of all the people in the world,
                    I'd still choose you.
                    <br><br>
                    I love you more than words can explain. ❤️
                </p>
            `;
        }

    },1000);
}
</script>

</body>
</html>
