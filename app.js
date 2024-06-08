var endDate = "17 june 2024 7:00 AM"
document.getElementById("end-Date").innerText = endDate;
var inputs = document.querySelectorAll("input")

function clock(){
    var end = new Date(endDate)
    var now = new Date()
    var diff = (end - now) / 1000;
    console.log(diff)
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value= Math.floor(diff / 3600) % 24;
    inputs[2].value= Math.floor(diff / 60) % 60;
    inputs[3].value= Math.floor(diff)%60;
}
setInterval(function(){
    clock()
},1000)



