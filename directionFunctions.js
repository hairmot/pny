module.exports = {
    flipDir: function flipDir(dir) {
        switch (dir) {
            case 'north':
                return 'south';
            case 'south':
                return 'north';
            case 'east':
                return 'west';
            case 'west':
                return 'east';
            default:
                return dir;
        }
    },

    getNextDirectionFromOptimalMoves: function getNextDirectionFromOptimalMoves(newMoves, size) {
        var direction;
        if ((parseInt(newMoves[0]) + size[0]) === parseInt(newMoves[1])) {
            direction = 'south';
        }
        if ((parseInt(newMoves[0]) - 1) === parseInt(newMoves[1])) {
            direction = 'west';
        }
        if ((parseInt(newMoves[0]) + 1) === parseInt(newMoves[1])) {
            direction = 'east';
        }
        if ((parseInt(newMoves[0]) - size[0]) === parseInt(newMoves[1])) {
            direction = 'north';
        }
        return direction;
    }

}