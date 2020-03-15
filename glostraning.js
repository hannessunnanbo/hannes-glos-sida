document.getElementById("svar").value = ""
let svensktord = "";
let ratt = 0;
let totalt =0;
let rattlistan = [];
let fellistan = [];
const ordbok = {
  "boll":"ball", 
  "hej":"hello"
}

function tidenarute() {
  document.getElementById("fellista").innerText =  "dina fel svar: " +fellistan.join(", ");
  document.getElementById("rattlista").innerText =  "dina rätta svar: " +rattlistan.join(", ");
  document.getElementById("resultattext").innerText="du fick "+ ratt+"/"+totalt;
  document.getElementById("mattetal").setAttribute("class", "hidden");
  document.getElementById("resultat").setAttribute("class", "");
  document.getElementById("rattochfellista").setAttribute("class", "");


}
function andraglosa() {
  const allasvenskaord = Object.keys(ordbok);
  const antalord = allasvenskaord.length;
  svensktord =  allasvenskaord[Math.floor(Math.random() * antalord)];
  
  const hejmattetal= "vad är det engelska ordet för: "+svensktord;
  document.getElementById("uppgift").innerText=hejmattetal; 
}
function visasak() {
  document.getElementById("mattetal").setAttribute("class", "");
  setTimeout(tidenarute,30000)
  document.getElementById("startknapp").setAttribute("class", "hidden");
}


function glosrattare(event) {
    if (event.keyCode === 13){
        if(document.getElementById("svar").value == ordbok[svensktord] ) {
          rattlistan.push(svensktord +"-"+ ordbok[svensktord]);
          ratt = ratt+1
        }
        else {
          
          fellistan.push(svensktord+ "-" +document.getElementById("svar").value);
        }
        andraglosa();
        document.getElementById("svar").value = ""
        totalt = totalt+1
    }
    

}

andraglosa();
document.getElementById("svar").addEventListener("keydown",glosrattare);

document.getElementById("startknapp").addEventListener("click",visasak)