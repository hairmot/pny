var move = require('./move');
var api = require('./apiFunctions.js');

module.exports = function start(mazeHeight, mazeWidth) {
    var state;
    var req = {
        "maze-width": mazeWidth,
        "maze-height": mazeHeight,
        "maze-player-name": "Rainbow Dash"
    };
    api.request("POST", req).then(function (body) {
        //get newly created ID
        return mazeID = JSON.parse(body).maze_id;
    }).then(function (mazeID) {
        //get current state
        return api.request("GET", mazeID)
    }).then(function (data) {
        var currentState = JSON.parse(data);
        state = currentState;
        return api.request("GET", currentState.maze_id + '/print');
    }).then(function(grid) {
        console.log(grid);
        //Lets go!
        move(state);
    })
}