
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>For My Baby Euanne ❤️</title>

<style>
body{
    margin:0;
    font-family:Georgia, serif;
    background:url('Background.jpg');
    background-size:cover;
    background-position:center;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

.card{
    background:rgba(255,255,255,0.88);
    backdrop-filter:blur(8px);
    padding:30px;
    width:85%;
    max-width:400px;
    border-radius:25px;
    text-align:center;
    box-shadow:0 0 20px rgba(0,0,0,0.15);
}

h1{
    color:#ff7fa6;
}

button{
    width:100%;
    padding:15px;
    margin-top:10px;
    border:none;
    border-radius:999px;
    font-size:16px;
    cursor:pointer;
}

.yes{
    background:#ffd6e5;
}

.no{
    background:#f5f5f5;
}

#page2,#page3,#page4{
    display:none;
}

#countdown{
    font-size:40px;
    margin-top:20px;
    color:#ff7fa6;
    font-weight:bold;
}
</style>
</head>

<body>

<div class="card">

    <!-- PAGE 1 -->
    <div id="page1">
        <h1>Hi my baby Euanne! ❤️</h1>

        <p>Did you miss me?</p>

        <button class="yes" onclick="showPage('page2')">
            Yes 💕
        </button>

        <button class="no" onclick="showPage('page3')">
            No :( 
        </button>
    </div>

    <!-- PAGE 2 -->
    <div id="page2">
        <h1>Aww, I miss you more po! ❤️</h1>

        <p>
            I have a surprise for you,
            do you wanna see it?
        </p>

        <button class="yes" onclick="startCountdown()">
            Yes 💕
        </button>

        <div id="countdown"></div>
    </div>

    <!-- PAGE 3 -->
    <div id="page3">
        <h1>Awww, my baby doesn't miss me :((</h1>

        <p>
            But still, I have a surprise for you!
            <br><br>
            Do you wanna see it?
        </p>

        <button class="yes" onclick="showPage('page4')">
            Yes 💕
        </button>
    </div>

    <!-- PAGE 4 -->
    <div id="page4">
        <h1>You're still my favorite person ❤️</h1>

        <p>
            No matter what your answer was,
            I still love you so much.
        </p>
    </div>

</div>

<script>
function showPage(pageId){

    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="none";
    document.getElementById("page3").style.display="none";
    document.getElementById("page4").style.display="none";

    document.getElementById(pageId).style.display="block";
}

function startCountdown(){

    let count = 10;
    let display = document.getElementById("countdown");

    display.innerHTML = count;

    let timer = setInterval(function(){

        count--;
        display.innerHTML = count;

        if(count <= 0){

            clearInterval(timer);

            document.getElementById("page2").innerHTML = `
                <h1>🎁 Surprise! 🎁</h1>

                <p>
                    Thank you for being my baby, Euanne. ❤️
                    <br><br>
                    Every day with you is my favorite day.
                    <br><br>
                    I love you so much. 🌷
                </p>
            `;
        }

    },1000);
}
</script>

</body>
</html>
