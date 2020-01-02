var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/mayraamaral');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(data.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}