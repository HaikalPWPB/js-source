//Akses parentnode
var p = document.getElementById('greets');

console.log(p.parentNode);

//Akses childnode
var list = document.getElementById('list');

console.log(list.childNodes[1]);

//lastchild
var body = document.getElementsByTagName('body')[0];
console.log(body.lastChild);

var h1 = document.getElementById('h1');
//innerHTML
console.log(h1.innerHTML);
//sama dengan nodeValue
console.log(h1.firstChild.nodeValue);
//bisa juga menggunakan childNodes
console.log(h1.childNodes[0].nodeValue);

console.log(h1.nodeName);

var h2 = document.getElementById('h2').nodeName;
var p = document.getElementById('p').nodeName;
var ul = document.getElementById('ul').nodeName;

console.log(`${h2} + ${p} + ${ul}`);