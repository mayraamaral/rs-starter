axios.get('https://api.github.com/users/mayraamaral')
    .then(function(response) {
        console.log(response);
        console.log(response.data.name);
        console.log(response.data.bio);
    })
    .catch(function(error) {
        console.warn(error);
    });