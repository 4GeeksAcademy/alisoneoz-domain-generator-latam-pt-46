import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  console.log("Hello Rigo from the console!");
 };


function domainGenerator(){
    let pronouns = ['the', 'our'];

    let adjs = ['great', 'big'];
    
    let nouns = ['jogger', 'racoon'];

    let domainName = []

    for(let i = 0 ; i< pronouns.length ; i++){
        for (let j = 0 ; j < adjs.length ; j++){
            for (let k = 0 ; k < nouns.length ; k++){
               domainName.push(pronouns[i] + adjs[j] + nouns[k]+ ".com") 
            }
        }
    }
return domainName;
}

console.log(domainGenerator())