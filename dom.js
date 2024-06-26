let first = document.getElementsByClassName("heading1");
console.dir(first);

let firstel = document.querySelector("p");
console.dir(firstel);

let allsel = document.querySelectorAll("p");
console.dir(allsel);

//// --------------- properties--------------//
console.log(firstel.tagName);


// => ek hota hai parent , ek child  and ek hota hai sibling,
console.log(document.body.firstChild);

/* jab bhi dom tree banta hai to 3 cheezein hoti hai
1  => text nodes.
2 => comment.
3 => elements.  these are most important and ignore both of them.

*/

// console.log(document.querySelector("div").children);

/* learn child parent ,firstchidren and siblings from mdn 
*/

let div = document.querySelector("div");
console.dir(div);

console.log(div.innerText);
console.log(div.innerHTML);


let divv = document.querySelector("div")
console.log(divv);
// ----------------------   get the attribute-------------------------//

let class1 =divv.getAttribute("class");
console.log(class1);


// --------------------------- set the attribute-----------------//

// console.log(divv.setAttribute("class", "mass"));

let newbtn = document.createElement("button");
newbtn.innerText="click me"
console.log(newbtn);

let divi =document.querySelector("div");
divi.append(newbtn) ;
divi.prepend(newbtn);
divi.after(newbtn);
divi.before(newbtn);
/*
let para = document.querySelector("h1");
console.dir(para);
para.remove();
*/
/// --------------==>>>> read classslist-------//


//================================ EVENTS IN JS====================================
 
let btn1 = document.querySelector("#kaam")

/* 
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientx,evt.clienty);
console.log("bnt1 was clicked");
let a = 25;
a++;
console.log(a);
};
*/

//-=====================================Event Listners ===============================

btn1.addEventListener("click",(evt)=>{
    console.log("button one was clicked 1");
    console.log(evt);
    console.log(evt.type);

});

btn1.addEventListener("click",(evt)=>{
    console.log("button one was clicked 2");
    console.log(evt);
    console.log(evt.type);

});


let handler = btn1.addEventListener("click",(evt)=>{
    console.log("button one was clicked 3");
    console.log(evt);
    console.log(evt.type);

});


btn1.addEventListener("click",(evt)=>{
    console.log("button one was clicked 4");
    console.log(evt);
    console.log(evt.type);

});



btn1.removeEventListener("click",handler);

//====================================practise ===================================


let mode = document.querySelector("#kaam");
let currmode = "light";

mode.addEventListener("click",()=>{
    if(currmode=="light"){
        currmode = "dark";
      document.querySelector("body").style.backgroundColor =  "black";
    }else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor =  "white";
    }
    console.log(currmode);
});