function setSessionStroage(key,value){
    sessionStorage.setItem(key, JSON.stringify(value));
}

function getSessionStroage(key){
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

const data = {
    firstname: 'pratap',
    lastname: 'hb'
}

setSessionStroage('data', data);

const userData = getSessionStroage('data');
console.log(userData);
