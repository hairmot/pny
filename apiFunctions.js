var fetch = require('node-fetch');

module.exports = {
    request: function request(method, data) {

        var requrest = new fetch.Request('https://ponychallenge.trustpilot.com/pony-challenge/maze' + (method === "GET" ? '/' + data : ''), {
            method: method,
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        return new Promise(function (resolve, reject) {
            fetch(requrest)
                .then(function (res) {
                    return res.text();
                }).then(function (body) {
                    resolve(body);
                })
        })

    },
    update: function update(direction, mazeID) {
        var request = new fetch.Request(
            'https://ponychallenge.trustpilot.com/pony-challenge/maze' + '/' + mazeID,
            {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ direction })
            });

        return new Promise(function (resolve, reject) {
            fetch(request)
                .then(function (res) {
                    return res.text();
                }).then(function (body) {
                    resolve(body);
                })
        })
    }
}