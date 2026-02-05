function knightMoves(start, end) {
    const moves = [
        [2, 1], [2, -1], 
        [-2, 1], [-2, -1], 
        [1, 2], [1, -2],
        [-1, 2], [-1, -2]
    ];

    const isValid = (x, y) => 
        x >= 0 && x < 8 && y >= 0 && y < 8;

    const queue = [];
    const visited = new Set();

    queue.push({ position: start, path: [start] });
    visited.add(start.toString());

    while (queue.length > 0) {
        const { position, path } = queue.shift();
        const [x, y] = position;
    }
};