
var output = document.querySelector('#result');
let Fruit = document.getElementsByName("Fruit");
let Base = document.getElementsByName("Base");
let Liquid = document.getElementsByName("Liquid");
let Sweetener = document.getElementsByName("Sweetener");
let Butter = document.getElementsByName("Butter");
let Other = document.getElementsByName("Other");
const smoothie = new Object();

let boxesChecked = 0;

function displayRadioValue() {
    output.innerHTML = ' ';
    boxesChecked = 0;

    for(i = 0; i < Fruit.length; i++) {
        if(Fruit[i].type="radio") {
            if(Fruit[i].checked){
                smoothie.Fruit = Fruit[i].name + ": " + Fruit[i].value + "<br>    ";    
                boxesChecked++;
            }
        }
    }

    for(i = 0; i < Base.length; i++) {
        if(Base[i].type="radio") {
            if(Base[i].checked){
                smoothie.Base = Base[i].name + ": " + Base[i].value + "<br>    ";
                boxesChecked++;   
            }
        }
    }

    for(i = 0; i < Liquid.length; i++) {
        if(Liquid[i].type="radio") {
            if(Liquid[i].checked){
                smoothie.Liquid = Liquid[i].name + ": " + Liquid[i].value + "<br>    ";
                boxesChecked++;
            }
        }
    }

    for(i = 0; i < Butter.length; i++) {
        if(Butter[i].type="radio") {
            if(Butter[i].checked){
                smoothie.Butter = Butter[i].name + ": " + Butter[i].value + "<br>    ";
                boxesChecked++;
            }
        }
    }

    for(i = 0; i < Sweetener.length; i++) {
        if(Sweetener[i].type="radio") {
            if(Sweetener[i].checked){
                smoothie.Sweetener = Sweetener[i].name + ": " + Sweetener[i].value + "<br>    ";
                boxesChecked++; 
            }
        }
    }

    for(i = 0; i < Other.length; i++) {
        if(Other[i].type="radio") {
            if(Other[i].checked){
                smoothie.Other = Other[i].name + ": " + Other[i].value + "<br>    ";
                boxesChecked++;
            }
        }
    }
    
    if(boxesChecked == 6){
        output.innerHTML =  smoothie.Fruit + smoothie.Base + smoothie.Liquid + smoothie.Sweetener + smoothie.Butter  + smoothie.Other ;
    } else{
        output.innerHTML = "Please select all ingredients"
    }
}
