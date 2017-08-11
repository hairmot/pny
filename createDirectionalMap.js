module.exports = function createDirectionMap(state) {
   var map = state.data.map((a, b) => {
        return {
            "directions": [
                { direction: 'north', cell: a.indexOf('north') === -1 ? b - state.size[0] : false },
                { direction: 'south', cell: b < (state.size[0] * (state.size[1] -1)) ? state.data[b + state.size[0]].indexOf('north') === -1 ? b + state.size[0] : false : false },
                { direction: 'west', cell: a.indexOf('west') === -1 ? b - 1 : false },
                { direction: 'east', cell: (b + 1) % state.size[0] !== 0 ? state.data[b + 1].indexOf('west') === -1 ? (b + 1) : false : false }
            ]
        }
    });

    map[state.pony].start = true;
    map[state['end-point']].end = true;
    map[state.domokun].domokun = true;

    return map;
}
