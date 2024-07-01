var s=30;
var m=0;


var datos=["MANCHESTERUNITED","MANCHESTERCITY","LIVERPOOL","CHELSEA","ARSENAL","TOTTENHAM","LEICESTERCITY","EVERTON","WESTHAMUNITED","WOLVERHAMPTON"];
var p=datos[parseInt(Math.random()*9)];
alert("He pensado en Equipos de la Premier League, Adivinalo");
var men=[];
for(y=1;y<=p.length;y++){
    men.push("_");
}
//var men=["","","","","","","",""];
sw=0;
function contar(){
    pb=pal1.value;
    for(x=0;x<=p.length-1;x++){
        if(pb.toUpperCase()==p.substring(x,x+1)){
            if (men[x]=="_"){
            men[x]=p.substring(x,x+1);
            sw=sw+1;
        }
    }
   }
    pal2.value=men;
    if (sw==p.length){
        alert("Adivinaste el Equipo");
        //document.body.append("adivinaste");
    }
}
function mensajefinal(){
    clearInterval(t)
    document.getElementById("bo").disabled=true
    alert("el tiempo a terminado")
    
}
setInterval(mensajefinal,30000);
function crono(){
//s=s-1;
//hora=m+":"+s;
//reloj.value=hora;
s = s -1
if (s < 0){
    s = 59
     m = m -1
}
if (m < 0){
    clearInterval(t)
    alert("el tiempo a terminado")
}
}
var t=setInterval(crono,1000);

