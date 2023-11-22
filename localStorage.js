function setLocalStroageItem(key,value){
    localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStroageItem(key){
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}


const person = {
    username: 'pratap',
    age: 21
}

// ! accesing all data's of person object
setLocalStroageItem('person', person);
const storedItem  = getLocalStroageItem('person');

console.log(storedItem);

// ! accesing only usename of person object 
// setLocalStroageItem('person', person);
// const storedItem  = getLocalStroageItem('person');
// const username = storedItem ? storedItem.username : null;
// console.log(username);