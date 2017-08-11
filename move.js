var createDirectionMap = require('./createDirectionalMap.js');
var directions = require('./directionFunctions.js');
var api = require('./apiFunctions.js');

module.exports = function move(state) {
    var currentState = state;
    var queue = createDirectionMap(currentState);

    getOptimalMoveList(currentState.pony[0], 0, []);



    function getOptimalMoveList(node, directionFrom, moves) {
  
        if (moves.indexOf(node) === -1) {
            var newMoves = [...moves, node],
                thisNode = queue[node]
            if (thisNode.end) {
                var direction = directions.getNextDirectionFromOptimalMoves([newMoves[0], newMoves[1]]);
            
                api.update(direction, state.maze_id).then(function () { 
                    return api.request("GET", state.maze_id)
                }).then(function (data) {
                    currentState = JSON.parse(data);
                    return api.request("GET", state.maze_id + '/print');
                }).then(function(grid) {
                    console.log(grid);
                    if(currentState['game-state']['state'] != "active") {
                        console.log(currentState);
                    }
                    else {
                        move(currentState, state.maze_id);
                    }
                });
            }
            else {
             
                    thisNode.directions.filter(a => a.cell && a.direction !== directions.flipDir(directionFrom))
                        .map(a => {
                           if(currentState.data[a.cell].domokun != true) {                               
                                getOptimalMoveList(a.cell, a.direction, newMoves)
                             }
                        });
            }
        }
    }
}