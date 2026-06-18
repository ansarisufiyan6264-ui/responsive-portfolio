let count = document.querySelector("#count");



let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let reset = document.querySelector("#reset");

function updateColor(){
    if(num > 0){
        count.style.color = "green";
    }
    else if(num < 0){
        count.style.color = "red";
    }
    else {
           count.style.color = "black";
    }
}

let num = 0;

plus.addEventListener("click", function(){
    num++;
    count.innerText = num;
    updateColor();
});

minus.addEventListener("click", function(){
    num--;
    count.innerText = num;
    updateColor();
});
reset.addEventListener("click", function(){
    num = 0;
    count.innerText = 0;
    updateColor();
});


