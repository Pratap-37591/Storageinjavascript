console.log(document.cookie);
document.cookie = 'name=harry1234';
document.cookie = 'name1=harry1234';
const key = prompt("enter value of key");
const value = prompt("enter value of value");
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
console.log(document.cookie);