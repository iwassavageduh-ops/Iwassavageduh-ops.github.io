
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

</style>
</head>
<body>

<div class="card">

    <h1 class="title">
        Hi my baby :33
    </h1>

    <img src="IceBear.jpg" class="bear">

    <button id="nextBtn" disabled>
        next :3 (5)
    </button>

</div>

<script>

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
            window.location.href = "page2.html";
        };
    }

},1000);

</script>

</body>
</html>
