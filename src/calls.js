const fetch = require('node-fetch')

module.exports = {
    getAnime: function(searchterm) {
        return fetch('https://api.jikan.moe/v4/anime?q=' + searchterm + '&limit=10')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
    },
    getUser: function(username) {
        return fetch('https://api.jikan.moe/v4/users/' + username)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data.data;
            })
    }
}