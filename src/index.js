function redate(){
 var date = new Date();
 document.getElementById("dt").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
 
}
redate();
setInterval(redate, 1000);
