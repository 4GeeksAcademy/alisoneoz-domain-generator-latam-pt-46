// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {

//   console.log("Hello Rigo from the console!");
//  };


function domainGenerator() {
    let pronouns = ['the', 'our'];

    let adjs = ['great', 'big'];

    let nouns = ['jogger', 'racoon'];

    let extensions = ['.com', '.net', '.io', '.app'];

    let domainName = []

    for (let pronoun of pronouns) {
        for (let adj of adjs) {
            for (let noun of nouns) {
                for (let extension of extensions) {
                    domainName.push(pronoun + adj + noun + extension)
                }
            }
        }
    }
    return domainName;
}

console.log(domainGenerator())