let form = document.querySelector("form");
form.addEventListener("submit",function (e){
    e.preventDefault();
    let firstName = document.getElementById("fn").value;
    let lastName = document.getElementById("ln").value;
    let contry = document.getElementById("cn").value.toUpperCase();
    let score = document.getElementById("sc").value;
    let error = document.getElementById("error1");
    // console.log(firstName);

    if(firstName === "" || lastName === "" || contry === "" || score === ""){
        return error.style.display="block"
    }

    let newdiv = document.createElement("div");
    newdiv.innerHTML =`<div class="div" id="div">
    <div class="first">
        <p id="name">${firstName} ${lastName}</p>
        <p id="data">${date()}</p>
    </div>
    <div>
        <p id="contri">${contry}</p>
    </div>
    <div>
        <p id="value">${score}</p>
    </div>
    <div class="btn" id="btn">
        <button id="delete">&#9249;</button>
        <button id="in">+5</button>
        <button id="de">-5</button>
    </div>
</div>` 
newdiv.classList.add(".div")
let con = document.getElementById("maindiv");
con.appendChild(newdiv);
sort();
btncall();
})

function btncall(){
    let btncon = document.querySelectorAll(".btn").forEach((r)=>{
        
        r.addEventListener("click" , function(e){
                let content = e.target.textContent;
                let score = e.target.parentElement.parentElement.children[2].innerText;
                // console.log(score);
            if(content.length > 2) return ;
                // console.log(e.target.parentElement.parentElement);
                // console.log("hi");
                if(content === "␡"){
                    e.target.parentElement.parentElement.remove();
                }
                if(content == "+5"){
                    score = sum(Number(score),Number(5));
                    e.target.parentElement.parentElement.children[2].innerText= score;
                }
                if(content == "-5"){
                    score = sub(Number(score),Number(5));
                    e.target.parentElement.parentElement.children[2].innerText= score;
                }
                sort();
        })
        // console.log(del);
    });
    // console.log(del);
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
btncall();
function sort(){
    let con = document.querySelector(".maindiv");
    let div = document.querySelectorAll(".div");

    let arr = [];
    div.forEach((j)=>{
        arr.push(j);
    })
    // console.log(arr);
    let newarr = arr.map((r)=>{return r})
    .sort((a,b)=>{
        let v1 = parseInt(a.children[2].textContent);
        let v2 = parseInt(b.children[2].textContent);
        if(v1>v2){
            return -1;
        }if(v1 < v2){
            return 1; 
        }
    });
    newarr.forEach((o)=>{
        con.append(o);
    })
}

function date (){
    let today = new Date();
    let m = today.toLocaleString("default",{month:"long"}).toUpperCase();
    // console.log(m);
    let y = today.getFullYear();
    let t = today.toLocaleTimeString().slice(0,7);

    let result = `${m} ${y} ${t}`;
    return result;
}