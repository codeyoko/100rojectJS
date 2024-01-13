//console.dir(document.title);
//console.log(document.body);

//getElementsByTagName
console.log(document.getElementsByTagName("h2"));

//getElementById
console.log(document.getElementById("h1-id"));

//getElementById
console.log(document.getElementsByClassName("p-class"));

//querySelector
console.log(document.querySelector(".p-class1"));

//querySelector
console.log(document.querySelector("#h1-id"));

//querySelector
console.log(document.querySelectorAll("li"));

const data = document.querySelectorAll('li');
console.log(data.length);

//querySelector - innerText - innerHTML
let p = (document.querySelector("h2"));
console.log(p.innerText);
//console.log(p.innerHTML);

//querySelector - textContent
let p1 = (document.querySelector("h2"));
console.log('text content:', p1.textContent);

//change text
let h1 = document.querySelector('h1');
h1.textContent = 'Change text';
console.log(h1.innerText);
h1.innerHTML = "<del>Changed div</del>"
