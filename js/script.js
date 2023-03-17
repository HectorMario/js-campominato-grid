const rator = document.getElementById("genere");
const pre = document.getElementById("tru");
const difi = document.getElementById("level")


function grid(i){
    const hect = document.createElement("div");
    hect.classList.add("ms-container");
    hect.innerHTML = `<span>${i}</span>`;
    return hect
}

function incre(){
    let i = 1 ;
    vro = difi.value;
    while(i <= 100 && vro == "easy"){
        let divi = grid(i);
        console.log(divi);
        pre.append(divi);
        i++
    }
    while(i <= 81 && vro == "medium"){
        let divi = grid(i);
        console.log(divi);
        pre.append(divi);
        i++
    }
    while(i <= 49 && vro == "hard"){
        let divi = grid(i);
        console.log(divi);
        pre.append(divi);
        i++
    }
    
}
rator.addEventListener("click", incre)