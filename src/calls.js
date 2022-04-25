const fetch = require('node-fetch')
const { MAL_CLIENT_ID } = require('./../config.json');


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
    },
    getUserList: function(username) {
        const header = {
            "X-MAL-CLIENT_ID": MAL_CLIENT_ID
        }
        return fetch('https://api.myanimelist.net/v2/users/'+ username + '/animelist', { headers: header })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.data);
            return data.data;
        })
        .catch(err => {
            console.error(err);
        })
    }
}