const rator = document.getElementById("genere");
const pre = document.getElementById("tru");
const difi = document.getElementById("level");


function incre(){
    pre.innerHTML = "";
    let i = 1 ;
    vro = difi.value;
    while(i <= 100 && vro == "easy"){
        let divi = grid(i);
        console.log(divi);
        pre.append(divi);
        divi.classList.add("ten")
        i++
    }
    while(i <= 81 && vro == "medium"){
        let divi = grid(i);
        console.log(divi);
        pre.append(divi);
        divi.classList.add("nine")
        i++
    }
    while(i <= 49 && vro == "hard"){
        let divi = grid(i);
        console.log(divi);
        pre.append(divi);
        divi.classList.add("seven")
        i++
    }
    
}
function grid(i){
    let bomb = Math.ceil(Math.random()*3)
    const hect = document.createElement("div");
    hect.classList.add("ms-container");
    hect.innerHTML = `<span>${i}</span>`;
    hect.addEventListener("click", function(){
        const bra = parseInt(this.querySelector("span").textContent);
        if( bra % 2 === 0){
            this.classList.add("blue")
            console.log(bra);
            if (bomb == 1){
                alert("bomb puttana")
                location.reload()
            }
        } else {
            this.classList.add("red")
            console.log(bra);
            if (bomb == 1){
                alert("bomb puttana")
                location.reload()
            }
        }
        console.log(this);
    });
    return hect
}
rator.addEventListener("click", incre)