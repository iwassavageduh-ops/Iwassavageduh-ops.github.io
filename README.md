<!DOCTYPE html>
<html>
<body style="
margin:0;
background:url('flowers.jpg');
background-size:cover;
background-position:center;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
font-family:Georgia;
">

<div style="
background:rgba(255,255,255,0.8);
padding:30px;
border-radius:25px;
width:80%;
max-width:400px;
text-align:center;
">

<h1 style="color:#ff8fab;">Hi Love ❤️</h1>

<p>I made something just for you.</p>

<button onclick="openLetter()"
style="
width:100%;
padding:15px;
margin-top:10px;
border:none;
border-radius:999px;
">
💌 Open Letter
</button>

<button onclick="startCountdown()"
style="
width:100%;
padding:15px;
margin-top:10px;
border:none;
border-radius:999px;
">
🎁 Countdown to Surprise
</button>

<div id="letter" style="display:none;margin-top:20px;">
To my love,<br><br>
Thank you for being here. You make every day better. ❤️
</div>

<div id="surprise" style="display:none;margin-top:20px;">
<span id="timer">10</span>
</div>

</div>

<script>
function openLetter(){
 document.getElementById("letter").style.display="block";
}

function startCountdown(){
 let count=10;
 document.getElementById("surprise").style.display="block";

 let x=setInterval(function(){
  count--;
  document.getElementById("timer").innerHTML=count;

  if(count<=0){
   clearInterval(x);
   document.getElementById("surprise").innerHTML=
   "🌸 Surprise! I love you more than words can say. ❤️";
  }
 },1000);
}
</script>

</body>
</html>
